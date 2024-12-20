
import express from 'express';
import path from "path";
const { dirname } = await import('path');
const { fileURLToPath } = await import('url');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Create an Express app
const app = express();

// Set the port number for the server
const port = 4000;


console.log("DIRNAME",__dirname);



// var path1 = path.resolve(__dirname,"../../dist")

app.use(express.static(path.resolve(__dirname, '../dist')));

// Define a basic route for the root URL
// app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});