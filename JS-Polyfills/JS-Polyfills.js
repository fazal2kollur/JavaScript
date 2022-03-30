
//The map() method creates a new array
Array.prototype.myMap = function(callback){
    const arr = [];
    for(let i=0; i<this.length; i++){
        arr.push(callback(this[i],i,this));
    }
    return arr;
}
const a = [10,20,30];
const result = a.map(i=>i*2);

//The filter() method creates a new array with all elements that pass the test
Array.prototype.myFilter = function(callback){
    const arr = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

//The forEach() method executes a provided function once for each array element.
Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i],i,this);
    }
}

//The find() method returns the first element in the provided array that satisfies the provided 
Array.prototype.myFind = function(callback){
    for(let i=0; i<this.length; i++){
        const res = callback(this[i],i,this);
        if(res){
            return this[i];
        }
    }
    return undefined;
}

//The every() method tests whether all elements in the array pass the test
Array.prototype.myEvery = function(callback){
    for(let i=0; i<this.length; i++){
        if(!callback(this[i],i,this)){
            return false;
        }
    }
    return true;
}
//The some() method tests whether at least one element in the array passes the test
Array.prototype.mySome = function(callback){
    for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
            return true;
        }
    }
    return false;
}

