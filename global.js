// console.log(global);
setTimeout(() => {
	console.log("Hello I am Joyesh Debnath");
	clearInterval(inter);
}, 3000);

const inter = setInterval(() => {
	console.log("Hello I am Joyesh Debnath");
}, 1000);

console.log(__dirname);
console.log(__filename);
