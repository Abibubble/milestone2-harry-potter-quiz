function chooseHouse(obj) {
    let houseChosen = obj.id;
    document.getElementsByClassName("answer").classList.remove("answer-color");
    if (houseChosen === "gryffindor") {
        document.getElementsByClassName("answer").classList.add("gryffindor-color");
    } else if (houseChosen === "slytherin") {
        document.getElementsByClassName("answer").classList.add("slytherin-color");
    } else if (houseChosen === "hufflepuff") {
        document.getElementsByClassName("answer").classList.add("hufflepuff-color");
    } else if (houseChosen === "ravenclaw") {
        document.getElementsByClassName("answer").classList.add("ravenclaw-color");
    } else {
        alert("Error! House not found. Please try again.");
    }
}

function checkAnswer() {

}