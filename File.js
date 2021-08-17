const fs = require("fs");

//read
fs.readFile("./Project.txt", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data.toString());
});
//write
fs.writeFile("./Project2.txt", "This is My project 2🚀🚀🚀", (err, data) => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log("Wrote to file ");
	}
});
//directories
if (!fs.existsSync("./Contacts")) {
	fs.mkdir("./Contacts", (err) => {
		if (err) console.log(err);
		return;
	});
} else {
	fs.rmdir("./Contacts", (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Folder deleted");
		}
	});
}
//Delete ..
if (fs.existsSync("./Project2.txt")) {
	fs.unlink("./Project2.txt", (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("the File is deleted❌❌");
		}
	});
}
