const mysql = require('mysql2/promise')

const run = async() => {
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'catproducts'
        })
        try{
            const [ results, fields ] = await connection.query('insert into categories (category) values (?)',['cat test'])
            console.log(results, fields)
        }catch(err){
            console.log(err)
        }
    }catch(err){
        console.log(err)
    }
    
}

run()