{
  name: 'Ezequiel'
}

const helloWorld = () => {
  return new Promise((resolve,reject) => {
    (false)
    ? setTimeout(() => resolve('Hello world'), 3000)
    : reject (new Error('testo error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

/* Otra forma de usar async await*/

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error)
  }
};

anotherFunction();