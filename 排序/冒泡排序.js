// 冒泡排序, 稳定
var arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85],
    i = arr.length - 1,
    j,
    tmp;

for (; i > 0 ; i --) {
    for (j = 0; j < i; j ++) {
        if (arr[j + 1] < arr[j]) {
            tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
        }
    }   
}

console.log(arr);