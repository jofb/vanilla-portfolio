import home from "./views/home.js";
import projects from "./views/projects.js";
import project from "./views/project.js";
import projectsList from "./assets/projects-list.json";

// Page routes
let routes = {
    "/": { title: "Jordan Wylde-Browne", render: home },
    "/projects": { title: "Projects", render: projects },
};

projectsList.forEach((val, index) => {
    // add as a route
    let route = `/projects/project_${index}`;
    routes[route] = { title: val.title, render: project };
});

// Page Router for single page application
function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
    assignButtonListeners();
}

window.addEventListener("click", (e) => {
    // attempt to grab the href from links that have the [data-link] attribute
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});
// Assigns all listeners for project list
function assignButtonListeners() {
    let buttons = document.querySelectorAll(".project-tile");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            let index = e.target.closest("li[data-index]").dataset.index;
            openProject(buttons[i], index);
        });
    }
}
// Opens a project panel given an index and button
function openProject(btn, i) {
    btn.parentElement.classList.toggle("project-tile-active");
    let panel = btn.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", () => {
    router();
});
