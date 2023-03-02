const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="contact.html">
      <img src="/images/logo.jpg" alt="Logo" width="50" height="35">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex mx-lg-auto sm-col-3">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <a href="login.html" class="btn btn-outline-secondary me-2 mx-lg-0 mt-3 mt-lg-0">Login</a>
      <i class="fa fa-shopping-cart mt-3 mt-lg-0" style="font-size:24px"></i>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-md navbar-light bg-light ">
  <div class="container-fluid">
    <div class="navbar-nav mx-auto">
      <a class="nav-link  active" aria-current="page" href="index.html">Home</a>
      <a class="nav-link " href="allProducts.html">All Products</a>
      <div class="nav-item dropdown">
        <a class="nav-link  dropdown-toggle" href="women.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Women</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="women.html">All</a></li>
          <li><a class="dropdown-item" href="women.html">Skirts</a></li>
          <li><a class="dropdown-item" href="women.html">Pants</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Shirts</a></li>
        </ul>
      </div>
      <div class="nav-item dropdown">
        <a class="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Men</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="men.html">All</a></li>
          <li><a class="dropdown-item" href="men.html">Hoodies</a></li>
          <li><a class="dropdown-item" href="men.html">Pants</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="men.html">Shirts</a></li>
        </ul>
      </div>
      <a class="nav-link " href="kids.html">Kids</a>
      <a class="nav-link" href="contact.html">Contact</a>
    </div>
  </div>
</nav>
`;

const mediaQuery = `
@media (max-width: 768px) {
  .navbar-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
  }
  .nav-link {
    margin: 0 18px;
  }
  .nav-link:lsast-child {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
  }
}
`;
document.addEventListener("DOMContentLoaded", () => {
    // Add the navbar to the body
    document.body.insertAdjacentHTML("afterbegin", navbar);
  
    // Add the media query styles to the head
    const style = document.createElement("style");
    style.innerHTML = mediaQuery;
    document.head.appendChild(style);
  });
