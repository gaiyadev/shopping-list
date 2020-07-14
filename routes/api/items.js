const ItemsController = require('../../controllers/ItemController');
var express = require('express');
const auth = require('../../middleware/auth');
var router = express.Router();

/*  @route     GET api/items
    @desc     Get all items
    @access    Public
 */
router.get('/', ItemsController.item_get_all);

/*  @route     POST api/items
    @desc     Create an item
    @access    Private
 */
router.post('/', auth, ItemsController.item_add);

/*  @route     GET api/items
    @desc     Get a single item
    @access    Private
 */

router.get('/:id', auth, ItemsController.item_get_one);
/*  @route     DELETE api/items
    @desc     Delete an item
    @access    Private
 */
router.delete('/:id', auth, ItemsController.item_delete);



module.exports = router;
