document.addEventListener("DOMContentLoaded", function () {
    const toggleViewButton = document.getElementById('toggleView');
    const memberDirectory = document.getElementById('member-directory');
    let isGridView = true;

    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

    toggleViewButton.addEventListener('click', () => {
        isGridView = !isGridView;
        if (isGridView) {
            memberDirectory.classList.remove('list-view');
        } else {
            memberDirectory.classList.add('list-view');
        }
    });

    function displayMembers(members) {
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member-card');

            const img = document.createElement('img');
            img.src = `images/${member.image}`;
            img.alt = `${member.name} logo`;
            memberDiv.appendChild(img);

            const name = document.createElement('h2');
            name.textContent = member.name;
            memberDiv.appendChild(name);

            const address = document.createElement('p');
            address.textContent = member.address;
            memberDiv.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = member.phone;
            memberDiv.appendChild(phone);

            const website = document.createElement('a');
            website.href = member.website;
            website.textContent = member.website;
            memberDiv.appendChild(website);

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
            memberDiv.appendChild(membershipLevel);

            memberDirectory.appendChild(memberDiv);
        });
    }
});

