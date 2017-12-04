import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import uuid from 'uuid'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import { editUser, changeProfile, redirectToProfile } from '../actions/userActions.js'

class NewUserForm extends React.Component {

  state = {
    firstName: this.props.currentUser.full_name.split(" ")[0],
    lastName: this.props.currentUser.full_name.split(" ")[1],
    username: this.props.currentUser.username,
    selectedFamily: "0",
    instrumentFilter: "",
    myInstruments: this.props.currentUserInstruments
  }

  changeFirstName = (ev) => {
    this.setState({firstName: ev.target.value})
  }

  changeLastName = (ev) => {
    this.setState({lastName: ev.target.value})
  }

  changeUsername = (ev) => {
    this.setState({username: ev.target.value})
  }

  changePassword = (ev) => {
    this.setState({password: ev.target.value})
  }

  familyOptions = () => (
    this.props.allFamilies.map((f) => (
      <option key={uuid()} value={f.id}>{f.name}</option>
    ))
  )

  chooseFamily = (ev) => {
    this.setState({ selectedFamily: ev.target.value })
  }

  filterInst = (ev) => {
    this.setState({ instrumentFilter: ev.target.value })
  }

  filterByFamily = () => (
    this.props.allInstruments.reduce( (acc, i) => {
      if (this.state.selectedFamily === "0") {
        acc.push(i)
      }
      else if (this.state.selectedFamily === "mine") {
        if(this.state.myInstruments.find(myi => (
          myi.id === i.id
        ))) {
          acc.push(i)
        }
      }
      else if (i.family_id === parseInt(this.state.selectedFamily, 10)) {
        acc.push(i)
      }
      return acc
    }, [] )
  )

  checkInstrument = (inst) => {
    if(this.state.myInstruments.find((myi)=>(myi.id === inst.id))) {
      return true
    } else {
      return false
    }
  }

  onCheckInst = (ev) => {
    let newList = []
    if(this.state.myInstruments.find(myi => (myi.id === parseInt(ev.target.value, 10)))) {
      newList = this.state.myInstruments.filter((myi)=>(myi.id !== parseInt(ev.target.value, 10)))
    }else{
      let newInstrument = this.props.allInstruments.find((i)=>(i.id === parseInt(ev.target.value, 10)))
      newList = [...this.state.myInstruments, newInstrument]
    }
    this.setState({ myInstruments: newList })
  }

  renderInstruments = () => (
    this.filterByFamily().reduce( (acc, i) => {
      if(i.name.toLowerCase().includes(this.state.instrumentFilter.toLowerCase())){
        acc.push(
          <Form.Field key={uuid()}>
            <input type="checkbox" value={i.id} checked={this.checkInstrument(i)} onChange={this.onCheckInst}/>
            {` ${i.name}`}
          </Form.Field>)
      }
      return acc
    }, [] )
  )

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.editMe({
      id: this.props.currentUser.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      instrumentIds: this.state.myInstruments.map(i=>(i.id))
    })
    this.props.changeCurrentProfile(this.props.currentUser.id)
    this.props.redirectingToProfile()
  }

  render() {
    return (
      <div>
        {(this.props.errors.length > 0) ? (
          <h3>{this.props.errors}</h3>
        ) : ( null )}

        {(this.props.loadNewProfile) ? (
          <Redirect exact to={`/users/${this.props.currentUser.id}`}/>
        ) : ( null )}

        <div className='new-user-form' style={{paddingTop: '100px'}}>
          <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='blue' textAlign='center'>
                Edit your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid placeholder='First Name' onChange={this.changeFirstName} value={this.state.firstName}/>
                  <Form.Input fluid placeholder='Last Name' onChange={this.changeLastName} value={this.state.lastName}/>
                  <Form.Input fluid placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>

                  <h2>Add instruments: </h2>
                  <label>Filter by type: </label>
                  <select value={this.state.selectedFamily} onChange={this.chooseFamily}>
                    <option value={"0"}>All instruments</option>
                    <option value={"mine"}>My instruments</option>
                    {this.familyOptions()}
                  </select>
                  <label>Filter by name: </label>
                  <Form.Input fluid placeholder="Instrument" value={this.state.instrumentFilter} onChange={this.filterInst}/>

                  {this.renderInstruments()}

                  <Button color='blue' fluid size='large' type='submit' onClick={this.handleSubmit}>Save Changes</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let instNames = state.users.currentUser.show_skills.map((sk)=> (
    sk.instrument
  ))
  let instList = state.instruments.filter((i)=>(
    instNames.includes(i.name)
  ))

  return ({
    errors: state.users.errors,
    currentUser: state.users.currentUser,
    loadNewProfile: state.users.loadProfile,
    allInstruments: state.instruments,
    allFamilies: state.families,
    currentUserInstruments: instList
  })
}

function mapDispatchToProps(dispatch) {
  return {
    editMe: (userObj) => { dispatch(editUser(userObj)) },
    changeCurrentProfile: (userId) => { dispatch(changeProfile(userId)) },
    redirectingToProfile: () => { dispatch(redirectToProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)
