
export default function reducer(state = {
  data: []
}, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_DATA":{
      return {
        ...state,
        data:action.payload
      }
    }     

    default:{
      return state;
    }
  }
}

