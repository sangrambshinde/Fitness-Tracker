
let  menu=document.querySelector("div");
let  navbar=document.querySelector(".header .navbar");


menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

 /* Workout start here  */
 document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const date = document.getElementById('date').value;
    const workoutType = document.getElementById('workoutType').value.trim();
    const duration = document.getElementById('duration').value;
    const caloriesBurned = document.getElementById('caloriesBurned').value;

    // Validate the inputs
    if (!date) {
        showMessage('Please select a date.');
        return;
    }
    if (!workoutType) {
        showMessage('Please enter a workout type.');
        return;
    }
    if (duration <= 0) {
        showMessage('Please enter a valid duration.');
        return;
    }
    if (caloriesBurned <= 0) {
        showMessage('Please enter a valid calories burned.');
        return;
    }

    // If all validations pass, show success message
    showMessage('Workout logged successfully!', 'success');

    // Optionally, you can log the data to the console or store it somewhere
    console.log({
        date,
        workoutType,
        duration,
        caloriesBurned
    });

    // Reset the form
    event.target.reset();
});

function showMessage(message, type = 'error') {
    const logMessage = document.getElementById('logMessage');
    logMessage.textContent = message;
    logMessage.style.color = type === 'success' ? 'green' : 'red';
}


// drop down menu
 
document.addEventListener('DOMContentLoaded', function () {
    updateProgressSummary();
});

function addWorkout() {
    const workoutInput = document.getElementById('workout-input');
    const workoutList = document.getElementById('workout-list');

    if (workoutInput.value.trim() !== "") {
        const newWorkout = document.createElement('div');
        newWorkout.textContent = workoutInput.value;
        workoutList.appendChild(newWorkout);
        workoutInput.value = '';
        updateProgressSummary();
    }
}

function addDiet() {
    const dietInput = document.getElementById('diet-input');
    const dietList = document.getElementById('diet-list');

    if (dietInput.value.trim() !== "") {
        const newDietItem = document.createElement('div');
        newDietItem.textContent = dietInput.value;
        dietList.appendChild(newDietItem);
        dietInput.value = '';
        updateProgressSummary();
    }
}

function updateProgressSummary() {
    const workoutList = document.getElementById('workout-list').children;
    const dietList = document.getElementById('diet-list').children;

    const progressSummary = document.getElementById('progress-summary');
    progressSummary.innerHTML = `
        <p>Total Workouts: ${workoutList.length}</p>
        <p>Total Diet Items: ${dietList.length}</p>
    `;
}





function navigateToSection() {
  var select = document.getElementById("dp");
  var sectionId = select.value;
  if (sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

let currentStep = 0;

function nextStep() {
    const steps = document.querySelectorAll('.form-step');
    steps[currentStep].classList.remove('form-step-active');
    currentStep = (currentStep + 1) % steps.length;
    steps[currentStep].classList.add('form-step-active');
    updateProgress();
}

function updateProgress() {
    const progress = document.getElementById('progress');
    const stepCount = document.querySelectorAll('.form-step').length;
    const progressPercent = (currentStep / (stepCount - 1)) * 100;
    progress.style.width = progressPercent + '%';
}

document.getElementById('gymForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});


