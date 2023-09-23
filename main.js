import home from "./views/home.js";
import projects, { projectImages } from "./views/projects.js";

// Page routes
let routes = {
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
        let imgBtnLeft = document.getElementById(`project-img-btn-${i}-left`);
        let imgBtnRight = document.getElementById(`project-img-btn-${i}-right`);
        if (imgBtnLeft && imgBtnRight) {
            imgBtnLeft.addEventListener("click", (e) => {
                scrollImgGallery(projectImages[i], i, -1);
            });
            imgBtnRight.addEventListener("click", (e) => {
                scrollImgGallery(projectImages[i], i, 1);
            });
        }
    }
}

function scrollImgGallery(images, projectIndex, scroll) {
    let img = window.document.getElementById(
        `project-tile-img-${projectIndex}`
    );

    // find the current index of the img (we arent keeping state here so this is lazy)
    let currentIndex = images.indexOf(img.src);

    // scroll it then set the image
    currentIndex =
        (((currentIndex + scroll) % images.length) + images.length) %
        images.length;

    img.src = images[currentIndex];
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
