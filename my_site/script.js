document.querySelector('.language-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    const languageList = document.querySelector('.language-list');
    
    if (languageList.style.display === 'block') {
        languageList.style.display = 'none';
    } else {
        languageList.style.display = 'block';
    }
});
document.addEventListener('click', function(event) {
    const languageList = document.querySelector('.language-list');
    if (!event.target.closest('.language-dropdown')) {
        languageList.style.display = 'none';
    }
});
const translations = {
    pl: {
        aboutMe: "O mnie",
        projects: "Projekty",
        others: "Inne",
        contact: "Kontakt",
        whoIs: "Kim jest kalafioreg?",
        goals2025: "Cele (może na 2025?):",
        thingsDone2024: "Rzeczy, które udało mi się zrobić w 2024:",
        basicInfo: "podstawowe info",
        pronouns: "zaimki",
        pronounsValue: "ona/on",
        mbti: "MBTI",
        mbtiValue: "INFJ",
        traits: "cechy",
        traitsValue: "szczerość, sumienność, sceptycyzm, empatia",
        from: "pochodzenie",
        fromValue: "Polska",
        birthDate: "data urodzenia",
        birthDateValue: "10 października",
        interests: "zainteresowania",
        interestsValue: "psychologia, filozofia, natura, zdrowie, psychedeliki, design, kreskówki",
        disorders: "zaburzenia",
        disordersValue: "asd, lęk społeczny, mutyzm wybiórczy",
        introText1: "Serwus, mieszkam w twoich ścianach. A tak serio to jestem jedną z wielu istot na tej planecie. Jak wszyscy, staram się odkryć, kim naprawdę jestem i co chcę robić w życiu.",
        introText2: "Mimo wielu trudności mam w sobie determinacje, by stale się rozwijać oraz uczynić moje i twoje życie lepszym.",
        goalsList: [
            "rozwijać tę stronę",
            "regularnie czytać książki",
            "nauczyć się grać na gitarze lub ukulele",
            "nauczyć się gotować więcej zdrowych potraw",
            "nauczyć się hiszpańskiego",
            "spróbować DMT lub innych psychedelików",
            "poznać ciekawych ludzi i ich sobą nie zniechęcić",
            "przetrwać praktyki i zdać egzamin INF04",
            "zdać egzamin na prawo jazdy",
            "zaangażować się w jakiś projekt z parnetrem i przyjacielem"
        ],
        doneList: [
            "przetrwać praktyki i zdać INF03",
            "chodzić na siłownię",
            "spróbować LSD",
            "ugotować: kurczaka, makaron ze szpinakiem, naleśniki",
            "przetrwać teoretyczną i połowę praktycznej części kursu na prawo jazdy",
            "stworzyć strony: zawartość fruktozy i laktozy, kalkulator wolnego czasu na rok",
            "nauczyć się trochę grać na kalimbie",
            "zająć się własną rośliną od nasiona (bazylia)",
            "uczestniczyć w warsztatach ICP"
        ]
    },
    en: {
        aboutMe: "About me",
        projects: "Projects",
        others: "Others",
        contact: "Contact",
        whoIs: "Who is kalafioreg?",
        goals2025: "Goals (maybe for 2025?):",
        thingsDone2024: "Things I managed to do in 2024:",
        basicInfo: "basic Info",
        pronouns: "pronouns",
        pronounsValue: "she/he",
        mbti: "MBTI",
        mbtiValue: "INFJ",
        traits: "traits",
        traitsValue: "honest, conscientious, skeptical, empathetic",
        from: "from",
        fromValue: "Poland",
        birthDate: "birth date",
        birthDateValue: "10 October",
        interests: "interests",
        interestsValue: "psychology, philosophy, nature, health, psychedelics, design, cartoons",
        disorders: "disorders",
        disordersValue: "asd, social anxiety, selective mutism",
        introText1: "Hello, I live in your walls. No, but seriously, I am one of very many beings on this planet. And like everyone else, I'm trying to discover who I really am and what I want to do in my life.",
        introText2: "Despite many difficulties, I am determined to constantly develop, to make my and your life better.",
        goalsList: [
            "develop this site",
            "read books regularly",
            "learn to play the guitar or ukulele",
            "learn to cook more healthy food",
            "learn Spanish",
            "try DMT or maybe more psychedelics",
            "meet some interesting people and not discourage them",
            "survive the internship and pass INF04 exam",
            "pass driving test",
            "engage in some project with my lover and friend"
        ],
        doneList: [
            "survive the internship and pass INF03",
            "go to the gym",
            "try LSD",
            "cook: chicken, pasta with spinach, pancakes",
            "survive the theoretical and half of the practical part of driving course",
            "create websites: fructose and lactose content, free time per year calc",
            "learn to play the kalimba a little",
            "take care of my own plant from a seed (basil)",
            "attend ICP workshops"
        ]
    }
};
function updateText(language) {
    document.querySelectorAll('.nav-link')[0].textContent = translations[language].aboutMe;
    document.querySelectorAll('.nav-link')[1].textContent = translations[language].projects;
    document.querySelectorAll('.nav-link')[2].textContent = translations[language].others;
    document.querySelectorAll('.nav-link')[3].textContent = translations[language].contact;    

    document.querySelector('.profile-description h2:nth-of-type(1)').textContent = translations[language].whoIs;
    document.querySelector('.profile-description h2:nth-of-type(2)').textContent = translations[language].goals2025;
    document.querySelector('.profile-description h2:nth-of-type(3)').textContent = translations[language].thingsDone2024;
    document.querySelector('.profile-description p:nth-of-type(1)').textContent = translations[language].introText1;
    document.querySelector('.profile-description p:nth-of-type(2)').textContent = translations[language].introText2;

    const table = document.querySelector('table');
    table.querySelector('th').textContent = translations[language].basicInfo;
    table.querySelectorAll('td')[0].textContent = translations[language].pronouns;
    table.querySelectorAll('td')[1].textContent = translations[language].pronounsValue;
    table.querySelectorAll('td')[2].textContent = translations[language].mbti;
    table.querySelectorAll('td')[3].textContent = translations[language].mbtiValue;
    table.querySelectorAll('td')[4].textContent = translations[language].traits;
    table.querySelectorAll('td')[5].textContent = translations[language].traitsValue;
    table.querySelectorAll('td')[6].textContent = translations[language].from;
    table.querySelectorAll('td')[7].textContent = translations[language].fromValue;
    table.querySelectorAll('td')[8].textContent = translations[language].birthDate;
    table.querySelectorAll('td')[9].textContent = translations[language].birthDateValue;
    table.querySelectorAll('td')[10].textContent = translations[language].interests;
    table.querySelectorAll('td')[11].textContent = translations[language].interestsValue;
    table.querySelectorAll('td')[12].textContent = translations[language].disorders;
    table.querySelectorAll('td')[13].textContent = translations[language].disordersValue;

    const goals = document.querySelectorAll('#goals li');
    translations[language].goalsList.forEach((goal, index) => {
        goals[index].textContent = goal;
    });
    const done = document.querySelectorAll('#goals ~ ul li');
    translations[language].doneList.forEach((task, index) => {
        done[index].textContent = task;
    });
}
document.getElementById('pl').addEventListener('click', function() {
    document.documentElement.lang = 'pl';
    updateText('pl'); 
    document.querySelector('.language-list').style.display = 'none'; 
});
document.getElementById('en').addEventListener('click', function() {
    document.documentElement.lang = 'en';
    updateText('en'); 
    document.querySelector('.language-list').style.display = 'none'; 
});

//sites create date
document.querySelectorAll('.link-container').forEach(container => {
    const createdDate = new Date(container.getAttribute('data-created'));
    const currentDate = new Date();

    const timeDifference = currentDate - createdDate; // różnica czasu w milisekundach
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
