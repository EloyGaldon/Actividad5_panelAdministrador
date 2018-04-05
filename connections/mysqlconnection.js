const MYSQL=require('mysql');
const CONN=MYSQL.createConnection({
    host:'localhost',
    user:'root',
    //password:'root',
    password:'root',
    database:'Actividad3'
})

module.exports=CONN;