let conn=require('../connections/mysqlconnection');
let Destinos={};

// listado de destinos
Destinos.fetchAll=(cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    const SQL="SELECT * FROM destinos";
    conn.query(SQL, (error,rows)=>{
        console.log(rows);
        if(error) return cb(error);
        else return cb(null,rows);
    })
}

// listado de destinos activos
Destinos.fetch=(cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    const SQL="SELECT * FROM destinos WHERE activo=1";
    conn.query(SQL, (error,rows)=>{
        console.log(rows);
        if(error) return cb(error);
        else return cb(null,rows);
    })
}
module.exports=Destinos;