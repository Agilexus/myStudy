window.addEventListener('DOMContentLoaded', function() { //визначає чи всі тегі вже завантажились на сторінці, тобто чи побудований наш DOM.
  let products = document.querySelectorAll('.product'),
      buttons = document.querySelectorAll('button'),
      openBtn = document.querySelector('.open');

  function createCart() {
    // створили змінні, які будуть створювати елементи на нашій сторінці
    let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        closeBtn = document.createElement('button');

    // До елементів які ми будемо створювати додаємо класи
    cart.classList.add('cart');  //Саме classList використовується в сучасному JS, а не className. Воно дозволяє маніпулювати класами в JS. Ця властивисть дозволяє додавати, перевіряти, видаляти класи і деякі інші операції.
    field.classList.add('cart-field');
    closeBtn.classList.add('close');

    // Додаємо текст
    heading.textContent = "В нашій корзині:";
    closeBtn.textContent = "Закрити";

    // І фактично додоємо елементи на нашу сторінку в кінець нашого boddy за допомогою .appendChild
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }

  createCart();

  // Вище ми визвали createCart, тому елементи були створені, а значить тепер ми дістаємо і присвоюємо класи до зміних із документу
  let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      close = document.querySelector('.close');

  // Тепер створюємо і викликаємо функції, які будуть відкривати і закривати коризну.
  function openCart() {
    cart.style.display = 'block';
  }

  function closeCart() {
    cart.style.display = 'none';
  }

  openBtn.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);

  // Додавання товару в коризину. Для цього нам потрібно копіювати картку товару і з копії видалити кнопку "додати в коризну"
  // Спосіб 1, старий але робочий варіант:
  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', function() {
  //     let item = products[i].cloneNode(true), //cloneNode(true) - дозволяє клонувати об‘єкт, а параметр true дозволяє зробити глибоке копіювання, в нашому випадку дів і все що всередині нього. Якщо не вказати true то скопіюється пустий дів.
  //         btn = item.querySelector('button'); //знаходимо кнопку в нашому item
      
  //     //btn.textContent = "Видалити"; - змінить текст кнопки
  //     btn.remove(); // видаляємо кнопку
  //     field.appendChild(item); // додаємо товар в коризну
  //     products[i].remove();
  //   });
  // }

  // Спосіб 2 – більш сучасний і правильніший
  // В querySelector є метод який дозволяє перебирати елементи без циклу – forEaach
  // Функція нижче може приймати 3 аргументи, які є не обов‘язковими (можна використовувати 1 з них): Елемент (це кожен елемент в перебираючому масиві), Індекс (індекс елементу який перебираємо), Масив (весь масив)
  buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
      let item = products[i].cloneNode(true), //cloneNode(true) - дозволяє клонувати об‘єкт, а параметр true дозволяє зробити глибоке копіювання, в нашому випадку дів і все що всередині нього. Якщо не вказати true то скопіюється пустий дів.
          btn = item.querySelector('button'); //знаходимо кнопку в нашому item
      
      btn.remove(); // видаляємо кнопку
      field.appendChild(item); // додаємо товар в коризну
      products[i].remove();
      // Стрілочна функція создавалась не для того, щоб замінити function. 
      // Вона використовується в більш сучасних проектах де використовується контекст виклику this.
      // Тому не в усіх випадках можна замінити функцію на стрілочну...
      // На даний момент потрібно запам‘ятати що стрілочна функція має бути не скрізь і не завжди
    });
  });

})



