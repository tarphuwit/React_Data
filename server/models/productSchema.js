const mongoose = require("mongoose");
 
const productSchema = mongoose.Schema(
  {
    strategy: String,
    name: String,
    email: String,
    mobile: Number,
    evaluation: Number,
    detail: {
      type: String,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("products", productSchema);
