import express from 'express';
import demoRouter from './routes/demo_router.js';
import wpRouter from './routes/wp_router.js';


// Initialisation de la Web API
const app = express();
app.use(express.json());
const { PORT } = process.env;

// Définition des routes
app.use('/demo', demoRouter);
app.use('/wp/v2', wpRouter);

// Lancement de la Web API
app.listen(PORT, () => {
   console.log(`Web API is running on port ${PORT}`);
});