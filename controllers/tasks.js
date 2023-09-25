const Task = require("../models/modelTask");

const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
};

const getOneTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task: null, status: "success" });
};

module.exports = {
  getTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
