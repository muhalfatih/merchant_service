// Import Express
const express = require('express')
const app = express()
const port = 3000

const addMerchant = require('./app_modules/m_merchant')
const {addProduct, editProduct} = require('./app_modules/m_product')

app.use(express.json())

app.get('/:table', (req, res) => {
    let table = req.params.table
    let resultTable;
    con.query(`SELECT * FROM ${table}` , (err, result, fields) => {
        if(err) throw err
        res.status(200).json(result)
    })
})

app.post('/:table/', (req, res) => {
    let table = req.params.table
    let newData = req.body
    let keys, values

    console.log(newData)

    switch(table) {
        case 'merchant':
            values = [[...Object.values(newData)]]
            res.json(addMerchant(values))
            break

        case 'product':
            keys = Object.keys(newData)
            values = Object.values(newData)
            
            res.json(addProduct(keys, values))
            break

        default:
            break
    }
})

app.delete('/:table/:id', (req, res) => {
    let id = req.params.id
    let table = req.params.table

    console.log(id, table)

    con.query(`DELETE FROM ${table} WHERE id = '${id}'`, (err, result) => {
        if(err) throw err
        res.send("Data has been deleted successfully")
    })
})

app.put('/product/:id', (req, res) => {
    let id = req.params.id
    let data = req.body

    // let 

    res.json(editProduct(id,data))
})

console.log(`Listening Port: ${port}`)
app.listen(port)