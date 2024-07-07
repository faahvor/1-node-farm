const fs = require("fs");
const http = require("http");
const url = require("url");

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
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8')
 const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("this is the PRODUCT");
  }else if(pathName === "/api"){
       res.writeHead(200,{
        "Content-type":'application/json'
       })
        res.end(data)
    
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end('<h1 style="text-align:center; color:red;">Page not Found</h1>');
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to response on port 8000");
});
