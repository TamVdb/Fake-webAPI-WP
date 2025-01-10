import { fetchById, fetchPosts } from '../services/wp_service.js';

export function getById_wpPost(req, res) {
   // Gestion du paramètre "id"
   const articleId = parseInt(req.params.id);
   console.log(articleId);


   // Obtenir l'article via le service
   const article = fetchById(articleId);
   console.log(article);


   // Envoyer une réponse en fonction de si l'article existe ou pas
   if (!article) {
      res.sendStatus(404);
   } else {
      res.status(200).json(article);
   }
}

export function getAll_wpPost(req, res) {
   // Gestion des paramètres query (?page=...&per_page=...)
   const page = parseInt(req.query.page ?? 1);
   const perPage = parseInt(req.query.per_page ?? 10);

   // Obtenir les données via le service
   const articles = fetchPosts(page, perPage);

   // Envoyer les données au client
   res.status(200).json(articles);
}

export function add_wpPost(req, res) {
   res.sendStatus(501);
}