// PolyFills of JS

/**
 * @Map 
 */

Array.prototype.customMap = function(logic){
    const output = [];
    for(let i of this){
        output.push(logic(i));
    }
    return output
}

const twoMultiple = function(data){
    return data*2
    
}

const a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.customMap(twoMultiple));

/**
 * @Filter
 */

Array.prototype.customFilter = function(logic){
    const output = [];
    for(let i of this){
        if(logic(i)){
            output.push(i);
        }
    }
    return output;
}

const isDivisibleByTwo = function(data){
    return data%2 ===0 ? true:false
}

console.log('Custom Filter is divisible by two',a.customFilter(isDivisibleByTwo));

/**
 *  @FindIndex 
 */

Array.prototype.customFindIndex = function(logic){
    let index = -1;
    for(let i=0;i<this.length;i++){
        if(logic(i)){
            index = i;
            break;
        }
    }
    return index;

}

const isGreaterThanSeven = function(data){
    return data > 7;
}

console.log(a.customFindIndex(isGreaterThanSeven));