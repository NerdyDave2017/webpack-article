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

async function getComponent() {
  try {
    const { default: _ } = await import("lodash");
    const MyComponent = document.createElement("div");
    MyComponent.innerHTML = _.join(["This", "is my", "component"]);
    return MyComponent;
  } catch (error) {
    return "An error occurred while loading the component";
  }
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

function lazyLoadComponent() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = "Hello Webpack!";
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      const print = module.default;
      print();
    });

  return element;
}

document.body.appendChild(lazyLoadComponent());

// utils.js
export function add(a, b) {
  return a + b;
}
export function suntract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
