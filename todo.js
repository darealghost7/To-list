//    ====Dom element====
//get ref to all important Dom elements

const  taskInput = document.getElementById('input')
const  addButton = document.getElementById('addbtn')
const  deleteButton = document.getElementById('delbtn')
const  searchButton = document.getElementById('searchbtn')
const  totalTask = document.getElementById('totalTasks')
const  comtask = document.getElementById('completedTasks')
const  pendinTask = document.getElementById('pendingTasks')
const  clearButton = document.getElementById('clearallbtn')
const  taskList = document.getElementById('task-List')

//====== Data Management ======
//load task from localStorage or initialize with default tasks 
// localStorage
