
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let progress = document.getElementById('progress');


function showCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;

    progress.style.width = (sec /60)*100 +'%'
}

setInterval(showCurrentTime, 1000)



// my practice is at the bottom

// let hour = document.getElementById('hour');
// let minute = document.getElementById('minute');
// let second = document.getElementById('second');
// let progress = document.getElementById('progress');


// function showCurrentTime() {
//     let date = new Date();
//     let hr = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();

//     hour.innerText = hr;
//     minute.innerText = min;
//     second.innerText = sec;

//     progress.style.width = (sec /60)*100 +'%'
// }

// setInterval(showCurrentTime, 1000)


//another practice 

// let hour = document.getElementById('hour');
// let minute = document.getElementById('minute');
// let second = document.getElementById('second');
// let progress = document.getElementById('progress');


// function showCurrentTime() {
//     let date = new Date();
//     let hr = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();

//     hour.innerText = hr;
//     minute.innerText = min;
//     second.innerText = sec;

//     progress.style.width = (sec /60)*100 +'%'
// }

// setInterval(showCurrentTime, 1000)