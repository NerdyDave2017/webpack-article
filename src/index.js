import "./styles.css";
import MyImage from "../public/assets/images/my-image.png";

const app = document.getElementById("app");
app.innerHTML = `<h1>Hello, Webpack!</h1>`;

const container = document.createElement("div");
container.className = "container";
app.appendChild(container);

const img = document.createElement("img");
img.src = MyImage;
container.appendChild(img);
