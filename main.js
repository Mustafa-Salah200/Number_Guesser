let select = document.getElementById("select");
let selects = document.querySelector(".selects");
let info = document.getElementById("info");
let input = document.querySelector(".input");
let result = document.getElementById("result");
let restsrt = document.querySelector(".restsrt");


let number = 5;
let random_number;
building();
once_num.innerHTML = number;
chicked();

//start create restart_button
let start = document.createElement("button");
start.appendChild(document.createTextNode("Play Again"));
start.className = "start";
start.onclick = ()=>{
    selects.appendChild(select);
    result.style.opacity = 0;
    result.innerHTML = "";
    restsrt.innerHTML= "";
    building();
    once_num.innerHTML = number;
    chicked();
}
function chicked(){
    select.onchange = ()=>{
        if (select.value ==  "easy"){
            num.innerHTML = "";
            num.innerHTML = 5;
            document.documentElement.style.setProperty("--main-color","#30b7ec");
        }else if (select.value ==  "normal"){
            num.innerHTML = "";
            num.innerHTML = 10;
            document.documentElement.style.setProperty("--main-color","#2c9f22");
        }else if (select.value ==  "hard"){
            num.innerHTML = "";
            num.innerHTML = 20;
            document.documentElement.style.setProperty("--main-color","#e11919");
        }
    }
    if (select.value ==  "easy"){
        document.documentElement.style.setProperty("--main-color","#30b7ec");
        num.innerHTML = "";
        num.innerHTML = 5;
        random_number = (Math.random()*5).toFixed();
    }else if (select.value ==  "normal"){
        document.documentElement.style.setProperty("--main-color","#2c9f22");
        num.innerHTML = "";
        num.innerHTML = 10;
        random_number = (Math.random()*10).toFixed();
    }else if (select.value ==  "hard"){
        document.documentElement.style.setProperty("--main-color","#e11919");
        num.innerHTML = "";
        num.innerHTML = 20;
        random_number = (Math.random()*20).toFixed();
    }
}
function removeall(){
    input.innerHTML = "";
    info.innerHTML = "";
    restsrt.appendChild(start);
    number = 5;
}
function building(){
    let myinfo = `    
    <p>Guess a number between 0 and <span id="num"></span></p>
    <p class="once">Once: <span id="once_num"></span></p>
    `;
    let myinput = `
    <input type="text" name="text" id="text">
    <button id="chick">Chick</button>
    `;
    info.innerHTML = myinfo;
    input.innerHTML = myinput;
    let once_num = document.getElementById("once_num");
    let num = document.getElementById("num");
    let text = document.getElementById("text");
    let but = document.getElementById("chick");
    but.onclick = ()=>{
        if(text.value != ""){
            if(text.value === random_number){
                result.style.backgroundColor = "#1ff9004a";
                selects.innerHTML = "";
                result.style.opacity = 1;
                let result_text = `<p><span style="color: #0c9d23;" class="on">Game Over</span> You <span style="color: #0c9d23;" class="on over">Win!</span></p>`;
                result.innerHTML = result_text;
                removeall();
            } else if (text.value != random_number){
                result.style.backgroundColor = "rgba(249, 0, 0, 0.29)";
                let result_text = `<p><span style="color: #c61212;" class="on">Game Over</span> You <span style="color: #c61212;" class="on over">Lose!</span> The corrent number was <span class="corrent_number">${random_number}</span></p>`;
                console.log(random_number);
                number--;
                once_num.innerHTML = number;
                if(number === 0){
                    selects.innerHTML = "";
                    result.style.opacity = 1;
                    result.innerHTML = result_text;
                    removeall();
                }
            }
            text.value = "";
        }
    }
}