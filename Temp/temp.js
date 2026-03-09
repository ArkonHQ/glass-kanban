const displayOnTheCenter = document.querySelector('.theMiddleOfTheScreen')
const addNewCardBtn = document.querySelector('.plus-button')
const newCardValues = document.querySelector('.card')


let selectedDate = null;
let tasks = JSON.parse(localStorage.getItem('tasks')) || []



function displayInputCards() {
     const inputHTML = ` <div class="card form-card">

  <!-- priority badge – exactly as you wanted: just the circle -->
  <div class="priority">
    <i class="fa-solid fa-circle lowIcon" style="color: rgb(99, 230, 190);"></i>
  </div>

  <!-- title textarea – multi‑line, wraps long text -->
  <div class="title">
    <textarea class="input-glass" data-id="input-glass" placeholder="Task title" rows="2"></textarea>
  </div>

  <!-- date picker with calendar icon -->
  <div class="dateParent">
    <input type="date" class="date">
    <div class="date-picker-combo">
      <div class="date-header">
        <i class="fa-regular fa-calendar dateIcon" style="color:rgb(99, 230, 190)"></i>
        <span>Due date</span>
      </div>
      <div class="quick-presets">
        <button class="preset-chip" data-days="0">Today</button>
        <button class="preset-chip" data-days="1">Tomorrow</button>
        <button class="preset-chip" data-days="7">Next week</button>
      </div>
     <div class="date-group">
  <select class="month-select month">
    <option value="">Month</option>
    <option value="1">Jan</option>
    <option value="2">Feb</option>
    <option value="3">Mar</option>
    <option value="4">Apr</option>
    <option value="5">May</option>
    <option value="6">Jun</option>
    <option value="7">Jul</option>
    <option value="8">Aug</option>
    <option value="9">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
  </select>
  
  <select class="day-select day">
    <option value="">Day</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
  </select>
  
  <select class="year-select year">
    <option value="">Year</option>
    <option value="2026">2026</option>
    <option value="2027">2027</option>
    <option value="2028">2028</option>
    <option value="2029">2029</option>
    <option value="2030">2030</option>
    <option value="2031">2031</option>
    <option value="2032">2032</option>
    <option value="2033">2033</option>
    <option value="2034">2034</option>
    <option value="2035">2035</option>
    <option value="2036">2036</option>
    <option value="2037">2037</option>
    <option value="2038">2038</option>
    <option value="2039">2039</option>
    <option value="2040">2040</option>
  </select>
</div>
  <!-- priority selector (radio) – your existing code -->
  <div class="priority-selector">
    <input type="radio" name="priority" id="priority-low" value="low" checked>
    <label for="priority-low" class="priority-option">
      <i class="fa-solid fa-circle" style="color: rgb(99, 230, 190);"></i>
      <span class="priority-label">Low</span>
    </label>
    <input type="radio" name="priority" id="priority-medium" value="medium">
    <label for="priority-medium" class="priority-option">
      <i class="fa-solid fa-circle" style="color: rgb(255, 217, 102);"></i>
      <span class="priority-label">Medium</span>
    </label>
    <input type="radio" name="priority" id="priority-high" value="high">
    <label for="priority-high" class="priority-option">
      <i class="fa-solid fa-circle" style="color: rgb(255, 138, 138);"></i>
      <span class="priority-label">High</span>
    </label>
    <div class="priority-glider"></div>
  </div>

  <!-- status radio group -->
  <div class="radio-for-card">
    <div class="status-radio-group">
      <input type="radio" name="status" id="glass-done" value="Done"/>
      <label for="glass-done">Done</label>
      <input type="radio" name="status" id="glass-in-progress" value="InProgress" checked/>
      <label for="glass-in-progress">Doing</label>
      <input type="radio" name="status" id="glass-hold" value="Hold"/>
      <label for="glass-hold">Hold</label>
      <div class="glass-glider"></div>
    </div>
  </div>
</div>`;

  displayOnTheCenter.innerHTML = inputHTML;
  
const tx = document.querySelector('.input-glass');
tx.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

}


function tasksCard() {
  let html = '';

  tasks.forEach(task => {
    html += `<div class="card" data-priority="${task.priority}">
    <!-- Top action icons -->
    <div class="drag-handle" title="drag to reorder">
        <i class="fa-solid fa-grip-lines"></i>
    </div>
    
    <div class="options-btn" title="options">
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    
    <div class="delBtn" title="delete" data-id="${task.id}">
        <i class="fa-regular fa-circle-xmark"></i>
    </div>
    
    <!-- Title -->
    <div class="title-display">
        ${task.title}
    </div>
    
    <!-- Due info with dynamic colors -->
    <div class="due-info">
        <i class="fa-regular fa-calendar" style="color:${task.dateIcon}"></i>
        <span class="due-date">${task.date}</span>
        <span class="remaining">${task.remainDate}</span>
    </div>
    
    <!-- Bottom action buttons - INTERACTIVE -->
    <div class="card-actions">
        <!-- Status Button - Dynamic based on task.status -->
        <button class="action-btn status-btn" data-status="${task.status}" onclick="changeStatus('${task.id}')">
            <i class="fa-regular fa-clock" style="color: ${getStatusIconColor(task.status)}"></i>
            <span>${task.status}</span>
            <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; opacity: 0.7;"></i>
        </button>
        
        <!-- Priority Button - Dynamic based on task.priority -->
        <button class="action-btn priority-btn" data-priority="${task.priority}" onclick="changePriority('${task.id}')">
            <i class="fa-solid fa-flag" style="color: ${getPriorityIconsColor(task.priority)}"></i>
            <span>${task.priority}</span>
            <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; opacity: 0.7;"></i>
        </button>
    </div>
</div>`;
  });
  
  newCardValues.innerHTML = html;
  saveLocal();
}


