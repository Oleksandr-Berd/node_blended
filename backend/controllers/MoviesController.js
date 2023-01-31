const asyncHandler = require("express-async-handler");
const Movies = require("../models/Movies");

class MoviesController {
  add = asyncHandler(async (req, res) => {
    if (!req.body.title) {
      res.status(400);
      throw new Error("Title is required");
    }
    const movie = await Movies.create({ ...req.body });
    if (!movie) {
      res.status(400);
      throw new Error("Movie is not saved");
    }
    res
      .status(201)
      .json({ code: 201, message: "Movie is created", data: movie });
  });

  getAll = asyncHandler(async (req, res) => {
    const movies = await Movies.find({});
    if (!movies) {
      res.status(400);
      throw new Error("Failed to fetch movies");
    }
    res
      .status(200)
      .json({
        code: 200,
        message: "Successfull success",
        data: movies,
        qty: movies.length,
      });
  });

  getOne = asyncHandler(async (req, res) => {
    console.log("getOne");
  });

  update = asyncHandler(async (req, res) => {
    console.log("update");
  });

  remove = asyncHandler(async (req, res) => {
    console.log("remove");
  });
}

module.exports = new MoviesController();
