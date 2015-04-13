var arr = [63, 90, 70, 55, 67, 42, 98],
    tree = {};

function createBST(arr, tree) {
    var shifted = arr.shift();

    (function(tt){
        if (!tt.rootValue) {
            tt.rootValue = shifted;
            tt.leftChild = {};
            tt.rightChild = {};
        } else arguments.callee(shifted <= tt.rootValue ? tt.leftChild : tt.rightChild);
    })(tree);

    if (arr.length) createBST(arr, tree);
}

createBST(arr, tree);