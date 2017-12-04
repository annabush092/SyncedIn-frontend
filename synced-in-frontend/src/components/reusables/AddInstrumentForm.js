import React from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Form } from 'semantic-ui-react'

class AddInstrumentForm extends React.Component {

  state = {
    selectedFamily: "all",
    instrumentFilter: "",
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
      if (this.state.selectedFamily === "all") {
        acc.push(i)
      }
      else if (this.state.selectedFamily === "mine") {
        if(this.props.myInstruments.find(myi => (
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
    if(this.props.myInstruments.find((myi)=>(myi.id === inst.id))) {
      return true
    } else {
      return false
    }
  }

  onCheckInst = (ev) => {
    let newList = []
    if(this.props.myInstruments.find(myi => (myi.id === parseInt(ev.target.value, 10)))) {
      newList = this.props.myInstruments.filter((myi)=>(myi.id !== parseInt(ev.target.value, 10)))
    }else{
      let newInstrument = this.props.allInstruments.find((i)=>(i.id === parseInt(ev.target.value, 10)))
      newList = [...this.props.myInstruments, newInstrument]
    }
    this.props.changeMyInstruments(newList)
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

  render() {
    return (
      <div>
        <h2>Add instruments: </h2>
        <label>Filter by type: </label>
        <select value={this.state.selectedFamily} onChange={this.chooseFamily}>
          <option value={"all"}>All instruments</option>
          <option value={"mine"}>My instruments</option>
          {this.familyOptions()}
        </select>
        <label>Filter by name: </label>
        <Form.Input fluid placeholder="Instrument" value={this.state.instrumentFilter} onChange={this.filterInst}/>

        {this.renderInstruments()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    allInstruments: state.instruments,
    allFamilies: state.families,
  })
}

export default connect(mapStateToProps)(AddInstrumentForm)
