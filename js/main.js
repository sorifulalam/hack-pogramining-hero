

    const mailestonesData =JSON.parse(data).data
    // console.log(mailestonesData) 

    function loadMailestones(){
        const milestones = document.querySelector(".milestones");

    milestones.innerHTML = `${mailestonesData.map(function(milestones){
            return`<div class="milestone border-b " id="${milestones._id}">
            <div class="flex">
            <div   class="checkbox"><input  type="checkbox" onclick="markMilestones(this ,${milestones._id})" /></div>
            <div  onclick="openMilestone(this ,${milestones._id})">
                <p>
                ${milestones.name}
                <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
            </div>
            

            <div class="hidden_panel ">
            ${milestones.modules.map(function(modules){
                return `<div class="module border-b">
                <p>${modules.name}</p>
                </div>`;
            })
            .join("")
            }
            </div>
        </div>`;

    }).join("")}`
    }
    function openMilestone(milestonElements , id){
        // catugh the parent node and beside the nextelementsibling to div 
        const curentPanel = milestonElements.parentNode.nextElementSibling; 
        //select to show class   
        const showDown = document.querySelector(".show")
        const active = document.querySelector('.active')
        //condition to milestones colir and bold
        if(! milestonElements.classList.contains('active') && active){
            active.classList.remove("active")
        }
       

        milestonElements.classList.toggle("active")

        //remove to privous class if any then clicked one

        if(!curentPanel.classList.contains('show') && showDown)
        showDown.classList.remove("show")

        //toggole curent clicked one and show 
        curentPanel.classList.toggle("show")

        showMilestones(id)
        
    }

    function showMilestones(id){
        const milestonesImage = document.querySelector(".milestoneImage")
        milestonesImage.src = mailestonesData[id].image;
        const titleStore = document.querySelector('.title')
        titleStore.innerText = mailestonesData[id].name;
        const description = document.querySelector('.details')
        description.innerText = mailestonesData[id].description;
        
    }

    function markMilestones(checkbox,id ){
        const doneList = document.querySelector(".doneList")
        const milestoneList = document.querySelector(".milestones")
        const item = document.getElementById(id)
        if(checkbox.checked){
            milestoneList.removeChild(item)
            doneList.appendChild(item)
            true
        }else{
            milestoneList.appendChild(item)
            doneList.removeChild(item)
            milestoneList.sort("${milestones._id}")
            
            
        }
    }
    

    loadMailestones();
