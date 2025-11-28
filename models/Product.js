const mongoose = require("mongoose");
const slugify = require("slugify");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
  },
  product_name: String,
  product_category: String,
  product_price_msrp: String,
  product_price_wholesale: String,
  product_img: String,
  product_link: String,
  product_brand_link: String,
  product_brand_name: String,
  product_rating: String,
  product_min_order: String,
  bundle_id: String,
  isOnShopify: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
