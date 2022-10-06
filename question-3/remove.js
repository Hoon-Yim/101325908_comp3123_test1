const fs = require("fs");
const path = require("path");

const logs_dir = path.join(__dirname, "logs");

// checks if there is a logs directory
if (!fs.existsSync(logs_dir)) {
    fs.mkdirSync(logs_dir);
}

const files = fs.readdirSync(logs_dir);
if (files.length == 0) {
    console.log("there is no file to delete!");
    process.exit();
}

files.forEach(file => {
    console.log(`delete files... ${file}`);
    fs.unlinkSync(path.join(logs_dir, file), () => { });
});