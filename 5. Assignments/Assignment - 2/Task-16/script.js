// Task 16: Callback functions for order system
function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    }, 1000);
}

function cookFood(callback) {
    setTimeout(() => {
        console.log("Food cooking");
        callback();
    }, 2000);
}

function deliverFood() {
    setTimeout(() => {
        console.log("Food delivered");
    }, 1500);
}

// Chain the callbacks
placeOrder(() => {
    cookFood(() => {
        deliverFood();
    });
});

