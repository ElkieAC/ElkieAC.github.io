var worksamples = 
[
    {
        id: 'worksample1',
        title: 'Full Stack Fish Species Database Application',
        description: `Throughout a semester in my Full Stack Application course, our class built our own applications 
        using React as our frontend, and Express as our backend. Leveraging the power of MongoDB and Mongoose, I designed a 
        database schema for a Nova Scotia fish species collection, using MongoDB Atlas to host the collection online. Once the 
        database created, I designed a RESTful API for the backend, defining CRUD endpoints to facilitate interaction with my database. 
        Integrating  the React Hook Form library, I implemented form validation mechanisms to ensure data integrity. I also integrated user 
        authentication functionalities to limit the user's privileges when handling the data unless they have an account. 
        <br class="mb-2">
        This experience has strengthened my skills in both frontend and backend technologies, improved my database management abilities,
        and enhanced my knowledge of building RESTful APIs. The diversity of software used throughout this project has provided me with 
        valuable preparation for the multifaceted nature of the industry.
        `,
        images: [
            '../assets/worksamples/worksample1/worksample_1.png',
            '../assets/worksamples/worksample1/worksample_2.png',
            '../assets/worksamples/worksample1/worksample_3.png'
        ],
        skills: ['React', 'Express', 'MongoDB', 'RESTful API', 'Problem-solving']
    },
    {
        id: 'worksample2',
        title: 'Flutter Trivia Application',
        description: `In our recent project, I collaborated on developing an entertaining quiz application using Flutter within a month timeframe. 
        Using Flutter's capability to create cross-platform applications with ease, we developed an application that functions across iOS, Android, web, 
        and desktop platforms. To ensure compatibility and functionality, we employed Android Studio emulator and Xcode primarily for testing purposes. 
        Leveraging Flutter's extensive widget catalog and documentation, we customized widgets to suit our application's aesthetic and functional requirements. 
        We created a project plan, generated project reports, and delivered a final presentation showcasing our application and its functionalities. 
        Throughout the development process, GitHub served as our primary sharing platform, facilitating efficient code collaboration and version control.
        <br class="mb-2">
        This project equipped us with invaluable experience in cross-platform development, project planning and team collaboration. As we transition into the industry, 
        the lessons learned, and skills acquired from this project is certain to provide a strong framework for our future achievements.
        `,
        images: [
            '../assets/worksamples/worksample2/worksample_1.png',
            '../assets/worksamples/worksample2/worksample_2.png',
            '../assets/worksamples/worksample2/worksample_3.png'
        ],
        skills: ['Flutter', 'Dart', 'Android Studio', 'Reliability']
    },
    {
        id: 'worksample3',
        title: 'Laravel-Bootstrap Web Interface with Unity WebGL Integration',
        description: `In a collaborative group project, we developed a fully functional website using Laravel with Bootstrap, 
        incorporating user authentication and the ability to play a Unity WebGL game we designed from scratch. We used design tools such as 
        Figma and Piskel to create wireframes, allowing us to  plan the layout and design elements effectively. As the project manager, one of my 
        primary responsibilities was overseeing the project's progress. This involved creating management documents such as the project plan, Gannt chart, 
        meeting reports, and milestone reports to ensure timely and efficient execution. Through effective project management and collaboration, 
        we successfully integrated the Unity WebGL game into the website, providing users with an engaging experience.
        <br class="mb-2">
        We relied on GitHub and Unity Hub as our primary collaboration platforms, enabling code sharing and version control. 
        By utilizing these tools and platforms effectively, we completed our objectives within our project timeline.
        `,
        images: [
            '../assets/worksamples/worksample3/worksample_1.png',
            '../assets/worksamples/worksample3/worksample_2.png',
            '../assets/worksamples/worksample3/worksample_3.png'
        ],
        skills: ['Laravel', 'MySQL', 'Figma', 'PHP', 'C#', 'Communication']
    },
    {
        id: 'worksample4',
        title: 'Bird Feeder Project Technical Documentation',
        description: `As the project manager of a 5-week capstone project, our team created a smart bird feeder. We combined frontend technologies 
        such as HTML, CSS, and JavaScript with hardware components including a Raspberry Pi to develop an intuitive dashboard and display the interface.
        On the backend, we constructed the bird feeder using 3D printed parts and reused materials, incorporating another Raspberry Pi equipped with 
        sensors and a Pi Camera Module. We developed a program that utilized AI technology to capture images of birds within a defined frame and 
        identify the bird species. 
        <br class="mb-2">
        My responsibilities extended to creating the project documents, including technical reports, project plans, task lists, project overviews, and 
        a user manual for future reference. These documents served to provide clarity and guidance throughout the project lifecycle. 
         `,
        images: [
            '../assets/worksamples/worksample4/worksample_1.png',
            '../assets/worksamples/worksample4/worksample_2.png',
            '../assets/worksamples/worksample4/worksample_3.png'
        ],
        skills: ['Microsoft Office', 'VMWare', 'Windows & Linux Administration', 'Python', 'Leadership']
    }
];


function renderWorkSamples(worksamples) {
    const container = document.getElementById('workSampleContainer');

    worksamples.forEach((sample) => {
        const workSampleDiv = document.createElement('div');
        workSampleDiv.className = 'work-sample';

        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skills-container mb-2';

        let skillsHTML = '';
        sample.skills.forEach(skill => {
            const skillNormalized = skill.toLowerCase().replace(/\s+/g, '-');
            skillsHTML += `<span class="badge badge-secondary" id="skill-tag" data-skill="${skillNormalized}">${skill}</span> `;
        });

        skillsHTML = skillsHTML.slice(0, -2);

        skillsContainer.innerHTML = skillsHTML;

        workSampleDiv.innerHTML = `
            <h3 class="mb-3">${sample.title}</h3>
            <img class="rounded border mb-2" src="${sample.images[0]}" alt="${sample.title}">
            <button class="badge badge-secondary prev-image"><</button>
            <button class="badge badge-secondary next-image">></button>
            <p class="lead mt-3 mb-3 sample-description">${sample.description}</p>
        `;

        workSampleDiv.appendChild(skillsContainer);
        container.appendChild(workSampleDiv);
    
        let currentImageIndex = 0;
        workSampleDiv.querySelector('.prev-image').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + sample.images.length) % sample.images.length;
            workSampleDiv.querySelector('img').src = sample.images[currentImageIndex];
        });
        workSampleDiv.querySelector('.next-image').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % sample.images.length;
            workSampleDiv.querySelector('img').src = sample.images[currentImageIndex];
        });
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    renderWorkSamples(worksamples);
});

document.querySelectorAll('.skill-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const skill = link.getAttribute('data-skill'); 
        const workSamples = document.querySelectorAll('.work-sample #skill-tag');
        let targetSample;

        workSamples.forEach(tag => {
            if (tag.getAttribute('data-skill') === skill) {
                targetSample = tag.closest('.work-sample');
            }
        });

        if (targetSample) {
            targetSample.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
