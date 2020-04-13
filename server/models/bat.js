const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const batSchema = mongoose.Schema(
  {
    name: { required: true, type: String, unique: 1, maxLength: 100 },
    description: { required: true, type: String, maxLength: 1000 },
    price: { required: true, type: Number, maxLength: 230 },
    color: { required: true, type: String, maxLength: 100 },
    brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
    shipping: { required: true, type: Boolean },
    available: { required: true, type: Boolean },
    sold: { type: Number, maxLength: 100, default: 0 },
    publish: { required: true, type: Boolean },
    images: { type: Array, default: [] },
  },
  { timestamps: true }
);

const Bat = mongoose.model("Bat", batSchema);

module.exports = { Bat };
