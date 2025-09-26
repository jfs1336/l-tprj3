$(document).ready(function () {
  // Smooth scrolling for nav links
  $("a.nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top - 70 // Offset for fixed navbar
      }, 800);
    }
  });

  // Contact form validation
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Message sent successfully!");
      $(this).trigger("reset");
    }
  });
});
