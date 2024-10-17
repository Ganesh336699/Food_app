

Title = () => (

 <a href="/"> 
 <img
  className="logo"
   src="https://graphicsfamily.com/wp-content/uploads/2020/10/Restaurant-logo-design-free-template-scaled.jpg" 
   />
   </a>
);




export const Header = () => {

    return (
       
         <div className="header">
              
                <Title/>

             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
               </ul>
             </div>
        </div>
    )
}
export default Header;