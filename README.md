# Description du projet Minikube/Kubernetes

Déploiement d'une application web sur un cluster Kubernetes avec Minikube, utilisant Node.js pour le backend et une base de donnée MySQL. Les services sont conteneurisés avec Docker et orchestrés via Kubernetes pour assurer la scalabilité, la sécurité et la résilience.

# Principaux fichiers du projet:

## Conteneurisation :
- Dockerfile
- docker-compose.yaml

## Déploiement et service Node.js
- app-deployment.yaml
- service-web.yaml

## Configuration de la base de donnée MySQL
- mysql-deployment.yaml
- mysql-service.yaml
- mysql-pcv.yaml
- mysql-configmap.yaml
- mysql-secrets.yaml

## Code source et interface web 
- package.json
- index.js
- tableau_bord.html
