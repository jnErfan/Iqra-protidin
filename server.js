//server.js
const express = require('express')
const next = require("next");

const port = 3005;
const hostname = 'localhost'

const app = next({ dev: false, port, hostname });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });


// ERC721 deployed at address: 0xCe31af574BAd9b53cdC1c87c1a1E491B63726aE1
// ERC1155 deployed at address: 0x57a84Bf8BCFEFF83b8D23015b7b67450cdaDa4BC
// Marketplace deployed at address: 0x4C7D822519adDfC1F1f377b6462e84ffF37FB57D

// Collection721 deployed at  0x9593B02b4D5d77CF55dDa86e74a31d8dAf14b8FE
// Collection1155 deployed at  0x7C277535Ee14ec1e28b9e1B1BB230b7a8C3d1c0a