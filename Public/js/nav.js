const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const shade = document.querySelector(".mtn");

//create a function to manage menu button when clicked
menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           cancelBtn.classList.add("show");
           shade.classList.add = "#fff";
         }

         cancelBtn.onclick = () => {
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           cancelBtn.style.color = "#ff3d00";
           shade.classList.remove("hide");
         }
        //  searchBtn.onclick = ()=>{
        //    cancelBtn.classList.add("show");
        //  }
         










         