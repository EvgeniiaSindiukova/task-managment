const express = require("express");
const router = express.Router();

const {
  getTasks,
  getOneTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
