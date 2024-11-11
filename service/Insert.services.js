const connection = require('./dbconn.services.js');
const dbconn = require('./dbconn.services.js');


connection.connect(function(err){
    if(err) throw err;
    console.log('Connected to mySQL')
})


const QWithPam = (sql,place_holder)=>{

    return new Promise(function(resolve, reject){

        dbconn.connect(()=>{

            dbconn.query(sql,place_holder,(err,result)=>{

                if(err){
                    console.log(err);
                    return reject(err);
                }
        
                if(result == null){
                    return reject({ message: "MySQL Err" });
                }
        
                resolve(result);

            });
            
        }); 

    });
}

module.exports = { QWithPam };