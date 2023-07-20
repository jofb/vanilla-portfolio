// load the json
import data from "../assets/projects-list.json";

const icons = {
    github: '<i class="icon fa-brands fa-github"></i>',
    itch: '<i class="icon fa-brands fa-itch-io"></i>',
};

let html = `<ul class="projects-list">`;
data.forEach((project, index) => {
    // clickable tile
    html += `<li class="project-tile-wrapper" data-index=${index}><div class="project-tile" data-index=${index}>`;
    html += `<h1>${project.title}</h1>`;
    html += `<p>${project.short_text}</p></div>`;

    // full project panel
    const exp = project.experience;
    const links = project.links;

    html += `<div class='project-tile-panel'></br><p>${project.full_text}</p>`;

    html += `<div class="popup-content-extra">`;
    if (exp) {
        html += `<div class="popup-content-experience"><i class="fa-solid fa-list-check"></i>`;
        exp.forEach((val) => {
            html += `<p>${val}</p>`;
        });
        html += `</div>`;
    }
    if (links) {
        html += `<div class="popup-content-links">`;
        links.forEach((val) => {
            html += `<a class="footer-button" href="${
                val.link
            }" target="_blank">${icons[val.type]}</a>`;
        });
        html += `</div>`;
    }
    html += "</div></div></li>";
});
html += "</ul>";

export function getProject(index) {
    const project = data[index];
    const links = project.links;
    const exp = project.experience;
    // now formulate some html and return it
    let popup = `<div class="popup-content-title"><h1>${project.title}</h1><i id="popup-close" class="fa-solid fa-xmark"></i></div><p>${project.full_text}</p>`;
    popup += `<div class="popup-content-extra">`;
    if (exp) {
        popup += `<div class="popup-content-experience"><i class="fa-solid fa-list-check"></i>`;
        exp.forEach((val) => {
            popup += `<p>${val}</p>`;
        });
        popup += `</div>`;
    }
    if (links) {
        popup += `<div class="popup-content-links">`;
        links.forEach((val) => {
            popup += `<a class="footer-button" href="${
                val.link
            }" target="_blank">${icons[val.type]}</a>`;
        });
        popup += `</div>`;
    }

    popup += `</div>`;

    // add links based on links
    return popup;
}

export default () => html;
