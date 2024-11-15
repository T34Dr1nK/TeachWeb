const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { PORT } = process.env;
const port = process.env.port || PORT;

server.listen(port, () => console.log(`Server is running on port ${port}`));