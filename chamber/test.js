document.addEventListener("DOMContentLoaded", function () {
    fetch('test.json')
        .then(response => response.json())
        .then(data => {
            const userDataDiv = document.getElementById('user-data');
            data.users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                const userName = document.createElement('h2');
                userName.textContent = user.name;
                userDiv.appendChild(userName);

                const userAge = document.createElement('p');
                userAge.textContent = `Age: ${user.age}`;
                userDiv.appendChild(userAge);

                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.email}`;
                userDiv.appendChild(userEmail);

                userDataDiv.appendChild(userDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
