/**
 * Отображает меню в header
 * 
 * @param {object} button Конпка, по которой проходит клик
 * @param {object} navigation Отображаемый блок меню, которому задаётся display block
 * @param {object} wrp Фоновое затемнение блока меню
 */
function navOpener() {
  let button = document.getElementById('burger');

  let navigation = document.getElementById('menu');

  let wrp = document.getElementById('wrp');

  button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
    wrp.classList.toggle('display-block');
  });
}
navOpener();

document.querySelector('.filter__dropbtn-main').addEventListener('click', function (elem) {
  elem = document.querySelector('.filter__dropdown-content-main')
  elem.classList.toggle('display-block');
})
/**
 * При нажатии на выбранный блок внутри filter открывает его содержимое, проверяет, открыт ли предыдущий и закрывает его
 * 
 * @param {object} event Выбранный блок, по которому прошёл клик
 */
function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".filter__dropdown-content-main > details[open]").forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
  .querySelectorAll(".filter__dropdown-content-main > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));

// Массив с продуктами
const products = [{
    id: 1,
    title: 'Notebook',
    price: 2000,
    img: 'card1.jpg'
  },
  {
    id: 2,
    title: 'Mouse',
    price: 20,
    img: 'card12.jpg'
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 200,
    img: 'card3.jpg'
  },
  {
    id: 4,
    title: 'Gamepad',
    price: 50,
    img: 'card4.jpg'
  },
  {
    id: 5,
    title: 'Mouse',
    price: 20,
    img: 'card7.jpg'
  },
  {
    id: 6,
    title: 'Keyboard',
    price: 200,
    img: 'card8.jpg'
  },
  {
    id: 7,
    title: 'Gamepad',
    price: 50,
    img: 'card9.jpg'
  },
  {
    id: 8,
    title: 'Mouse',
    price: 20,
    img: 'card10.jpg'
  },
  {
    id: 9,
    title: 'Keyboard',
    price: 200,
    img: 'card11.jpg'
  }
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
  return `<li class="cards__item">
            <div class="cards__img-wrapper">
              <div class="cards__img-overlay"><img class="cards__item-img" src="./img/${item.img}" alt="card${item.id}"></div>
                <button class="cards__overlay-btn"><img class="cards__btn-basket" src="./img/basket-mfi.svg" alt="basket-mfi"> <span class="cards__btn-text">Add to cart</span></button>
            </div>
            <h3 class="cards__item-title">${item.title}</h3>
            <p class="cards__item-description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            <a class="cards__item-price" href="#">$${item.price}.00</a>
          </li>`
};
const renderPage = list => {
  const productsList = list.map(item => renderProduct(item));
  console.log(productsList);
  document.querySelector('.cards__list').innerHTML = productsList.join('');
};
// Я избавился от запятых путём того, что добавил в передаваемый productsList метод join, который удаляет псевдоэлементы ",", которыми отделялись строки, теперь на их месте пустая строка!
renderPage(products);