const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path'); // Ajout de path pour servir le fichier HTML
const app = express();

// Configuration de la connexion MySQL
const connection = mysql.createConnection({
    host: 'mysql-service',  // Nom du service MySQL (Service Kubernetes)
    user: 'bastos',
    password: 'bastos',
    database: 'mydatabase',
});

connection.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connexion à la base de données réussie!');
});

// Middleware pour parser le corps de la requête
app.use(bodyParser.json());

// Ajouter un utilisateur à la base de données
app.post('/add-user', (req, res) => {
    const { nom, prenom } = req.body;
    const query = 'INSERT INTO utilisateur (nom, prenom) VALUES (?, ?)';
    connection.query(query, [nom, prenom], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
            res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur' });
            return;
        }
        res.status(200).json({ message: 'Utilisateur ajouté avec succès' });
    });
});

// Récupérer les utilisateurs de la base de données
app.get('/get-users', (req, res) => {
    const query = 'SELECT * FROM utilisateur';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs:', err);
            res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
            return;
        }
        res.status(200).json(results);
    });
});

// Servir le fichier HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tableau_bord.html'));
});

// Démarrer le serveur
app.listen(3000, () => console.log('Application de Bastien et Charles exécutée sur http://localhost:3000'));
