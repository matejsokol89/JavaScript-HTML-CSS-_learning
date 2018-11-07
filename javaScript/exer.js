
var i=-10;
while (i < 19) {
    i++;
    console.log(i++);
}

var i=10;
while (i < 40) {
        i+=2;

    console.log(i++);
}

var i=300;
while (i < 333) {
        if(i%2===1){
            i++;
        }

    console.log(i++);
}

var i=5;
while (i < 50) {
        if(i%5===0 && i%3===0){
            console.log(i);

        }        
        i+=1;

    }
    
    for(var i=-10; i<19;i++){ 
        console.log(i++);
    }

    for(var i=-10; i<40;i+=2){ 
        console.log(i);
    }


    for(var i=300; i<333;i++){ 
        if(i%2===1){
            console.log(i);

        }
    }

    for(var i=5; i<50;i++){ 
        if(i%5===0 && i%3===0){
            console.log(i);

        }
    }

    function isEven(number){
        if(number%2==0){
            return true;
        }
        else{
            false
        }
    }


function factorial(num){
    if(num==0||num  == 1){
        return 1;
    }
    return num * factorial(num-1);
}


function kebabToSnake(str){
    var result=str.replace(/-//g, '_');
    return result;
}
