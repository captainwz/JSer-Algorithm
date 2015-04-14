var arr = [63, 90, 70, 55, 67, 42, 98],
    tree = {};

// 工具函数, 判断对象是否为{}
function empty(obj) {
    if (obj.rootValue)
        return false;
    else {
        if (obj.rootValue === 0)
            return false;
        else 
            return true;
    }
}

// 工具函数, 节点替换
function replace(origin, source) {
    var rootValue = source.rootValue,
        leftChild = source.leftChild,
        rightChild = source.rightChild;

    origin.rootValue = rootValue;
    origin.leftChild = leftChild;
    origin.rightChild = rightChild;
}

// 生成二叉排序树
function createBST(arr, node) {
    var shifted = arr.shift();

    (function(tt){
        if (empty(tt)) {
            tt.rootValue = shifted;
            tt.leftChild = {};
            tt.rightChild = {};
        } else arguments.callee(shifted <= tt.rootValue ? tt.leftChild : tt.rightChild);
    })(node);

    if (arr.length) createBST(arr, node);
}

// 查找
function searchBTS(val, node) {
    if (empty(node))
        return null;
    if (node.rootValue == val) 
        return node;
    else 
        return searchBTS(val, val < node.rootValue ? node.leftChild : node.rightChild);
}

// 删除特定节点
function deleteBST(node) {
    var prenode, key;
    if (empty(node.leftChild) && empty(node.rightChild))
        for (key in node) delete node[key];
    else if (empty(node.leftChild)) 
        replace(node, node.rightChild);
    else if (empty(node.rightChild)) 
        replace(node, node.leftChild);
    else {
        prenode = (function(n){
            if (empty(n.rightChild)) 
                return n;
            else
                return arguments.callee(n.rightChild);
        })(node.leftChild);

        // 覆盖待删除节点
        node.rootValue = prenode.rootValue;

        // 删除前置节点
        deleteBST(prenode);
    }
}

createBST(arr, tree);
deleteBST(searchBTS(63, tree));