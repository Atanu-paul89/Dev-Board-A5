//  js code for nav bar // 
const btn = document.getElementById('bg-color');
const body = document.body;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener('click', function() {
  body.style.backgroundColor = getRandomColor();
});

// js code for nav bar ended // 

// js code for current date started // 
document.addEventListener('DOMContentLoaded', function () {

  const rightnow = document.getElementById('right-now');

  function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    rightnow.textContent = formattedDate;
  }

  updateCurrentDate(); 
});
// js code for current date ended //

// js code for assigned tasks and activity log started
document.addEventListener('DOMContentLoaded', function () {
  const completebtn = document.getElementsByClassName('comp'); 
  const update = document.getElementById('update-log'); 
  const taskno = document.getElementById('task-count'); 
  const totalTask = document.getElementById('total-tasks'); 
  const clearbtn = document.getElementById('clear-history'); 

  Array.from(completebtn).forEach(button => { 
    button.addEventListener('click', () => {
      button.disabled = true;
      button.style.backgroundColor = 'lightgray';
      const now = new Date();
      const time = now.toLocaleTimeString(); 
      const Messg = document.createElement('p'); 
      Messg.textContent = `You have completed the task at ${time}`; 
      update.appendChild(Messg); 
      let assignedCount = parseInt(taskno.textContent); 
      assignedCount--;
      taskno.textContent = assignedCount; 
      let totalCount = parseInt(totalTask.textContent); 
      totalCount++;
      totalTask.textContent = totalCount; 
    });
  });

  clearbtn.addEventListener('click', () => { 
    update.innerHTML = ''; 
  });
});
// js code for assigned task cards and activity log ended // 