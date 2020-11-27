// Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры

// Получаем положительное число n от поользователя
do{
    inputNum = +prompt("Enter an integer", "");
    
    // Условие для проверки, что число ЦЕЛОЕ
    while(!Number.isInteger(inputNum)){
        inputNum = +prompt("Enter an integer", "");
    }
} while ( inputNum < 1);

firstNum = 1;
secondNum = 1;
for(i = 3; i <= inputNum; i++){
    fibN = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = fibN;
}
console.log(secondNum);

//https://learn.javascript.ru/task/fibonacci-numbers очень подробно