// 稳定或非稳定，根据判决条件来

var arr = [12, 15, 9, 20, 10, 31, 24], i = 1, j= 0, tmp;

for ( ; i < arr.length; i++) {
    
    if (arr[i] >= arr[i - 1]) 
        continue;

    tmp = arr[i];

    for (j = i - 1; arr[j] > tmp; j--) // 大于tmp者均向后移一位 
        arr[j + 1] = arr[j];
    
    arr[j + 1] = tmp;

}

console.log(arr);