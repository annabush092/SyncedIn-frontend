export function loadingReducer(state= {count: 0} , action){
  switch(action.type) {
    case "FETCHING":
      let newCount = state.count + 1
      console.log("about to return from loading")
      return {...state, count: newCount}
    case "DONE_FETCHING":
      return {...state, count: (state.count - 1)}
    default:
      return state
  }
}
