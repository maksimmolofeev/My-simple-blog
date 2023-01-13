const Router = require('express');
console.log(Router)
const router = new Router();
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), categoryController.create)
router.get('/', categoryController.getAll)

module.exports = router;