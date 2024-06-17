// when you are using console statement in setTimeout function and the code contains console statement then the console statement will run first thi is due to asynchronous nature of js 

setTimeout("console.log('hellow')",1000);
setTimeout("console.log('my name is jyoti markun')",0);


setTimeout(console.log('markun'),1000);

setTimeout(console.log('jojo'));

console.log("hariboll"); 