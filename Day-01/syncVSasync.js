// sycn
// var fs = require("fs");
// var data = fs.readFileSync("input.txt");

// console.log(data.toString());

// let i = 1;
// while (i <= 5) {
//   console.log("The number is " + i);
//   i++;
// }

// async
var fs = require("fs");
var data = fs.readFile("input.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

let i = 1;
while (i <= 5) {
  console.log("The number is " + i);
  i++;
}
