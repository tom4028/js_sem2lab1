class Fibo{
    constructor(n){
        this.n =n;
    }

    fiboNum(){
        let f = [];
        if(this.n == 0){
            return f[0]=0;
        }
        if(this.n==1){
            return f[1]=1;
        }
        if(this.n>=2){
            f=[1,1];
            for(let i=2;i<this.n+1;i++){
                    f.push(f[i-2]+f[i-1]);
                }  
        }
        return f;
    }
}

const fibonacci = new Fibo(6);
console.time('fibo');
console.log(fibonacci.fiboNum()[6]);
console.timeEnd('fibo');