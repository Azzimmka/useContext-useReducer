export  function Reducer(state: any, action: any){
  switch(action){
    case 'plus':
      return {...state, count: state.count + 1}
    case 'change':
      return {...state, name: 'Azimjon'}
    default:
      return state
  }
}