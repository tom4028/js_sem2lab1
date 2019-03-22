 const words = "The quick  brown fox";


class TranslateWords{
    

     trans(str){
        let newStr = str.toLowerCase()
            .split(' ')
            .map((element) => {
                let ele = element.split('');
                let eleTemp = ele.shift();
                ele.push(eleTemp);
                ele.push('ay');
                let newEle = ele.join('');
                //console.log("From map: ",newEle);
                return newEle;      
            });
        newStr[0] = newStr[0].charAt(0).toUpperCase()+newStr[0].substr(1);
        return newStr.join(' ');
    }

    reWord(str){
        let newStr = str.toLowerCase()
            .split(' ')
            .map(element=>{
                //slice odejmuje 2 ostatnie znaki i zwraca poćżatkowe znaki elementu
                let ele = element.split('').slice(0,-2);
                let eleTemp = ele.pop();
                //console.log(eleTemp);
                ele.unshift(eleTemp);
                return ele.join('');
            })
    
            newStr[0] = newStr[0].charAt(0).toUpperCase()+newStr[0].substr(1);
            return newStr.join(' ');
    }
}

const newWords = new TranslateWords();
console.time('trans');
let newWord = newWords.trans(words);
console.log(newWord);
console.timeEnd('trans');
console.time('reword');
let reWord = newWords.reWord(newWord);
console.log(reWord);
console.timeEnd('reword');
