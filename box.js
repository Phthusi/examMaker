import { MyDate } from "./date.js"

export class Box{
    static examNames = [];
    static examCount = -1;
    constructor(){
        this.examName = this.genericExamName();
        this.creationDate = new MyDate()        
    }

    removeExamName(nameToRemove){
        let newExamNames = [];
        for(let item of Box.examNames){
            if(this.examName=== item) continue;
            newExamNames.push(item);
        }
        examNames = newExamNames;
        console.log("removed"+nameToRemove,examNames)
    }

    genericExamName(){
        Box.examCount++;
        console.log(Box.examCount)
        let examName; 
        examName = Box.examCount===0 ? "Exam": `Exam(${Box.examCount})`;
        console.log(Box.examNames)
        while (Box.examNames.includes(examName)){
            examName = `Exam(${Math.ceil(Math.random()*100000000000)})`
        }
        this.addExamName(examName);
        return examName;
    }

    addExamName(examName){
        console.log("added"+examName);
        Box.examNames.push(examName);
    }

    addRemoveExamEventListener(){
        let removeItemPic = document.querySelector(`#delete-exam-${Box.examCount}`);
        let itemToRemove = document.querySelector(`#exam-${Box.examCount}`);
        removeItemPic.addEventListener("click",()=>{
            console.log("sdsd");
            itemToRemove.remove();
        });                      
    }

    htmlContent(){
        let element = document.createElement("div");
        element.setAttribute("id",`exam-${Box.examCount}`);
        element.setAttribute("class","exam-item");
        element.innerHTML = `
        <h1>${this.examName}</h1>
        <div class="item-content">
            <span>${this.creationDate.dateString()}</span>
            <span>${this.creationDate.timeString()}</span>
            <div class="item-image">
                <img src="images/delete_7945132.png" alt="" class="delete-exam" id="delete-exam-${Box.examCount}">
                <img src="images/edit_1159633.png" alt="" class="edit-exam">
            </div>
        </div>
        `;
    return element;
    }
}
