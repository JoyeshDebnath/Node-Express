const persons = require("./Persons");

persons.map((person) => {
	console.log("NAME: " + person.name);
	console.log("AGE: " + person.age);
	console.log("OCCUPATION: " + person.work);
	console.log("----------------------");
	console.log("\n");
});

const OS = require("os");
console.log("The os info \n");
console.log(OS.platform(), OS.homedir());
