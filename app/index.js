const Joi = require('joi')
const express = require('express')
const app = express()


app.use(express.json())

const customers = [
    {
        id: 1, name: 'John-Smith'
    },
    {
        id: 2, name: 'David Miller'
    },
    {
        id: 3, name: 'SAM looper'
    }

];
app.get('/', function (req, res) {
    res.send('First get request')
})

app.get('/api/customers', function (req, res) {
    res.send(customers)
})

app.get('/api/customers/:id', (req, res) => {

    const customer = customers.find(c =>
        c.id === parseInt(req.params.id))
    if (!customer) res.status(404).send('The give id was not given')
    res.send(customer)

})

app.post('/api/customers', (req, res) => {

    const valid = {
        name: Joi.string().min(3).required()
    }
    //const result = Joi.validate(req.body,valid);

    if (valid.error) {
        res.status(400).send(valid.error)
        return
    }

    const customer = {
        id: customers.length + 1,
        name: req.body.name
    }
    customers.push(customer);
    res.send(customer)
})


//Port ENV
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`listening to ${port}`) })