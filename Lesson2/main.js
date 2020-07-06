//Створити масив та вивести його в консоль:
// з 5 числових значень
// з 5 стрічкових значень
// з 5 значень стрічкового, числового та булевого типу
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array1 = [1, 10, 25, 30, 50];
console.log(array1);
let array2 = ['January', 'February', 'March', 'April', 'May'];
console.log(array2);
let array3 = [0.5, 5.5, 'summer', 'July', true];
console.log(array3);
let array4 = [];
array4[0] = 'JS course';
array4[1] = 2020;
array4[2] = true;
console.log(array4);

 //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 for(let n = 0; n < 10; n++) {
    document.write('<div>First</div>');
 }
 
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 for(let n = 0; n < 10; n++) {
    document.write(`<div> Index ${n} </div>`);
 }
 
 //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 let j = 0;
 while(j < 20) {
    document.write('<h1>Good morning</h1>');
    j++;
 }
 
 //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 let n = 0;
 while(n < 20) {
    document.write(`<h1>Hello ${n}</h1>`);
    n++;
 }
 
 //Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
 let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
 for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
  
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = ['today', 'is', 'second', 'of', 'July', '2020', 'year', 'very', 'hot', 'summer'];
 for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr2 = ['first', 'element', false, 'second', 'one', true, 100, '100', 0, '0'];
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
 
//Створити масив з 10 елементів числового, стірчкового і булевого типу. 
//За допомогою if та typeof вивести тільки булеві елементи
let arr3 =['new', 'array', 5, 7, true, 'true', false, 'false', 1, 111];
for(let i = 0; i < arr3.length; i++) {
    if(typeof arr3[i] == 'boolean') {
        console.log(arr3[i]);
    }
}
 
 //Створити масив з 10 елементів числового, стірчкового і булевого типу. 
 //За допомогою if та typeof вивести тільки рядкові елементи
 let arr4 =['one', 'more', 'array', false, '5', 12, 0, '7', true, '10'];
for(let i = 0; i < arr4.length; i++) {
    if(typeof arr4[i] == 'string') {
        console.log(arr4[i]);
    }
}

//Створити масив з 10 елементів числового, стрічкового і булевого типу. 
//За допомогою if та typeof вивести тільки числові елементи
 let arr5 =['new', '1', 12, true, '3.14', 3.14, '0', 9, 99, '999'];
for(let i = 0; i < arr5.length; i++) {
    if(typeof arr5[i] == 'number') {
        console.log(arr5[i]);
    }
}

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr6 = [];
arr6[0] = true, 
arr6[1] = '1',
arr6[2] = 2, 
arr6[3] = 'false',
arr6[4] = 4, 
arr6[5] = '5', 
arr6[6] = 'six', 
arr6[7] = 'seven', 
arr6[8] = '8', 
arr6[9] = 9;
for(let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}

// Створити цикл for на 10  ітерацій з кроком 1. 
//Вивести поточний номер кроку через console.log та document.write
for(let i = 1; i <= 10; i++) {
    document.write(i);
    console.log(i);
}

//Створити цикл for на 100 ітерацій з кроком 1. 
//Вивести поточний номер кроку через console.log та document.write
for(let i = 1; i <= 100; i++) {
    document.write(i);
    console.log(i);
}
//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i < 100; i+=2) {
    document.write(i);
    console.log(i);
}
 
 //Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
    document.write(i);
    console.log(i);
    }
}

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 for(let i = 1; i <= 100; i++) {
    if(i % 2 != 0) {
    document.write(i);
    console.log(i);
    }
}

//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for(let min = 0; min < 2; min++) {
    for(let sec = 0; sec < 60; sec++) {
        console.log(min, sec);
    }
}

