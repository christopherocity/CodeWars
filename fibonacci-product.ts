function fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2);
}

function productFib(prod){
    let i = 1;
    let j = 2;
    let factorI;
    let factorJ;
    let isFibProduct = false;
    while (true) {
        factorI = fibonacci(i);
        factorJ = fibonacci(j);
        let fibProduct = factorI * factorJ;
        if (fibProduct >= prod) {
            isFibProduct = fibProduct === prod;
            break;
        } else {
            i++;
            j++;
        }
    }
    return [factorI, factorJ, isFibProduct]
}


function productFib2(prod){
    let [a, b] = [0, 1];

    while(a * b < prod)
        [a, b] = [b, a + b];

    return [a, b, a * b === prod];
}

