

const sumar = (a,b) => a + b

const multiplicar = (a,b) => a * b

const multiplicar2 = (a, b) => a * b
{

    let result = 0

    for (let i = 1; i <= a; i++) {
        result += b
    }

    return result
}

//console.log( multiplicar(10,2) )

const users = [
    {
        id: 1,
        nombre: "Roberto",
        curso: "React"
    },
    {
        id: 2,
        nombre: "Juan",
        curso: "React"
    },
    {
        id: 3,
        nombre: "Pepe",
        curso: "React"
    },
    {
        id: 4,
        nombre: "Jona",
        curso: "React"
    },
]

//const match = users.find((el) => el.nombre === "Juan" )

//console.log(match)

function encontrar(arr, fn) {
    for (var i=0; i < arr.length; i++) {
        var current = arr[i]

        if (fn(current) === true){
            return current
        }
    }
}

encontrar(users, (el) => el.curso === "React")