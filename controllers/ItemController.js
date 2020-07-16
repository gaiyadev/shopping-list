const Item = require('../models/item');

/*  @route     GET api/items
    @desc     Get all items
    @access    Public
 */
exports.item_get_all = (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(Item => res.status(200).json({
            success: true,
            Item
        })).catch(err => res.status(404).json({
            success: false,
            err
        }));
}

/*  @route     POST api/items
    @desc     Create an item
    @access    Public
 */
exports.item_add = (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(Item => res.status(200).json({
        success: true,
        Item
    })).catch(err => res.status(499).json({
        success: false,
        err: err
    }))
}

/*  @route     GET api/items
    @desc     Get a single item
    @access    Public
 */
exports.item_get_one = (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.status(200).json({
            success: true,
            item
        })).
        catch(err => res.status(404).json({
            success: false,
            err
        }))
}

/*  @route     DELETE api/items
    @desc     Delete an item
    @access    Public
 */
exports.item_delete = (req, res) => {
    Item.findById(req.params.id).then(item => item.remove().
        then(() => res.status(200).json({
            success: true,
            item
        }))).
        catch(err => res.status(404).json({
            success: false,
            err
        }))
}