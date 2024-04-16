import { Box } from "./box.js";
import { Exam } from "./exam.js";

export class CreateExam{
    exams = {};
    constructor(){
        this.addExamButton = document.querySelector("#add-exam");
        this.searchBox = document.querySelector("#search-exam");
        console.log(this.searchBox);
        this.addSearchBoxEventListener()
    }

    makeExam(){
        let box = new Box();
        let content = "to fetch content";
        let exam = new Exam(box,content);
        CreateExam.exams[box.examName] = exam;
    }

    addSearchBoxEventListener(){
        this.searchBox.addEventListener("keyup",(event)=>{
            console.log(event.target.value);
        })
    }

}