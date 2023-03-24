import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import {SERVER_URL} from '../constants.js'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Radio from '@mui/material/Radio';
// import {DataGrid} from '@mui/x-data-grid';
// import {SEMESTER_LIST} from '../constants.js'
import AddStudent from './AddStudent';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {students:[]};
      }

        // Add student into database
        addStudent = (student) => {
            const token = Cookies.get('XSRF-TOKEN');
            console.log(JSON.stringify(student.name));
            console.log(JSON.stringify(student.email));
         
            fetch(`${SERVER_URL}/student/new/?name=${student.name}&email=${student.email}`,
              { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json',
                           'X-XSRF-TOKEN': token  }, 
                body: JSON.stringify(student)
              })
            .then(res => {
                if (res.ok) {
                  toast.success("Student successfully added", {
                      position: toast.POSITION.BOTTOM_LEFT
                  });
                  // this.fetchStudent();
                } else {
                  toast.error("Error when adding", {
                      position: toast.POSITION.BOTTOM_LEFT
                  });
                  console.error('Post http status =' + res.status );
                }})
            .catch(err => {
              toast.error("Error when adding", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                console.error(err);
            })
          }
 

    render() {    
      return (
         <div>
           <AppBar position="static" color="default">
              <Toolbar>
                 <Typography variant="h6" color="inherit">
                    Administrative Functions
                 </Typography>
              </Toolbar>
           </AppBar>
           <div align="left" >
           <Button >
                <AddStudent addStudent={this.addStudent}  />
              </Button>
           </div>
            <ToastContainer autoClose={1500} />   
        </div>
      )
    }
  }
  export default Admin;
  