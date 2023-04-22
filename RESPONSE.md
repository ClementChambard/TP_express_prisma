# MES CHOIX TECHNIQUES

## CRUD basique

Il y a deux schémas : task et tag.

les endpoints sont situés sur /task et /tag.

pour chaque schéma, il y a les requêtes suivantes:

- GET / : récuperer tous les objets
- POST / : créer un objet
- GET /:id : récuperer un objet par son id
- DELETE /:id : supprimer un objet par son id
- PATCH /:id : mettre à jour un objet par son id

pour les requêtes GET un code 200 est renvoyé avec les données en cas de succès, et un code 404 est renvoyé si l'id n'existe pas.

pour la requête POST, on renvoie un code 201 en cas de succès avec l'objet créé et 400 en cas d'échec.

pour les requêtes DELETE et PATCH, le code 204 est renvoyé en cas de succès car je ne renvoie pas de données, et le code 404 est renvoyé si l'id n'existe pas.

## Triage et Pagination

Pour les taches, il fallait implémenter un sysème pour trier et/ou paginer les résultats.

Au lieu de créer de nouveaux endpoints, j'ai choisi d'ajouter des paramètres optionnels à la requête GET / déjà existante :

- sorted : soit 0, soit 1, par défaut 0. Indique si les résultats doivent être triés.
- page : un nombre > 0. Indique la page à récuperer. Chaque page a 10 éléments, et par défaut, le résultat n'est pas paginé.

## Relier les Taches et les Tags

Afin d'ajouter des tags à une tache, j'ai créé un nouvel endpoint situé sur /task/tags.

Il y a deux requêtes possibles sur cet endpoint :

- POST /:id : ajoute un tag à la tache qui a l'id correspondant
- DELETE /:id : supprime un tag de la tache qui a l'id correspondant

Je ne sais pas si les verbes HTTP que j'ai choisi sont adéquats, mais ils me paraissent logiques.

Pour ces deux requêtes, il faut fournir l'id du tag à ajouter dans le corps de la requête et on renvoie un code 204 en cas de succès et 404 si un des id n'existe pas.

On peut aussi voir dans les requêtes GET des taches quels tags sont associés aux taches, et dans les requêtes GET des tags, on voit les taches qui ont chaque tag.

## Docker

j'ai créé un dockerfile qui devrait créer une image docker qui fonctionne.

sur ma machine, l'ip du serveur dans le container est 172.17.0.2

## Postman

le fichier Tests.postman_collection.json contient une sélection des requêtes que j'ai effectuées pour tester l'API.

## A améliorer

Il faut que j'améliore la gestion d'erreur car elle est assez vague et parfois, l'erreur ne remonte pas et le programme reste bloqué.
Il faut aussi ajouter l'authentification, qui était optionnelle dans ce TP.
