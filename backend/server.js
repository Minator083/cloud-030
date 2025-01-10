const express = require('express');
const cors = require('cors');  // Import the CORS package
const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is responding');
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Data from server',
    data: [1, 2, 3, 4, 5]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
