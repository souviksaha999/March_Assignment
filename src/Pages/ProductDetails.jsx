import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id} = useParams()
    const [prod, setProd] = useState([])

    async function getProducts(){
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
        setProd(response.data)
        // console.log(response) 
        } catch (error) {
            console.log(error)
        }  
    }

    useEffect(()=>{
        getProducts()
        
    },[])


  return (
    <>
    <div className="container" style={{border : "2px dashed black" }}>
        {prod?.images?.map((item)=>{
            return(
                <>
                <img src= {item} alt="" height="200px" />
                </>
            )
        })}
        <h1><span style={{ fontWeight : "bold" }}>Id : </span> {prod.id} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Title : </span>{prod.title} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Description : </span> {prod.description} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Price : </span>{prod.price} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Discount : </span>{prod.discountPercentage} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Rating : </span>{prod.rating} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Stock : </span>{prod.stock} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Brand : </span>{prod.brand} </h1>
        <h1><span style={{ fontWeight : "bold" }}>Category : </span>{prod.category} </h1>
        
        
    </div>
    </>
  )
}
