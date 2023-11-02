var a=require('./script2')
console.log(a);

var olj=require('one-liner-joke')
console.log(olj.getRandomJoke())

var figlet=require("figlet")
figlet("hello",function(err,data){
    if(err){
        console.log("something went wrong");
        console.dir(err);
        return
    }
    console.log(data);

})