const express = require('express');
const cors = require('cors');
const app = express();
const analysisRoute = require('./routes/analysis');

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/analysis', analysisRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
