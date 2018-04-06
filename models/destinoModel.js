let conn=require('../connections/mysqlconnection');
let Destinos={};

// listado de destinos
Destinos.fetchAll=(cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    const SQL="SELECT * FROM destinos";
    conn.query(SQL, (error,rows)=>{
        if(error) return cb(error);
        else return cb(null,rows);
    })
}

// listado de destinos activos
Destinos.fetchActivo=(cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    const SQL="SELECT * FROM destinos WHERE activo=1";
    conn.query(SQL, (error,rows)=>{
        if(error) return cb(error);
        else return cb(null,rows);
    })
}
// Modificamos destinos
Destinos.activoUpdate=(id,cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    conn.query("SELECT * FROM destinos WHERE id_destino=?",id,function (error,resultado) {
        if(error) return cb(error);
        else {
            let valorActivo=resultado[0].activo;
            if(valorActivo==1)
                valorActivo=0;
            else
                valorActivo=1;
            conn.query("Update destinos set activo="+valorActivo+" where id_destino=?",id,function (error,resultado) {
                if(error) return cb(error);
                return cb(null,resultado);
            })

        }
    })
}

// eliminar destinos
Destinos.destinoDelete=(id,cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    conn.query("SELECT * FROM destinos WHERE id_destino=?",id,function (error,resultado) {
        if(error) return cb(error);
        else {
            conn.query("Delete from destinos where id_destino=?",id,function () {
                if(error) return cb(error);
                return cb(null,resultado);
            })
        }
    })
}

// crear destino
Destinos.destinoCreate=(destino,cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    else {
        conn.query('INSERT INTO destinos SET ?', destino, (error, result) => {
            if (error) return cb(error);
            return cb(null, result);
        })
    }
}
module.exports=Destinos;