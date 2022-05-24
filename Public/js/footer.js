const createFooter = () =>
{
    let footer = document.querySelector('footer');

    //To access whats in the footer
    footer.innerHTML = `
    <footer>
      <div class="footer-content">
          <!-- Footer information-->
          <div class="footer-menu">
              <ul class="f-menu">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
              </ul>
          </div>
          <ul class="socials">
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>
          <div class="footer-bottom" >
              <p>copyright &copy;2022 Redeemed People's Mission</p>
          </div>
      </div>
  </footer>
    `
}

createFooter();