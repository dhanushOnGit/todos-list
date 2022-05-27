import React from 'react'

 export const Footer = () => {
   let FooterStyle = {
     position:"relative",    //Here we are creating an object which stores all the css which is included in this footer
     top :"100vh",
     width : "100%",
     border : "2px solid pink"

   }
   //And calling the FooterStyle in style
  return (
    <footer className='bg-dark text-light py-3' style={FooterStyle}> 
      <p className='text-center'>
      Copyright &copy; MyTodosList.com
      </p>
     
    </footer>
  )
}


