const userController=require("../controllers/user");
const router = require('express')['Router']();
router.get('/:userId',userController.getUserDetails);
router.get('/', userController.enumerateUsers);
router.post('/', userController.createUser);
router.delete('/',userController.removeUser);

module.exports = router;