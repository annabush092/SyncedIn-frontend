import {buttonStyle} from '../reusables/form-style.js'
import {postListStyle} from '../postsContainer/post-card-style.js'

export function userListStyle() {
  return {
    ...postListStyle(),
    paddingTop: '1em'
  }
}

export function outsideCardPadding() {
  return {
    position: 'relative',
    display: 'inline-block',
    overflow: 'auto',
    padding: '1em'
  }
}

export function cardStyle() {
  return {
    width: '22em',
    minHeight: '10em',
    borderRadius: '.3em',
    display: 'grid',
    border: 'solid #b2b2b2 .1em',
    background: 'white',
    padding: '1em',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'max-content auto',
    gridColumnGap: '.25em',
    gridRowGap: '.5em',
  }
}

export function cardHeaderStyle() {
  return {
    fontSize: '1.6em',
    lineHeight: '1.2em',
    padding: 'none',
    color: '#f91818ff',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    alignSelf: 'center',
    cursor: 'pointer',
  }
}

export function followButtonDiv() {
  return {
    gridColumn: '2 / 3',
    gridRow: '1 / 2'
  }
}

export function followButton() {
  return {
    ...buttonStyle(),
    background: '#3a3a3a',
    margin: '0 0 0 0',
    width: '7em',
    padding: '.5em .5em .5em .5em',
    fontSize: '1em'
  }
}

export function cardListStyle() {
  return {
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
    columns: '2',
    display: 'inline-block'
  }
}

export function instrumentListStyle() {
  return {
    fontSize: '1.1em',
    lineHeight: '1',
    paddingBottom: '1em',
    display: 'inline-block',
    width: '100%'
  }
}
