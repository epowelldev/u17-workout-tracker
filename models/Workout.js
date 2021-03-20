const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now, },
  exercises :[//array of exercises(documents)
    {
      type: { type: String, required: [true, "Type of exercise is required."]},
      name: { type: String, required: [true, "Name of exercise is required."]},
      duration: Number,
      weight: Number,
      reps: Number,
      distance: Number,
    }
  ]
}, {toJSON: {virtuals: true}});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((acc, exercise) => {
    return acc + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;