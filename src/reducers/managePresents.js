export function managePresents(state = { numberOfPresents: 0}, action){
    switch (action.type) {
        case "INCREASE":
            return { numberOfPresents: state.numberOfPresents + 1 };
        default:
            return state;
    }
 
}

// write a function called managePresents() 
// that takes in a previous state and an 
// action as its argument.

// set a default value for the state argument
// an object with a key numberOfPresents, assigned to 0
