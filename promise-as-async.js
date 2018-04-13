// it's not marked as async, just returning a promise
function test() {
    return new Promise(function(resolve, reject) {
        resolve("ok")
    });
}

// it's not marked as async, just returning a promise
function fail() {
    return new Promise(function(resolve, reject) {
        reject(new Error("oops"))
    });
}

(async () => {
    // yet you can call it with await
    console.log(await test())
    try {
        await fail()
    } catch (error) {
        console.log(error.message)
    }
})()
