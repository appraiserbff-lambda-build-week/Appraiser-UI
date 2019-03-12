// Get Variables
let peeps = document.querySelectorAll('.person'),
    cta = document.querySelector('.ctaholder'),
    header = document.querySelector('header'),
    us = document.querySelector('.us'),
    nav = document.querySelector('nav'),
    main = document.querySelector('.main'),
    sticky = cta.offsetTop;

// People Class
class People {
    constructor(person) {
        this.person = person;
        this.data = this.person.dataset.person;
        this.person.style.background = `linear-gradient( rgba(0, 0, 0, 0.25), rgba(50, 50, 50, 0.45)), url('images/${this.data}.jpg') scroll no-repeat center / contain`;
    }
}

// Plinks Class
class Plinks extends People {
    constructor(person) {
        super(person);
        this.person = person;
        this.name = this.person.querySelector('h3').innerText;
        this.position = this.person.querySelector('h4').innerText;
        this.id = this.person.id;
        // ID Link
        this.link = document.createElement('a');
        this.link.href = `#${this.id}`;
        this.link.innerText = this.name;
        const us = document.querySelector('.us');
        us.appendChild(this.link);
        // GitHub
        this.gh = document.createElement('a');
        this.gh.href = `${pdata[this.id][0]}`;
        let git = document.createElement('img');
        git.src = 'images/gh.png';
        git.classList.add('git');
        this.gh.appendChild(git);
        // LinkedIn
        this.in = document.createElement('a');
        this.in.href = `${pdata[this.id][1]}`;
        let linkedIn = document.createElement('img');
        linkedIn.src = 'images/in.png';
        linkedIn.classList.add('in');
        this.in.appendChild(linkedIn);
        // Add to .person
        this.person.appendChild(this.gh);
        this.person.appendChild(this.in);
    }
}

// GitHub/LinkedIn Links
let pdata = {
    gannon: ['https://github.com/GannonDetroit',
        'https://www.linkedin.com/in/gannon-darcy-b8345073/'],
    john: ['https://github.com/johnoro',
        'https://www.linkedin.com/in/john-o-rourke/'],
    aj: ['https://github.com/ajb85',
        'https://www.linkedin.com/in/andrew-brush-58205b122/'],
    tom: ['https://github.com/TomHessburg',
        'https://www.linkedin.com/in/thomas-hessburg-596948180/'],
    will: ['https://github.com/brellin',
        'https://www.linkedin.com/in/brellin/'],
    sammy: ['https://github.com/Captmoonshot',
        'https://www.linkedin.com/in/sammy-lee-89944282/'],
    manjula: ['https://github.com/manjulamishra',
        'https://www.linkedin.com/in/manjula-mishra-8059821b/']
};

// CTA Scroll
window.onscroll = function () { engage() };
function engage() {
    if (window.pageYOffset >= sticky) {
        cta.classList.add('sticky');
        header.classList.add('nojump');
        header.classList.add('no-jump');
    } else {
        cta.classList.remove('sticky');
        header.classList.remove('nojump');
        header.classList.remove('no-jump');
    }
}

// Push peeps to People and Plinks Class
peeps.forEach(per => new People(per));
peeps.forEach(per => new Plinks(per));

// Add login link
let login = document.createElement('a');
login.innerHTML = 'Log In';
login.href = 'https://ajbrush.com/home/';
nav.appendChild(login);

// CTA href
let ctas = cta.querySelectorAll('.cta');
ctas.forEach(cta => cta.href = 'https://ajbrush.com/home/');