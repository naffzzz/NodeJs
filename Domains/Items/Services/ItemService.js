const ItemSchema = require("../Models/Items");

module.exports.AddItem = async (data) => {
    try {
        const item = new ItemSchema(data);
        const insertedItem = await item.save();
        return insertedItem;
    } catch (error) {
        throw error;
    }
}

module.exports.UpdateItem = async (itemId, datas) => {
    try {
        const updatedItem = await ItemSchema.updateOne({_id:itemId}, {$set: datas});
        return updatedItem;
    } catch (error) {
        throw error;
    }
}

module.exports.DeleteItem = async (itemId) => {
    try {
        const deletedItem = await ItemSchema.deleteOne({_id:itemId});
        return deletedItem;
    } catch (error) {
        throw error;
    }
}