const hamIcon = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-icon');
const desktopNav = document.querySelector('.mobile-toggle');

const speakers = [
  {
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

// menu toggling here
if (window.innerWidth < 768) {
  hamIcon.addEventListener('click', () => {
    desktopNav.style.display = 'block';
    hamIcon.style.visibility = 'hidden';
  });
  closeBtn.addEventListener('click', () => {
    desktopNav.style.display = 'none';
    hamIcon.style.visibility = 'visible';
  });

  const tutor = document.querySelector('.speaker-container');
  const moreTutors = document.querySelector('.expand-sp-list');

  let expand = 0;
  moreTutors.addEventListener('click', () => {
    if (expand === 0) {
      tutor.innerHTML += speakers
        .map(
          (teacher) => `
   <div class="speaker-info automated">
                <div class="speaker-img">
                    <img class="thumbnail1_1" src='${teacher.image}' alt="image of speaker">
                </div>
                <div class="bio-container">
                    <div>
                        <h4 class="speaker-tag">${teacher.name}</h4>
                        <p class="speaker-title">
                            ${teacher.position}
                        </p>
                    </div>
                    <br>
                    <div class="speaker-bio">
                        <p class="name">${teacher.bio}</p>
                    </div>
                </div>
            </div>
            `,
        )
        .join('');
      expand += 1;
    } else {
      const bot = document.querySelectorAll('.automated');
      for (let i = 0; i < bot.length; i += 1) {
        const item = bot[i];
        item.parentNode.removeChild(item);
      }
      expand = 0;
    }
  });
} else {
  const tutor = document.querySelector('.speaker-container');
  tutor.innerHTML += speakers.map((teacher) => `
  <div class="speaker-info automated">
                <div class="speaker-img">
                    <img class="thumbnail1_1" src='${teacher.image}' alt="image of speaker">
                </div>
                <div class="bio-container">
                    <div>
                        <h4 class="speaker-tag">${teacher.name}</h4>
                        <p class="speaker-title">
                            ${teacher.position}
                        </p>
                    </div>
                    <br>
                    <div class="speaker-bio">
                        <p class="name">${teacher.bio}</p>
                    </div>
                </div>
            </div>
            `).join('');
}
