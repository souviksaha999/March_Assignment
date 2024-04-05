import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function Category() {
    const {names} = useParams()
    const [prod, setProd] = useState([])
    const [catg, setCatg] = useState([])
    let initialLimit = 3;
    const [limit, setLimit] =useState(initialLimit)

    async function getProducts(){
        try {
            const response3 = await axios.get(`https://dummyjson.com/products/category/${names}`)
        setProd(response3.data?.products)
        // console.log(response3.data) 
        } catch (error) {
            console.log(error)
        }      
    }

    useEffect(()=>{
        getProducts()
    },[prod])

    async function getCategories(){
        try {
            const response2 = await axios.get("https://dummyjson.com/products/categories")
        setCatg(response2.data)
        // console.log(response2)
        } catch (error) {
            console.log(error)
        }     
    }

    useEffect(()=>{
        getCategories()
    },[])

  return (
    <>
    <div className="container">
        <div className="row">
             <div className="col-md-3">
                <h1>Categories :- </h1>
                {
                    catg?.map((item)=>{
                        return(
                            <>
                              <h5><Link to={`/category/${item}`}>{item}</Link></h5>
                            </>
                        )
                    })
                }
            </div> 
            
            <div className="col-md-9">
                <div className="container">
                    <div className="row">
                    {
                   prod?.slice(0,limit).map((item)=>{
                    return(
                        <>
                        <div className="col-md-4">
                        <div class="card" style={{width: "18rem", height : "22rem" }}>
                            <img src={item.images[0]} class="card-img-top" alt="..." height="225px" />
                            <div class="card-body">
                                <h5 class="card-title">Title : {item.title} </h5>
                                <p class="card-text">Desc : {item.description.slice(0,18)}..... 
                                <Link to={`productdetails/${item.id}`} >Read More......</Link> </p>
                            </div>
                            </div>
                        </div>
                        </>
                    )
                   }) 
                }
                    </div>
                    <button className='btn btn-success' onClick={()=>setLimit(limit+3)} >Load More</button>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
