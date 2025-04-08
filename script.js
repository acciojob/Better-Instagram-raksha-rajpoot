//your code here
let draggedDiv = null;

document.querySelectorAll('.image').forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedDiv = e.target;
    e.target.classList.add('selected'); // Add visual cue
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow drop
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== e.target) {
      const tempImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = tempImage;

      const tempText = draggedDiv.textContent;
      draggedDiv.textContent = e.target.textContent;
      e.target.textContent = tempText;
    }
    draggedDiv.classList.remove('selected');
    draggedDiv = null;
  });

  div.addEventListener('dragend', () => {
    if (draggedDiv) {
      draggedDiv.classList.remove('selected');
      draggedDiv = null;
    }
  });
});
