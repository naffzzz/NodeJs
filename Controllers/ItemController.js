const ItemRepository = require('../Domains/Items/Repositories/ItemRepository');
const ItemService = require('../Domains/Items/Services/ItemService');
const Response = require('../Infrastructures/Response')
const SuccessMessage = require('../Infrastructures/Constants/SuccessMessage')
const ErrorMessage = require('../Infrastructures/Constants/ErrorMessage')
 
module.exports.getItems = async (_req, res) => {
    try {
        const items = await ItemRepository.findItems();
        res.json(Response.Success(items, SuccessMessage.GetData));
    } catch (error) {
        res.json(Response.Fail(items, error.message));
    }
}
 
module.exports.getItemById = async (req, res) => {
    try {
        const items = await ItemRepository.findItemById(req.params.id);
        res.json(Response.Success(items, SuccessMessage.GetData));
    } catch (error) {
        res.json(Response.Fail(items, error.message));
    }
}
 
module.exports.saveItem = async (req, res) => {
    try {
        const items = await ItemService.AddItem(req.body);
        res.json(Response.Success(items, SuccessMessage.InsertData));
    } catch (error) {
        res.json(Response.Fail(items, error.message));
    }
}
 
module.exports.updateItem = async (req, res) => {
    try {
        const items = await ItemService.UpdateItem(req.params.id, req.body);
        res.json(Response.Success(items, SuccessMessage.UpdateData));
    } catch (error) {
        res.json(Response.Fail(items, error.message));
    }
}
 
module.exports.deleteItem = async (req, res) => {
    try {
        const items = await ItemService.DeleteItem(req.params.id);
        res.json(Response.Success(items, SuccessMessage.DeleteData));
    } catch (error) {
        res.json(Response.Fail(items, error.message));
    }
}
