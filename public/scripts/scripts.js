window.addEventListener('load', () => { 

// Menu Accordion

const accordion = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    accordion[i].classList.toggle('active');
  });
}

});
