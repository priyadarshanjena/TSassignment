var Student = /** @class */ (function () {
    function Student(stdClass, favSubject, name, age) {
        this.stdClass = stdClass;
        this.favSubject = favSubject;
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var school = /** @class */ (function () {
    function school(sclname, Lstudent) {
        this.list_of_student = new Array();
        this.sclname = sclname;
        this.list_of_student = Lstudent;
    }
    return school;
}());
function search() {
    var stdname = document.getElementById("txtname").value;
    var stdage = document.getElementById("txtage").value;
    var stdclass = document.getElementById("txtclass").value;
    var stdfavSubject = document.getElementById("txtfavsubject").value;
    var sclname = document.getElementById("txtschool").value;
    var s1 = new Student(stdname[0], stdage[0], stdclass[0], stdfavSubject[0]);
}
