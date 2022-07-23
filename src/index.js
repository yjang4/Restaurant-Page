import { populateMenu } from './menu.js';
const page = () => {
    const content = document.getElementById("content");
    function populateContent() {
        let div = document.createElement("div");
        let btn = document.createElement("button");
        div.textContent = "HAHAHAHHH";
        btn.textContent = "menu";
        addBtnListener(btn);
        content.appendChild(div);
        content.appendChild(btn);
    }
    function addBtnListener(btn) {
        btn.addEventListener("click", function() {
            removeContent();
            populateMenu();
        });
    }
    function removeContent() {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }
    return {populateContent, removeContent};
};
const newPage = page();
newPage.populateContent();
