const fs = require("fs");
const path = require("path");

const logs_dir = path.join(__dirname, "logs");

// checks if there is a logs directory
if (!fs.existsSync(logs_dir)) {
    fs.mkdirSync(logs_dir);
}

for (let i = 0; i < 10; ++i) {
    fs.writeFileSync(path.join(logs_dir, `log${i}.txt`), `LOG${i}`, (err) => { console.log(err); });
}

const file_list = fs.readdirSync(logs_dir);
file_list.forEach(file => { console.log(file); });