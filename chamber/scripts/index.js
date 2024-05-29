// Utility to handle date and time information on the home page (index.html)
if (window.location.pathname.endsWith('index.html')) {
    (function() {
        const lastModifiedElement = document.getElementById('lastModified');
        if (lastModifiedElement) {
            lastModifiedElement.textContent = document.lastModified;
        }
    })();
}

// Local Storage for visit date and display messages on the discover page (discover.html)
if (window.location.pathname.endsWith('discover.html')) {
    (function() {
        const sidebarMessage = document.getElementById('visitMessage');
        const visitDate = localStorage.getItem('visitDate');
        let message = '';

        if (!visitDate) {
            message = 'Welcome! Let us know if you have any questions.';
            localStorage.setItem('visitDate', Date.now());
        } else {
            const daysSinceVisit = Math.floor((Date.now() - visitDate) / (1000 * 60 * 60 * 24));
            if (daysSinceVisit === 0) {
                message = 'Back so soon! Awesome!';
            } else {
                message = `You last visited ${daysSinceVisit} ${daysSinceVisit === 1 ? 'day' : 'days'} ago.`;
            }
        }
        if (sidebarMessage) {
            sidebarMessage.textContent = message;
        }
    })();
}

// Universal navigation functionality
(function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', function() {
            this.classList.toggle('open');
            navigation.classList.toggle('open');
        });
    } else {
        console.error("Hamburger menu or navigation not found!");
    }
})();

// Calendar functionality specific to discover.html
if (window.location.pathname.endsWith('discover.html')) {
    (function() {
        document.addEventListener('DOMContentLoaded', function() {
            function createCalendar(elem, year, month) {
                let mon = month - 1;
                let d = new Date(year, mon);

                let table = '<table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>';

                // spaces for the first row from Monday till the first day of the month
                for (let i = 0; i < getDay(d); i++) {
                    table += '<td></td>';
                }

                // fill with dates
                while (d.getMonth() == mon) {
                    table += '<td>' + d.getDate() + '</td>';

                    if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
                        table += '</tr><tr>';
                    }

                    d.setDate(d.getDate() + 1);
                }

                // add spaces after last days of month for the last row
                if (getDay(d) != 0) {
                    for (let i = getDay(d); i < 7; i++) {
                        table += '<td></td>';
                    }
                }

                table += '</tr></table>';
                elem.innerHTML = table;
            }

            function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
                let day = date.getDay();
                if (day == 0) day = 7; // convert Sunday from 0 to 7
                return day - 1;
            }

            const calendarElement = document.getElementById('simpleCalendar');
            if (calendarElement) {
                createCalendar(calendarElement, 2024, 5);
            }
        });
    })();
}

// Fetch and display members for directory.html
if (window.location.pathname.endsWith('directory.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => displayMembers(data));
    });

    function displayMembers(members) {
        const container = document.getElementById('directoryContainer');
        container.innerHTML = ''; // Clear existing content

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'member-card';
            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>${member.membershipLevel} Member</p>
                <p>${member.description}</p>
            `;
            container.appendChild(memberDiv);
        });
    }

    function toggleView(view) {
        const container = document.getElementById('directoryContainer');
        if (view === 'grid') {
            container.classList.remove('list-view');
            container.classList.add('grid-view');
        } else {
            container.classList.remove('grid-view');
            container.classList.add('list-view');
        }
    }
}
