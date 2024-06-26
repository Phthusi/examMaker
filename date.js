export class MyDate{
    constructor(){
        this.date = new Date();
    }

    // constructor(years,months=0,days=0,hours=0,minutes=0,seconds=0,nanoseconds=0){
    //     this.date = new Date(years,months,days,hours,minutes,seconds,nanoseconds);
    // }

    getMonths(){
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return months;
    }

    addZero(value){
        return `${value}`.length==1? `0${value}`:value;
    }

    dateString(){
        return `${this.addZero(this.date.getDate())}-${this,this.getMonths()[this.date.getMonth()]}-${this.date.getFullYear()}`
    }

    timeString(){
        return `${this.addZero(this.date.getHours())}:${this.addZero(this.date.getMinutes())}:${this.addZero(this.date.getSeconds())}`
    }
}