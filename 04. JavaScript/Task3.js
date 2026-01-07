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
    const symbolArray = Symbol("integerArray");
    const myObj = {
        symbolArray: [0,1,2,3,4] 
    };
    arr1_firstEle = myObj.symbolArray.shift();
    console.log(myObj.symbolArray);
    func2(arr1_firstEle,myObj.symbolArray);
}

function func2(firstEle, array)
{   
    const symbolArray2 = Symbol("integerArray2");
    const myobj2 = {
        symbolArray2: [5,6] 
    };

    myobj2.symbolArray2.unshift(firstEle);
    myobj2.symbolArray2.push(...array);
    console.log(myobj2.symbolArray2);
    myPromise(myobj2.symbolArray2)
        .then((message) => console.log("Promise "+message))
        .catch((error) => console.log("Promise "+error));
}


func1();