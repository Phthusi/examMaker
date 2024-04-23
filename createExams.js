import { Box } from "./box.js";
import { Exam } from "./exam.js";
import { ExamItems } from "./manageExamItems.js";

export class CreateExam{
    static examItems = new ExamItems();
    constructor(){
        this.addExamButton = document.querySelector("#add-exam");
        this.examPlace = document.querySelector("#left-middle");
        this.addExamButtonEventListener();
    }

    makeExam(){
        let box = new Box();
        let content = "to fetch content";
        let exam = new Exam(box,content);
        // CreateExam.exams[box.examName] = exam;
        CreateExam.examItems.addExam(box.examName,exam);
        this.examPlace.prepend(box.htmlContent());
        box.addRemoveExamEventListener();
    }

    addExamButtonEventListener(){
        this.addExamButton.addEventListener("click",()=>{
            this.makeExam();
        });
    }

}