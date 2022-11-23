const menu = document.querySelector('.btn-more');
const navigation = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
    overlay.classList.toggle('active');
});