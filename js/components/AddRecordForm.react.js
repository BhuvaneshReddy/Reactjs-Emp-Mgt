/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import { changeAddProfileForm } from '../actions/AppActions';
import LoadingButton from './LoadingButton.react';
import ErrorMessage from './ErrorMessage.react';
import { Button } from "react-bootstrap";

// import { Form, FormControl, FormGroup, ControlLabel, Grid, Row, Col, Table, Radio, Button } from "react-bootstrap";
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

class AddRecordForm extends Component {
  render() {
    return(
      <form className="form" onSubmit={this._onSubmit.bind(this)}>
      <ErrorMessage />
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" id="firstname" type="text" value={this.props.data.firstName} placeholder="Enter first name"  onChange={this._changeFirstName.bind(this)} />
        <label className="registerform__field-label" htmlFor="firstname">First Name</label>
        <div className="registerform__field-wrapper">
        <input className="registerform__field-input" id="lastname" type="text" value={this.props.data.lastName} placeholder="Enter last name"  onChange={this._changeLastname.bind(this)} />
        <label className="registerform__field-label" htmlFor="lastname">Last Name</label>
      </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" type="text" id="project" value={this.props.data.project} placeholder="Enter project name" onChange={this._changeProject.bind(this)} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
        <label className="registerform__field-label" htmlFor="project">Project</label>
      </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" type="email" id="email" value={this.props.data.email} placeholder="Enter email address" onChange={this._changeEmail.bind(this)} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
        <label className="registerform__field-label" htmlFor="email">Email</label>
      </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" id="releasedate" type="date" value={this.props.data.releaseDate} placeholder="Release Date"  onChange={this._changeReleaseDate.bind(this)} />
        <label className="registerform__field-label" htmlFor="releasedate">Release Date</label>
      </div>
      {/* <div className="registerform__field-wrapper">
       <div className="gender-in-type-wrapper-male"> <input className="registerform__field-input" type="radio" value="male" name="gender" onChange={this._changeGender.bind(this)}/><div className="gender-type">Male</div></div>
       <div className="gender-in-type-wrapper-female"><input className="registerform__field-input" type="radio"  value="female" name="gender" onChange={this._changeGender.bind(this)}/><div className="gender-type">Female</div></div>
       <label className="registerform__field-label" htmlFor="gender">Gender</label>
      </div> */}
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" type="text" id="primaryskills" value={this.props.data.primarySkills} placeholder="Enter primary skills" onChange={this._changePrimarySkills.bind(this)}/>
        <label className="registerform__field-label" htmlFor="primaryskills">Primary Skills</label>
      </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" type="text" id="secondaryskills" value={this.props.data.secondarySkills} placeholder="Enter secondary skills" onChange={this._changeSecondarySkills.bind(this)} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
        <label className="registerform__field-label" htmlFor="secondaryskills">Secondary Skills</label>
      </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" id="mobilenumber" type="text" value={this.props.data.mobileNo} placeholder="Enter Mobile number"  onChange={this._changeMobilenumber.bind(this)} />
        <label className="registerform__field-label" htmlFor="mobilenumber">Phonenumber</label>
      </div>
      <div className="registerform__field-wrapper">
      <input className="registerform__field-input" id="yearsofexp" type="text" value={this.props.data.yearsOfExperience} placeholder="Enter years of experience"  onChange={this._changeYearsOfExp.bind(this)} />
      <label className="registerform__field-label" htmlFor="yearsofexp">Experience</label>
    </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" id="trainings" type="text" value={this.props.data.trainings} placeholder="Enter trainings"  onChange={this._changeTrainings.bind(this)} />
        <label className="registerform__field-label" htmlFor="trainings">Trainings</label>
      </div>
      <div className="registerform__field-wrapper">
        <input className="registerform__field-input" id="qualification" type="text" value={this.props.data.qualification} placeholder="Enter qualification"  onChange={this._changeQualification.bind(this)} />
        <label className="registerform__field-label" htmlFor="qualification">Qualification</label>
      </div>

</div>
      <div className="registerform__submit-btn-wrapper">
        {this.props.currentlySending ? (
          <LoadingButton />
        ) : (
          <Button type="submit" bsStyle="primary">submit</Button>
        )}
         <Button type="button" bsStyle="primary" onClick={() => this._closeModal()}>close</Button>
      </div>
    </form>
    );
  }


  _closeModal(){
    console.log("inside UpdateRecordForm >>> closeModal")
    this.props.dispatch(toggleModalFalse());
  } 

  // Change the firstname in the app state
  _changeFirstName(evt) {
    var newState = this._mergeWithCurrentState({
      firstName: evt.target.value
    });

    this._emitChange(newState);
  }

  //change the lastname in the app state
  _changeLastname(evt) {
    var newState = this._mergeWithCurrentState({
      lastName: evt.target.value
    });

    this._emitChange(newState);
  }
  _changeYearsOfExp(evt) {
    var newState = this._mergeWithCurrentState({
      yearsOfExperience: evt.target.value
    });

    this._emitChange(newState);
  }
 
  // Change the email in the app state
  _changeEmail(evt) {
    var newState = this._mergeWithCurrentState({
      email: evt.target.value
    });

    this._emitChange(newState);
  }

  //change phonenumber in the app state
  _changeMobilenumber(evt) {
    var newState = this._mergeWithCurrentState({
      mobileNo: evt.target.value
    });

    this._emitChange(newState);
  }


  //Change the project in the app state
  _changeProject(evt) {
    var newState = this._mergeWithCurrentState({
      project: evt.target.value
    });

    this._emitChange(newState);
  }

  // Change the Release Date in the app state
  _changeReleaseDate(evt) {
    var newState = this._mergeWithCurrentState({
      releaseDate: evt.target.value
    });

    this._emitChange(newState);
  }

  // change the primary skills in the app state
  _changePrimarySkills(evt) {
    var newState = this._mergeWithCurrentState({
      primarySkills: evt.target.value
    });

    this._emitChange(newState);
  }

  // change the secondary skills in the app state
  _changeSecondarySkills(evt) {
    var newState = this._mergeWithCurrentState({
      secondarySkills: evt.target.value
    });

    this._emitChange(newState);
  }

  
  // change the trainings in the app state
  _changeTrainings(evt) {
    var newState = this._mergeWithCurrentState({
      trainings: evt.target.value
    });

    this._emitChange(newState);
  }

  // change the qualification in the app state
  _changeQualification(evt) {
    var newState = this._mergeWithCurrentState({
      qualification: evt.target.value
    });

    this._emitChange(newState);
  }

  // Merges the current state with a change
  _mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  }

  // Emits a change of the form state to the application state
  _emitChange(newState) {
    this.props.dispatch(changeAddProfileForm(newState));
  }

  // onSubmit call the passed onSubmit function
  _onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.data.firstName, this.props.data.lastName, this.props.data.project, this.props.data.releaseDate, this.props.data.primarySkills, this.props.data.secondarySkills, this.props.data.yearsOfExperience, this.props.data.trainings, this.props.data.qualification, this.props.data.mobileNo,this.props.data.email);
  }
}

AddRecordForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  btnText: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
}



export default AddRecordForm;
