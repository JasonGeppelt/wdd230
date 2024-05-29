const baseURL = 'https://yourgithubusername.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayLinks(weeks) {
    const activitiesSection = document.querySelector('.learning-activities ul');
    activitiesSection.innerHTML = '';

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const activityLink = document.createElement('a');
            activityLink.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;
            activityLink.textContent = link.title;

            weekItem.appendChild(activityLink);
            if (index < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(' | '));
            }
        });

        activitiesSection.appendChild(weekItem);
    });
}

getLinks();
