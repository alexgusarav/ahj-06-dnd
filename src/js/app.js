import Task from "./Task";

const container = document.querySelector(".container");

const tasks = container.querySelectorAll(".task");
const task1 = tasks[0];

const containerTasks = document.createElement("div");
containerTasks.classList.add("container-tasks");
task1.appendChild(containerTasks);

const tasksTodo = new Task(containerTasks, "todo");
const tasksInProgress = new Task(containerTasks, "in progress");

const tasksDone = new Task(containerTasks, "done");




if (!localStorage.getItem("data")) {
  const toDoList = ["Task 1", "Task 2", "Task 3"];
  const progressList = ["1", "2"];
  const doneList = ["Target 1", "Target 2"];
  toDoList.forEach((text) => tasksTodo.addCard(text));
  progressList.forEach((text) => tasksInProgress.addCard(text));
  doneList.forEach((text) => tasksDone.addCard(text));
} else {
  const json = localStorage.getItem("data");
  const data = JSON.parse(json)
  const toDoList = data["TODO"];
  const progressList = data["IN PROGRESS"];
  const doneList = data["DONE"];
  toDoList.forEach((text) => tasksTodo.addCard(text));
  progressList.forEach((text) => tasksInProgress.addCard(text));
  doneList.forEach((text) => tasksDone.addCard(text));

};








window.addEventListener("beforeunload", setStorage);

function setStorage() {
  const tasksForLS = document.querySelectorAll(".container-task");
  const data = {};
  tasksForLS.forEach((tasks) => {
    const key = tasks.querySelector(".tasks_header_text").innerText;
    const value = [];
    const tasksCard = tasks.querySelectorAll(".task_card");
    tasksCard.forEach((task) => {
      value.push(task.querySelector(".content_card").innerText)
    });
    data[key] = value;
  });
  localStorage.setItem("data", JSON.stringify(data));
};


