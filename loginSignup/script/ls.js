let select = document.getElementById("countryCode");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let data = JSON.parse(localStorage.getItem("data")) || [];
let id;

input.oninput = () => {
  let str = input.value;
  str = str.split("");
  str.reverse();
  if (
    +input.value[0] === 0 ||
    +input.value[0] === 1 ||
    +input.value[0] === 2 ||
    +input.value[0] === 3 ||
    +input.value[0] === 4 ||
    +input.value[0] === 5 ||
    +input.value[0] === 6 ||
    +input.value[0] === 7 ||
    +input.value[0] === 8 ||
    +input.value[0] === 9
  ) {
    select.style.display = "block";
    // input.type = "number";
    input.maxLength = "10";
    if (input.value.length === 10) {
      btn.style.backgroundColor = "#1cb1cd";
      btn.onclick = () => {
        setTimeout(() => {
          input.value = null;
          window.location.href = "siginConfirm.html";
        }, 3000);
        let obj = new Obj(input.value);
        if (!check(obj)) {
          id = input.value;
          localStorage.setItem("id", id);
          data.push(obj);
          localStorage.setItem("data", JSON.stringify(data));
        }
      };
    } else {
      btn.style.backgroundColor = "rgb(219, 219, 219)";
      btn.onclick = () => {
        return false;
      };
    }
  } else {
    if (str[0] === "m" && str[1] === "o" && str[2] === "c" && str[3] === ".") {
      btn.style.backgroundColor = "#1cb1cd";
      btn.onclick = () => {
        id = input.value;
        localStorage.setItem("id", id);
        setTimeout(() => {
          input.value = null;
          window.location.href = "siginConfirm.html";
        }, 3000);
        let obj = new Obj(input.value);
        if (!check(obj)) {
          data.push(obj);
          localStorage.setItem("data", JSON.stringify(data));
        }
      };
    } else {
      btn.style.backgroundColor = "rgb(219, 219, 219)";
    }
    input.maxLength = "30";
    input.style.width = "100%";
    select.style.display = "none";
    input.type = "email";
  }
};

class Obj {
  constructor(id) {
    this.id = id;
    this.signIn = false;
    this.subscribe = false;
    this.password = null;
  }
}

const check = (obj) => {
  for (i of data) {
    if (i.id === obj.id) {
      return true;
    }
  }
};
