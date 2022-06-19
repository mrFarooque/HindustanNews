// editProfile page script
// let user = JSON.parse(localStorage.getItem("user"));
// document.getElementById("email").innerText = user.email;
document.getElementById("form").addEventListener("submit", () => {
  event.preventDefault();
  let form = document.getElementById("form");
  let newDetails = {
    name: form.name.value,
    contactNumber: form.number.value,
    password: form.password.value,
    gender: form.gender.value,
  };
  // if (newDetails.name) user.name = newDetails.name;
  // if (user.password) user.password = newDetails.password;
  // user.contactNumber = newDetails.contactNumber;
  // user.gender = newDetails.gender;
  localStorage.setItem("newDetails", JSON.stringify(newDetails));
  form.reset();
});
