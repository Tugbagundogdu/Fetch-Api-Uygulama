const catResult = document.getElementById("cat-result");
const dogResult = document.getElementById("dog-result");
const catButton = document.getElementById("cat-btn");
const dogButton = document.getElementById("dog-btn");

catButton.addEventListener('click', getCatResult)

dogButton.addEventListener('click', getDogResult)

function getCatResult(){
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        catResult.innerHTML = `
        <img src = ${data.file} alt = "cat"/>
        `
    })
}

function getDogResult(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data =>{
        if(data.url.includes('mp4')){
            getDogResult();
        }else{
        dogResult.innerHTML = `
        
        <img src = ${data.url} alt ="dog"/>
        `
    }})
}