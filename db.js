const mysql=require('mysql2');

const db=mysql.createPool(
    {
        host:'127.0.0.1',
        user:'babughadei',
        password:'Babu@2024sql',
        database:'LibraryDB'
    }
);

db.getConnection(err=>
{
    if(err) throw err;
    console.log("connected to db");
}
)
module.exports=db;