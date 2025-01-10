//! Rôle des controllers
//? Résoudre la requête et envoyer une réponse adapté

export function helloWorld(req, res) {
   res.status(200).json('Hello World');
}

export function guessNumber(req, res) {
   const nb = parseInt(req.params.nb);

   if (isNaN(nb)) {
      res.status(400).json({ error: 'Bad request' });
      return;
   }

   const msg = nb === 42 ? 'The Answer to the Ultimate Question of Life, the Universe, and Everything' : `It\'s the number ${nb} 🙄`;
   res.status(200).json(msg);
}

export function readPostMsg(req, res) {
   const { msg, author } = req.body;

   // Traitement (Cas réel -> Utilisation d'une DB, d'une API externe, ...)
   console.log(`Message reçu de ${author}: ${msg}`);

   // Réponse
   res.status(200).json({ msg: `Message received. Thanks to ${author}` });
}
