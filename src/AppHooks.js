import React, { useState, useEffect } from "react";


function getRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Abacaxi", "Uva", "Melão"])
        }, 2000)
    })
}

export default function Counter() {
    const [total, setTotal] = useState(0);
    const [frutas, setFrutas] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            const frutas = await getRecords()
            setFrutas(frutas);
        }

        fetchRecords();
    }, [])


    const onIncrementHandler = () => {
        setTotal(total + 1)
    }
    return (
        <div>
            <h1>Total de clicks é {total}</h1>
            <button onClick={onIncrementHandler}>Click aqui!!</button>
            <ul>
                {frutas && frutas.map((fruta, index) => <li key={index}>{fruta}</li>)}
            </ul>
        </div>
    )
}