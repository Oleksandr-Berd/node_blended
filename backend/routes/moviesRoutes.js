const router = require("express").Router();
const MoviesController = require("../controllers/MoviesController");

router.post(
  "/movies",
  (req, res, next) => {
    console.log("Joi is working here");
    next();
  },
  MoviesController.add
);
router.get("/movies", MoviesController.getAll);
router.get("/movies/:id", MoviesController.getOne);
router.patch("/movies/:id", MoviesController.update);
router.delete("/movies/:id", MoviesController.remove);

module.exports = router;
