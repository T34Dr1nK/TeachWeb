const { QWithPam } = require('../service/Insert.services.js');

async function insertCat(req,res) {

    try{

        const { CatName } = req.body;

        if ( !CatName ){
            return res.status(406).send('Please Sent a Corrected Format')
        }

        const query = 'INSERT INTO `category` SET ?';
        let Data = { CategoryName: CatName}

        await QWithPam(query, Data);

        return res.status(200).json({ message: "Insert New Category"})

    }catch(err){console.error(err)}
}

module.exports = {insertCat};