// let nbr = document.querySelectorAll(".nbr");
let display = document.querySelector(".display");
let ansBtn = document.querySelector(".ans");

let displayn_nbr, arr = [], resultArr = [], ans, operation, result;
addEventListener('click', (e) => {
    if (e.target.classList.contains('nbr')) {
        display.textContent += e.target.textContent;
    } else {
        switch (e.target.textContent) {
            case '+':
                operation = "add";
                arr.push(ConvertTo_Nbr(display.textContent));
                display.textContent = "";
                console.log("addition");
                break;
            case '-':
                operation = "sub";
                arr.push(ConvertTo_Nbr(display.textContent));
                display.textContent = "";
                console.log("sub");
                break;
            case '*':
                operation = "mul";
                arr.push(ConvertTo_Nbr(display.textContent));
                display.textContent = "";
                console.log("multi");
                break;
            case '/':
                operation = "div";
                arr.push(ConvertTo_Nbr(display.textContent));
                display.textContent = "";
                console.log("div");
                break;
            case '=':
                console.log("equals");
                arr.push(ConvertTo_Nbr(display.textContent));
                result = calcThersult(arr);
                display.textContent = result;
                ans = result;
                arr = [];
                console.log(result);
                console.log(ans);
                break;
        }
        console.log(arr);
    }
});

function calcThersult(arr) {
    if (operation == "add") {
        let s = 0;
        for (let i = 0; i < arr.length; i++) {
            s += arr[i];
        }
        return s;
    }
    if (operation == "sub") {
        let s = arr[0];
        for (let i = 1; i < arr.length; i++) {
            s -= arr[i];
        }
        return s;
    }
    if (operation == "mul") {
        let s = 1;
        for (let i = 0; i < arr.length; i++) {
            s *= arr[i];
        }
        return s;
    }
    if (operation == "div") {
        let s = arr[0];
        for (let i = 1; i < arr.length; i++) {
            s /= arr[i];
        }
        return s;
    }
}

ansBtn.onclick = ansFunction;
function ansFunction() {
    display.textContent = ans;
}

function ConvertTo_Nbr(x) {
    return displayn_nbr = parseFloat(x);
}

function clearShowBox() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('clear')) {
            display.textContent = "";
            arr = [];
        }
    })
}

function deleteLastDigit() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            display.textContent = display.textContent.slice(0, -1);
        }
    });
}

// Initialize clear and delete functions
clearShowBox();
deleteLastDigit();
