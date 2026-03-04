const addBtn = document.querySelector('.plus-button');
const displayNew = document.querySelector('.newCard');
const titleCard = document.querySelector('.input-glass');
const priority = document.querySelector('.prioritySelector')
const status = document.querySelector('.statusSelector')
const dueDate = document.querySelector('.dateSelector')


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
  let newHTML = '';

   tasks.forEach(task => {

   newHTML += `<div class="card">
            <div class="cardsDone"></div>
            <div class="delBtn"><button>🗑️</button></div>
            <div class="priorityMark">
                <p>"${task.priority}"</p>
            </div>
            <div class="title">
                <h3>"${task.title}"</h3>
            </div>
            <div class="dueDate">
                <p>"${task.dueDate}"</p>
            </div>
            <div class="statusBtn"><button>"${task.status}"</button></div>
        </div>`;
  });
  displayNew.innerHTML = newHTML;
}

  function titleTask() {
   const titleValue = titleCard.value.trim();
    if(title === ''){
      alert ("Enter something here fucker")
      return
    }   
  }
    titleCard.addEventListener('keypress', function(e){
      if(e.key === 'Enter'){
        console.log(titleCard.value)
        addNewCards ()
      }
    })

function addNewCards() {

    const newCard = {
      id: Date.now(),
      title: title.value.trim(),
      dueDate:dueDate.value,
      priority:priority.value,
      status:status.value,
    }

    tasks.unshift(newCard);

  
    titleTask()
    saveLocal()
    displayTasks()
    console.log("A card added")
  }


function saveLocal() {
  localStorage.setItem('tasks', JSON.stringify(tasks))

}



addBtn.addEventListener('click', function(){
  addNewCards()
    showCard()  
})


function showCard () {
  displayNew.style.display = 'flex';
}

function hideCard () {
  display.style.display = 'none';
}
titleTask()