//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let hour = 0; hour < 3; hour++) {
    for(let min = 0; min < 60; min++) {
        if(hour === 2 && min === 20) {
            break;
        }
        for(sec = 0; sec < 60; sec++) {            
             console.log(hour, min, sec);
        }   
    }
}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arrayAbc = ['a', 'b', 'c'];
let k = 0;
let stringAbc = '';
while (k < arrayAbc.length) {
    stringAbc += arrayAbc[k];
    k++;
}
console.log(stringAbc);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
arrayAbc = ['a', 'b', 'c'];
stringAbc = '';
for(let i = 0; i < arrayAbc.length; i++) {
    stringAbc += arrayAbc[i];
}
console.log(stringAbc);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
arrayAbc = ['a', 'b', 'c'];
stringAbc = '';
for(let item of arrayAbc) {
    stringAbc += item;
}
console.log(stringAbc);

// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
arrayAbc = ['a', 'b', 'c'];
for(let i = 1; i <= 3; i++) { 
     arrayAbc.push(i);
}
console.log(arrayAbc);

//Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let array123 = [1, 2, 3];
let array321 =[];
for(let item of array123) {
    array321.unshift(item);
}
console.log(array321);

//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
array123 = [1, 2, 3];
for (let i = 4; i <= 6; i++) {
    array123.push(i);
}
console.log(array123);

//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
array123 = [1, 2, 3];
for(let i = 6; i >= 4; i--) {
    array123.unshift(i);
}
console.log(array123);

//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arrString = ['js', 'css', 'jq'];
let firstElement = arrString.shift();
console.log(firstElement);

//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
arrString = ['js', 'css', 'jq'];
let lastElement = arrString.pop();
console.log(lastElement);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arrayNum = [1, 2, 3, 4, 5];
let arraySliced = arrayNum.slice(3);
console.log(arraySliced);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
arrayNum = [1, 2, 3, 4, 5];
let arraySliced1 = arrayNum.slice(0,2);
console.log(arraySliced1);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
arrayNum = [1, 2, 3, 4, 5];
arrayNum.splice(1, 2);
console.log(arrayNum);

//Дан масив [1, 2, 3, 4, 5]. 
//За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arrayNum = [1, 2, 3, 4, 5];
arrayNum.splice(3, 0, 'a', 'b', 'c');
console.log(arrayNum);

//Дан масив [1, 2, 3, 4, 5]. 
//За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arrayNum = [1, 2, 3, 4, 5];
arrayNum.splice(1, 0, 'a', 'b');
arrayNum.splice(6, 0, 'c');
arrayNum.splice(8, 0, 'e');
console.log(arrayNum);

