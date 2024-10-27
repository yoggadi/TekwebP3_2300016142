// Pengelolaan Tugas
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.classList.add('task-item');
  const span = document.createElement('span');
  span.textContent = taskText;

  span.addEventListener('click', function() {
    span.classList.toggle('completed');
  });

  span.addEventListener('dblclick', function() {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    li.replaceChild(input, span);

    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        span.textContent = input.value.trim();
        li.replaceChild(span, input);
      }
    });
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.addEventListener('click', function() {
    if (editBtn.textContent === 'Edit') {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.replaceChild(input, span);
      editBtn.textContent = 'Save';

      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          span.textContent = input.value.trim();
          li.replaceChild(span, input);
          editBtn.textContent = 'Edit';
        }
      });
    } else {
      span.textContent = li.querySelector('input').value.trim();
      li.replaceChild(span, li.querySelector('input'));
      editBtn.textContent = 'Edit';
    }
  });

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', function() {
    span.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Pengaturan Tampilan Halaman
const bgColorPicker = document.getElementById('bgColor');
bgColorPicker.addEventListener('input', function() {
  document.body.style.backgroundColor = bgColorPicker.value;
});

const fontSizeSlider = document.getElementById('fontSize');
fontSizeSlider.addEventListener('input', function() {
  document.documentElement.style.fontSize = fontSizeSlider.value + 'px';
});

const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

const fontStyleSelect = document.getElementById('fontStyle');
fontStyleSelect.addEventListener('change', function() {
  document.body.style.fontFamily = fontStyleSelect.value;
});
