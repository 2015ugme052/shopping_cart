const router = require("express").Router();
const controller = require("./controller");

router.get("/cart", controller.getCart);
router.post("/cart", controller.addItem);
router.get("/cart/total", controller.getTotal);
router.get("/cart/report", controller.getCartReport)

module.exports = router;

