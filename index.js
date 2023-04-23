const hamIcon = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-up');
const toggleMenu = document.querySelector('.toggle-menu');

const speakers = [{
  image: 'images/tutor2.png',
  name: 'Lyla Treticov',
  position: 'Secretary General of the Wikimedia Foundation',
  bio: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world population.',
},
{
  image: 'images/tutor3.png',
  name: 'Lyla Treticov',
  position: 'Secretary General of the Wikimedia Foundation',
  bio: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world population.',
},
{
  image: 'images/tutor6.png',
  name: 'Lyla Treticov',
  position: 'Secretary General of the Wikimedia Foundation',
  bio: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world population.',
},
{
  image: 'images/tutor4.png',
  name: 'Lyla Treticov',
  position: 'Secretary General of the Wikimedia Foundation',
  bio: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world population.',
},
{
  image: 'images/tutor5.png',
  name: 'Lyla Treticov',
  position: 'Secretary General of the Wikimedia Foundation',
  bio: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world population.',
},
{
  image: 'images/tuttor1.png',
  name: 'Lyla Treticov',
  position: 'Secretary General of the Wikimedia Foundation',
  bio: 'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the world population.',
},
];

function createSpeakerHTML(speaker) {
  return `
    <article class="speaker-info automated">
      <div class="speaker-img">
        <img class="thumbnail1_1" src="${speaker.image}" alt="image of speaker">
      </div>
      <div class="bio-container">
        <div>
          <h4 class="speaker-tag">${speaker.name}</h4>
          <p class="speaker-title">${speaker.position}</p>
        </div>
        <br>
        <div class="speaker-bio">
          <p class="name">${speaker.bio}</p>
        </div>
      </div>
    </article>
  `;
}

const tutor = document.querySelector('.speaker-container');

function addSpeakers(count) {
  tutor.innerHTML += speakers
    .slice(0, count)
    .map(createSpeakerHTML)
    .join('');
}

if (window.matchMedia('(max-width: 767px)').matches) {
  hamIcon.addEventListener('click', () => {
    toggleMenu.style.display = 'block';
    hamIcon.style.visibility = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
    hamIcon.style.visibility = 'visible';
  });
  addSpeakers(2);
} else {
  addSpeakers(speakers.length);
}