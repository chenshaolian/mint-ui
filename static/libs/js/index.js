// function f1() {
//     var n = 999;
//     function f2() {
//         console.log(n);
//     }
//     f2();
// }

// f1();


// function f1() {
//     var n = 999;

//     function f2() {
//         console.log(n);
//     }
//     return f2;
// }

// var result = f1();

// result();




// function f1() {
//     var n = 999;
//     (function() {
//         n += 1;
//     })()

//     function f2() {
//         alert(n);
//     }

//     return f2;
// }

// var result = f1();
// result();  // 999


// var abc = new Function('x','y','return x*y;');
// alert(abc(2,3));

//闭包会使得内存泄露


// var name = 'The Window';
// var object = {
//     name: 'My Object',
//     getNameFunc: function (){
//         // My Object
//         return function() {
//             return this.name;
//         }
//     } 
// }
// alert(object.getNameFunc()());  // The Window




// var name = 'The Window';
// var object = {
//     name: 'My Object',
//     getNameFunc: function (){
//         var that = this;
//         // My Object
//         return function() {
//             return that.name;
//         }
//     } 
// }
// alert(object.getNameFunc()());  // My Object










