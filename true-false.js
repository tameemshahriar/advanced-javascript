// const age = -4; //true
// const name = " "; //true
// const name = 0; //false
// const name = "0"; //false
// const name = ""; //false
// let name = null; // false
//let name = NaN; //false
//let name;//false
// let name = []; //true
// let name = {}; //true
//let name = false;//false
//let name = 'false';//true
let name = 12;
if( name || name ==0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}