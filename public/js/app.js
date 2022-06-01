'use strict'
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
let messageOne = document.querySelector('#message-1');
let messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne = 'Error';
                console.log(data.error)
            } else {
                console.log(data.location);
                console.log(data.forecast)
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
});