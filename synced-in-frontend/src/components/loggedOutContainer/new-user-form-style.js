import { inputStyle } from '../reusables/form-style.js'

export function outsideNewUserPadding() {
  return {
    paddingBottom: '2em',
    background: '#f6f6f6',
  }
}

export function alreadyUserMessage() {
  return {
    color: 'white',
    display: 'inline-block',
    cssFloat: 'right',
    padding: '.5em',
    paddingTop: '1em',
    fontSize: '1.3em',
    lineHeight: '1'
  }
}

export function loginLinkStyle() {
  return {
    height: "100%",
    cssFloat: 'right',
    color: 'white',
    fontSize: '1.3em',
    display: "inline-block",
    padding: '.5em',
    paddingLeft: '0em',
    margin: 'none',
  }
}

export function linkStyle() {
  return {
    width: '100%',
    padding: '.5em',
    paddingLeft: '.75em',
    paddingRight: '.75em',
    backgroundColor: '#dd1616',
    color: 'white',
    borderRadius: '.3em',
    border: 'none',
    display: 'block',
    textAlign: 'center',
    lineHeight: '1',
    cursor: 'pointer'
  }
}

export function newUserFormStyle() {
  return {
    width: '84%',
    left: '8%',
    background: 'white',
    position: 'relative',
    padding: '2em',
    border: 'solid #b2b2b2 .1em',
    display: 'block',
    overflow: 'auto'
  }
}

export function headerStyle() {
  return {
    color: '#f91818ff',
    fontSize: '2em',
    padding: '1em',
    paddingBottom: '.5em',
    cssFloat: 'left',
    width: '100%'
  }
}

export function nameInputStyle() {
  return {
    ...inputStyle(),
    width: '35%',
    marginRight: '10%',
    cssFloat: 'left'
  }
}
