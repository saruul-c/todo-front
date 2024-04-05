import { ReactNode, useEffect, useState } from "react";

export default function Auth({ children }: { children: ReactNode }) {
  const userLoggedIn = true;
  const [state, setstate] = useState<boolean>(false);
  // const registered =
  

  useEffect(() => {
    console.log(1);

    return()=>{
      console.log(3)
    }
  }, [state]);

  useEffect(() => {
   
    const temp = setInterval(()=>{
      setstate((current)=>!current)
    },1000)
  }, [])
  
  
  return userLoggedIn && children;
}
