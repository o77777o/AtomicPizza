//Добавляем затемнение
const createModalBackground = (parentElement) => {
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal_background");

  makeSmoothAnimation(modalBackground);
  parentElement.appendChild(modalBackground);
};

//Плавная анимация появления
const makeSmoothAnimation = (elementHTML) => {
  elementHTML.style.opacity = 0; // устанавливаем начальную непрозрачность

  setTimeout(() => {
    elementHTML.style.transition = "0.2s";
    elementHTML.style.opacity = 1;
  }, 100);
};

//Функция добавления элемента по ID в корзину и сохранения в LS
const addToCart = (modalCard) => {
  const modalCardDescriptionHTML = modalCard.children[1];
  buttonPriceModalCardHTML = modalCardDescriptionHTML.children[5];
  buttonToCartHTML = modalCardDescriptionHTML.children[6];

  cardToCart(modalCard, buttonPriceModalCardHTML);
  addClick(buttonPriceModalCardHTML, displayButtonToCart, buttonToCartHTML);
};

//Проверка перед созданием окна
const checkSecondModal = () => {
  const parentHTML = document.querySelector(".modal_window");
  if (parentHTML.children.length) {
    parentHTML.innerHTML = "";
  }
};

//Активировать кнопку перехода в корзину из модальной карточки продукта
const activateButtonToCartFromModal = () => {
  const buttonToCartHTML = document.querySelector(".button_to_cart");
  addClick(buttonToCartHTML, displayCartModal);
  displayButtonToCart(buttonToCartHTML);
};

//Отобразить/спрятать кнопку перехода в корзину из модальной карточки продукта
const displayButtonToCart = (elementHTML) => {
  const array = getFromLS();
  if (array.length) {
    elementHTML.classList.remove("hide");
    elementHTML.classList.add("show");
  } else {
    elementHTML.classList.add("hide");
  }
};

//Создать настройку блюда

//Создание меню настройки блюда
const createExtraItemsMenu = () => {
  const DB_EXTRA_ITEMS = extraItems
  console.log(DB_EXTRA_ITEMS)

  const extraHTML = document.querySelector(".extra");
  const extraItem = document.createElement("div");
  extraItem.classList.add("extra_item");

  extraItem.innerHTML = `
  <span>Убрать лук</span>
  <label class="toggle">
      <input type="checkbox" id="" />
       <div class="slider"></div>
  </label>
  `;
};
createExtraItemsMenu()

//Создание модального окна продукта
const createModalCard = (element) => {
  const modalCard = document.createElement("div");
  modalCard.classList.add("modal_card");
  modalCard.id = element.ID;

  modalCard.innerHTML = `
    <div class="img_modal_card">
      <img src="${element.photo}" alt="" />
    </div>
    <div class="description_modal_card">
      <div class="structure_modal_card">${element.name}, <br> ${element.base} </div>
      <div class="weight_modal_card">${element.weight} грамм, ⌀ ${element.diameter}</div>
      <div class="compound_modal_card">${element.ingredients}</div>
      <div class="structure_modal_card">Настроить</div>
      <div class="extra">
        <div class="extra_item">
          <span>Двойной сыр <b>120₽</b></span>
          <label class="toggle">
            <input type="checkbox" id="" />
            <div class="slider"></div>
          </label>
        </div>

        <div class="extra_item">
          <span>Острый Халапеньо <b>30₽</b></span>
          <label class="toggle">
            <input type="checkbox" id="" />
            <div class="slider"></div>
          </label>
        </div>

        <input
          class="extra_item"
          type="text"
          placeholder="Не добавлять..."
        />
      </div>
      <div class="button_price_modal_card">${element.price}₽</div>
      <div class="button_to_cart">Перейти в корзину</div>
    </div>
    `;
  makeSmoothAnimation(modalCard);
  return modalCard;
};

//Переход в корзину из модального окна

//Удаление затемнения и модального окна продукта по кнопке
const deleteModalCardButton = () => {
  const removeZone = document.querySelector(".modal_background");

  removeZone.addEventListener("click", () => {
    checkSecondModal();
  });
};

//Отображение по id модального окна
const openModal = (id) => {
  const element = findByID(id);
  const modalWindow = document.querySelector(".modal_window");
  const modalCard = createModalCard(element);

  checkSecondModal();
  createModalBackground(modalWindow);
  modalWindow.appendChild(modalCard);
  // тут функция внетрения допов по массиву
  addToCart(modalCard);

  activateButtonToCartFromModal();
  deleteModalCardButton();
};

//Точка входа, навесить click на img в product_card
const initModal = () => {
  const productCardHTML = document.querySelectorAll(".product_card");

  for (const product of productCardHTML) {
    const buttonOpenModal = product.children[0];

    buttonOpenModal.addEventListener("click", () => {
      openModal(product.id);
    });
  }
};
