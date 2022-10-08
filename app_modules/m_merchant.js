const mysql = require('mysql')
const db_config = require('../config/db_config.json')

const con = mysql.createConnection(db_config)

// ADD MERCHANT
const addMerchant = (values) => {
    let sql = `INSERT INTO merchant VALUES ?`

    con.query(sql, [values] , (err, result) => {
        if(err) throw err
        return
    })
    return 'Data has been saved successfully'
}

module.exports = addMerchant