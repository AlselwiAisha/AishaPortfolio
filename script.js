/*mobile menu*/
const menu = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar-links');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('open-menu');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  nav.classList.remove('open-menu');
};

/*-----------------------popup window-------------------------*/

const openPopButtons=document.querySelectorAll('.modal-btn');
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
function createModal(id, title, image, description, skills) {
  const sampleTemplateModal = `
  <section class="modal-work">
        <div class="header-wrapper">
            <h2>${title}</h2>
            <a href="#/" id="crossBtnImg">
                <img src="./Images/Cancel.png" alt="" class="data-close-button">
            </a>
        </div>
        <ul class="modal-facebook">
            <li id="canopy-text">CANOPY</li>
            <li>Back End Dev</li>
            <li>2015</li>
        </ul>
        <img src="${image}" alt="" class="snap-shot-imagea modal-image">
        <div class="info-skill-container">
          <p class="modal-text">${description}</p>

            <div class="skill-button-container">
              <ul class="work-list">
                <li>${skills[0]}</li>
                <li>${skills[1]}</li>
                <li>${skills[2]}</li>
              </ul>
              <div class="button-wrapper">
                  <button class="pop-up-btn btn">
                  <span>See Live</span>
                  <a href="#"><img src="./Images/Icon.png" alt=""></a>
                  </button>
                  <button class="pop-up-btn btn">
                  <span>See Source</span>
                      <a href="#"> <img src="./Images/Vector.png" alt=""></a>
                  </button>
              </div>
          </div>
      </div>
    </section>
`;
  return sampleTemplateModal;
}

const workCard = {
  card1: {
    id: 1,
    title: 'Tonic',
    image: './Images/1.png',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },

  card2: {
    id: 2,
    title: 'Multi-Post Stories',
    image: './Images/2.png',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },

  card3: {
    id: 3,
    title: 'Tonic',
    image: './Images/3.png',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },

  card4: {
    id: 4,
    title: 'Multi-Post Stories',
    image: './Images/4.png',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
};
console.log(workCard)
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openPopButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const name = e.target.id;
    const prj =  Object.values(workCard)[name-1];
    const modal = createModal(prj.id, prj.title,
      prj.image, prj.description, prj.skills);
    const element = document.createElement('div');
    element.innerHTML = modal;
    element.classList.add('modal');
    element.setAttribute('id', 'test');
    const addElement = document.getElementById('work');
    addElement.after(element);
    element.after(overlay);
    openModal(element);
    const figures = document.querySelectorAll('.project-showing figure');
    figures.forEach((figure) => {
      figure.style.width = '100%';
      figure.style.marginTop = '2rem';
    });
    const closePopButtons = document.querySelectorAll('.data-close-button');

    closePopButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  });
});
