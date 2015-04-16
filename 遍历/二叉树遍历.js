var tree = {
    rootValue: 'A',
    leftChild: {
        rootValue: 'B',
        leftChild: {
            rootValue: 'D'
        },
        rightChild: {
            rootValue: 'E',
            leftChild: {
                rootValue: 'F'
            },
            rightChild: {
                rootValue: 'G'
            }
        }
    },
    rightChild: {
        rootValue: 'C'
    }
}

// 前序遍历
function DLRTraversal(node) {
    if (!node) return;

    console.log(node.rootValue);

    DLRTraversal(node.leftChild);

    DLRTraversal(node.rightChild);

}

// 中序遍历
function LDRTraversal(node) {
    if (!node) return;

    LDRTraversal(node.leftChild);

    console.log(node.rootValue);

    LDRTraversal(node.rightChild);

}

// 后序遍历
function LRDTraversal(node) {
    if (!node) return;

    LRDTraversal(node.leftChild);

    LRDTraversal(node.rightChild);

    console.log(node.rootValue);

}

DLRTraversal(tree);
LDRTraversal(tree);
LRDTraversal(tree);