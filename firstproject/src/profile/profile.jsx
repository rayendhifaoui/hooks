import React from 'react'


const Profile = ({fullName , bio='instructor' , profession , children, handleName}) => {
    console.log({fullName , bio , profession});
  return (
    <>
     <div> the full name is: {fullName}</div>   
     <div> the bio is: {bio} </div>   
     <div> the profession is: {profession} </div>   
     <div> {children} </div>
     <button onClick={()=>handleName(fullName)}> click here </button>
    </>
  )
}

export default Profile