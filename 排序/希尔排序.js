// 非稳定算法
var arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85],
    d = parseInt(arr.length/2),
    i,
    j,
    tmp;


for ( ; d >= 1; d = parseInt(d/2)) {
    for (i = d; i < arr.length; i++) {
        tmp = arr[i];
        for (j = i - d; arr[j] > tmp && j >= 0; j = j - d) 
            arr[j + d] = arr[j];

        arr[j + d] = tmp;
    }
}

console.log(arr);