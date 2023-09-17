const ItemSchema = require("../Domains/Items/Models/Items");
 
module.exports.getItems = async (req, res) => {
    try {
        const items = await ItemSchema.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
module.exports.getItemById = async (req, res) => {
    try {
        const item = await ItemSchema.findById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
module.exports.saveItem = async (req, res) => {
    const item = new ItemSchema(req.body);
    try {
        const insertedItem = await item.save();
        res.status(201).json(insertedItem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
module.exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await ItemSchema.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
module.exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await ItemSchema.deleteOne({_id:req.params.id});
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
