
const input = document.getElementById('nova-tarefa');

const button = document.getElementById('bt-adicionar');

const list = document.getElementById('lista-tarefas');

button.addEventListener('click', function () {
    const texto = input.value;

    if (texto === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;

    list.appendChild(li);

    input.value = '';
});

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});