//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrayNumber = [3, 5, 8, 7, 12, 45, 50, 1, 10, 9];
for(let i = 0; i < arrayNumber.length; i++) {
    if(arrayNumber[i] % 2 == 0) {
        console.log(arrayNumber[i]);
    }
}

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
//За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
arrayNumber = [3, 5, 8, 7, 12, 45, 50, 1, 10, 9];
let arrayNew = [];
for(let i = 0; i < arrayNumber.length; i++) {
    arrayNew.push(arrayNumber[i]);
}
console.log(arrayNew);

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
//За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrNumber1 = [5, 77, 565, 12, 90, 0, 4, 23, 13, 2];
let arrNew1 = [];
for(let i = 0; i < arrNumber1.length; i++) {
    arrNew1[i] = arrNumber1[i];
}
console.log(arrNew1);

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while
let arrayFirst = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while(i < arrayFirst.length) {
    console.log(arrayFirst[i]);
    i++;
}
//2. перебрати його циклом for
for(i = 0; i < arrayFirst.length; i++) {
    console.log(arrayFirst[i]);
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while(i < arrayFirst.length) {
    if(i % 2 != 0) {
     console.log(arrayFirst[i]);
    }
     i++;
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(i = 0; i < arrayFirst.length; i++) {
    if (i % 2 != 0) {
    console.log(arrayFirst[i]);
    }
}
//5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while(i < arrayFirst.length) {
    if(arrayFirst[i] % 2 == 0) {
    console.log(arrayFirst[i]);
    } 
    i++;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
for(i = 0; i < arrayFirst.length; i++) {
    if(arrayFirst[i] % 2 == 0) {
    console.log(arrayFirst[i]);
    }
}

//7. замінити кожне число кратне 3 на слово "okten"
for(i = 0; i < arrayFirst.length; i++) {
    if(arrayFirst[i] % 3 == 0) {
    arrayFirst[i] = 'okten';
    }
}
console.log(arrayFirst);

//8. вивести масив в зворотньому порядку.
arrayFirst = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let arrayReversed = [];
for(let i = 0; i < arrayFirst.length; i++) {
    arrayReversed.unshift(arrayFirst[i]);
}
console.log(arrayReversed);

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
arrayFirst = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = arrayFirst.length - 1;
while(i >= 0) {
    console.log(arrayFirst[i]);
    i--;
}
for(i = arrayFirst.length - 1; i >= 0; i--) {
    console.log(arrayFirst[i]);
}
i = arrayFirst.length - 1;
while(i >= 0) {
    if(i % 2 != 0) {
    console.log(arrayFirst[i]);
    }
    i--;
}
for(i = arrayFirst.length - 1; i >= 0; i--) {
    if(i % 2 != 0) {
     console.log(arrayFirst[i]);
    }
}
while(i >= 0) {
    if(arrayFirst[i] % 2 == 0) {
    console.log(arrayFirst[i]);
    }
    i--;
}
for(i = arrayFirst.length -1; i >= 0; i--) {
    if(arrayFirst[i] % 2 == 0) {
    console.log(arrayFirst[i]);
   }
}

//10 створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.
let arraySecond = [];
for(i = 0; i < 100; i++) {
    if(i % 2 == 0) {
    arraySecond.push(i);  
    }
}
for(i = 0; i < 100; i++) {
    if(i % 2 != 0) {
    arraySecond.push(i); 
    }
}
console.log(arraySecond);

//используя Math.random заполнить массив из ???(сколько хотите) элементов.
 //диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
 let arrayThird = [];
 let min = 8, max = 732;
 for (i = 0; i < 10; i++) {
    arrayThird[i] = Math.round(Math.random() * (max - min) + min);
 }
console.log(arrayThird); 

//2. вывести на консоль  каждый третий елемент
for (i = 2; i < arraySecond.length; i+=3) {
    console.log(arraySecond[i]);
}

//3. вывести на консоль  каждый третий елемент, но при условии что его значение является парным.
for (i = 2; i < arraySecond.length; i+=3) {
    if(arraySecond[i] % 2 == 0) {
    console.log(arraySecond[i]);
    }
}  

//4. вывести на консоль  каждый третий елемент, но при условии что он имеет парное значение и
//записать их в другой массив.
let newArray = [];
for (i = 2; i < arraySecond.length; i+=3) {
    if(arraySecond[i] % 2 == 0) {
    console.log(arraySecond[i]);
    newArray.push(arraySecond[i]);    
    }
}  
console.log(newArray);

//5. Вывести каждый елемент массива у которого соседний справа элемент - парный
let array = [7, 34, 5, 0, 43, 2, 5, 40, 3, 9];
for(i = 0; i < array.length - 1; i++) {
    if(array[i + 1] % 2 == 0) {
        console.log(array[i]);
    }
}
//Масив з числами [100,250,50,168,120,345,188], які характеризують вартість окремої покупки.
//Обрахувати середній чек.
array = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for(i = 0; i < array.length; i++) {
    sum += array[i];   
}
let average = sum / array.length;
console.log(average);

//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrayRandom = [],
    arrayRandom1 = [];
for(let i = 0; i < 10; i++) {
    arrayRandom[i] = Math.random() * 5;
    arrayRandom1.push(arrayRandom[i]);

}
console.log(arrayRandom1);

//створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//додати його в інший масив.
array = ['true', 6, 'seven', 8, 9, false, 11, 'loop', 0, '10'];
newArr = [];
for(let i = 0; i <array.length; i++) {
    if (typeof array[i] == 'number') {
        newArr.push(array[i]);
    }
}
console.log(newArr);
