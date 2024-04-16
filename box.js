import { MyDate } from "./date.js"

export class Box{
    examNames = [];
    examCount = -1;
    constructor(){
        this.examName = this.genericExamName();
        this.creationDate = MyDate()        
    }

    removeExamName(nameToRemove){
        let newExamNames = [];
        for(let item of examNames){
            if(nameToRemove=== item) continue;
            newExamNames.push(item);
        }
        examNames = newExamNames;
        console.log("removed"+nameToRemove,examNames)
    }

    genericExamName(){
        examCount++;
        let examName; 
        examName = examCount===0 ? "Exam": `Exam(${examCount})`;
        while (examNames.includes(examName)){
            examName = `Exam(${Math.ceil(Math.random()*100000000000)})`
        }
        this.addExamName(examName);
        return examName;
    }

    addExamName(examName){
        console.log("added"+examName);
        examNames.push(examName);
    }
}
