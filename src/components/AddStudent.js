import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, name:'', email:''};
    };

    handleClickOpen = () => {
        this.setState( {open:true} );
      };
  
      handleClose = () => {
        this.setState( {open:false} );
      };
  
      handleChangeName = (event) => {
        this.setState({name: event.target.value});
      }
      handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
      }
  
    // Save course and close modal form
      handleAdd = () => {
         this.props.addStudent(this.state.name, this.state.email);
         this.handleClose();
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