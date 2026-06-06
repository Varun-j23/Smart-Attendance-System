function checkAttendance(){

    let students =
    JSON.parse(
    localStorage.getItem("students")
    ) || [];

    let name =
    document.getElementById(
    "studentSearch"
    ).value.toLowerCase();

    let student =
    students.find(
    s => s.name.toLowerCase() === name
    );

    if(student){

        let percentage = 0;

        if(student.total > 0){
            percentage =
            (
            student.present /
            student.total * 100
            ).toFixed(2);
        }

        document.getElementById(
        "result"
        ).innerHTML = `
        <div class="student">
            <h3>${student.name}</h3>
            <p>Present: ${student.present}</p>
            <p>Total Classes: ${student.total}</p>
            <p>Attendance: ${percentage}%</p>
        </div>
        `;

    }else{

        document.getElementById(
        "result"
        ).innerHTML =
        "<h3>Student Not Found</h3>";
    }
}
