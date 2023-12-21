document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("nav ul li a");
  
    buttons.forEach(function(button) {
      button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#4285F4";
        button.style.color = "#fff";
      });
  
      button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#ddd";
        button.style.color = "#555";
      });
  
      button.addEventListener("mousedown", function() {
        button.style.backgroundColor = "#3367D6";
        button.style.color = "#fff";
      });
      
      button.addEventListener("mouseup", function() {
        button.style.backgroundColor = "#4285F4";
        button.style.color = "#fff";
      });
    });
  });
  