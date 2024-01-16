console.log('1')

// setTimeout(() => {
//     console.log('2');
// }, 1000);

// console.log('3');

// const promise = new Promise(function(resolve, reject){
//     console.log('IN PROMISE')
// })

// console.log(promise);


// Promise Consuming
// const promise = new Promise(function(resolve, reject){
//     console.log('IN PROMISE')
//     resolve()
// })

// promise 
//     .then(() => {
//         console.log('Now fulfilled');
//     })


// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('resolved');
//         resolve()
//     } , 1000)
// })

// promise 
//     .then(() => {
//         console.log('Now fulfilled');
//     })


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('RESOLVE');
//         resolve()
//     }, 1000)
// })
//     .then(() => {
//         console.log('Hey');
//     })

////////////////////////////////////////////////
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             console.log('RESOLVE')
//             resolve('fulfull')
//         } else {
//             console.log('Error')
//             reject('Error not fulfill')
//         }
//     }, 1000)
// })
//     .then((response) => {
//         console.log('Hey', response);
//     })
//     .catch((error) => {
//         console.log('Hey an error !', error)
//     })


///////////////////////////////////////////////

// console.log("connected");
// let error = false;
// new Promise((resolve, reject) => {
//   if (error) {
//     setTimeout(() => {
//       console.log("RESOLVED");
//       resolve("THIS IS FULFILLED");``
//     }, 2000);
//   }

//   reject("THIS IS ERROR");
// })
//   .then((resolve) => {
//     console.log("Fulfill", resolve);
//   })
//   .catch((error) => {
//     console.log("this is error" , error);
//   });


// async function myPromise(){
//     try {
//         const pr = await Promises
//         console.log("3", pr );
//     } catch (error) {
//         console.log("error" ,error);
//     }
// }

///////  200 this code show that your network rewuest is fulfilled
///////  404 this code show that your Data is not found
///  TOPIC FOR THE NEXT CLASS

// Chaining in promises 
console.log("HII");
const callBack = () => {
  console.log("I am anonimous ");
}
callBack()


