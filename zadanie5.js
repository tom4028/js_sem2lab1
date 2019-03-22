class DigitList{
    constructor(num){
        this.num = num;
    }

    digitList(){
        let nTemp=[];
        nTemp = this.num.toString().split('');
        return nTemp;
    }
}


const dl = new DigitList('aloha')

console.log(dl.digitList());