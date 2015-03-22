// 归并排序,稳定算法
var arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];

// 将数组一分为二，并将其按大小顺序合并
function mergeArr(arr, start, mid, end) {
    var ret = [],
        arr0 = arr.slice(start, mid),
        arr1 = arr.slice(mid, end),
        i = start,
        j = 0;

    (function(){
        var v;
        if (!(arr0.length || arr1.length)) 
            return;
        else if (!arr0.length && arr1.length) 
            v = arr1.shift();
        else if (arr0.length && !arr1.length)
            v = arr0.shift();
        else 
            v = arr0[0] <= arr1[0] ? arr0.shift() : arr1.shift();

        ret.push(v);

        arguments.callee();
    })();

    for (; i < end; i++, j++) 
        arr[i] = ret[j];
}

// 先将数组递归至最小单位，再进行合并
function sortArr(arr, start, end) {
    var mid = parseInt((start + end)/ 2);

    if (start < end - 1) {
        sortArr(arr, start, mid);
        sortArr(arr, mid, end);
        mergeArr(arr, start, mid, end);
    }     
}

sortArr(arr, 0, arr.length);

console.log(arr);