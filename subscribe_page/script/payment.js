let sub = localStorage.getItem("subcribe");

document.querySelector("#price :last-child").innerHTML = sub;

document.getElementById("show").onchange = () => {
  document.querySelector("#pay > div").style.display = "block";
};

let input = document.querySelector("#pay > div > input");
let check = false;
let link = document.querySelector("#pay > div > button");
input.oninput = () => {
  if (check) {
    return;
  } else {
    input.maxLength = 10;
    if (input.value.length === 10) {
      link.style.backgroundColor = "#00b1cd";
      link.onclick = () => {
        let p = document.querySelector("#pay > div > p");
        p.innerHTML = "Please Enter Your OTP to Confirm.";
        check = true;
        let val = Math.floor(100000 + Math.random() * 900000);
        alert(`Your OTP is ${val}`);
        link.innerHTML = "Confirm";
        input.value = null;
        link.onclick = () => {
          if (input.value == val) {
            alert("Payment Successful");
            setTimeout(() => {
              // home Page link here
              window.location.href = "../index.html";
            }, 2000);
          } else {
            alert("Invalid OTP");
            window.location.reload();
          }
        };
      };
    } else {
      link.style.backgroundColor = "gray";
      link.onclick = () => {
        return false;
      };
    }
  }
};

// note line 32 is for the linking of home page
