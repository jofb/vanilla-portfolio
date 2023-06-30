// load the json
import data from "../projects-list.json";

let html = `<ul class="projects-list">`;
data.forEach((val) => {
    html += `<li class="project-tile">`;
    html += `<img src="../assets/${val.img}"></img><div class="project-tile-desc">`;
    html += `<h1>${val.title}</h1>`;
    html += `<p>${val.full_text}</p>`;
    html += "</div></li>";
});
html += "</ul>";

export default () => html;
