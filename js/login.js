
function add(a ,b){
    let res = a+b;
    return res;
}
//let val = add(2, 3);
//console.log(add(2, 3));

function evenOdd(x){
    if(x % 2 == 0){
        console.log(x + " is an even number.");
    } else {
        console.log(x + " is an odd number.");
    }
}

//evenOdd(4);

let nums = new Array();
const nums2 = [40];
nums2[5] = 24;
console.log(nums2[5]);

function isValidEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
console.log(isValidEmail("son@gmail.comu"));