export function manageFriends(state = { friends: []}, action){
    switch (action.type) {
        
        case "ADD_FRIEND":
            return (
            {...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]
            } 
        )
    
    case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
        return (
            {...state,
                friends: [
                    ...state.friends.slice(0, removalIndex),
                    ...state.friends.slice(removalIndex +1)
                ]
            
        }
        )
        default:
            return state;
    }
}
    
    // action = {
    //     type: "ADD_FRIEND",
    //     friend: {
    //         name: "",
    //         hometown: "",
    //         id: "", 
    //     }
        // return a new state with this friend object 
        // added to the friends array
//         return { friends: state.friends }
//     }

//     action = {
//         type: "REMOVE_FRIEND",
//         id: "",
//     };
// }


