// /////////////// Trafic Light //////////////////////////////////////////

// const traficLightColor = prompt("pleasse enter color: (red green yellow)");

// if (traficLightColor === "red") console.log("stop");
// else if (traficLightColor === "yellow") console.log("Slow down");
// else if (traficLightColor === "green") console.log("go");
// else console.log("Invalid color");

// //////////////////// odd / even ///////////////////////////////////

// const userNumber = +prompt("Please enter number : ");

// if (userNumber % 2 === 0) console.log(`The number ${userNumber} is even`);
// else console.log(`The number ${userNumber} is odd`);

// //////////////// Age Verification System /////////////////////////////

// const userAge = +prompt("Please enter your age : ");

// if (userAge >= 18) console.log("You are an adult");
// else if (userAge >= 13 && userAge < 18) console.log("You are a teenager");
// else console.log("You are a child");

// //////////////// score ///////////////////////////////

const score = Number(prompt("enter number : "));

if (score >= 90 && score <= 100) console.log("A+");
else if (score >= 80 && score < 90) console.log("A");
else if (score >= 70 && score < 80) console.log("B+");
else if (score >= 60 && score < 70) console.log("B");
else if (score >= 50 && score < 60) console.log("C");
else if (score > 0 && score < 50) console.log("D");
else console.log("Not avalable");
