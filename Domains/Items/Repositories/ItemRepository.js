const ItemSchema = require("../Models/Items");

module.exports.findItems = async () => {
    try {
        const items = await ItemSchema.find();
        return items;
    } catch (error) {
        throw error;
    }
}

module.exports.findItemById = async (itemId) => {
    try {
        const items = await ItemSchema.findById(itemId);
        return items;
    } catch (error) {
        throw error;
    }
}