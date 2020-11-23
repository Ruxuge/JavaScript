function findLow(a,n){

    if(n==1)
        return a[0];

    return Math.min(a[n-1],findLow(a, n-1));    
}

tab = [5,3,2,7,55,44];

console.log(findLow(tab,tab.length));