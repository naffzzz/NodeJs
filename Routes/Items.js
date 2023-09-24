const express = require('express');
const { 
    getItems, 
    getItemById,
    saveItem,
    updateItem,
    deleteItem
} = require('../Controllers/ItemController.js');
const router = express.Router();

router.get('/api/items', getItems);
router.get('/api/items/:id', getItemById);
router.post('/api/items', saveItem);
router.put('/api/items/:id', updateItem);
router.delete('/api/items/:id', deleteItem);

module.exports = router; 