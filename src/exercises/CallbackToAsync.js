// function getData(callback) {
//     setTimeout(() => {
//         const data = "Hello, world!";
//         callback(data);
//     }, 2000);
// }

// getData((result) => {
//     console.log(result);
// });


const isCallbackSuccess = true;
const data = 'this is the correct data'

function callback(data) {
    return new Promise((resolve, reject) => {
        if (isCallbackSuccess) {
            resolve(data)
        }
        else {
            reject('oops!')
        }
    })
}


async function getDataAsync(data) {

    try {
        const getData = await callback(data);
        setTimeout(() => {
            console.log('message received: ' + getData);
        }, 2000)
    }
    catch (error) {
        console.log(error);
    }
};

getDataAsync(data);