import { useEffect,useState } from "react";

const useOnline = ( ) => {


const [isOnline ,setuseOnline] = useState(true);


useEffect(() => {

window.addEventListener("online" , () => {

    setuseOnline(true);
});
window.addEventListener("offline", () => {

    setuseOnline(false);
})



},[])
return isOnline;


};
export default useOnline;