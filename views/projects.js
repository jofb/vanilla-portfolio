// load the json
import data from "../assets/projects-list.json";

const icons = {
    github: '<i class="fa-brands fa-github"></i>',
    itch: '<i class="fa-brands fa-itch-io"></i>',
};

let html = `<ul class="projects-list">`;
data.forEach((val, index) => {
    html += `<li class="project-tile-wrapper" data-index=${index}><div class="project-tile">`;
    // html += `<img src="../assets/${val.img}"></img><div class="project-tile-desc">`;
    // html += `<div class="project-tile-desc">`;
    html += `<h1>${val.title}</h1>`;
    html += `<p>${val.short_text}</p>`;
    html += "</div></li>";
});
html += "</ul>";

export function getProject(index) {
    const project = data[index];
    const links = project.links;
    const exp = project.experience;
    // now formulate some html and return it
    let popup = `<div class="popup-content-title"><h1>${project.title}</h1><i class="fa-solid fa-xmark" onclick="off()"></i></div><p>${project.full_text}</p>`;
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
