const doSomething = data => console.log(`Doing something with ${data}`)

const display = (data, func) => func(data)

display('some data', doSomething)
