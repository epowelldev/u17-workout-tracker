const router = require("express").Router();
const {Workout} = require("../models");

//getting workouts from db
router.get("/api/workouts", (req, res) => {
  Workout
    .find()
    .then(workouts => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  }
);

router.put("/api/workouts/:id", (req, res) => {
  const newExercise = req.body;

  Workout
    .findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: newExercise,
      }
    })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  }
);

router.post("/api/workouts", (req, res) => {
  Workout
    .create(req.body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status().json(err);
    });
  }
);

router.get("/api/workouts/range", (req, res) => {
  Workout
  .find()
  .then()
  .catch();
});

module.exports = router;
