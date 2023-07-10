const btnEl = document.getElementById("btn");  //assigning the button
const birthdayEl = document.getElementById("birthday");  //assigning the label
const resultEl = document.getElementById("result"); //assigning the final result

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert ('enter your birthday here!!!');
    } else {
        const age = getage(birthdayValue);
        resultEl.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old`; 
    }
}

function getage(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 || //checks if the date of the birthday month has arrived in this year or not
        (month === 0 && currentDate.getDate() < birthdayDate.getDate()) //checks if the current date is before the bday and in the current month
    )          
    {age--;  //decrements the age value by one if any of the above statments are true
    }
    return age; //this whole code checks of the current date is before a given birthday & reduces it by one
}

btnEl.addEventListener("click", calculateAge);