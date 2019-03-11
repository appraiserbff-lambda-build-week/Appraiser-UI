class People {
    constructor(person) {
        this.person = person;
        this.name = person.querySelector('h3').innerText;
        console.log(this.name)
    }
}

let peeps = document.querySelectorAll('.person');
peeps.forEach(per => new People(per));