// async

//! blocante
// const hello = (nome) => {
//     return `Hello, ${nome}`;
// };

// const resultado = hello("joao");
// console.log(resultado);

//! promisses
// function hello(nome) {
//     return new Promise(function (resolve, reject) {
//         resolve(`Hello, ${nome}`);
//     });
// }

// hello("joao").then((res) => console.log(res));

//! async sozinho
// async function hello(nome) {
//     return `Hello, ${nome}`;
// }

// hello("joao").then((res) => console.log(res));

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo!");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    // ; como operação é no-op
    return Promise.resolve(res);
}

// function chamadaComThenECatch() {
//     fatorial(10)
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));

//     fatorial(-10)
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
// }

async function chamadaComAsyncAwait() {
    try {
        const f1 = await fatorial(10);
        console.log(f1);
        const f2 = await fatorial(-10);
        console.log(f2);
    } catch (e) {
        console.log("Erro " + e);
    }
}

chamadaComAsyncAwait();
