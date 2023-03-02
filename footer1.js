const footerTemplate = `
<footer class="bg-dark text-center text-white">
    <div class="container p-4">
      <section style="text-decoration: none;">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Women</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="women.html" class="text-white">Dresses</a>
              </li>
              <li>
                <a href="women.html" class="text-white">Pants</a>
              </li>
              <li>
                <a href="women.html" class="text-white">Skirts</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Men</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="men.html" class="text-white">Shirts</a>
              </li>
              <li>
                <a href="men.html" class="text-white">Pants</a>
              </li>
              <li>
                <a href="men.html" class="text-white">Hoodies</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <a href="kids.html" ><h5 class=" text-uppercase text-white">Kids</h5></a>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="index.html" class="text-white">Home</a>
              </li>
              <li>
                <a href="login.html" class="text-white">Login</a>
              </li>
              <li>
                <a href="contact.html" class="text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      <a class="text-white" href="index.html">${getCurrentYear()}</a>
    </div>
  </footer>
`;

function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return `© Ecommerce ${currentYear}-${currentYear + 1}`;
}

document.querySelector('body').insertAdjacentHTML('beforeend', footerTemplate);
