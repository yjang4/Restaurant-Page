import { populateMenu } from './menu.js';
const page = () => {
    const content = document.getElementById("content");
    function populateContent() {
        let div = document.createElement("div");
        div.textContent = "HAHAHAHHH";
        content.appendChild(div);
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
