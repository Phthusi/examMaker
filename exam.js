class Exam{
    exams = {}
    constructor(examCreatedDate, examName, examContent, examDurationTime){
        this.examCreatedDate = examCreatedDate;
        this.examName = examName;
        this.examContent = examContent;
        this.examDurationTime = examDurationTime;
        exams[examName] = this;
    }

    sortExams(){

    }
}