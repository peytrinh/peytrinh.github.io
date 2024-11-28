// Footer
const footer = document.createElement('footer');
footer.id = "site-footer";
document.body.appendChild(footer);

const year = new Date().getFullYear();
footer.innerHTML = `&copy; Peyton Trinh, ${year}`;

// Greeting message
const heading = document.querySelector('main h1') || document.querySelector('main h2');
if (heading) {
    const greeting = document.createElement('h2');
    greeting.className = "greeting";
    document.body.appendChild(greeting);

    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.innerText = "Good morning!";
    } else if (hours < 17) {
        greeting.innerText = "Good afternoon!";
    } else {
        greeting.innerText = "Good evening!";
    }
    heading.insertAdjacentElement('afterend', greeting);
}

// Alert button
const alertButton = document.createElement('button');
alertButton.id = "alert-button";
alertButton.innerText = "Click Me";
document.querySelector('main').appendChild(alertButton);

alertButton.onclick = () => {
    alert("Hello world!");
};

alertButton.onmouseover = () => {
    alertButton.innerText = "Hovered!";
};
alertButton.onmouseout = () => {
    alertButton.innerText = "Click Me";
};

// Numbered list
const numList = document.createElement('ol');
document.querySelector('main').appendChild(numList);

for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement('li');
    if (i % 2 === 0) {
        listItem.textContent = `Even: ${i}`;
    } else {
        listItem.textContent = `Odd: ${i}`;
    }
    numList.appendChild(listItem); // appends every iteration
}
