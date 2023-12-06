const doSomething = data => console.log(`Doing something with ${data}`)

const foo = (data, func) => func(data)

foo('some data', doSomething)
