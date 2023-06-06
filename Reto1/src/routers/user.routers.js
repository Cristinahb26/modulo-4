const {Router} = require ("express");
const router = Router();
const usersCtrl = require ("../controller/user.controller");

router.get("/", usersCtrl.mostrar);
router.post("/", usersCtrl.mostrar);
router.put("/", usersCtrl.mostrar);
router.delete("/", usersCtrl.mostrar);

module.exports = router;