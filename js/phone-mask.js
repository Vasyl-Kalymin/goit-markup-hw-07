const selector = document.querySelector('.send-form-field[type="tell"]');

const im = new Inputmask('+38(099) 999-99-99');
im.mask(selector);