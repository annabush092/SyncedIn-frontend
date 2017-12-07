export function profileContainerStyle() {
  return {
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
    gridTemplateRows: 'max-content auto',
    gridColumnGap: '0',
    gridRowGap: '0'
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
    paddingBottom: '1em'
  }
}



export function skillBoxStyle() {
  return {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    padding: '1em',
    // display: 'block',
    // overflow: 'auto'
  }
}

export function nameHeaderStyle() {
  return {
    // gridColumn: '1 / 3',
    // gridRow: '1 / 2',
    // color: '#f91818ff',
    fontSize: '3em',
    lineHeight: '1em',
    display: 'block',
    padding: '.5em',
    // background: '#3a3a3a',
    textAlign: 'center'
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
    // background: 'white',
    marginBottom: '1em',
    // borderRadius: '.3em',
    // border: 'solid #b2b2b2 .1em',
    width: '100%',
    marginRight: '1em'
  }
}

export function skillHeader() {
  return {
    fontSize: '1.6em',
    lineHeight: '1.2em',
    padding: '.5em',
    background: '#f91818ff',
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
