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
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{PRODUCTNAME}/g, product);
  output = output.replace(/{IMAGE}/g, product.image);
  output = output.replace(/{FROM}/g, product.from);
  output = output.replace(/{%PRODUCTNUTRIENTNAME%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not_organic");
  }
  output = output.replace(/{%DESCRIPTION}%/g, product.description);
};
const tempOverview = fs.readFileSync(
  `${__dirname}/starter/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/starter/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/starter/templates/product.html`,
  "utf-8"
);

const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8"
);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  //OVERVIEW PAGE
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHtml = dataObj.map((el) => {
      replaceTemplate(tempCard, el);
    });
    console.log(cardsHtml);
    res.end(tempOverview);
  }
  //PRODUCT PAGE
  else if (pathName === "/product") {
    res.end("this is the PRODUCT");
  }
  //API PAGE
  else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  }
  //NOT FOUND
  else {
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
