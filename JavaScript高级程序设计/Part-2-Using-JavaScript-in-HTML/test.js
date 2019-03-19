function Person(name, age, obj) {
    var o = new Object();
    o.sayName = function () {
        alert(name);
    };
    return o;
}