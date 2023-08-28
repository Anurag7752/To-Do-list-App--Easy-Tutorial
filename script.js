const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask() {
    if (inputBox.value === '') {
        alert("you must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    SsveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagname === "li") {
        e.target.classList.taggle("checked");
        SsveData();

    }
    else if (e.target.tagname === "SPAN") {
        e.target.parentElement.remove();
        SsveData();
    }
}, fslse);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);

}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
SsveData();


