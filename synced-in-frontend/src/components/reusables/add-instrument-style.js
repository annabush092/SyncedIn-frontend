import { textInputStyle, inputStyle } from './form-style.js'
import { headerStyle } from '../loggedOutContainer/new-user-form-style.js'

export function instrumentHeaderStyle() {
  return {
    ...headerStyle(),
    paddingTop: '2em'
  }
}

export function dropdownStyle() {
  return {
    ...textInputStyle(),
    background: 'white',
    border: 'solid #b2b2b2 .1em',
    borderRadius: '.3em',
    height: '2.4em'
  }
}

export function checkList() {
  return {
    ...inputStyle(),
    width: '85%',
    columns: '3',
    fontSize: '1.1em'
  }
}

export function checkboxStyle() {
  return {
    padding: '.5em',
    display: 'inline-block',
    width: '100%'
  }
}

export function newInstrumentHeader() {
  return {
    ...headerStyle(),
    fontSize: '1.4em',
    paddingTop: '2em',
  }
}
