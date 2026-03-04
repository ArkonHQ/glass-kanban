const displayOnTheCenter = document.querySelector('.theMiddleOfTheScreen')
const addNewCardBtn = document.querySelector('.plus-button')
const newCardValues = document.querySelector('.card')
const titleInputValue = document.querySelector('.input-glass')


let selectedDate = null;
let tasks = JSON.parse(localStorage.getItem('tasks')) || []



function displayInputCards() {
  const inputHTML = ` <div class="card">
          <div class="delBtn"><i class="fa-solid fa-circle-minus" style="color: rgb(76, 25, 25);"></i></div>
          <div class="proirity"><i class="fa-solid fa-circle" style="color: rgb(99, 230, 190);"></i></div>
          <div class="title"><input type="text" class="input-glass" data-id= "input-glass" placeholder="Title"></div>
          <div class="dateParent"><input type="date" class="date">
            <div class="date-picker-combo">
              <!-- Quick presets -->
              <div class="quick-presets">
                <button class="preset-chip" data-days="0">Today</button>
                <button class="preset-chip" data-days="1">Tomorrow</button>
                <button class="preset-chip" data-days="7">Next week</button>
              </div>

              <!-- Split date inputs -->
              <div class="date-group">
                <select class="month-select month">
               
                  <!-- Month options -->  
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
                  <!-- Day options -->
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
                  <!-- Year options -->
                </select>
              </div>
            </div>
          </div>

          <div class="radio-for-card">
            <div class="status-radio-group">
              <input type="radio" name="status" id="glass-done" />
              <label for="glass-done">Done</label>

              <input type="radio" name="status" id="glass-in-progress" checked="" />
              <label for="glass-in-progress">Doing</label>

              <input type="radio" name="status" id="glass-hold" />
              <label for="glass-hold">Hold</label>

              <div class="glass-glider"></div>

            </div>
          </div>
        </div> `;

  displayOnTheCenter.innerHTML = inputHTML;


}


function tasksCard() {
  let html = '';

  tasks.forEach(task => {

    html += `  <div class="card">
            <div class="cardsDone"></div>
            <div class="delBtn"><button>🗑️</button></div>
            <div class="priorityMark">
                <p>${task.priority}</p>
            </div>
            <div class="title">
                ${task.title}
            </div>
            <div class="dueDate">
                <p>Due: ${task.date}</p>
            </div>
            <div class="statusBtn"><button>${task.status}</button></div>
        </div>
    </div>`

    newCardValues.innerHTML = html
    saveLocal()
  })

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
  const month = document.querySelector('.month-select')?.vlaue
  const year = document.querySelector('.year-select')?.vlaue
  const day = document.querySelector('.day-select')?.vlaue

  selectedDate = (month && day && year) 
  ? `${year}-${month}-${day}` : new Date().toISOString().split('T')[0];

  console.log('Selected Date: ',selectedDate);
}

displayOnTheCenter.addEventListener('click', function (e) {
  if (e.target.classList.contains('day-select') ||
    e.target.classList.contains('month-select') ||
    e.target.classList.contains('year-select')) {
    updateInputDateValues()
  }
})
function addTask() {
  const currentTitleInput = document.querySelector('.input-glass');
  const priorityElement = document.querySelector('.proirity i');
  const radioValue = document.querySelector('input[name="status"]:checked')?.value;



  if(radioValue === 'done'){
    
  }
  else if (radioValue ==='in-progress'){

  }
  else if(radioValue === 'hold'){

  }


  if (!currentTitleInput || !currentTitleInput.value.trim()) {
    alert('Please enter a title');
    return;
  }

  if (!selectedDate) {
    const today = new Date()
    selectedDate = today.toISOString().split('T')[0]
  }

  const newTasks = {
    id: Date.now(),
    title: titleInputValue,
    date: selectedDate,
    priority: priorityElement ? priorityElement.style.color : 'rgb(99, 230, 190))',
    status: statusRadio ? statusRadio.id : 'glass-in-progress'
  };

  tasks.unshift(newTasks);
  saveLocal()
  return newTasks


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


document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && e.target.dataset.id === 'input-glass') {
    inputValues()
  }
})

displayOnTheCenter.addEventListener('keypress', function (e) {
  if (e.key === 'Escape') {
    hideInputCard();
  }
});

function showInputCard() {
  displayOnTheCenter.style.display = 'flex';
}

function hideInputCard() {
  displayOnTheCenter.style.display = 'none';
}

tasksCard()