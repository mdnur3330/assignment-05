

// function workCompleted(para){
//     alert('khicu')
//     let currentTask = document.getElementById("currentTask")
//     let currentTaskConvart = parseInt(currentTask.innerText)
//     currentTask.innerText = currentTaskConvart - 1;
    
//     let taskCount = document.getElementById("taskCount")
//     let taskCountCovart = parseInt(taskCount.innerText)
//     taskCount.innerText = taskCountCovart + 1;

//     const commentBox = document.getElementById("commentBox")
    
//     const pTag = document.createElement("p");
//     pTag.innerText = `You have completed the task ${para} at ${new Date().toLocaleTimeString()}`
//     pTag.style.backgroundColor ="#F4F7FF" ;
//     pTag.style.border = "2px solid red";
//     pTag.style.borderRadius = "10px";
//     pTag.style.padding = "15px 20px";
//     pTag.style.margin = "15px 20px";
//     commentBox.appendChild(pTag)

    
// }


// const allBtn = document.getElementsByClassName('bg-blue-600')
//     for(let btn of allBtn){
//       btn.addEventListener('click', function(event){
//         // event.target.disabled = true;
//       })
     
//     }


document.getElementById("chengeTheme").addEventListener("click",function(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgb = `${r},${g},${b}`
    document.getElementById("body").style.backgroundColor = `rgb(${rgb})`
    
    
})
function getRGBcolor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgb = `${r},${g},${b}`
    document.getElementById("body").style.backgroundColor = `rgb(${rgb})`
    
    
}
getRGBcolor()