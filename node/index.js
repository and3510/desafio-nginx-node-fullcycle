const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'db', // Nome do serviço no docker-compose
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sqlInsert = `INSERT INTO people(name) VALUES('Wesley Willians')`;
const sqlSelect = `SELECT name FROM people`;

app.get('/', (req, res) => {
    connection.query(sqlInsert, (err, result) => {
        if (err) throw err;
        
        connection.query(sqlSelect, (err, rows) => {
            if (err) throw err;

            let html = '<h1>Full Cycle Rocks!</h1>\n<ul>';
            rows.forEach(row => {
                html += `<li>${row.name}</li>`;
            });
            html += '</ul>';
            
            res.send(html);
        });
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
