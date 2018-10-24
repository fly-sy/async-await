const fs = require('fs')
// 使用promise封装异步读取函数  
function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

// es6 读取文件方式 ，该方式只是解决了回调地狱问题，并不能解决代码减少代码量  
getFileByPath('./files/1.txt')

  .then(data => {
    console.log(data)
    return getFileByPath('./files/2.txt')
  })
  .then(data => {
    console.log(data)
    return getFileByPath('./files/3.txt')
  })
  .then(data => {
    console.log(data)
  })  


// es7 的 async 和 await  减少promise 的代码量 
async function getData() {
  // await 只能在 async 方法中使用,并且await之后的异步方式是支持promise类型的 
  // 当前的三个请求方式是同步的方式实现异步请求，得到结果的顺序类 data1 、data2 、 data3 
  const data1 = await getFileByPath('./files/1.txt')
  const data2 = await getFileByPath('./files/2.txt')
  const data3 = await getFileByPath('./files/3.txt')

  console.log(data1)
  console.log(data2)
  console.log(data3)
}

getData();

