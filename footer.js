const footer = document.createElement("footer");
footer.classList.add("bg-dark", "text-center", "text-white");

const container = document.createElement("div");
container.classList.add("container", "p-4");

const section = document.createElement("section");
section.style.textDecoration = "none";

const row = document.createElement("div");
row.classList.add("row");

const womenCol = createColumn("Women", ["Dresses", "Pants", "Skirts"]);
const menCol = createColumn("Men", ["Shirts", "Pants", "Hoodies"]);
const kidsCol = createColumn("Kids", []);
const linksCol = createColumn("Links", ["Home", "Login", "Contact"]);

row.appendChild(womenCol);
row.appendChild(menCol);
row.appendChild(kidsCol);
row.appendChild(linksCol);

section.appendChild(row);
container.appendChild(section);
footer.appendChild(container);

const copyRight = document.createElement("div");
copyRight.classList.add("text-center", "p-3");
copyRight.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
copyRight.innerHTML = `<a class="text-white" href="index.html">Copyright© Ecommerce ${
  new Date().getFullYear()
}-${new Date().getFullYear() + 1}</a>`;

footer.appendChild(copyRight);

function createColumn(title, items) {
  const col = document.createElement("div");
  col.classList.add("col-lg-3", "col-md-6", "mb-4", "mb-md-0");

  const heading = document.createElement("h5");
  heading.classList.add("text-uppercase");
  heading.textContent = title;

  const list = document.createElement("ul");
  list.classList.add("list-unstyled", "mb-0");

  for (const item of items) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("text-white");
    a.textContent = item;
    a.href = "#!";
    li.appendChild(a);
    list.appendChild(li);
  }

  col.appendChild(heading);
  col.appendChild(list);

  return col;
}

// Append the footer to the body element
document.body.appendChild(footer);
