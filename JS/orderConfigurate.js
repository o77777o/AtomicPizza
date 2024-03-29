//Повесить click
const addClick = (elementHTML, func, arg) => {
  elementHTML.addEventListener("click", () => {
    func(arg);
  });
};

//уменьшить кол-во приборов на 1
const removeСutlery = (countHTML) => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));
  let count = +userData.cutlery
  if (!count) {
    return;
  }
  --count;
  userData.cutlery = count
  countHTML.innerHTML = count;
  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

//увеличить кол-во приборов на 1
const addСutlery = (countHTML) => {
  const userData = JSON.parse(localStorage.getItem(DB_ORDER_CONFIGURATE));
  let count = +userData.cutlery
  ++count;
  userData.cutlery = count
  countHTML.innerHTML = count;
  localStorage.setItem(DB_ORDER_CONFIGURATE, JSON.stringify(userData));
};

//Настроить кол-во
const configurateCount = () => {
  const removeButtonHTML = document.querySelector(".remove_button");
  const addButtonHTML = document.querySelector(".add_button");
  const countHTML = document.querySelector(".count");

  addClick(removeButtonHTML, removeСutlery, countHTML);
  addClick(addButtonHTML, addСutlery, countHTML);
};

//Формат номера телефона
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

//Редактор формата номера телефона
const configuratePhoneFormat = () => {
  const phoneNumberHTML = document.querySelector("#input_phone_number");

  phoneNumberHTML.addEventListener("input", (e) => {
    phoneFormat(e);
  });
};



//точка входа
const initOrderConfigurate = () => {
  configurateCount();
  configuratePhoneFormat();
};
