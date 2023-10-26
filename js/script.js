let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0], //віддає масив, тому в кінці проставлений індекс
    phoneInput = document.querySelector('.contactform_phone'), //бере лише перший елемент зі сторінки 
    mailInput = document.querySelectorAll('.contactform_mail')[0]; // віддає масив

function hover(text) {
  heading.textContent = `${text}`;
}

// chooseBtn.onmouseenter = hover; – такий метод майже не використовується

// chooseBtn.addEventListener('mouseenter', function() {
//   heading.textContent = "Все ок";
// } ); // on - не потрібно, ця команде вже знає що ми будемо використовувати event

// нижче найбліш правильний і популярний зараз спосіб використання івентів
chooseBtn.addEventListener('mouseenter', hover('все ок')); // те саме що вище, але якщо у нас вже є функція, то використовуємо її без ().

chooseBtn.addEventListener('click', function() {
  heading.textContent = 'Нова зміна';
});

