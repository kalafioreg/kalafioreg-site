//sites create date
document.querySelectorAll('.link-container').forEach(container => {
    const createdDate = new Date(container.getAttribute('data-created'));
    const currentDate = new Date();

    const timeDifference = currentDate - createdDate; // time difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // konwersja na dni
    const monthsDifference = Math.floor(daysDifference / 30); // konwersja na miesiące
    const yearsDifference = Math.floor(monthsDifference / 12); // konwersja na lata

    const dateCounter = container.querySelector('.date-counter');
    let displayText;

    if (yearsDifference > 0) {
        displayText = `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
    } else if (monthsDifference > 0) {
        displayText = `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else {
        displayText = `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    }

    dateCounter.textContent = displayText;
});

// slides
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ukrywa wszystkie slajdy
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Powraca do pierwszego slajdu
    }
    slides[slideIndex - 1].style.display = "block"; // Wyświetla aktualny slajd
    setTimeout(showSlides, 3000); // Zmienia slajdy co 3 sekundy
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block"; 
}
function copyEmail(element) {
    const email = 'natkaj2006@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const message = document.getElementById('copyMessage');
        // Ustaw pozycję komunikatu nad klikniętym elementem
        const rect = element.getBoundingClientRect();
        message.style.left = `${rect.left + window.scrollX}px`;
        message.style.top = `${rect.top + window.scrollY - 30}px`;
        message.style.display = 'block';
        message.style.opacity = 1;

        // Ukryj komunikat po kilku sekundach
        setTimeout(() => {
            message.style.opacity = 0;
            setTimeout(() => {
                message.style.display = 'none';
            }, 500); // czas na zniknięcie
        }, 2000); // czas wyświetlenia
    }).catch(err => {
        console.error('Nie udało się skopiować e-maila: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const pagination = document.querySelector('.pagination');
    const sitesContainer = document.querySelector('#sites');
    const originalContent = sitesContainer.innerHTML;

    const projectData = {
        page2: [
            { title: "Project A", image: "who.png", created: "X", link: "#" },
            { title: "Project B", image: "who.png", created: "X", link: "#" },
            { title: "Project C", image: "who.png", created: "X", link: "#" },
            { title: "Project D", image: "who.png", created: "X", link: "#" }
        ],
        page3: [
            { title: "Project E", image: "who.png", created: "X", link: "#" },
            { title: "Project F", image: "who.png", created: "X", link: "#" },
            { title: "Project G", image: "who.png", created: "X", link: "#" },
            { title: "Project H", image: "who.png", created: "X", link: "#" }
        ]
    };

    function createProjectTemplate(project) {
        return `
            <li>
                <div class="link-container" data-created="${project.created}">
                    <a href="${project.link}" target="_blank">
                        <img src="${project.image}" alt="${project.title} thumbnail">
                        <span>${project.title}</span>
                    </a>
                    <div class="date-counter"></div>
                </div>
            </li>
        `;
    }

    function updateDates() {
        document.querySelectorAll('.link-container').forEach(container => {
            const createdDate = new Date(container.getAttribute('data-created'));
            const currentDate = new Date();

            const timeDifference = currentDate - createdDate; // time difference in milliseconds
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const monthsDifference = Math.floor(daysDifference / 30);
            const yearsDifference = Math.floor(monthsDifference / 12);

            const dateCounter = container.querySelector('.date-counter');
            let displayText;

            if (yearsDifference > 0) {
                displayText = `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
            } else if (monthsDifference > 0) {
                displayText = `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
            } else {
                displayText = `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
            }

            dateCounter.textContent = displayText;
        });
    }

    function showPage(pageNumber) {
        if (pageNumber === '1') {
            sitesContainer.innerHTML = originalContent;
        } else {
            const pageData = projectData[`page${pageNumber}`];
            let projectTemplates = '<ul id="sites">';
            pageData.forEach(project => {
                projectTemplates += createProjectTemplate(project);
            });
            projectTemplates += '</ul>';
            sitesContainer.innerHTML = projectTemplates;
        }

        updateDates();

        pagination.querySelectorAll('.page-item').forEach(item => item.classList.remove('active'));
        const activePageLink = pagination.querySelector(`[data-page="${pageNumber}"]`);
        if (activePageLink) {
            activePageLink.closest('.page-item').classList.add('active');
        }
    }

    pagination.addEventListener('click', function(e) {
        e.preventDefault();
        const pageLink = e.target.closest('.page-link');
        if (pageLink) {
            const pageNumber = pageLink.getAttribute('data-page');
            showPage(pageNumber);
        }
    });

    // Initialize dates for original thumbnails
    updateDates();
});
