let initialState=[
    {img:'skin1',purchase:true,  Liked:false},
    {img:'skin2',purchase:true,  Liked:false},
    {img:'skin3',purchase:true,  Liked:false},
    {img:'skin4',purchase:false, Liked:false},
    {img:'skin5',purchase:false, Liked:false},
    {img:'skin6',purchase:false, Liked:false},
    {img:'skin7',purchase:false, Liked:false},
    {img:'skin8',purchase:false, Liked:false}];
let selectTempReducer=(state=initialState,action)=>{
    //console.log(state);
    let temp=[...state];
    switch(action.type){
        case "IsLiked":
            temp[action.payload.idx].Liked=action.payload.Liked;
            return temp;
        case "IsPurchased":
            temp[action.payload.idx].purchase=action.payload.purchase;
            return temp;
        default: return state;
    }
}
export default selectTempReducer;