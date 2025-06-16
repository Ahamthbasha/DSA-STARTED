const nestedArr = [{ab:2},[{bf:3}],{df:5},[{gh:1}],[{ij:4}]]

let sum = 0

for(let val of nestedArr){  
    if(Array.isArray(val)){
        for(let value of val){
            for(let key in value){
                sum += value[key]
            }
        }
    }else{
        for(let key in val){
            sum += val[key]
        }
    }
}

console.log(sum)