
const run = async() => {
        try{
            const [ results, fields ] = await connection.query('select * from categories')
            console.log(results, fields)
        }catch(err){
            console.log(err)
        }
        }catch(err){
            console.log(err)
    }   
}

run()