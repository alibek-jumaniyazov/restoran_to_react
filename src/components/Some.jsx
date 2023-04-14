import { useState } from "react"

export function Some () {
const [cart, setCart] = useState([
    {
        id: 1,
        name: 'Pizza',
        price: 200,
        count: 1
    },
    {
        id: 2,
        name: 'Pizza 3',
        price: 400,
        count: 2
    },
])

const addProd = (prod) => {
    setCart(prev => {
        const exist = prev.find(({id}) => id === prod.id)

        if(exist){
            return prev.map((p) => {
                if(p.id === prod.id){
                    return {
                        ...p,
                        count: p.count + 1
                    }
                }
            })
        } 
        else {
            return [...prev, {
                ...prod,
                count: 1
            }]
        }
    })
}

return <>
    
    </>
}