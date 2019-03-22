// const list = [1,2,3,4,5,];

// function rotateList(list,k){
//     let newList = list;

//     for(let i=0;i<k;i++){
//         let n = newList.shift();
//         newList.push(n);
//     }
    
//     return newList;

// }

// console.log(rotateList(list,2));
class RotateList{
    constructor(list,k){
        this.list = list;
        this.k = k;
    }

    rotateList() {
        let newList = this.list;
        for (let i = 0; i < this.k; i++) {
            let n = this.list.shift();
            newList.push(n);
        }
        return newList;
    }
}
const list = [1,2,3,4,5,6,7,8,9];

const r = new RotateList(list,6);
console.log(r.rotateList());