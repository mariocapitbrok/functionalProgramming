const doSomething = status => console.log('Doing something')

const foo = (data, func) => func(data)

foo('some data', doSomething)
