const Item =  require('../models/item')
require('dotenv').config()

var createItem = (req, res) => {
  Item.create({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  })
  .then(data => {
    res.send({
      msg: 'data created',
      data: data
    })
  })
  .catch(err => res.send(err)) 
}

var getAllItems = (req, res) => {
  Item.find()
  .then(data => {
    res.send({
      msg: 'data found',
      data: data
    })
  })
  .catch(err => res.send(err))
}

module.exports = {
  createItem,
  getAllItems
}
