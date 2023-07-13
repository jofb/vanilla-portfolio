import home from "./views/home.js";
import projects, { getProject } from "./views/projects.js";
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

function assignButtonListeners() {
    let buttons = document.querySelectorAll(".project-tile-wrapper");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            console.log("ive been pressesd!");
            let index = e.target.closest("li[data-index]").dataset.index;
            popup(index);
        });
    }
}

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", () => {
    router();
});

function popup(i) {
    // populate the overlay, then show the overlay
    let overlay = document.getElementById("popup");
    let content = document.getElementById("popup-content");
    // populate
    content.innerHTML = getProject(i);
    // show
    overlay.style.display = "block";
    // animation
    overlay.style.transform = "translateY(90px) scale(0.98)";
    overlay.style.opacity = "0";
    // overlay.style.transform = "scale(0.7)";
    // overlay.classList.add("visible");
    overlay.offsetHeight;
    overlay.style.transform = "translateY(0) scale(1)";
    overlay.style.opacity = "1";
}
