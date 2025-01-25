const gradeform= document.getElementById('gradeform')
const nameError= document.getElementById('nameError')
const scoreError = document.getElementById('scoreError')
const result = document.getElementById('result')

gradeform.addEventListener('submit',calculate )



function calculate(event) {
    event.preventDefault();

    const nameInput = document.getElementById('studentName').value.trim();
    const scoreInput = document.getElementById('studentScore').value.trim();

  // Name validation

    if (nameInput === '') {
        nameError.innerHTML = 'Please Enter Your Name';
    }
    else {
        nameError.innerHTML = '';
    }





//score input Validation

if (scoreInput === '' ) {
    scoreError.innerHTML = 'Please Enter a Valid Number';
    
} else if (scoreInput < 0 || scoreInput > 100) {
    scoreError.innerHTML = 'Please Enter a Valid Number Between 0 and 100';
   
} else {
    scoreError.innerHTML = '';
}


   // grade calculate

    if (scoreInput) {
        let grade;

        if (scoreInput >= 90 && scoreInput <= 100) {
            grade = "A+";
        } else if (scoreInput >= 80 && scoreInput < 90) {
            grade = "A";
        } else if (scoreInput >= 70 && scoreInput < 80) {
            grade = "B+";
        } else if (scoreInput >= 60 && scoreInput < 70) {
            grade = "B";
        }

         else if (scoreInput >= 50 && scoreInput < 60) {
            grade = "C+";
        }
        
        else if (scoreInput >= 40 && scoreInput < 50) {
            grade = "C";
        }
          
        
        else {
            grade = "F";
        }

        result.innerHTML = ` Name: ${nameInput} <br> Score: ${scoreInput} <br> Grade: ${grade}  `;


}

if (nameInput === '') {
result.innerHTML = ''
}


if (scoreInput < 0 || scoreInput > 100) {
    result.innerHTML = ''
   
}

}
