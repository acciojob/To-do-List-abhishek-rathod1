let todoItemList = [];

const btn = document.getElementById('addTodoBtn');
const input = document.getElementById('newTodoInput');
const tdL = document.getElementById('todoList');

btn.addEventListener('click', () => {
	const todoItem = input.value.trim();
	if (todoItem !== '') {
		todoItemList.push(todoItem);
		renderItem(todoItemList);
		input.value = ''; // clear input field after adding
	}
});

function renderItem(list) {
	tdL.innerHTML = '';
	list.forEach(item => {
		tdL.innerHTML += `<li>${item}</li>`;
	});
}
