let http = require("http");
let fs = require("fs");

let mainHTML = fs.readFileSync("pages/main.html").toString();
let mainCSS = fs.readFileSync("pages/main.css").toString();
let WelcomeHTML = fs.readFileSync("pages/Welcome.html").toString();
let myIcon = fs.readFileSync("favicon.ico");
var userName = "";
var phone = "";
var email = "";
var address = "";

http
  .createServer((req, res) => {
    if (req.method == "GET") {
      // if (req.url != "/favicon.ico") {
      console.log(req.url);

      switch (req.url) {
        case "/main.html": {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(mainHTML);
          break;
        }
        case "/main.css": {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(mainCSS);
          break;
        }
        case "/Welcome.html": {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(WelcomeHTML);
          break;
        }
        case "/favicon.ico": {
          res.writeHead(200, "OK", { "content-type": "image/jpeg" });
          res.write(myIcon);
          break;
        }
        default:
          res.write("Enter a valid page ");
      }
      res.end();
    } else if (req.method == "POST") {
      console.log("POST");
      req.on("data", (data) => {
        // console.log(data.toString().split("&"));
        // console.log(data.toString().split("="));
        Name = data.toString().split("&")[0];
        // console.log(Name); name=Samir
        Name = Name.split("=")[1];
        phone = data.toString().split("&")[2];
        console.log(data.toString());
        phone = phone.split("=")[1];
        email = data.toString().split("&")[1];
        email = decodeURIComponent(email.split("=")[1]);
        address = data.toString().split("&")[3];
        address = address.split("=")[1];
      });
      req.on("end", () => {
        WelcomeHTML = WelcomeHTML.replace("{Name}", Name);
        WelcomeHTML = WelcomeHTML.replace("{email}", email);
        WelcomeHTML = WelcomeHTML.replace("{number}", phone);
        WelcomeHTML = WelcomeHTML.replace("{address}", address);
        res.write(WelcomeHTML);
        res.end();
      });
    }
  })
  .listen("7004", () => {
    console.log("port 7004");
  });

//   build a linkedlist
