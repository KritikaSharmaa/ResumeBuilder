export const selectTempReducer=(state=null,action)=>{
    switch(action.type){
        case "ADD_TEMPLATE":return action.payload;
        default: return state;
    }
}