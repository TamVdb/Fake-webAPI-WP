# Fake webAPI WP

Recap des commandes

## 🚀 Initialiser le projet node
```
npm init
```

## ⚙️ Installation d'express
```
npm i express@next
```
## 🧰 Outils de dev (watch)
```
npm i nodemon --save-dev
```

NB : Il est également possible d'utiliser "--watch" à partir de Node v22+

### Modification du fichier package.json
```
"scripts": {
   "start": "node app.js",
   "dev": "nodemon app.js"
}
```

ou

```
"scripts": {
   "start": "node app.js",
   "dev": "node app.js --watch"
}
```

### Structure
controllers
routes
services
app.js
