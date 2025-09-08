const arr = [23, 12, 7, 35, 22];

for (let i = 0; i < arr.length - i - 1; i++) {
    for (let j = 0; j < arr.length -i- 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }

    }
    
}

console.log(arr,"xxxxxxxxxxxxxxxxxxxxxx");

const newMapedArry = arr.map(arg=>arg+2);

console.log(newMapedArry,"Yyyyyyyyyyyyyyy");
 
// console.log(arr[j]);
// console.log(arr[i]);

