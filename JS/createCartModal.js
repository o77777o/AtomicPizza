//Точка входа
const initButtonOpenCart = () => {
  configurateButtonOpenCart();
};

//Настроить кнопку открытия корзины
const configurateButtonOpenCart = () => {
  const buttonOpenCart = document.querySelector(".button_open_cart");

  addClick(buttonOpenCart, displayCartModal);
};

//Отобразить модальное окно корзины
const displayCartModal = () => {
  const modalWindow = document.querySelector(".modal_window");
  checkSecondModal();
  createModalBackground(modalWindow);
  createCartModal(modalWindow);
  activateCart();
  getUserDataOrderFromLS();
  configurateButtonSaveUserDataOrderToLS();
  deleteModalCardButton();
};

//Активировать корзину после отображения
const activateCart = () => {
  pushButtonClearAll();
  pushButtonToCheckAddress();
  configurateButtonClearOrderConfigurate();
  displayAllPositionInCart();
  // checkTotalOrderPriceForDelivery();
  checkRestaurantScheduleInCart()
  checkDeliveryMethod();
  initOrderConfigurate();
};

//Создать модальное окно корзины
const createCartModal = (parentHTML) => {
  const cartModal = document.createElement("div");
  cartModal.classList.add("modal_shopping_cart");

  cartModal.innerHTML = `
      <div class="product_list">
      <div class="topic_cart">
        <div class="modal_window_title">Корзина</div>
        <div class="button_clear_all">Очистить</div>
      </div>

      <div class="total_product"></div>
      <div class="total_cost">Итого:</div>
    </div>

    <div class="order_registration">
      <div class="modal_window_title">Заказ</div>

      <div class="short_address">
        <div class="head_order"> 
        <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="AddressOption_icon__eM_dQ"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3052 16.5668L15.5117 14.0526C15.4203 13.9704 15.3772 13.8472 15.3975 13.726L15.8387 11.0787C15.8569 10.9693 16.0026 10.9402 16.064 11.0326C16.9278 12.3319 18.1772 13.4663 20.0063 14.1979C20.5598 14.4193 21.1881 14.1501 21.4095 13.5965C21.6309 13.0429 21.3617 12.4147 20.8081 12.1933C18.9468 11.4487 17.9047 10.1865 17.2564 8.72536C16.9785 8.09906 16.6196 7.34235 16.1056 6.72493C15.5693 6.08069 14.8143 5.52973 13.7675 5.44237C13.3238 5.40535 12.8316 5.42235 12.3435 5.54889C9.35858 6.29791 7.38234 9.20441 6.74692 13.0169C6.64891 13.605 7.0462 14.1612 7.6343 14.2593C8.2224 14.3573 8.77861 13.96 8.87663 13.3719C9.22966 11.2537 9.99769 9.71889 10.9671 8.75636C11.0448 8.67923 11.1707 8.74395 11.1586 8.85275L10.7582 12.4565C10.7134 12.8599 10.8658 13.2602 11.1675 13.5317L16.6201 18.4391C16.7888 18.5909 16.9083 18.7896 16.9633 19.0097L17.9851 23.0967C18.1538 23.7715 18.8376 24.1818 19.5124 24.0131C20.1872 23.8444 20.5975 23.1606 20.4288 22.4858L19.4071 18.3988C19.2304 17.6921 18.8467 17.0542 18.3052 16.5668Z"
          fill="black"
        ></path>
        <path
          d="M11.8069 20.5764C12.2988 20.0844 12.6403 19.4623 12.7913 18.7831L13.1487 17.1746C13.1769 17.0479 13.1346 16.9159 13.0382 16.8291L11.3495 15.3093C11.213 15.1864 10.9946 15.2562 10.9548 15.4355L10.3323 18.2367C10.2853 18.4483 10.1789 18.642 10.0257 18.7953L6.9212 21.8998C6.42935 22.3916 6.42935 23.1891 6.9212 23.6809C7.41305 24.1728 8.2105 24.1728 8.70235 23.6809L11.8069 20.5764Z"
          fill="black"
        ></path>
        <path
          d="M18.0075 2.39898C18.0075 3.7239 16.9334 4.79797 15.6085 4.79797C14.2835 4.79797 13.2095 3.7239 13.2095 2.39898C13.2095 1.07406 14.2835 0 15.6085 0C16.9334 0 18.0075 1.07406 18.0075 2.39898Z"
          fill="black"
        ></path>
        <path
          d="M3.93323 2.39898H10.9249C11.5242 2.39898 12.01 2.88231 12.01 3.47853V4.02397C12.01 4.24295 11.861 4.43258 11.652 4.49774C8.25124 5.55778 6.2135 8.92122 5.56375 12.8197C5.52956 13.0249 5.36394 13.1944 5.15599 13.1944H3.49919C2.87863 13.1944 2.38445 12.6776 2.41544 12.061L2.84948 3.42462C2.87836 2.85007 3.35501 2.39898 3.93323 2.39898Z"
          fill="black"
        ></path>
      </svg>
          | Адрес доставки <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="" xmlns="http://www.w3.org/2000/svg"><path d="M6 13L11 8L6 3" stroke="var(--general_font_color)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>

      <div class="cutlery">
        <div class="head_order">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.51979 2.22656C5.01685 2.22656 5.41979 2.70607 5.41979 3.12656C5.41979 3.12656 5.5289 7.06935 5.5289 8.01953C5.5289 8.96972 6.44975 9.98187 6.44975 9.50012C6.44975 9.01838 6.61979 3.12656 6.61979 3.12656C6.61979 2.62951 7.02274 2.22656 7.51979 2.22656C8.01685 2.22656 8.41979 2.62951 8.41979 3.12656C8.41979 3.12656 8.59756 9.01838 8.59756 9.50012C8.59756 9.98187 9.39899 9.10999 9.47735 8.01953C9.5557 6.92908 9.61979 3.12656 9.61979 3.12656C9.61979 2.70848 10.0227 2.22656 10.5198 2.22656C11.0168 2.22656 11.3405 2.70659 11.4591 3.12656C11.5778 3.54653 12.3776 9.28482 11.8578 11C11.3381 12.7152 8.8672 12.4055 8.41979 12.4055C8.41979 12.4055 9.52018 19.0234 9.52018 20.0234C9.52018 21.0234 8.62531 22.0002 7.51977 22C6.41445 21.9998 5.52019 21.0234 5.52019 20.0234C5.52019 19.0234 6.61979 12.4055 6.61979 12.4055C6.13314 12.4055 3.69221 12.7171 3.17011 11C2.64801 9.28286 3.48554 3.55 3.58554 3.12656C3.68555 2.70312 4.02274 2.22656 4.51979 2.22656Z"
              fill="var(--general_font_color)"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.9727 2.10156C18.7579 2.10156 18.5606 2.17685 18.4059 2.30248C18.2304 2.40842 18.0523 2.55837 17.8671 2.76038C17.4576 3.20723 16.9346 3.99644 16.2812 5.42242C15.6494 6.80118 15.3212 8.50398 15.1453 9.9044C14.9459 11.491 15.8593 12.8317 17.2096 13.4815C16.9556 14.8171 16.7263 15.8298 16.5383 16.6603L16.5383 16.6603C16.2189 18.0709 16.0185 18.9558 16.0185 20.0041C16.0185 21.7444 17.4895 21.9961 18.0176 21.9961C18.5457 21.9961 20.0215 21.7362 20.0215 20.0041C20.0215 19.305 20.0122 16.4015 20.0012 13.1869C20.0145 13.1271 20.0215 13.0651 20.0215 13.0016V3.00156C20.0215 2.50451 19.5941 2.10156 19.0668 2.10156V2.10639L19.0636 2.10606C19.0633 2.10157 19.0629 2.10157 19.0625 2.10157L19.0582 2.1016L19.0495 2.10171L19.0319 2.10216L19.0184 2.10271C19.0032 2.10195 18.988 2.10156 18.9727 2.10156Z"
              fill="var(--general_font_color)"
            ></path>
          </svg>
          | Приборы
        </div>
        <div class="configurate">
          <div class="remove_button">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8h5H3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="count"></div>
          <div class="add_button">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8V3m0 5v5m0-5h5M8 8H3"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="payment_method">
        <div class="head_order">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="26"
            height="26"
            viewBox="0 0 50.000000 50.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
              fill="var(--general_font_color)"
              stroke="none"
            >
              <path
                d="M206 435 c-65 -19 -121 -36 -124 -39 -3 -3 63 -6 146 -6 l152 0 0 28 c0 31 -16 52 -39 51 -9 0 -69 -16 -135 -34z"
              />
              <path
                d="M60 350 c-18 -18 -20 -33 -20 -148 0 -112 2 -131 18 -145 16 -15 45 -17 194 -17 221 0 208 -10 208 163 0 175 10 167 -210 167 -157 0 -172 -2 -190 -20z m348 -143 c4 -20 -25 -34 -40 -19 -15 15 -1 44 19 40 10 -2 19 -11 21 -21z"
              />
            </g></svg
          >| Оплата картой
        </div>
        <label class="toggle">
          <input type="checkbox" id="payment"/>
          <div class="slider"></div>
        </label>
      </div>
      <div class="phone_number">
        <div class="head_order">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--general_font_color)"
              d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"
            />
          </svg>
          <input
            type="tel"
            placeholder="| Номер телефона"
            id="input_phone_number"
            required
          />
        </div>
      </div>
      <div class="section_comment_for_the_order">
        <div class="head_order">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 20C18.0751 20 23 15.9706 23 11C23 6.02944 18.0751 2 12 2C5.92487 2 1 6.02944 1 11C1 12.9267 1.73994 14.7119 3 16.1759C3 16.1759 3.5 19.3865 2 22C6 22 8 19.3865 8 19.3865C9.23973 19.7826 10.5888 20 12 20ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12ZM17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z"
              fill="var(--general_font_color)"
            ></path></svg
          >| Комментарий к заказу
        </div>
        <textarea placeholder="..." class="comment_for_the_order"></textarea>
      </div>
      <div class="button_clear_order_configurate">Сбросить настройки заказа</div>
      <div class="button_place_an_order">Оформить заказ</div>
    </div>

    `;
  makeSmoothAnimation(cartModal);
  parentHTML.appendChild(cartModal);

  return cartModal;
};
