let initialState=[
    {idx:0,img:"http://localhost:3000/images/skin1.svg",
    purchase:true,  Liked:false, IsCart:false},
    {idx:1,img:"http://localhost:3000/images/skin2.svg",
    purchase:true,  Liked:false, IsCart:false},
    {idx:2,img:"http://localhost:3000/images/skin3.svg",
    purchase:true,  Liked:false, IsCart:false},
    {idx:3,img:"http://localhost:3000/images/skin4.svg",
    purchase:false, Liked:false, IsCart:false},
    {idx:4,img:"http://localhost:3000/images/skin5.svg",
    purchase:false, Liked:false, IsCart:false},
    {idx:5,img:"http://localhost:3000/images/skin6.svg",
    purchase:false, Liked:false, IsCart:false},
    {idx:6,img:"http://localhost:3000/images/skin7.svg",
    purchase:false, Liked:false, IsCart:false},
    {idx:7,img:"http://localhost:3000/images/skin8.svg",
    purchase:false, Liked:false, IsCart:false}];
let selectTempReducer=(state=initialState,action)=>{
    console.log(state);
    let temp=[...state];
    switch(action.type){
        case "IsLiked":
            temp[action.payload.idx].Liked=action.payload.Liked;
            return temp;
        case "IsPurchased":
            temp[action.payload.idx].purchase=action.payload.purchase;
            return temp;
        case "IsAddedToCart":
            temp[action.payload.idx].IsCart=action.payload.IsCart;
            return temp;
        default: return state;
    }
}
export default selectTempReducer;