// your JavaScript file
const container = document.querySelector('#container');

// div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// p
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style["color"] = "red";

container.appendChild(para);

// h3
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style["color"] = "blue";

container.appendChild(h3);

// new div
const subdiv = document.createElement("div");
subdiv.classList.add("sub-content");
subdiv.style.cssText = "border: 2px solid black; background-color: pink;";

// subdiv h1
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

// subdiv p
const subdivp = document.createElement("p");
subdivp.textContent = "ME TOO!";

// append all
subdiv.appendChild(h1);
subdiv.appendChild(subdivp);

container.appendChild(subdiv);

const button = document.createElement("button");
button.textContent = "Click me!";
button.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

container.appendChild(button);

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
console.log(buttons.length);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});



