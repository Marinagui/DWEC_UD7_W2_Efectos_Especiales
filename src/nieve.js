import { createSnow } from "pure-snow.js";
import "../node_modules/pure-snow.js/style.css";

let back = document.getElementById('volver');
back.onclick = () => location.href = './index.html';

createSnow(); // creates snowflakes and generate css for them




