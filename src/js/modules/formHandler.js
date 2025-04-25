export default function setupFormHandler() {
  const form = document.getElementById('survey-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('main-dropdown').value;
    const radioButtons = document.querySelectorAll('input[name="choice"]:checked');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const comments = document.getElementById('comments').value;

    if (name && email && age && dropdown && radioButtons.length > 0 && checkboxes.length > 0 && comments) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON ÉXITO';
      messageContainer.style.color = 'green';
      form.reset();
    } else {
      messageContainer.textContent = 'Por favor, complete todos los campos requeridos.';
      messageContainer.style.color = 'red';
    }
  });
}
