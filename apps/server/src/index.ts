import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const dta = "hello world";
const port = 4000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Press Ctrl+C to stop the server`);
});
