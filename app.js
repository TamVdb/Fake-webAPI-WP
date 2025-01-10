import express from 'express';


// Initialisation de la Web API
const app = express();
const { PORT } = process.env;

// Définition des routes
app.get('/', (req, res) => {
   res.status(200).send('Hello World');
});

// Lancement de la Web API
app.listen(PORT, () => {
   console.log(`Web API is running on port ${PORT}`);
});