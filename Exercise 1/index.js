var test = ['pablo','jasper','joey'];


function main(val) {
    var total = 0;
    for(var i = 0; i < test.length; i++)
    {
        total+= test[i]; 
    }
    return total;
}

console.log(main(test));

