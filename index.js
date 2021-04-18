var rect = require("./rectangle.js");

function solveRect(x, y){
    console.log("Solving for x = " +x + " and y = " + y);

   rect(x,y, (err, rect) => {
       if(err){
           console.log("Encountered " + err.message);
       }
       else{
           console.log("Area is " + rect.area() + ", Perimeter is " + rect.perimeter());
       }
   });
   console.log("This statement after the call to rect()");
}

solveRect(1,1);
solveRect(15,2);
solveRect(0,5);
solveRect(-1,10);
