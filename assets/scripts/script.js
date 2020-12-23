// Sets color scheme depending on which House is chosen on index.html

function chooseHouse(obj) {
    let houseChosen = obj.id;

    console.log(houseChosen);
    console.log(this);

    let answers = document.getElementsByClassName("answer")
    console.log(answers);

    if (houseChosen === "gryffindor") {
        answers.classList.add("gryffindor-color");
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