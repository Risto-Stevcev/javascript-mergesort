function merge( left, right ) {
    var list = [], l = 0, r = 0;
    for (i = 0; l < left.length || r < right.length; i++) {
        if (l < left.length && r < right.length) {
            if (left[l] < right[r])
                list.push(left[l++]);
            else
                list.push(right[r++]);
        }
        else if (l < left.length)
            list.push(left[l++]);
        else if (r < right.length)
            list.push(right[r++]);
    }
    return list;
}

function mergesort( list ) {
    if (list.length == 1)
        return list;

    var mid = list.length / 2;
    var left  = mergesort( list.slice(0, mid) );
    var right = mergesort( list.slice(mid, list.length) );
    return merge( left, right ); 
}
