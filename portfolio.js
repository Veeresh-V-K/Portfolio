function showProjects(skill) {
    var projectContainers = document.getElementsByClassName("projects");
    for (var i = 0; i < projectContainers.length; i++) {
      projectContainers[i].style.display = "none";
    }
  
    var selectedSkillContainer = document.getElementById(skill + "-projects");
    selectedSkillContainer.style.display = "block";
  }
