/* Starting Question 1 */
let inputNumber = document.querySelector("#input_age");
let button = document.querySelector("button");

button.onclick = () => {
    if (inputNumber.value < 18) {
        console.log("The user is under 18 and cannot login");
    }
    else {
        console.log("You are over 18 years old, come in!", inputNumber.value);
    }
}
/* Ending Question 1 */


/* Starting Question 2 */

document.querySelector("#button_next").onclick = () => {
    console.log(document.querySelector("#seasons").value);

    let typeRadio = document.querySelector("#seasons");

    console.log(typeRadio.checked);
    if (typeRadio.checked) {
        document.querySelector('#button_next').onclick = function () {
            window.location.href = '/index.html';
        };
        /* Show True */
    }
    else {
        /* Show False */
    }
}

/* Ending Question 2 */