import { projects } from './projects-object.js';

const sectionPortfolio = document.getElementById('portfolio');

const fechaModalClicandoFora = () => {
    let dialogs = document.querySelectorAll('DIALOG');

    Array.prototype.forEach.call(dialogs, function (dialog) {
        dialog.addEventListener('click', (e) => {
            if (!e.target.closest('div')) {
                e.target.close();
            }
        });
    });
};

const loadProjects = (projects) => {
    for (let i = 0; i < projects.length; i++) {
        let button = document.createElement('button');
        button.id = `projectBtn${i}`;
        button.classList.add('project');
        button.innerHTML = `
            <img
                src="${projects[i].images[0].src}"
                alt="${projects[i].images[0].alt}"
                class="project-main-img" />

            <div class="project-subtitle-info">
                <h3 class="project-name">${projects[i].name}</h3>
                <p class="project-short-description">
                    ${projects[i].shortDescription}
                </p>
            </div>
        `;
        sectionPortfolio.appendChild(button);

        let dialog = document.createElement('dialog');
        dialog.id = `projectDialog${i}`;
        dialog.classList.add('project-modal');
        dialog.innerHTML = `
            <div class="project-modal-container">
                <div class="project-media-container">
                    ${loadProjectVideos(projects[i])}

                    ${loadProjectImgs(projects[i])}
                </div>

                <div class="project-info">
                    <h3 class="project-name">${projects[i].name}</h3>

                    <button class="btn-close-modal">
                        <span class="material-symbols-outlined"> close </span>
                    </button>

                    <p class="project-description">
                        ${projects[i].shortDescription}
                        ${projects[i].description}
                    </p>

                    <ul class="project-links">
                        ${loadProjectLinks(projects[i])}
                    </ul>

                    <div class="project-tags">
                        ${loadProjectTags(projects[i])}
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);

        button.addEventListener('click', function () {
            dialog.showModal();
        });

        updateCloseBtns(dialog);
    }
};

function loadProjectImgs(project) {
    let imgsHtml = '';
    if (project.images !== undefined) {
        project.images.forEach((element) => {
            imgsHtml += `
                <img
                    src="${element.src}"
                    alt="${element.alt}"
                    class="project-img" />`;
        });
    }

    return imgsHtml;
}

function loadProjectVideos(project) {
    let videosHtml = '';
    if (project.videos !== undefined) {
        project.videos.forEach((element) => {
            videosHtml += `
                <video class="project-video" autoplay controls loop>
                    <source
                        src="${element.src}"
                        type="video/${element.type}" />
                </video>`;
        });
    }

    return videosHtml;
}

function loadProjectLinks(project) {
    let linksHtml = '';
    if (project.links !== undefined) {
        project.links.forEach((element) => {
            linksHtml += `
                <li>
                    <a href="${element.src}" class="link" target="_blank">
                        ${element.link}
                    </a>
                </li>
            `;
        });
    }

    return linksHtml;
}

function loadProjectTags(project) {
    let tagsHtml = '';
    if (project.tags !== undefined) {
        project.tags.forEach((element) => {
            tagsHtml += `
                <div class="chips">${element}</div>
            `;
        });
    }

    return tagsHtml;
}

function updateCloseBtns(dialog) {
    let closeBtn = dialog.querySelector('.btn-close-modal');
    closeBtn.addEventListener('click', function () {
        dialog.close();
    });
}

loadProjects(projects);
fechaModalClicandoFora();
