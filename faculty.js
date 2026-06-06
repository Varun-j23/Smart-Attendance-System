let students =
JSON.parse(localStorage.getItem("students")) || [];

function loginFaculty(){

    let password =
    document.getElementById(
    "facultyPassword"
    ).value;

    if(password === "1234"){

        document.getElementById(
        "facultyPanel"
        ).style.display = "block";

    }else{
        alert("Wrong Password");
    }
}

function saveData(){
    localStorage.setItem(
    "students",
    JSON.stringify(students)
    );
}

function addStudent(){

    let name =
    document.getElementById(
    "studentName"
    ).value;

    if(name === ""){
        return;
    }

    students.push({
        name:name,
        present:0,
        total:0
    });

    saveData();
    displayStudents();

    document.getElementById(
    "studentName"
    ).value="";
}

function markPresent(index){
    students[index].present++;
    students[index].total++;
    saveData();
    displayStudents();
}

function markAbsent(index){
    students[index].total++;
    saveData();
    displayStudents();
}

function displayStudents(){

    document.getElementById(
    "summary"
    ).innerHTML =
    "Total Students: " +
    students.length;

    let output="";

    students.forEach((student,index)=>{

        let percentage=0;

        if(student.total>0){
            percentage=
            (
            student.present/
            student.total*100
            ).toFixed(2);
        }

        output += `
        <div class="student">

        <h3>${student.name}</h3>

        <p>Attendance:
        ${percentage}%</p>

        <button onclick=
        "markPresent(${index})">
        Present
        </button>

        <button onclick=
        "markAbsent(${index})">
        Absent
        </button>

        </div>
        `;
    });

    document.getElementById(
    "studentList"
    ).innerHTML = output;
}

displayStudents();
