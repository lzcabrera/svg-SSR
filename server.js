const express = require('express');
const fs = require('fs');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
import React from 'react';

import MySvg from './MySvg';

function handleRender(req, res) {

  const html = ReactDOMServer.renderToString(<MySvg />);

  // Load contents of index.html
  fs.readFile('./index.html', 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="root" \/>/, "<div id=\"root\">" + html + "</div>");

    console.log(document);

    // Sends the response back to the client
    res.send(document);
  });
}



const app = express();

// Serve built files with static files middleware
app.use('/build', express.static(path.join(__dirname, 'build')));

// Serve requests with our handleRender function
app.get('*', handleRender);

// Start server
app.listen(3000);
