const express = require("express");

const { shopCreate } = require("./controllers");

const upload = require("../../middleware/multer");

const router = express.Router();

router.param("shopId", async (req, res, next, shopId) => {
  const shop = await fetchShop(shopId, next);
  if (shop) {
    req.shop = shop;
    next();
  } else {
    const err = new Error("Shop not found");
    err.status = 404;
    next(err);
  }
});
