# hdb-cluster

## Problem Statement

HDB is demolishing an estate of aging flats in Redhill and wants to know how many clusters of households still reside in each block of flats. An example of a flat occupancy diagram of a single block is as below, with + representing an occupied unit and 0 representing an empty unit.

```
000++0
+++00+  
000000 
+0000+
++00+0
```

2 occupied units are defined as part of household cluster if they're adjacent, be it horizontally, vertically or diagonally. In other words, this diagram below is considered to have 1 cluster.

```
0+0
+0+
0++
```

Judging by these criteria, our first example above contains 3 clusters.

Write a program for HDB that takes in a text file with diagrams as above, and output the number of distinct clusters. The number of rows and columns will be between 4 and 21. You'll be awarded bonus points if you use recursion. Include clear instructions on how to run your program with the input file. You may use the UNIX redirection symbol < to redirect input from this file.

Sample Input File

```
000++0
+++00+
000000
+0000+
++00+0
```

Sample Output

```
3
```

## Usage

### Clone the repo
```
git clone https://github.com/krjj/hdb-cluster.git
cd hdb-cluster
```

### Run

```
node index.js
```

Script will read the input.txt file. This file contains sample data.