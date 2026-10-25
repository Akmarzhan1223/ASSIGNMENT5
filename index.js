const userProfile = {
    name: "Student",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["chess", "dance", "games"]
};

console.log(userProfile);

let currentYear = new Date().getFullYear();
let age = currentYear - userProfile.birthYear;
let months = age * 12;

console.log("Age: " + age);
console.log("Months: " + months);
console.log("Hobbies: " + userProfile.hobbies.length);

let form = document.querySelector("form");
let nameInput = document.querySelector("input[name='Username']");
let yearInput = document.querySelector("input[name='Birth year']");

let result = document.createElement("div");
result.id = "result";
form.after(result);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    userProfile.name = nameInput.value;
    userProfile.birthYear = Number(yearInput.value);

    let newAge = currentYear - userProfile.birthYear;

    result.innerHTML =
        "<p>Name: " + userProfile.name + "</p>" +
        "<p>Birth Year: " + userProfile.birthYear + "</p>" +
        "<p>Age: " + newAge + " years (" + (newAge * 12) + " months)</p>" +
        "<p>Developer: " + userProfile.isDeveloper + "</p>" +
        "<p>Hobbies: " + userProfile.hobbies.join(", ") + "</p>";

    console.log("updated", userProfile);
});

let myList = document.querySelector("ul");
let hobbyInput = document.getElementById("hobbyInput");
let addButton = document.getElementById("addButtton");
let removeButton = document.getElementById("removeButton");

for (let i = 0; i < userProfile.hobbies.length; i++) {
    let li = document.createElement("li");
    li.textContent = userProfile.hobbies[i];
    myList.appendChild(li);
}

addButton.addEventListener("click", function() {
    if (hobbyInput.value == "") {
        alert("write something");
        return;
    }

    let li = document.createElement("li");
    li.textContent = hobbyInput.value;
    myList.appendChild(li);

    userProfile.hobbies.push(hobbyInput.value);
    hobbyInput.value = "";
});

removeButton.addEventListener("click", function() {
    if (myList.lastElementChild) {
        myList.removeChild(myList.lastElementChild);
        userProfile.hobbies.pop();
    } else {
        alert("empty");
    }
});