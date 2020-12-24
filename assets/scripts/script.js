// Sets color scheme depending on which House is chosen on index.html

function chooseHouse(obj) {
    const houseChosen = obj.id;

    console.log(houseChosen); // Gets the correct id - gryffindor
    console.log(this); // Yet this isn't working? - Window, etc.

    let answers = document.getElementsByClassName("answer")
    console.log(answers); // HTML collection

    if (houseChosen === "gryffindor") {
        answers.classList.add("gryffindor-color"); // TypeError, cannot read 'add' of undefined
    } else if (houseChosen === "slytherin") {
        answers.classList.add("slytherin-color");
    } else if (houseChosen === "hufflepuff") {
        answers.classList.add("hufflepuff-color");
    } else if (houseChosen === "ravenclaw") {
        answers.classList.add("ravenclaw-color");
    } else {
        alert("Error! House not found. Please try again.");
    };
}