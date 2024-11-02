const app = document.getElementById("app");

const dashboard = document.createElement("div");
dashboard.className = "dashboard";
app.appendChild(dashboard);

const header = document.createElement("div");
header.className = "header";
header.innerHTML = "<h1>Dashboard</h1>";

dashboard.appendChild(header);
