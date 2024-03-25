function receivesAFunction (callback) {
    console.log(callback());
}
function returnsANamedFunction() {
    function namedFunction() {
        console.log("Named function");
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}
