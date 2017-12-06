import { inputStyle } from '../reusables/form-style.js'

export function navBarStyle() {
  return {
    background: '#262626',
    width: '100vw',
    padding: '.2em',
    paddingRight: '1.2em',
    display: 'inline-block',
    overflow: 'auto',
  }
}

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
    paddingTop: '1.25em',
    fontSize: '1em',
    lineHeight: '1'
  }
}

export function loginLinkStyle() {
  return {
    width: '8.5em',
    height: "100%",
    cssFloat: 'right',
    color: 'white',
    fontSize: '1em',
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
    paddingTop: '.75em',
    paddingBottom: '.75em',
    backgroundColor: '#f91818ff',
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
    boxShadow: '0 4px 4px 0 #b2b2b2',
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
