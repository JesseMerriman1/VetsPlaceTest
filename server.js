require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// Database information
const pool = new Pool({
  user: 'Jesse', 
  host: 'localhost',
  database: 'vetsplace', 
  password: 'Stlouis5', 
  port: 5433,
});


// linking routes
const appointmentsRoutes = require('./src/routes/appointments');
const clientsRoutes = require('./src/routes/clients');
const patientRecordsRoutes = require('./src/routes/patient_records');
const patientsRoutes = require('./src/routes/patients');
const userAuthRoutes = require('./src/routes/user_authentication');
const usersRoutes = require('./src/routes/users');

// Using the routes
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/patientrecords', patientRecordsRoutes);
app.use('/api/patients', patientsRoutes);
app.use('/api/auth', userAuthRoutes);
app.use('/api/users', usersRoutes);

// endpoint information
app.get('/', (req, res) => {
  res.send('VetsPlace API is running');
});

// test server feedback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

