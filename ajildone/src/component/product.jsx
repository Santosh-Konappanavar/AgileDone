import axios from "axios";
import React, { useEffect, useState } from "react"
import './product.css'
const LoadingPage = () => {
  const [users, setUsers] = useState([]);
  const [users1,setUsers1] = useState([]);
  const fetchData = () => {
    const user1="https://fakestoreapi.com/products"
    const user2='https://fakestoreapi.com/products/category/jewelery'
    const getuser1=axios.get(user1)
    const getuser2= axios.get(user2)
    axios.all([getuser1,getuser2]).then(
      axios.spread((...alldata)=>{
        const alldatauser1=alldata[0].data
        const alldatauser2=alldata[1].data
        setUsers(alldatauser1);
        setUsers1(alldatauser2);
      })
    )

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Products Detail page</h1>
      {users.length > 0 && (
        <div id="container">
        {users.map(user => (
            <div key={user.id} id="container-box">
                <img src = {user.image} />
                <div>
                <h3 style={{color:"gray"}}>{user.title}</h3>
                <h4 style={{color:"black"}}>Price:{user.price}</h4>
                <h5 style={{color:"gray"}}>Category:{user.category}</h5>
                </div>
            </div>
          ))}
           {users1.map(user1 => (
            <div key={user1.id} id="container-box">
                <img src = {user1.image} />
                <div>
                <h3 style={{color:"gray"}}>{user1.title}</h3>
                <h4 style={{color:"black"}}>Price:{user1.price}</h4>
                <h5 style={{color:"gray"}}>Category:{user1.category}</h5>
                </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default LoadingPage