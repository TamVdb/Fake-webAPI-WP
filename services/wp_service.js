import articles from '../data/article.json' with { type: 'json' };

export function fetchPosts(page, perPage) {

   if (page < 1 || perPage < 1) {
      throw new Error('Invalid parameter page or perPage');
   }

   const indexStart = (page - 1) * perPage;
   const indexEnd = page * perPage;

   return articles.slice(indexStart, indexEnd);
}

export function fetchById(id) {

   return articles.find(article => article.id === id);
}