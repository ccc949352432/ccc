const mysql = require('mysql')

const conn = mysql.createConnection({
    post: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu32',
    dateStrings:true,
    multipleStatements:true
})

conn.connect()
module.exports = conn