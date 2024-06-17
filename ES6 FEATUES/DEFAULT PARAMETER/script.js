// in function called if we pass only one argument then it will take the another argument as undefined thus resukt will be Nan (not a number) and by passing a default parameter we can replace that undefined with that number 
// and if we pass falsy value like null and empty sting then it's value will be zero

function multiply (a,b){
    return a*b;
}

function rollADice(numberOfSide=6){
    return Math.floor(Math.random()*numberOfSide+1);
}

// defore Es6 defalut parameter is used to send like this
function rollADice2(numberOfSide){
    if (numberOfSide == undefined){
        numberOfSide = 6;
    }
    return Math.floor(Math.random()*numberOfSide+1);
}
