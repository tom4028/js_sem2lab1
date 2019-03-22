class PrimeNumbers{
    
    isPrime(n) {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    };
    printPrimeNumber(min, max) {
        let tab = [];
        //tworzymy tablice o podanym zasięgu
        for (let i = min; i <= max; i++) {
            tab.push(i);
        }
        for (let i = 0; i <= tab.length; i++) {
            if (!this.isPrime(tab[i])) {
                tab.splice(i, 1);
            }
        }
        return tab;
    }

};

let p = new PrimeNumbers();
console.log(p.printPrimeNumber(5,37));