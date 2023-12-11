function subscribe() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  alert(
    "Thank you " + name + " . Check your email for the discount code. Enjoy!"
  );
}
let enterEmail = document.querySelector(".email");
enterEmail.addEventListener("click", subscribe);
