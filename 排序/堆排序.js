// 堆排序，非稳定算法

var arr = [16, 7, 3, 20, 17, 8], 
    i = arr.length - 1,
    j,
    tmp;

// 最小单位的二叉树进行堆整理
function adjustHeap(n){
    var lchild = 2*n + 1, rchild = 2*n + 2, maxn = n, max = arr[n];

    if (n >= Math.ceil(i/2))
        return;

    if (lchild <= i && arr[lchild] > max) {
        maxn = lchild;
        max = arr[lchild]; 
    }
        

    if (rchild <= i && arr[rchild] > max) {
        maxn = rchild;
        max = arr[rchild]; 
    }

    if (maxn != n) {
        arr[maxn] = arr[n];
        arr[n] = max;
    }

}

for (; i >= 0; i--) {
    for (j = i; j >= 0; j--) {
        adjustHeap(j);
    }

    tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;
}

console.log(arr);
