window.addEventListener('load', () => { 

  // Menu Accordion
  activeAccordion();

  // Modal
  modal();
});

function activeAccordion() {
  const accordion = document.getElementsByClassName('contentBx');

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle('active');
    });
  }
}

function modal() {
  const modalElement = document.querySelector('.modal');

  modalElement.addEventListener('click', () => {
    modalElement.classList.add('remove');
  });
}