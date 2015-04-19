var arcs = [[0, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 1, 0, 1, 1], [0, 0, 0, 0, 1], [1, 0, 0, 0, 0]];

function depthFirstSearch(arcs, idx, visted){
    var i = 0;
    
    if (!visted[idx]) {
        console.log('vertex ' + idx + ' is visted');
        visted[idx] = 1;
        
        for (; i < arcs[idx].length; i++) 
            if (arcs[idx][i] && !visted[i]) 
                depthFirstSearch(arcs, i, visted);    
    }
}

depthFirstSearch(arcs, 0, []);