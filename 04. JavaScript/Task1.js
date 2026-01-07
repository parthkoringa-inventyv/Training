const myPromise = (arr) => new Promise((resolve,reject) => {
    let sum = 0;
    sum = arr.reduce((acc,x) => acc+x, sum);
    if(sum>35)
    {
        resolve("Fullfilled");
    }
    else
    {
        reject("Rejected");
    }
});

function func1()
{
    let arr1 = [0,1,2,3,4];
    arr1_firstEle = arr1.shift();
    console.log(arr1);
    func2(arr1_firstEle,arr1);
}

function func2(firstEle, array)
{   
    let arr2 = [9,8,7,6,5];
    arr2.unshift(firstEle);
    arr2.push(...array);
    console.log(arr2);
    myPromise(arr2)
        .then((message) => console.log("Promise "+message))
        .catch((error) => console.log("Promise "+error));
}


func1();