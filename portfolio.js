function showProjects(skill) {
    var projectContainers = document.getElementsByClassName("projects");
    for (var i = 0; i < projectContainers.length; i++) {
      projectContainers[i].style.display = "none";
    }
  
    var selectedSkillContainer = document.getElementById(skill + "-projects");
    selectedSkillContainer.style.display = "block";
  }
// Get the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Function to update the custom cursor position
function updateCursorPosition(e) {
  // Update the cursor position to match the mouse position
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
}

// Event listener to track mouse movement and update cursor position
document.addEventListener('mousemove', updateCursorPosition);
