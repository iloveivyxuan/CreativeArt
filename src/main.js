document.addEventListener("DOMContentLoaded", function() {
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {
    window.draw = function() {
      background("#fff");
    }
  });

  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    saveCanvas('myCanvas');
  });
});
