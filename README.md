# Description du projet Minikube/Kubernetes

Déploiement d'une application web sur un cluster Kubernetes avec Minikube, utilisant Node.js pour le backend et une base de donnée MySQL. Les services sont conteneurisés avec Docker et orchestrés via Kubernetes pour assurer la scalabilité, la sécurité et la résilience.

# Principaux fichiers du projet:

Dockerfile, docker-compose.yaml : Conteneurisation
app-deployment.yaml, service-web.yaml : Déploiement et service Node.js
mysql-deployment.yaml, mysql-service.yaml, mysql-pcv.yaml, mysql-configmap.yaml, mysql-secrets.yaml : Configuration de la base de donnée MySQL
package.json, index.txt, tableau_bord.html : Code source et interface web 
