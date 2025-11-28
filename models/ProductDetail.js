const mongoose = require("mongoose");
const slugify = require("slugify");

const ProductDetailSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
  },
  product_name: String,
  product_description: String,
  product_img_list: Array,
  product_brand_name: String,
  product_sku: String,
  bundle_id: String,
  isOnShopify: Boolean,
  shopify_upload_date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ProductDetail", ProductDetailSchema);
