const http = require("http");
const { URL, url } = require("url");
const querystring = require("querystring");
const {
  getAllData,
  getData,
  edit,
  deleteElement,
  addData,
  arr,
} = require("./task");
const server = http.createServer();
// =======================================
server.on("request", (req, res) => {
  // to handle parameters in the url
  const url = new URL(req.url, `http://${req.headers.host}`);
  let id = url.searchParams.get("id");
  id = parseInt(id);
  const name = url.searchParams.get("name");
  // ========
  if (req.method === "GET" && req.url === "/") {
    getAllData();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr));
    // ========
  } else if (req.method === "GET") {
    id;
    if (id === -1) {
      res.writeHead(405, { "Content-Type": "text/html" });
      res.end("404 User not found");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr[getData(id)]));
    // ========
  } else if (req.method === "POST") {
    addData(name);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr));
    // ========
  } else if (req.method === "DELETE") {
    deleteElement(id);
    if (id === -1) {
      res.writeHead(405, { "Content-Type": "text/html" });
      res.end("404 User not found");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr));
    // ========
  } else if (req.method === "PATCH") {
    edit(+id, name);
    if (+id === -1) {
      res.writeHead(405, { "Content-Type": "text/html" });
      res.end("404 User not found");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 User not found");
  }
});

server.listen(3000, () => {
  console.log("i'm listening on port 3000");
});
