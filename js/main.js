

    const mailestonesData =JSON.parse(data).data
    // console.log(mailestonesData) 

    function loadMailestones(){
        const milestones = document.querySelector(".milestones");

    milestones.innerHTML = `${mailestonesData.map(function(milestones){
            return`<div class="milestone border-b">
            <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick="openMilestone(this ,${milestones._id})">
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

    loadMailestones();
