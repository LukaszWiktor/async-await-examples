async function test() {
    return "ok"
}

async function fail() {
    throw new Error("oops")
}

test()
    .then(result => {
        console.log(result)
    })

fail()
    .catch(error => {
        console.error(error.message)
    })
