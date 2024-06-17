console.log("jyoti markun");
function hellow(){
    console.log("hellow world");
}
for(let i = 0 ;i<=5;i++){
    console.log(i)
};
debugger

setTimeout(function(){
    console.log("zerp")
},10)

setTimeout(hellow,10)

console.log("hellow ggg");

// EVENT LOOP IS LIKE A BRIDGE BETWWEN CALL STACK AND CALLBACK QUEQU IT WILL CHECK WETHER CALLBACK QUEUE IS EMPTY OR NOT AND IF OUR CALL TACK IS EMPTY THAN IT WILL PASS FUNCTION OD CALLBACK QUEUE TO CALLBACK STACK
