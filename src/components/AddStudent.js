import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, student:{}, message:""};
        
    };

    handleClickOpen = () => {
        this.setState( {open:true} );
      };
  
      handleClose = () => {
        this.setState( {open:false, student:{message:""} } );
      };
  
      handleChangeName = (event) => {
        this.setState(prevState => ({student:{name: event.target.value, email: prevState.student.email}}));
      }
      handleChangeEmail = (event) => {
        this.setState(prevState => ({student:{name: prevState.student.name, email: event.target.value}}));
      }
    // Save student and close modal form
      handleAdd = () => {
         this.props.addStudent(this.state.student);
        //  this.handleClose();
      }
    
    
    render()  { 
        return (
            <div>
              <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
                Add Student
              </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>Add Student</DialogTitle>
                  <DialogContent  style={{paddingTop: 20}} >
                  <h3> {this.state.message} </h3>
                    <TextField autoFocus fullWidth label="Student Name" name="name" onChange={this.handleChangeName}  /> 
                    <br></br><br></br>
                    <TextField autoFocus fullWidth label="Student Email" name="email" onChange={this.handleChangeEmail}  />
                  </DialogContent>
                  <DialogActions>
                    <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                    <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                  </DialogActions>
                </Dialog>      
            </div>
        ); 
      }
  }

  
  // required property: addstudent is a function to call to perform the Add action
  AddStudent.propTypes = {
    addStudent : PropTypes.func.isRequired
  }
  
  export default AddStudent;