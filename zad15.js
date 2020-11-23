let BINARY_SEARCH = function (list,start,end,search) { 
       
    if (start > end) return console.log("Brak"); 
   
    let q=Math.floor((start + end)/2); 
   
    if (list[q]===x) return console.log("Jest");; 
          
   
    if(list[q] > search)  
        return BINARY_SEARCH(list, search, start, q-1); 
    else
  
        return BINARY_SEARCH(list, search, q+1, end); 
} 
   

let lista = [1, 3 ,5, 8, 9]; 
let x = 5;  

BINARY_SEARCH(lista,0, lista.length-1,x);