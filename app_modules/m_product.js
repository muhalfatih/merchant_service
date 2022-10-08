const mysql = require('mysql')
const db_config = require('../config/db_config.json')

const con = mysql.createConnection(db_config)

// ADD PRODUCT
const addProduct = (keys, values) => {
    let sql = `INSERT INTO product (${keys.join(',')}) VALUES (?)`

    con.query(sql, [values], (err) => {
        if (err) throw err
        return
    })

    return 'Data has been saved successfully'
}

// EDIT Product
const editProduct = (id, values) => {
    let sql = `UPDATE product SET name = ? WHERE id = ${id}`

    con.query(sql, (err) => {
        if(err) throw err
        return
    })
    return 'Data has been edited Succcessfully'
}

module.exports = {addProduct, editProduct}