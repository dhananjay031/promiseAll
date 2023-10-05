// pollyfill of Promise.all ✅


// make an array of promises 


let arr = [];

for(let i = 1; i <= 5; i++){
    arr.push(new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(i*500);
        },i*500);
    }))
}


function promiseAll(arr){
    let results = [];
    let total = 0;
    return new Promise((resolve, reject) =>{
        arr.forEach((promise,index) => {
            promise.then((val)=>{
                results[index] = val;
                total++;
                if(total === arr.length){
                    resolve(results);
                }
            }).catch((err) =>{
                reject(err);
            })
        });
    })
}

const myprm = promiseAll(arr);
console.log(myprm,'myprm');
myprm.then((val)=>{
    console.log('hello',val);
}).catch(err =>{
    console.log('err',err);
})