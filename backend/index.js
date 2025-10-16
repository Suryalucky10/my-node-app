/*require('express'const app=express();
const PORT=3000;
app.use(express.json());
app.get('/',(req,res) => {
	res.send('Hello, World!');
});

app.get('/api/greet',(req,res) =>{
res.json({message:"welcome to DevOps"});
});

app.post('/api/data',(req,res) => {
const data=req.body;
res.json({received: data});
});


app.listen(PORT, () => {
 console.log("server running at http://<your-Vm-ip>:${PORT});
});

// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/users', userRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World! 👋');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://34.56.118.196:${PORT}`);
});


// index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://34.56.118.196:${PORT}`);
});


const express = require('express');
const path = require('path');
const logger = require('./logger'); // <-- import custom logger
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Request logging middleware (logs every incoming request)
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} from ${req.ip}`);
  next();
});

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running at http://34.56.118.196:${PORT}`);
});

*/
const express = require("express");
const path = require("path");
const logger = require("./logger"); // <-- import custom logger
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Request logging middleware (logs every incoming request)
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} from ${req.ip}`);
  next();
});

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const userRoutes = require("./routes/userRoutes");
const logRoutes = require("./routes/logRoutes"); // <-- add this

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/logs", logRoutes); // <-- enable frontend → backend logs

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running at http://34.31.230.105:${PORT}`);
});

