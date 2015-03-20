// 快速排序,非稳定算法
var arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];

(function (start, end) {
    var i = start, j = end, x = arr[start];

    if (start >= end) return;

    // to locate x postion
    (function(){
        if (i == j) return arr[i] = x;

        for (; j > i; j --) {
            if (arr[j] < x) {
                arr[i] = arr[j];
                break;
            }    
        }

        for (; i < j; i ++) {
            if (arr[i] > x) {
                arr[j] = arr[i];
                break;
            }
        }

        arguments.callee();
    })();

    // recursive
    arguments.callee(start, i - 1);
    arguments.callee(j + 1, end);
})(0, arr.length - 1);

console.log(arr);