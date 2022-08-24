const name = document.querySelector('.name');
let enterName = '';
const modal = document.getElementById('myModal');

// registration
document.querySelector('.modal-body').onclick = (event) => {
   if (event.target.classList.contains('exit-enter')) {
      name.textContent = enterName;
      modal.style.display = "none";
   };
};
// end registration

