import express from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from './config/database.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database connected and synced.');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Database connection failed:', err));