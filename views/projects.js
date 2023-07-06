// load the json
import data from "../projects-list.json";

let html = `<ul class="projects-list">`;
data.forEach((val) => {
    html += `<li class="project-tile-wrapper"><div class="project-tile">`;
    // html += `<img src="../assets/${val.img}"></img><div class="project-tile-desc">`;
    // html += `<div class="project-tile-desc">`;
    html += `<h1>${val.title}</h1>`;
    html += `<p>${val.short_text}</p>`;
    html += "</div></li>";
});
html += "</ul>";
// <li class="project-tile-wrapper">
//     <div class="project-tile">
//         <h1>portfolio website</h1>
//         <p>this website, with vanillia html/css/js</p>
//     </div>
// </li>;

export default () => html;
