const allBtn = document.getElementsByClassName('bg-blue-600')
    for(let btn of allBtn){
      btn.addEventListener('click', function(event){

   
   const title =  event.target.parentNode.parentNode.childNodes[3].innerText;
       
   let currentTask = document.getElementById("currentTask")
   let currentTaskConvart = parseInt(currentTask.innerText)
   currentTask.innerText = currentTaskConvart - 1;
   
       
   if(currentTaskConvart === 1){
    alert("Board Updated Successfully")
    alert("congrates!!! You have completed all the current task")
    }else{
    alert("Board Updated Successfully")
    } 

   let taskCount = document.getElementById("taskCount")
   let taskCountCovart = parseInt(taskCount.innerText)
   taskCount.innerText = taskCountCovart + 1;


   const commentBox = document.getElementById("commentBox")
   const pTag = document.createElement("p");
   pTag.innerText = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`
   pTag.style.backgroundColor ="#F4F7FF" ;
   pTag.style.border = "2px solid aqua";
   pTag.style.borderRadius = "10px";
   pTag.style.padding = "15px 20px";
   pTag.style.margin = "15px 20px";
   commentBox.appendChild(pTag)

    event.target.disabled = true;
    event.target.style.backgroundColor = "#7e7ee5";

      })
     
    }

    // commentBox emty 
document.getElementById("clearHistory").addEventListener("click",function(){
    document.getElementById("commentBox").innerText = "";
    
})

// go to blogPage 

const blogPage = document.getElementById("blogPage")
blogPage.style.cursor = "pointer";
blogPage.addEventListener("click", function(){
    window.location.href = "blogs.html";
})

// Tody's dateDisplay 

const todyDate = new Date();
const tody = todyDate.toDateString();
document.getElementById("dateDisplay").innerText = tody;




document.getElementById("chengeTheme").addEventListener("click",function(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgb = `${r},${g},${b}`
    document.getElementById("body").style.backgroundColor = `rgb(${rgb})`
    
})