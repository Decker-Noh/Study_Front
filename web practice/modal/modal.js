const modalButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const openModal = () => {
    modal.classList.remove('hidden');
}
modalButton.addEventListener('click', openModal);


const closeButton = document.getElementById('close');
const modal_overlay = document.querySelector('.modal_overlay');
const closeModal = () => {
    modal.classList.add('hidden')
}
closeButton.addEventListener('click', closeModal);
modal_overlay.addEventListener('click', closeModal);