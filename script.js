/* mobile menu */
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
/* -----------------------main projects--------------------*/

const works = [
  {
    id: 1,
    title: 'Tonic',
    farme: ['CANOPY', 'Back End Dev', 2015],
    image: './Images/1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description1: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    type: 1,
  },

  {
    id: 2,
    title: 'Multi-Post Stories',
    farme: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: './Images/2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description1: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    type: 2,
  },

  {
    id: 3,
    title: 'Tonic',
    farme: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: './Images/3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description1: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    type: 1,
  },

  {
    id: 4,
    title: 'Multi-Post Stories',
    farme: ['Uber', 'Lead Developer', 2018],
    image: './Images/4.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description1: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    type: 2,
  },
];
function createWorkCard() {
  works.forEach((work) => {
    const sampleTemplateModal = `
  <section class="work-container${work.type}">
  <img src=${work.image} alt="">
  <div class="work">
    <h2>${work.title}</h2>
    <div class="facebook"> <p>${work.farme[0]}</p>
      <ul>
         <li>${work.farme[1]}</li>
         <li>${work.farme[2]}</li>
      </ul>
    </div>

  <p class="work-p">${work.description}</p>
  <ul class="work-list">
     <li><a href=""> html</a></li>
     <li class="desktop_link"><a href=""> Ruby on rails</a></li>
     <li><a href=""> css</a></li>
     <li><a href=""> javaScript</a></li>
   </ul>
   <button class="btn modal-btn" id="${work.id}">See project</button>
 </div>
</section>
`;
    const element = document.querySelector('.my-works');
    element.innerHTML += sampleTemplateModal;
  });
}
createWorkCard();
/* -----------------------popup window-------------------------*/

const openPopButtons = document.querySelectorAll('.modal-btn');
const overlay = document.querySelector('#overlay');
function createModal(id, title, image, description, farme) {
  const sampleTemplateModal = `
  <section class="modal-work">
        <div class="header-wrapper">
            <h2>${title}</h2>
             <a href="#" id="crossBtnImg">
                <img src="./Images/Cancel.png" alt="" class="data-close-button">
            </a>
        </div>
        <div class="facebook"> <p>${farme[0]}</p>
           <ul>
              <li>${farme[1]}</li>
              <li>${farme[2]}</li>
           </ul>
        </div>
        <img src="${image}" alt="" class="modal-image">
        <div class="info-skill">
          <p class="modal-text">${description}</p>

            <div class="skill-button">
                <ul class="work-list">
                  <li><a href=""> html</a></li>
                  <li><a href=""> css</a></li>
                  <li><a href=""> javaScript</a></li>
               <li class="desktop_link"><a href=""> Ruby</a></li>
               <li class="desktop_link"><a href=""> Bootstrap</a></li>
                  </ul> <hr>
              <div class="button-wrapper">
                  <button class="btn pop-up-btn "> <span>See Live</span><a href="#"><img src="./Images/Icon.png" alt=""></a>
                  </button>
                  <button class="btn pop-up-btn "><span>See Source</span><a href="#"> <img src="./Images/Vector.png" alt=""></a>
                  </button>
              </div>
          </div>
      </div>
    </section>
`;

  return sampleTemplateModal;
}

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
    const prj = works[name - 1];
    const modal = createModal(prj.id, prj.title,
      prj.image, prj.description1, prj.farme);
    const element = document.createElement('div');
    element.innerHTML = modal;
    element.classList.add('modal');
    const addElement = document.getElementById('overlay');
    addElement.after(element);
    openModal(element);
    const closePopButtons = document.querySelectorAll('.data-close-button');
    closePopButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  });
});
/* -----------------------validate contact form---------------------------*/
const form = document.querySelector('.contact-form');
const email = document.querySelector('#email');
const errMsg = document.querySelector('.err-msg');
const msgText = 'Write the email in lowercase, please';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errMsg.textContent = msgText;
    errMsg.style.display = 'flex';
    errMsg.style.color = 'white';
    e.preventDefault();
  } else {
    errMsg.style.display = 'none';
  }
});