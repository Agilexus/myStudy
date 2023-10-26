let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0], //віддає масив, тому в кінці проставлений індекс
    phoneInput = document.querySelector('.contactform_phone'), //бере лише перший елемент зі сторінки 
    mailInput = document.querySelectorAll('.contactform_mail')[0]; // віддає масив

function hover() {
  heading.textContent = "Все ок";
}
