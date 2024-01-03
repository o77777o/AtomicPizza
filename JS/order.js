//Получаем нужные элементы
const removeButtonHTML = document.querySelector(".remove_button");
const addButtonHTML = document.querySelector(".add_button");
const countHTML = document.querySelector(".count");
const phoneNumberHTML = document.querySelector("#input_phone_number");
let count = 0;

//Повесить click
const addClick = (elementHTML, func) => {
  elementHTML.addEventListener("click", () => {
    func();
  });
};

//уменьшить кол-во приборов на 1
const removeСutlery = () => {
  if (!count) {
    return;
  }
  --count;
  countHTML.innerHTML = count;
};

//увеличить кол-во приборов на 1
const addСutlery = () => {
  ++count;
  countHTML.innerHTML = count;
};

const phoneFormat = (e) => {
  let x = e.target.value
    .replace(/\D/g, "")
    .replace(/^(8|7)/, "7")
    .replace(/^9/, "79")
    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value =
    "+" +
    (x[1] ? x[1] : "") +
    (x[2] ? " " + x[2] : "") +
    (x[3] ? " " + x[3] : "") +
    (x[4] ? " " + x[4] : "") +
    (x[5] ? " " + x[5] : "");
};

const pickup = document.querySelector("#pickup");
const fullAddressHTML = document.querySelector(".full_address")

console.log(pickup);

pickup.addEventListener("change", (event) => {
    if (event.target.checked) {
        fullAddressHTML.style.display = "none"


    } else {
        fullAddressHTML.style.display = ""

    }
  });

//точка входа
const initOrder = (e) => {
  addClick(removeButtonHTML, removeСutlery);
  addClick(addButtonHTML, addСutlery);

  phoneNumberHTML.addEventListener("input", (e) => {
    phoneFormat(e);
  });
};

initOrder();
