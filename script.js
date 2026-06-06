let students = [];

function addStudent(){

    let name = document.getElementById("studentName").value;

    if(name.trim() === ""){
        alert("Please enter student name");
        return;
    }

    students.push({
        name: name,
        present: 0,
        total: 0
    });

    document.getElementById("studentName").value = "";

    displayStudents();
}

function markPresent(index){
    students[index].present++;
    students[index].total++;
    displayStudents();
}

function markAbsent(index){
    students[index].total++;
    displayStudents();
}

function displayStudents(){

    let output = "";

    students.forEach((student,index)=>{

        let percentage = 0;

        if(student.total > 0){
            percentage = ((student.present/student.total)*100).toFixed(2);
        }

        output += `
        <div class="student">
            <h3>${student.name}</h3>

            <p>Present: ${student.present}</p>
            <p>Total Classes: ${student.total}</p>
            <p>Attendance: ${percentage}%</p>

            <button onclick="markPresent(${index})">Present</button>

            <button onclick="markAbsent(${index})">Absent</button>
        </div>
        `;
    });

    document.getElementById("studentList").innerHTML = output;
}
