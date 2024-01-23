export const InitialState = {
    users: [
        {id:1, name:"Shahidul islam"},
        {id:2, name:"Shohan Khan"},
        {id:3, name:"subbir topu"},
        {id:4, name:"shohel"}
    ],
};

export const reducer = (state, action) =>{
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users:[...state.users, action.payload]
            }
        case "DELETE_USER":
            const filterdUser = state.users.filter((user) =>{
                return user.id !== action.payload
            })
            return {
                ...state,
                users: filterdUser,
            }    
        default:
            return state;
    }
}