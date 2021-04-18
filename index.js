var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => x*y
};

function solveRect(x, y){
    console.log("Solving for x = " +x + " and y = " + y);

    if(x <=0 || y <= 0){
        console.log("x and y should be greater than 0");
    }
    else{
        console.log("rectange area = " + rect.area + ", rectangle perimeter = " + rect.perimeter);
    }
}

solveRect(1,1);
solveRect(15,2);
solveRect(0,5);
solveRect(-1,10);
