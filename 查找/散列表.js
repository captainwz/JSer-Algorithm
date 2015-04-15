// 直接定址法
// H(key) = a*key + b
function directAddressing(arr, a, b) {
    var ret = [];
    arr.forEach(function(v){
        ret[a * v + b] = v;
    });
    return ret;
}

// example
directAddressing([3, 5, 9, 2, 5], 2, 1);


// 除留余数法
// H(key) = key%p
function division(arr, p) {
    var ret = [];
    arr.forEach(function(v){
        var pos = v % p,
            i = 0;
        
        if (ret[pos] === undefined) {
            ret[pos] = v;
        } else {
            // 解决冲突,这里使用线性探测法
            while(i < ret.length) {
                pos = (v % p + i) % (ret.length - 1);
                if (ret[pos] === undefined) {
                    ret[pos] = v;
                    break;
                } else 
                    i ++;
            }
        }
    });

    return ret;
}

// example
division([25, 18, 23, 3, 56, 87, 19, 37, 59], 11);