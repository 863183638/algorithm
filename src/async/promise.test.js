import DiyP from './promise';

const expectedArr = [3,1];

test('promise use resolves',() => {
    expect.assertions(1);
    return expect(getData()).resolves.toEqual(expectedArr);
})

// in node 7.6.0
test('promise use await',async () => {
    expect.assertions(1);
    const finalArr = await getData();
    return expect(finalArr).toEqual(expectedArr);
})

test('promise.all',async() => {
    expect.assertions(1);
    const finalArr = await promiseAll();
    expect(finalArr).toEqual(expectedArr);
})

function getData() {
    return new DiyP(function(resolve,reject){
        setTimeout(function(){
            resolve(1);
        },2000)
    })
    .then(function(data){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve([3].concat([data]));
            },2000)
        })
    })
    .then(function(data){
        return data;
    },function(reason){
        return reason;
    })
}

function promiseAll () {
    var diyP1 = new DiyP(function(resolve,reject){
        setTimeout(function(){
            resolve(3);
        },3000);
    })

    var diyP2 = new DiyP(function(resolve,reject){
        setTimeout(function(){
            resolve(1);
        },1000);
    })

    return DiyP.all([diyP1,diyP2])
    .then((datas) => {
        return datas;
    })
}