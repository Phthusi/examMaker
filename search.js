class Search{
    constructor(){
        this.sortOptForm = document.querySelector("#sort-options-form");
        this.sortBy = this.sortOptForm["sort-opt"].value;
        this.searchOptions = document.querySelectorAll("#sort-options-form input");
        this.searchBox = document.querySelector("#search-exam");
        console.log(this.searchBox);
        this.addSearchBoxEventListener();
        this.addSortTypeEventListener();
    }

    getExams(){
        /*
        fetch exams from some source i.e database or memory
        */
    }

    addSortTypeEventListener(){
        this.searchOptions.forEach((option)=>{
            option.addEventListener("click",(event)=>{
                let selectedSortBy = event.target.value;
                if (this.sortBy === selectedSortBy){
                    return
                }
                this.sortBy = selectedSortBy;
                console.log("changed",this.sortBy)
            });
        });
    }
}