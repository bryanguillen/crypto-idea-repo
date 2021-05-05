/**
 * @description Entry script used for running web service.
 */

require('dotenv');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');

const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 3000 : 3001;

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// JSON Parser
app.use(express.json({ limit: '1gb' }));

// Helmet
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
        "base-uri": ["'self'"],
        "block-all-mixed-content": [],
        "font-src": ["'self'", "https:", "data:"],
        "frame-ancestors": ["'self'"],
        "object-src": ["'none'"],
        "script-src": ["'self'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": [],
        "img-src": ["'self'", 'https://prequalie-assets.s3.us-east-2.amazonaws.com/'],
      },
  }),
);

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message || 'Something went wrong!' });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));