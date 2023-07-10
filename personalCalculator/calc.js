let flag = 0;

function isNumber(char) {
    return /^\d$/.test(char);
}

document.getElementById('answers').readOnly = true;
let screen = document.getElementById('answers');
let buttons = document.querySelectorAll('button');

let screenValue = " ";
let maxItems = 6;

for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttontext = e.target.innerText;
        if (buttontext == "X") {
            if (flag == 1) {
                flag = 0;
            }

            buttontext = '*';
            screenValue += buttontext;
            screen.value = screenValue;
        
        }else if (buttontext == "C") {
            if (flag == 1) {
                flag = 0;
            }
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttontext == '=') {
            checkForBracketMulti();

        }else if (isNumber(buttontext)) {
            if (flag == 1) {
                screenValue = buttontext;
                flag = 0;

            } else {screenValue += buttontext;}

            screen.value = screenValue;
            console.log('i am an operator!!!');
        } else {
            if (flag == 1) {
                flag = 0;
            }

            screenValue = screen.value + buttontext;
            screen.value = screenValue;
        }
        
        
    });

}

document.addEventListener('keydown', function (event) {
    if (event.shiftKey == 57) {
        event.key = '(';
    } else if (event.shiftKey == 48) {
        event.key = ")";
    } else if (event.shiftKey == 53) {
        event.key = "%";
    }

    if (event.key == 88) {
        screenValue += '*';
        screen.value = screenValue;
    }

    if (
        event.key <= 9 ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "." ||
        event.key == "/" ||
        event.key == "%" ||
        event.key == "(" ||
        event.key == ")" 
    ) {
        screenValue += event.key;
        screen.value = screenValue
    }

    if (event.key == 13 || event.key == 187) {
        checkForBracketMulti();
    } else if (event.key == 46) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.key == 8) {
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    } else if (event.key == 67) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }else if (event.key == 82) {
        location.reload();
    }
});

window.onerror = function () {
    alert("please input valid expression");
    screenValue = "";
    screen.value = screenValue;
    console.clear();
};

window.onBracketMultiplication = function () {
    screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
    screen.value = eval(screenValue);

    let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];

    if (calcHistory.length >= maxItems) {
        calcHistory.shift();
    }

    calcHistory.push({screenValue, result: screen.value});

    localStorage.setItem("calcHistory", JSON.stringify(calcHistory));

};

function addStr(str, index, stringToAdd) {
    return (
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}

function checkForBracketMulti() {
    if (
        screen.value.includes("(") &&
        !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
    ) {
        window.onBracketMultiplication();

        return;
    } else {
        screen.value = eval(screenValue);
        let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
        if (calcHistory.length >= maxItems) {
            calcHistory.shift();
        }

        calcHistory.push({screenValue, result : screen.value});
        localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
    }
    flag = 1;
}