const baseURL = "https://maxwellbyu.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(data) {
    const weeks = data.weeks;
    const container = document.querySelector('.activity-links'); // Adjust the selector as per your HTML structure
    container.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        // Create week section
        const weekSection = document.createElement('div');
        weekSection.classList.add('week');

        const weekTitle = document.createElement('h2');
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);

        const linkList = document.createElement('ul');

        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });

        weekSection.appendChild(linkList);
        container.appendChild(weekSection);
    });
}


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();
