const clickMe = document.querySelector('button');


clickMe.addEventListener("click", function(){
    getCheese(function(cheese) {
        step1.innerHTML = "Here is cheese For Dough: " + cheese;

        makeDough(cheese, function(dough) {
            step2.innerHTML = "Here is Dough For Pizza: " + dough;

        bakePizza(dough, function(pizza) {
            step3.innerHTML = "Here is pizza: " + pizza;

            step4.innerHTML = "Finally Pizza is Ready to eat: " + pizza;

                console.log("Got my pizza:", pizza);
            
            });
        });
    });
});


function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is cheese:", cheese);
        callback(cheese);
    }, 2000);
}




function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🥮";
        console.log("Here is the dough:", dough);
        callback(dough);
    }, 3000);
}


function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Here is the pizza:", pizza);
        callback(pizza);
    }, 4000);
}
