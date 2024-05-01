const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElement('li');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    }
    else {
        input.focus();
    }
});