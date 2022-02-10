console.log("JS loaded ✅");
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', pauseSubmit);

function pauseSubmit(event) {
  event.preventDefault();
  console.log("Form submitted 💥");
  window.setTimeout(() => {
    console.log("Onward ⏩");
    form.submit();
  }, 2000);
}
