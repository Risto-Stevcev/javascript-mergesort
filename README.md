# JavaScript MergeSort

MergeSort implementation in JavaScript. Running time wasn't too bad, very similar to Java's speed:

    console.time("timing foo");
    list = mergesort( list );
    console.timeEnd("timing foo");

|function |calls |percent|own time |time         | avg   |min| max     |file
|---------|------|-------|---------|-------------|-------|---|---------|----------------------
|mergesort|199999|38.54% |187.537ms|**422.183ms**|0.002ms|0ms|422.183ms|mergesort.js (line 18)
