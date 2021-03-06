import { inputStyle, textInputStyle, buttonStyle } from '../reusables/form-style.js'
import { newUserFormStyle } from '../loggedOutContainer/new-user-form-style.js'

export function newPostFormStyle() {
  return {
    ...newUserFormStyle(),
    borderRadius: '.3em',
    width: '100%',
    left: '0'
  }
}

export function postInputStyle() {
  return {
    ...inputStyle(),
    width: '100%',
    left: '0',
    marginTop: '0',
    marginBottom: '2em'
  }
}

export function dropdownStyle() {
  return {
    ...textInputStyle(),
    background: 'white',
    border: 'solid #b2b2b2 .1em',
    borderRadius: '.3em',
  }
}

export function postButtonStyle() {
  return {
    ...buttonStyle(),
    margin: '0'
  }
}

export function newPostPadding() {
  return {
    paddingBottom: '2em',
  }
}
