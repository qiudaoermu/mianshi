console.log(1);
//A
setTimeout(function(){
    console.log(2);
    //C
    setTimeout(function(){
        console.log(4);
        //D
        setTimeout(function(){
            console.log(5);
        })
    },4)
},0)
//B
setTimeout(function(){
    console.log(3);
    //E
    setTimeout(function(){
        console.log(6);
    },0)
},0)
console.log('ok');


console.log(1);
setTimeout(function(){
    console.log(2);
    // Promise.resolve(1).then(function(){
    //     console.log('okBind')
    // })
})
setTimeout(function(){
    console.log(3)
})
