
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import * as device from "react-device-detect"

type IOsTypes = 'IOS' | "ANDROID" | "WindowsPhone" | "Windows" | "MAC_OS"

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const os = device.osName.toUpperCase() as IOsTypes
    switch (os) {
      case "IOS":
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
               router.push("https://itunes.apple.com/instagram")
            }, 25);
              router.push("instagram://")
        break;
      case "ANDROID":
        setTimeout(function () {
          var now = new Date().valueOf();
          if (new Date().valueOf() - now > 100) return;
            try{
              router.push("market://details?id==com.instagram.android")
            }catch{
             router.push("https://play.google.com/store/apps/details?id=com.instagram.android")
            }
          }, 25);
            router.push("instagram://")
        break;
      default:
          alert(`Fazer pagina de download do app ${os}`)
        break;
    }
    
  },[router]);

  // useMemo(() => {
  //   console.log(isIOS)
  // },[])

  return (
    <h1>Hello World</h1>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const userAgent = context.req.headers["user-agent"];
//   let device = ""
//   if(userAgent){
//     const {isIOS, isAndroid} = getSelectorsByUserAgent(userAgent)
//   }

//   return { props: {device}}
// }
 
export default Home