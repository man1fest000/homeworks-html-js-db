// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прoкнутись - 0.3с



function wakeUp(status){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(status){
                console.log("Проcнувся, треба вмитися");
                resolve(true)
            }else{
                reject('Сьогодні вихідний, спимо далі')
            }
        },1200)
    })
}
// Поснідати - 1с
function eat(status){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(status){
                console.log("Я поснідав");
                resolve(true)
            }else{
                reject('Я не поснідав')
            }
        } ,1000)
    } )
}
// Піти в душ - 0.5с
function takeShower(status){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(status){
                console.log("Я помився");
                resolve(true)
            }else{
                reject('Я не помився')
            }
        } ,500)
    } )
}
// Дочекатись автобус - 3с
function bus(status){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(status){
                console.log("Я дочекався  автобуса");
                resolve(true)
            }else{
                reject('Автобус не приїхав')
            }
        } ,3000)
    } )
}
// Пообідати - 1с
function dinner(status){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(status){
                console.log("Я пообідав");
                resolve(true)
            }else{
                reject('Я не пообідав')
            }
        } ,1000)
    } )
}

//
// І так далі

// wakeUp(true)
//     .then((resolve)=>{
//         return eat(resolve)
//     }).then((resolve)=>{
//     return takeShower(resolve)
// }).then((resolve)=>{
//     return bus(resolve)
// }).then((resolve)=>{
//     return dinner(resolve)
// }).catch((reason)=>{
//     console.log(reason)
// })

async function run (){
    try{
        await wakeUp(true)
        await eat(true)
        await takeShower(false)
        await bus(true)
        await dinner(true)
    }catch(reason){
        console.log(reason)
    }
}

run()