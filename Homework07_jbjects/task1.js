/**
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:

    1.  Создайте пустой объект user.
    2.  Добавьте свойство name со значением Kato.
    3.  Добавьте свойство group со значением fe0303.
    4.  Измените значение свойства name на Julia.
    5.  Удалите свойство name из объекта.
    6.  Создайте копию обьекта user.
    7.  Проверьте, что созданный обьект не пустой.
    8.  Узнайте количество свойств в нем.
    9.  Измените в копии свойство name на Kato.
    10. Сравните свойства этих двух обьектов и придумайте структуру данных для отображения их разницы.
*/
const ramValue = 'ram';
const notebook = {
    name: 'Lenovo',
    group: 'Gaiming',
    [ramValue]: 8,
    'in stock': true
};
notebook.name = 'maks';
console.log('notebook:', notebook);

delete notebook.group;


const copy2 = Object.assign({}, notebook);
console.log(copy2);


function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
    return true;
}
const lenovo = {};

function objectLenght(obj) {
    let count = 0;
    for (const key in obj) {
        count++;
    }
    return count;
}
console.log(objectLenght(notebook));
console.log(isEmpty(lenovo));
console.log(notebook === copy2);


const arr = ['hello','buy','qwerty','try,','12'];
console.log('arr:', arr);
console.log(arr[3]);
arr.push('apple');