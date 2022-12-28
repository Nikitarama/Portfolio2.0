var typed = new Typed(".word", {
    strings: ["I am Nikita Ramawoothar"],
    typeSpeed: 150,
    backSpeed: 1,
    loop: false
})

const scrDisplay = document.getElementById("scrDisplay");
const calDisplay = document.getElementById("calDisplay");
let emptyArr = [];

function display(num){
    switch(num){
        case `.`:
        if(emptyArr.includes(`.`)){
            scrDisplay.innerHTML = scrDisplay.innerHTML;

        }else{
            scrDisplay.innerHTML += num;
            emptyArr.push(num)
            console.log(emptyArr)
        }
        break;
        case `+`:
        case `-`:
        case `*`:
        case `/`:
            scrDisplay.innerHTML += num;
            emptyArr = []
            console.log()
        break;
            default:
                emptyArr.push(num)
            console.log(num) 
            scrDisplay.innerHTML += num;
            console.log(emptyArr)
    }
}
function allClear(){
    scrDisplay.innerHTML = '';
    calDisplay.innerHTML = '';
    emptyArr = []
    console.log(emptyArr)
}

function del(){
    scrDisplay.innerText = scrDisplay.innerText.slice(0,-1);
    emptyArr.pop()
    console.log(emptyArr)
}

function calculate(){
    calDisplay.innerHTML = eval(scrDisplay.innerText);
}