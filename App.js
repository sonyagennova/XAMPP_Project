const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5050;

app.use(express.static('public'));

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove 
app.use(express.urlencoded({extended: true})); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// MySQL Code goes here
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'FlowerTypes'
})

app.get('/api', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * FROM Flowers', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from flower table are: \n', rows)
        })
    })
})

app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * FROM Flowers WHERE ID = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
            
            console.log('The data from flower table are: \n', rows)
        })
    })
});

// Delete a beer
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('DELETE FROM Flowers WHERE ID = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.send(`Flower with the record ID ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }
            
            console.log('The data from beer table are: \n', rows)
        })
    })
});

// Add beer
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        
        const params = req.body
        connection.query('INSERT INTO Flowers SET ?', params, (err, rows) => {
        connection.release() // return the connection to pool
        if (!err) {
            res.send(`Flower with the record ID  has been added.`)
        } else {
            console.log(err)
        }
        
        console.log('The data from beer table are:11 \n', rows)

        })
    })
});


app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, name, tagline, description, image } = req.body

        connection.query('UPDATE Flowers SET name = ?, description = ?, image = ? WHERE ID = ?', [name, tagline, description, image, id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Flower with the name: ${name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

// Listen on enviroment port or 5050
app.listen(port, () => console.log(`Listening on port ${port}`))