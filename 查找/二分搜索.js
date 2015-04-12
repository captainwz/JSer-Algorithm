function binarySearch(arr, el, start, end) {
    pos = parseInt((start + end) / 2);

    if (arr[pos] == el)
        return pos;
    else if (arr[pos] > el) {
        if (pos == start)
            return null;
        arguments.callee(arr, el, start, pos - 1);

    } else if (arr[pos] < el) {
        if (pos == end)
            return null;

        arguments.callee(arr, el, pos + 1, end);
    }
}

// example
binarySearch([1, 2, 4, 6, 8, 89, 100], 6, 0, 6);