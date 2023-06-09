const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const file = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    console.time('Done in ');
    fs.writeFile(file, body, (err) => {
      if (!err) {
        console.timeEnd("Done in ");
        const stats = fs.statSync(file);
        const fileSize = stats["size"];
        console.log('Downloaded and saved ' + fileSize + ' bytes to ' + file);
      };
    });
  };
});
