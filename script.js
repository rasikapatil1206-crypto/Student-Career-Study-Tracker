/* =====================================================
   STUDENT CAREER & STUDY TRACKER
   STEP 3 - JAVASCRIPT
   ===================================================== */


/* ================= ADD STUDY TASK ================= */

function addTask() {

    // Get the input box
    const taskInput = document.getElementById("taskInput");

    // Get the task list
    const taskList = document.getElementById("taskList");

    // Get the text entered by the user
    const taskText = taskInput.value.trim();


    // Check if the input is empty
    if (taskText === "") {

        alert("Please enter a study task!");

        return;
    }


    // Create a new list item
    const li = document.createElement("li");


    // Create task text
    const span = document.createElement("span");

    span.textContent = taskText;


    // Create Complete button
    const completeButton = document.createElement("button");

    completeButton.textContent = "✓ Complete";


    // Create Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "🗑 Delete";


    // Style Complete button
    completeButton.style.marginLeft = "10px";
    completeButton.style.padding = "6px 10px";
    completeButton.style.border = "none";
    completeButton.style.borderRadius = "5px";
    completeButton.style.cursor = "pointer";
    completeButton.style.backgroundColor = "#16a34a";
    completeButton.style.color = "white";


    // Style Delete button
    deleteButton.style.marginLeft = "5px";
    deleteButton.style.padding = "6px 10px";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.backgroundColor = "#dc2626";
    deleteButton.style.color = "white";


    // Add Complete button functionality
    completeButton.onclick = function () {

        span.style.textDecoration = "line-through";

        span.style.color = "gray";

        completeButton.disabled = true;

        completeButton.textContent = "✓ Completed";
    };


    // Add Delete button functionality
    deleteButton.onclick = function () {

        li.remove();
    };


    // Add everything to the list item
    li.appendChild(span);

    li.appendChild(completeButton);

    li.appendChild(deleteButton);


    // Add list item to task list
    taskList.appendChild(li);


    // Clear input box
    taskInput.value = "";


    // Put cursor back in input box
    taskInput.focus();
}


/* ================= ENTER KEY SUPPORT ================= */

// Allow user to press Enter instead of clicking Add Task

document.getElementById("taskInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});