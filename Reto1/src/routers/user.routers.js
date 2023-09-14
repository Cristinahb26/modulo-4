const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");

router.get("/", usersCtrl.mostrar);
router.get("/bye", (req, res) => {
    res.status(200).json({ ok: true, message: 'adios!' });
});
router.put("/", usersCtrl.mostrar);
router.delete("/", usersCtrl.mostrar);

module.exports = router;
