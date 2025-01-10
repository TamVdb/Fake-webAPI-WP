import articles from '../data/article.json' with { type: 'json' };

export function fetchPosts(page, perPage) {

   if (page < 1 || perPage < 1) {
      throw new Error('Invalid parameter page or perPage');
   }

   const indexStart = (page - 1) * perPage;
   const indexEnd = page * perPage;

   return articles.slice(indexStart, indexEnd);
}