//非稳定算法 
var arr = [7, 2, 3, 16, 89, 3, 23, 19],
    i = 0,
    j,
    tmp,
    pos;

for (; i < arr.length; i++) {
    tmp = arr[i];
    pos = i;
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < tmp) {
            pos = j;
            tmp = arr[j];
        }
    }
    // exchange
    arr[pos] = arr[i];
    arr[i] = tmp;

}

console.log(arr);