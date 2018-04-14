function a1() {
    return new Promise(resolve => setTimeout(resolve, 500, "one"))
}

function a2() {
    return new Promise(resolve => setTimeout(resolve, 500, "two"))
}


(async () => {
    console.time("sequence")
    console.log(await a1())
    console.log(await a2())
    console.timeEnd("sequence")

    console.time("parallel")
    const [r1, r2] = await Promise.all([a1(), a2()])
    console.log(r1)
    console.log(r2)
    console.timeEnd("parallel")
})()

