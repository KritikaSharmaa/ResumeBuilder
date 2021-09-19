let initialState=[
    {code:'A',img:'skin1',purchase:true,Liked:false},
    {code:'B',img:'skin2',purchase:true, Liked:false},
    {code:'C',img:'skin3',purchase:true, Liked:false},
    {code:'D',img:'skin4',purchase:false, Liked:false},
    {code:'E',img:'skin5',purchase:false, Liked:false},
    {code:'F',img:'skin6',purchase:false, Liked:false},
    {code:'G',img:'skin7',purchase:false, Liked:false},
    {code:'H',img:'skin8',purchase:false, Liked:false}];
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