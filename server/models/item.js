const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

const Item = mongoose.model('items', itemSchema)

module.exports = Item
