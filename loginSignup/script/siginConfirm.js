let data = JSON.parse(localStorage.getItem("data"));

let id = localStorage.getItem("id");

let reset = document.getElementById("reset");

let btn = document.getElementById("btn");

let p = document.getElementById("id");

p.innerHTML = `We have sent you a verification code to <strong>${id}</strong>. Please enter the code to confirm`;

let time = document.getElementById("time");

let i;
let val;
const call = () => {
  val = Math.floor(100000 + Math.random() * 900000);
  let n = 30;
  setTimeout(() => {
    alert(`Your OTP is ${val}`);
  }, 1000);

  if (i) {
    clearTimeout(i);
  }
  i = setInterval(() => {
    if (n > -1) {
      time.innerText = `00:${n}`;
    }
    if (n < 10 && n > -1) {
      time.innerHTML = `00:0${n}`;
    }
    if (n === 0) {
      reset.style.textDecoration = "underline";
      reset.onclick = () => {
        call();
      };
    }
    if (n > 0) {
      reset.style.textDecoration = "none";
      reset.onclick = () => {
        return false;
      };
    }
    n--;
  }, 1000);
};

let otp = document.querySelectorAll(".in");
const checkOTP = (val) => {
  let n = String(val).split("");
  console.log(n);
  if (
    otp[0].value == n[0] &&
    otp[1].value == n[1] &&
    otp[2].value == n[2] &&
    otp[3].value == n[3] &&
    otp[4].value == n[4] &&
    otp[5].value == n[5] &&
    password[0].value == password[1].value
  ) {
    console.log(data);
    data.forEach((el) => {
      if (el.id === id && !el.password) {
        el.signIn = true;
        el.password = password[0].value;
        localStorage.setItem("data", JSON.stringify(data));
        // home page link here
        window.location.href = "../index.html";
      }
    });
  } else {
    alert("Wrong password or OTP");
    window.location.reload();
  }
};

let password = document.querySelectorAll(".password");

password[1].oninput = () => {
  if (
    password[0].value &&
    otp[0] &&
    otp[1] &&
    otp[2] &&
    otp[3] &&
    otp[4] &&
    otp[5]
  ) {
    btn.style.background = "#1cb1cd";
    btn.onclick = () => {
      checkOTP(val);
    };
  } else {
    btn.style.background = "rgb(219, 219, 219)";
    btn.onclick = () => {
      return false;
    };
  }
};

let pass = true;
data.forEach((el) => {
  if (el.id === id && !el.password) {
    pass = false;
    document.getElementById("true").style.display = "none";
    call();
  }
});

let pasDiv = document.querySelectorAll(".pass");
let strong = document.querySelectorAll("strong");
if (pass) {
  document.getElementById("false").style.display = "none";
  p.style.display = "none";
  pasDiv[1].style.display = "none";
  document.getElementById("resend").style.display = "none";
  document.getElementById("input").style.display = "none";
  strong[1].style.display = "none";
  strong[3].style.display = "none";
  document.getElementById("space").style.height = "50px";
  password[0].oninput = () => {
    if (password[0].value.length > 0) {
      btn.style.background = "#1cb1cd";
      btn.onclick = () => {
        data.forEach((el) => {
          console.log(password[0].value);
          if (id == el.id) {
            if (password[0].value == el.password) {
              // home page link
              el.signIn = true;
              localStorage.setItem("data", JSON.stringify(data));
              window.location.href = "../index.html";
            } else {
              alert("Wrong Password");
              window.location.reload();
            }
          }
        });
      };
    } else {
      btn.style.background = "rgb(219, 219, 219)";
      btn.onclick = () => {
        return false;
      };
    }
  };
}

// line 131 and link 69 for the home page link

/*
signOut =>click;
data=localstorage.get(data), (id);
data.foreach(el){
  if(el.id==id){
    el.signIn = false;
    localstorage.set(data);
    window.reload();
  }
}

 */
