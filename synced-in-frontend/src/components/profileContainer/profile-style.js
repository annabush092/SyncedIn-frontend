export function profileContainerStyle() {
  return {
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
    gridTemplateRows: 'min-content auto',
    gridColumnGap: '0',
    gridRowGap: '0',
    lineHeight: '1'
  }
}

export function followingListStyle() {
  return {
    gridColumn: '1 / 2',
    gridRow: '1 / 3',
    padding: '1em',
    background: '#3a3a3a'
  }
}

export function followingHeader() {
  return {
    color: 'white'
  }
}

export function profileCardPadding() {
  return {
    display: 'block',
    overflow: 'auto',
    paddingBottom: '1em',

    width: '22em'

  }
}



export function skillBoxStyle() {
  return {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    padding: '1em',
    display: 'inline-block',
    overflow: 'auto'
  }
}

export function leftColumn(){
  return {
    width: '70%',
    display: 'inline-block',
    cssFloat: 'left'
  }
}

export function rightColumn() {
  return {
    width: '30%',
    display: 'inline-block',
    cssFloat: 'left',
    paddingLeft: '1em',
    paddingRight: '1em',
  }
}

export function nameHeaderStyle() {
  return {
    fontSize: '3em',
    lineHeight: '1em',
    padding: '.5em',
    textAlign: 'center',
    display: 'block',
    width: '100%',
  }
}

export function profilePicStyle() {
  return {
    borderRadius: '50%',
    width: '100%',
    display: 'inline-block',
  }
}

export function followDiv() {
  return {
    display: 'inline-block',
    cssFloat: 'center',
    width: '100%',
    marginBottom: '1em'

  }
}

export function skillDiv() {
  return {
    display: 'block',
    width: '100%'
  }
}

export function skillList() {
  return {
    display: 'block',
    overflow: 'auto',
    width: '100%',
    columns: '2',
    marginRight: '1em'
  }
}

export function skillCardStyle() {
  return {
    display: 'inline-block',
    marginBottom: '1em',
    width: '100%',
    marginRight: '1em'
  }
}

export function skillHeader() {
  return {
    fontSize: '1.2em',
    lineHeight: '1.2em',
    padding: '.5em',
    background: '#dd1616',
    color: 'white',
    borderRadius: '.3em .3em 0 0',
  }
}

export function skillContent() {
  return {
    background: 'white',
    borderBottom: 'solid #b2b2b2 .1em',
    borderLeft: 'solid #b2b2b2 .1em',
    borderRight: 'solid #b2b2b2 .1em',
    padding: '1em'
  }
}


export function postsBoxStyle() {
  return {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
    paddingTop: '1em',
    paddingRight: '2em',
    background: '#3a3a3a'
  }
}
