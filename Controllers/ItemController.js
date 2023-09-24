const ItemSchema = require("../Domains/Items/Models/Items");
const ItemRepository = require('../Domains/Items/Repositories/ItemRepository');
const ItemService = require('../Domains/Items/Services/ItemService');
 
module.exports.getItems = async (_req, res) => {
    try {
        const items = await ItemRepository.findItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
module.exports.getItemById = async (req, res) => {
    try {
        const items = await ItemRepository.findItemById(req.params.id);
        res.json(items);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
module.exports.saveItem = async (req, res) => {
    try {
        const items = await ItemService.AddItem(req.body);
        res.status(201).json(items);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
module.exports.updateItem = async (req, res) => {
    try {
        const items = await ItemService.UpdateItem(req.params.id, req.body);
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
module.exports.deleteItem = async (req, res) => {
    try {
        const items = await ItemService.DeleteItem(req.params.id);
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
