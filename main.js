import home from "./views/home.js";
import projects from "./views/projects.js";

const navbar = document.getElementById("navbar");
console.log(navbar);
// Page routes
const routes = {
    "/": { title: "Jordan Wylde-Browne", render: home },
    "/projects": { title: "Projects", render: projects },
};

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
}

window.addEventListener("click", (e) => {
    // attempt to grab the href from links that have the [data-link] attribute
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
