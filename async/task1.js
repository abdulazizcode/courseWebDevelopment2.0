// Task 1: Translate the story into code.
const onMyBirthday = (isSick) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(!isSick){
                resolve(1);
            }else{
                reject(0)
            }
        }, 2000)
    })
}

onMyBirthday(false).then((res) =>{
    console.log(`Now I have ${res} cake`);
}).catch((rej) =>{
    console.log(`Unfortenalty i have ${rej} cakes`)
})