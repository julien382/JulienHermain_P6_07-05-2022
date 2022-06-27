export const displayTri = async (medias, photographerName) => {
    const objArr = [
        {city: "Shanghai", pop: 24},
        {city: "Tokyo", pop: 37},
        {city: "Sao Paulo", pop: 21},
        {city: "Delhi", pop: 29},
    ]

    objArr.sort((a,b) => a.pop - b.pop)

    console.log(objArr);


    /*const numbers = [1,2,3]

    numbers.sort((a,b) => {
        console.log(`${a} - ${b}`);

        return a - b;
    })*/
};



