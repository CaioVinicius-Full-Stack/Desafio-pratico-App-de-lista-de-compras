const form = document.querySelector('form');
const input = form.querySelector('input[type="text"]');
const lista = document.querySelector('.list');
const alerta = document.querySelector('.alert');

const showAlert = () => {
  alerta.style.display = 'flex';
  setTimeout(() => {
    alerta.style.display = 'none';
  }, 4000);
}

const deleteTask = (item) => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  if (checkbox && checkbox.checked) {
    item.remove();
    showAlert();
  } else {
    alert("Selecione o item antes de deletar");
  }
}


const addTask = (nomeItem) => {
  const li = document.createElement('li');
  li.classList.add("itens");

  const checkboxImage = document.createElement('div');
  checkboxImage.classList.add("checkbox-image");

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'select-item');

  const itemDiv = document.createElement('div');
  itemDiv.classList.add("item");
  const p = document.createElement('p');
  p.textContent = nomeItem;
  itemDiv.appendChild(p);

  const deleteDiv = document.createElement('div');
  deleteDiv.classList.add("delete-item");
  const botaoRemover = document.createElement('button');
  deleteDiv.appendChild(botaoRemover);

  li.appendChild(checkboxImage);
  li.appendChild(checkbox);
  li.appendChild(itemDiv);
  li.appendChild(deleteDiv);

  botaoRemover.addEventListener('click', () => deleteTask(li));


  lista.appendChild(li);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const novoItem = input.value.trim();
  if (novoItem !== '') {
    addTask(novoItem);
    input.value = '';
  } else {
    alert("Preencha o campo");
  }
})

const itensExistentes = document.querySelectorAll('.list li');
itensExistentes.forEach(item => {
  const botao = item.querySelector('.delete-item button');
  if (botao) {
    botao.addEventListener('click', () => deleteTask(item));
  }
});


const closeAlert = alerta.querySelector('img[alt = "delete-small.svg"]')
if (closeAlert) {
  closeAlert.addEventListener('click', () => {
    alerta.style.display = 'none';
  })
}