function feetToMile(feet){
    var mile=feet / 5280;
    return mile;
}

var result=feetToMile(66666);
console.log("The result is:", result);

//woodCalculator///

function woodCalculator(chair,table,khat){
    var chairCount= chair * 1;
    var tableCount= table * 3;
    var KhatCount= khat * 5;
    var total=chairCount + tableCount + KhatCount;
    return total;

}

var result= woodCalculator(2,5,7);
console.log("The result of all furniture wood is:", result, "feet");

///tinyFriend////
function tinyFriend(members){
    var smallest=members[0];
    for(var i=0;i<=members.length;i++){
        var countMember= members[i];
        if(countMember < smallest){
            smallest=countMember;
        }
    }
    return smallest;

}

var result=tinyFriend(['abc','jamil','webd']);
console.log( "The Tiny friend is:" ,result);


//brickCalculator//

function brickCalculator(floors){
   
   var floors;
 
    if(floors>=0 && floors<=10){
        var calculate1=15*floors*1000;
        return calculate1;
    }
    
     else if(floors>=11 && floors<=20){
        var calculate2=12*floors*1000;
        return calculate2;
    }
     else if(floors>=21 && floors<=100){
        var calculate3=10*floors*1000;
        return calculate3;
    }
  
    

    var total=calculate1 +calculate2 +calculate3;
    return total;
}
var result= brickCalculator(10);
console.log(result);