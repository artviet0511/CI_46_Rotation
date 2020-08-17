import "./player.js";
import "./fonm-input.js";
let answer = "toi ten la hieu";
let app = document.getElementById("app");
app.innerHTML = `<div id="players"class="d-flex flex-colomn w-100">
<form-player img="data:image/jpeg;base64,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" name="hieu" point="1000"></form-player>
<form-player img="data:image/jpeg;base64,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" name="viet" point="1000"></form-player>
<form-player img="data:image/jpeg;base64,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" name="tuan" point="1000"></form-player>
<div class='text-head-lg'>ten ban la gi</div>
<div id="show" class="d-flex flex-row"></div>
<div class="d-flex flex-row">
<form-input label="Nhap dap an" type="text" id="input"  ></form-input>
<button type="submit" id="enter" class="btn btn-primary">Enter</button>
</div>
</div>`;
let $show = document.getElementById("show");


let arr_answer = answer.split("");
for (let i = 0; i < arr_answer.length; i++) {
    if (arr_answer[i] == " ") {
        $show.innerHTML += `<div id="${i}" class="show-answer hide">.</div>`
    } else {
        $show.innerHTML += `<div id="${i}" class="show-answer">${arr_answer[i]}</div>`;
    }
}
let key = 1;
abc(key);
let input = document.getElementById("input");
let btn = document.getElementById("enter");
let loop = 0;
btn.addEventListener("click", function () {
    let a = Search(input.value, answer);
    if (a.length == 0) {
        alert(`ko co chu cai ${input.value} nao`);
        loop += 1;
        if (loop == 3) {
            alert("ban da mat luot choi vong nay")
        }
        key += 1;
        if (key > 3) {
            key = 1;
        };
        
    } else {
        alert(`co ${a.length} chu cai ${input.value}`)
        for (let key = 0; key < a.length; key++) {
            document.getElementById(`${a[key]}`).style.color = "black";
        }
        loop = 0;
    }
    abc(key);
})
function Search(input, answer) {
    let search = answer.indexOf(input);
    let arr = [];

    while (search != -1) {
        arr.push(search);
        search = answer.indexOf(input, search + 1);

    };
    return arr;
}
function abc(key) {
    let players = document.querySelector("#players");
    switch (key) {
        case 1:
            players.querySelector("form-player[name='hieu']").classList.add("borderred");
            players.querySelector("form-player[name='viet']").classList.remove("borderred");
            players.querySelector("form-player[name='tuan']").classList.remove("borderred");
            break;

        case 2:
            players.querySelector("form-player[name='hieu']").classList.remove("borderred");
            players.querySelector("form-player[name='viet']").classList.add("borderred");
            players.querySelector("form-player[name='tuan']").classList.remove("borderred");
            break;
        case 3:
            players.querySelector("form-player[name='hieu']").classList.remove("borderred");
            players.querySelector("form-player[name='viet']").classList.remove("borderred");
            players.querySelector("form-player[name='tuan']").classList.add("borderred");
            break;
        default:
            break;
    };
}