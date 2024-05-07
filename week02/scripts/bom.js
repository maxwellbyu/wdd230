// script.js

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('favchap');
    const button = document.getElementById('addChapterBtn');

    button.addEventListener('click', () => {
        const favChapter = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = favChapter;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';

        // Append the new item to the list
        document.body.appendChild(listItem);

        // Add event listener to the delete button
        listBtn.addEventListener('click', () => {
            document.body.removeChild(listItem);
        });

        input.focus();
    });
});







