function sum(...numbers){
    let total=0;
    for(let n of numbers){
        total += n;

    }
    return total;
}
console.log("Total:", sum(1,2,3,4,5));