// load the json
import data from "../assets/projects-list.json";

function scrollImgGallery(images, index, scroll) {
    let img = window.document.getElementById(`project-tile-img-${index}`);

    index =
        (((index + scroll) % images.length) + images.length) % images.length;
    console.log(index);
    img.src = images[index];
}

const icons = {
    github: '<i class="icon fa-brands fa-github"></i>',
    itchio: '<i class="icon fa-brands fa-itch-io"></i>',
    website: '<i class="icon fa-solid fa-link"></i>',
};

let html = `<ul class="projects-list">`;
// for each project in the json file, create a project panel and clickable button
data.forEach((project, index) => {
    // clickable tile
    html += `<li class="project-tile-wrapper" data-index=${index}><div class="project-tile" data-index=${index}>`;
    html += `<h1>${project.title}</h1>`;
    html += `<p>${project.short_text}</p></div>`;

    // full project panel
    const exp = project.experience;
    const links = project.links;
    const images = project.images;

    html += `<div class='project-tile-panel'></br>`;

    if (images) {
        html += `<div class='project-tile-img-gallery'><button>left</button>`;
        html += `<img id='project-tile-img-${index}' class='project-tile-img' src='${images[0]}'>`;
        // images.forEach((val) => {
        //     html += `<img src='${val}'>`;
        // });
        html += `</div>`;
    }

    html += `<p>${project.full_text}</p>`;

    html += `<div class="panel-content-extra">`;
    if (exp) {
        html += `<div class="panel-content-experience"><i class="fa-solid fa-list-check"></i>`;
        exp.forEach((val) => {
            html += `<p>${val}</p>`;
        });
        html += `</div>`;
    }
    if (links) {
        html += `<div class="panel-content-links">`;
        links.forEach((val) => {
            html += `<a class="footer-button" href="${
                val.link
            }" target="_blank" title="${
                val.type[0].toUpperCase() + val.type.substring(1)
            } for ${project.title}"}>${icons[val.type]}</a>`;
        });
        html += `</div>`;
    }
    html += "</div></div></li>";
});
html += "</ul>";

export default () => html;
