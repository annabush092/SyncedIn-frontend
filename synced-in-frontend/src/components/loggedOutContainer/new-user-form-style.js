import { inputStyle } from '../reusables/form-style.js'

export function navBarStyle() {
  return {
    background: '#262626',
    width: '100vw',
    padding: '2em',
    display: 'block',
    overflow: 'auto'
  }
}

export function outsideNewUserPadding() {
  return {
    paddingBottom: '2em',
    background: '#f6f6f6',
    // width: '100vw',
    // height: '100vh',
  }
}

export function loginLinkStyle() {
  return {
    width: '100%',
    textAlign: 'right',
    color: 'white',
    fontSize: '1.2em',
  }
}

export function linkStyle() {
  return {
    marginLeft: '1em',
    marginRight: '1em',
    padding: '.5em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    backgroundColor: '#f91818ff',
    color: 'white',
    borderRadius: '.3em',
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
