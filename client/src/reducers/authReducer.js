
export default function reducer(state = {
  userInfo: {}
}, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_USER":{
      return {
        ...state,
        userInfo:action.payload
      }
    }     

    default:{
      return state;
    }
  }
}
