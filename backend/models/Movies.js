const { model, Schema } = require("mongoose");

const movieSchema = Schema(
  {
    title: { type: String, required: [true, "Title is required!"] },
    year: { type: Number, required: [true, "Number is required!"] },
    rate: { type: Number, default: 0.0 },
    lang: { type: String, enum: ["en", "ua", "pl"], default: "en" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("movie", movieSchema);
