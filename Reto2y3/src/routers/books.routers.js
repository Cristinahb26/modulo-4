const {Router} = require ("express");
const router = Router();
const booksCtrl = require ("../controller/books.controller");

router.get("/", booksCtrl.mostrar);
router.post("/", booksCtrl.mostrar);
router.put("/", booksCtrl.mostrar);
router.delete("/", booksCtrl.mostrar);

module.exports = router;