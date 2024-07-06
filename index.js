const fs = require("fs");
const http = require("http")

////////////////////////////////
// FILES


// // //Blocking, synchronous way
// // const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// // console.log(textIn);
// // const textOut = `this is about avocado ${textIn} created this particular date ${Date.now()}`;
// // fs.writeFileSync("./starter/txt/output.txt", textOut);
// // console.log("file has been written");

// //Non-blocking, asynchronous way
// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
//   fs.readFile(`./starter/txt(${data}`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//     fs.writeFile("./starter/final.txt","utf-8",(err,data)=>{
//         console.log("ur file has been written");
//     })
//     });
//   });
// });
// console.log("will read file");


/////////////////////////////////////////
//SERVER
const server = http.createServer((req,res)=>{
    res.end("Hello from the Server")
})