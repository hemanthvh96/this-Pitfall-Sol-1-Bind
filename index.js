// Import stylesheets
import './style.css';

// Write Javascript code!
class CreateLIItems {
  constructor(name) {
    this.name = name;
    const listEl = document.createElement('li');
    listEl.textContent = name;
    const parentUL = document.querySelector('#names');
    parentUL.appendChild(listEl);
  }
}

class NameGenerator {
  constructor() {
    this.names = ['VHS', 'Virat', 'Tom Cruise'];
    this.currentNameIdx = 0;
    const btn = document.querySelector('#submit');
    console.log(this);
    btn.addEventListener('click', this.addName.bind(this));
  }

  addName() {
    console.log(this); // Here 'this' refers to NameGenerator class or object. Because this method addName is called by explicitly telling to bind the value of 'this' in the addName() to the NameGenerator class.
    const name = this.names[this.currentNameIdx];
    new CreateLIItems(name);
    this.currentNameIdx++;
    if (this.currentNameIdx >= this.names.length) {
      this.currentNameIdx = 0;
    }
  }
}

new NameGenerator();
