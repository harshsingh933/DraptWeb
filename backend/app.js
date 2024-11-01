const express = require('express');
const documentRoutes = require('./routes/documentRoutes');
const speechRoutes = require('./routes/speechRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

// Routes
app.use('/api/documents', documentRoutes);
app.use('/api/speech', speechRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
