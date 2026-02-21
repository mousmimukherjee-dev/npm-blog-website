document.addEventListener("DOMContentLoaded", () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzDL0f1ae0ViR1QKibZVYiRmGcHCC6iH9VxlqYkNxV6DZZplPvkRak8Tgs-Do9k8nuW/exec";
  const form = document.querySelector("form[name='submit-to-google-sheet']");
  console.log(form);
  const msg = document.querySelector(".msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => response.json())
      .then((response) => {
        msg.classList.remove("hide");
        setTimeout(() => {
          msg.classList.add("hide");
        }, 5000);

        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
});