displayOnTheCenter.addEventListener('click', function (e) {
  if (e.target.classList.contains('preset-chip')) {
    const days = parseInt(e.target.dataset.days);
    const date = new Date();
    date.setDate(date.getDate() + days);
    selectedDate = date.toISOString().split('T')[0];
    console.log(selectedDate)
  }
}
)


function updateInputRadioValues() {
  const done = document.querySelector('#done-glass')
  const inProgress = document.querySelector('#in-progress-glass')
  const hold = document.querySelector('#hold-glass')

}

function updateInputDateValues() {
  const month = document.querySelector('.month-select')?.value
  const year = document.querySelector('.year-select')?.value
  const day = document.querySelector('.day-select')?.value

  selectedDate = (month && day && year)
    ? `${year}-${month}-${day}` : new Date().toISOString().split('T')[0];

  console.log('Selected Date: ', selectedDate);
}

displayOnTheCenter.addEventListener('change', function (e) {
  if (e.target.classList.contains('day-select') ||
    e.target.classList.contains('month-select') ||
    e.target.classList.contains('year-select')) {
    updateInputDateValues()
  }
})
function addTask() {
  const currentTitleInput = document.querySelector('.input-glass');
  const selectedRadio = document.querySelector('input[name="status"]:checked');
  const selectedPriority = document.querySelector('input[name="priority"]:checked')
  

  if (!currentTitleInput || !currentTitleInput.value.trim()) {
    alert('Please enter a title');
    return;
  }

  if (!selectedDate) {
    const today = new Date()
    selectedDate = today.toISOString().split('T')[0]
  }

  const task = {
    id: Date.now(),
    title: currentTitleInput.value,
    date: selectedDate,
    priority: selectedPriority ? selectedPriority.value : 'medium',
    status:selectedRadio ? selectedRadio.value: 'InProgress',
    priorityIcon:getPriorityIconsColor(selectedPriority ? selectedPriority.value: 'medium'),
    dateIcon: getPriorityIconsColor(selectedPriority ? selectedPriority.value: 'medium'),
  }
  const remain = getRemainingDays(task.date);
  task.remainDate = getDueText(remain)
  
  tasks.unshift(task);
  saveLocal()
  tasksCard ()
  return task
}

function inputValues() {
  const textInputValues = document.querySelector('.input-glass').value.trim()
  if (textInputValues === '') {
    alert('write anything you want to acheive')
    return
  }
  addTask();
  tasksCard();
  hideInputCard();
}


addNewCardBtn.addEventListener('click', function () {
  displayInputCards()
  showInputCard()
})


function saveLocal() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    
    if(displayOnTheCenter.style.display === 'flex')
    hideInputCard();
  }
});

function showInputCard() {
  displayOnTheCenter.style.display = 'flex';
}

function hideInputCard() {
  displayOnTheCenter.style.display = 'none';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && displayOnTheCenter.style.display === 'flex') {
    

    if (!e.shiftKey) {
      e.preventDefault();  // Stop new line
      console.log('Enter alone - saving!');
      inputValues();
    } else {
      console.log('Shift+Enter - creating new line');
    }
  }
});

tasksCard()


  function getRemainingDays(dateString) {
  const today = new Date();
  const dueDate = new Date(dateString);

  const diff = dueDate - today;

  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return daysLeft;
}
newCardValues.addEventListener('click', function(e) {
  const id = Number(e.target.dataset.id)
  if (e.target.classList.contains ('delBtn')){
    delTasks (id)
  }
  
})
function getDueText(days) {
  if (days < 0) return  'Overdue';
  if (days === 0) return 'Today';
  if (days === 1) return  'Tomorrow';
  return `${days} days left`;
}

function getPriorityIconsColor(priority){

  if (priority === 'low') return 'rgb(99, 230, 190)'
  if (priority === 'medium') return 'rgb(255, 217, 102)'
  if (priority === 'high') return 'rgb(255, 138, 138)'
    return 'rgb(255, 217, 102)'
}

function getStatusIconColor(status) {
    if (status === 'Done') return '#40e0d0';
    if (status === 'InProgress' || status === 'Doing') return '#a0d8ff';
    if (status === 'Hold') return '#ffd700';
    return '#a0d8ff';
}