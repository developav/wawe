document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.quests__group-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.guests__card').forEach(function(workСontainer){
                workСontainer.classList.remove('guests__card-active')
            });
            document.querySelector(`[data-target = "${path}"]`).classList.add('guests__card-active')
        });
        
    });
});

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){

        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    });
}

