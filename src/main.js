import graph from "./graph.js";

let container = document.querySelector(".side-panel-container");
let canvas_section = document.querySelector("#canvas-section");
let resizer = document.querySelector(".panel-resizer");
let create_delete = document.getElementById("create-delete");
let create_delete_img = document.getElementById("create-delete-img");
let create_delete_p = document.getElementById("create-delete-p");

let click_icon = false;

function iconChange() {
    create_delete.addEventListener("click", function () {
        if (!click_icon) {
            create_delete_img.style.transform = "rotate(45deg)";
            create_delete_p.textContent = "Delete";
            create_delete.style.backgroundColor = "rgb(169, 42, 42)";
            container.style.width = 30 + "%";
            click_icon = true;
        } else {
            let conf = confirm("Want to delete? Changes not saved.");
            if (conf) {
                create_delete_img.style.transform = "rotate(0deg)";
                create_delete_p.textContent = "Create";
                container.style.width = 0 + "%";
                canvas_section.style.width = 100 + "%";
                create_delete.style.backgroundColor = "rgb(42, 169, 114)";
                click_icon = false;
            } else return;
        }
    });
}

function resizeTrigger() {
    resizer.addEventListener("mousedown", function () {
        window.addEventListener("mousemove", resize);
    });
    window.addEventListener("mouseup", stopResize);
}

function resize(e) {
    if (e.pageX >= 20) {
        container.style.width = e.pageX + "px";
        container.style.transition = 0 + "s";
        canvas_section.style.width = document.body.clientWidth - e.pageX + "px";
    } else return;
}

function stopResize() {
    window.removeEventListener("mousemove", resize);
}

function buble() {
    let count = 100;
    let i = 0;
    while (i < count) {
        let buble = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 30;

        buble.style.left = x + "px";
        buble.style.top = 2 * y + "px";
        buble.style.width = 2 + size + "px";
        buble.style.height = 2 + size + "px";
        buble.style.animationDuration = 5 + size + "s";
        buble.style.animationDelay = -size + "s";
        canvas_section.appendChild(buble);
        i++;
    }
}

function load() {
    iconChange();
    resizeTrigger();
    buble();
    graph.render();
}

window.onload = load;
