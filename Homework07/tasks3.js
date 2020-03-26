// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n.
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

/* function task1(n) {
    for(let i =1; i<n; i++){
     
  console.log(i); 
    
}
}
let n = prompt('Введите целое число');
task1(n); */

//Function for detecting numbers

function isSimple(n) {
  for (let k = 2; k < n; k++) {
    if (n % k === 0) {
      return false;
    }
  }
  return true;
}

/* let m = prompt('Значение для проверки')
isSimple(m);


do {
    console.log(m, isSimple(m));
    m++;

}while(m<m); */

//Part 2

/* function getSimple(n) {
    let m =1;
    do{
        if (isSimple(m)) {
            console.log(m);
        }
        m++;
    }while(m<=n);
}
let n = prompt('Числа которые нелюбят делится на два) ')
getSimple(n); */

//Part 3

/* function getNumbersDeleted(n,k) {
    let m= 1;
    while( m <= n ) {
        if(m % k ===0){
            console.log(m);
        }
        m++;
    }
}
let number1 = prompt('Делимое число')
let number2 = prompt('На что делим?')
getNumbersDeleted(number1,number2);
 */

//Part 4

function stopNumber(n) {
  let i = 1;
  while (i < n) {
    console.log(i);
    i++;
    let stopFunction = confirm("Нажми Ok чтобы добавить 1 ");

    if (stopFunction == true) continue;
    else if (stopFunction == false) break;
    console.log("true:", true);
  }
}
let n = prompt("Введите число");
stopNumber(n);
