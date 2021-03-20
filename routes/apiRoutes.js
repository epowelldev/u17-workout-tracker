const router = require("express").Router();
const {Workout} = require("../models");

//getting workouts from db
router.get("/api/workouts", (req, res) => {
  Workout
    .find()
    .then(workouts => { res.json(workouts); })
    .catch((err) => { res.status(500).json(err); });
  }
);

//making one exercise and adding it to the list inside workout object route
router.put("/api/workouts/:id", (req, res) => {
  const newExercise = req.body;

  Workout
    .findByIdAndUpdate(
      req.params.id,
      {$push: { exercises: newExercise }},
      {new: true}
    )
    .then((workout) => { res.json(workout); })
    .catch((err) => { res.status(500).json(err); });
  }
);

//making workout object route
router.post("/api/workouts", (req, res) => {
  Workout
    .create(req.body)
    .then((workout) => { res.json(workout); })
    .catch((err) => { res.status(500).json(err); });
  }
);

//getting range for stats page
router.get("/api/workouts/range", (req, res) => {
  Workout
  .find().limit(7)
  .then(workouts => { res.json(workouts); console.log(workouts); })
  .catch((err) => { res.status(500).json(err); });
});

module.exports = router;
