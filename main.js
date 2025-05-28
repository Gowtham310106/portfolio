var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "UI/UX Designer", "Web Developer"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let ham = false;

function toggleMenu() {0
  $(".navbar").toggleClass("active");
  ham = $(".navbar").hasClass("active");
}

$(document).click(function (e) {
  // Check if the click is outside the hamburger menu and navbar
  if (
    !$(e.target).closest(".hamburger").length && // Not clicking on the hamburger
    !$(e.target).closest(".navbar").length // Not clicking on the navbar
  ) {
    $(".navbar").removeClass("active");
    ham = false;
  }
});
$(".sent").on("click", function (event) {
  // Get the input fields
  const inputFields = $("input[required] ");
  
  let isValid = true;

  // Check if all required fields are filled
  inputFields.each(function () {
    if (!$(this).val().trim()) {
      isValid = false;
      $(this).css("border-color", "red"); // Highlight empty fields
    } else {
      $(this).css("border-color", ""); // Reset field style if filled
    }
  });

  // If the form is valid, change the submit button value and submit the form
  if (isValid) {
    $(this).val("Submitted");
    // Optional: Submit the form programmatically
    $(this).closest("form").submit();
  } else {
    // Prevent the default form submission if not valid
    event.preventDefault();
    alert("Please fill in all required fields.");
  }
});




        