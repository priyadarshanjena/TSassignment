interface person{
    name:string;
    age:string
}
class Student implements person{
    name:string;
    age:string;
    stdClass:string;
    favSubject:string;
    constructor(stdClass:string,favSubject:string,name:string,age:string ){
        this.stdClass=stdClass;
        this.favSubject=favSubject;
        this.name=name;
        this.age=age;
    }
}
class school{
    list_of_student:Student[]=new Array();
    sclname:string;
    constructor(sclname:string,Lstudent:Student[]){
        this.sclname=sclname;
        this.list_of_student=Lstudent;


    }
}
function search(){
    let stdname=(<HTMLInputElement><unknown>document.getElementById("txtname")).value;
    let stdage=(<HTMLInputElement><unknown>document.getElementById("txtage")).value;
    let stdclass=(<HTMLInputElement><unknown>document.getElementById("txtclass")).value;
    let stdfavSubject=(<HTMLInputElement><unknown>document.getElementById("txtfavsubject")).value;
    let sclname=(<HTMLInputElement><unknown>document.getElementById("txtschool")).value;
    let s1:Student=new Student(stdname[0],stdage[0],stdclass[0],stdfavSubject[0]);
}