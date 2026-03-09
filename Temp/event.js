let currentStatus = 'InProgress'
let currentPriority = 'Medium'

displayOnTheCenter.addEventListener('change', function (e) {

  if (e.target.matches('input[name="status"]')) {
    currentStatus = e.target.value
  }
})


displayOnTheCenter.addEventListener('change', function (e) {
  if (e.target.matches('input[name="priority"]')) {
    currentPriority = e.target.value
  }
})

document.addEventListener('click', function (e) {
const deleteBtnId = e.target.closest('.delBtn')

  if (deleteBtnId){
    const delId = Number(deleteBtnId.dataset.id)
    delTasks(delId)
    
  }
})

document.addEventListener('keypress', e =>{
  if (e.key === 'Delete'){
    delTasks(delId)
  }
})

displayOnTheCenter.addEventListener('click', e => {
  const radio = e.target.closest('input[type="radio"]')

  if (radio) {
    const taskId = Number(e.target.closest('.card').dataset.taskId)

    if (radio.id === 'glass-done') {
      updateStatusValues(taskId, 'Done')
    }
    else if (radio.id === 'glass-in-progress') {
      updateStatusValues(taskId, 'InProgress')
    }
    else if (radio.id === 'glass-hold') {
      updateStatusValues(taskId, 'Hold')
      console.log('Finallllly yeaaaaaaaaaaaaaaaaaaahhhh')
    }
  }
})


function updatePriorityValues(id, newPriority) {

  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, priority: newPriority }
      : task
  );
  saveLocal()
}

displayOnTheCenter.addEventListener('click', e =>{
  const priority = e.target.closest('input[type="radio"]')

if (priority && priority.id.startsWith('priority-')){

    const taskCard = e.target.closest('.card')
    const taskId = Number(taskCard.dataset.taskId)
    const icon = taskCard.querySelector('.lowIcon')
    const dateI = taskCard.querySelector('.dateIcon')
    
  if (priority.id === 'priority-low') {
      updatePriorityValues(taskId, 'Low')
      icon.style.color = 'rgb(99, 230, 190)'
      dateI.style.color = 'rgb(99, 230, 190)'
    }
    else if (priority.id === 'priority-medium') {
      updatePriorityValues(taskId, 'Medium')
      icon.style.color = 'rgb(255, 217, 102)'
      dateI.style.color = 'rgb(255, 217, 102)'
    }
    else if (priority.id === 'priority-high') {
      updatePriorityValues(taskId, 'High')
      icon.style.color = 'rgb(255, 138, 138)'
      dateI.style.color = 'rgb(255, 138, 138)'

      console.log('Finlay you learned something better than you excepected')
    }
  }
})

function updateStatusValues(id, newStatus) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, status: newStatus }
      : task
  )
  saveLocal()
}

function delTasks (id) {
  tasks = tasks.filter(task =>
    task.id !== id 
  )
  saveLocal()
  tasksCard ()
} 

