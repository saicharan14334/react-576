import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    // const [count, setCount]=useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },5000);
    //     // document.title="mru"
    //     document.title= count;

    // },[])
    //!fetch api
    const [users , setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>
        {
            // console.log(data);
            setUsers(data);
        }
        ))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='parent'>UseEffect
        {/* <h1>{count}</h1> */}
        {
            users.map((user , index)=>{
                return(
                    <React.Fragment>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    </React.Fragment>
                )

                
            })
        }
    </div>
  )
}
export default UseEffect;
