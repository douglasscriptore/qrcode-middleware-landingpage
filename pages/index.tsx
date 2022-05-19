
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import * as device from "react-device-detect"

type IOsTypes = 'IOS' | "ANDROID" | "WindowsPhone" | "Windows" | "MAC_OS"

const redirects = {
  ios: {
    scheme: "instagram://",
    appstoreurl: "https://apps.apple.com/us/app/instagram",
    appmarket: ""
  },
  android: {
    scheme: "instagram://",
    appstoreurl: "https://play.google.com/store/apps/details?id=com.instagram.android",
    appmarket: "market://details?id==com.instagram.android"
  },
  unsupport: {
    scheme: "",
    appstoreurl: "",
    appmarket: ""
  }
}

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const systemType = device.isIOS ? "ios" : device.isAndroid ? "android" : "unsupport"

    if(systemType === "unsupport") {
      alert("Redicionar para tela de download")
    }

    const link = redirects[systemType]

        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            try{
              router.push(link.appmarket)
            }catch{
              router.push(link.appstoreurl)
            }
            }, 25);
              router.push(link.scheme)
  },[router]);


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