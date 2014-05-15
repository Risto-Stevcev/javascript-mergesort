test( "test merge", function() {
    var left     = [1, 3, 5];
    var right    = [2, 4, 6];
    var expected = [1, 2, 3, 4, 5, 6];
    deepEqual( expected, merge(left, right) );
});

test( "test mergesort", function() {
    var list     = [1, 44, 12, 3, 2, 19, 7];
    var expected = [1, 2, 3, 7, 12, 19, 44];
    deepEqual( expected, mergesort( list ) );
});
