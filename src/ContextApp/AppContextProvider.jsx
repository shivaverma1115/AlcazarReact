import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext() ;

const AppContextProvider = ({children})=>{
    const [section,setSection] = useState('videos') ;
    const [Data,setData] = useState([]) ;

    const fetchData = async()=>{
        var youtubeAPI =  'AIzaSyDDmgGvg_SrtqhkL61Hxronq9Bs5OYA5rY' ;
        var q = 'global creations'
        try {
            var res = await fetch
            // (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${youtubeAPI}`)
            (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=globalCreations&channelId=UCGQ_44ZukjKrTbSZdMvBvmw&type=video&key=AIzaSyDDmgGvg_SrtqhkL61Hxronq9Bs5OYA5rY`)
            var ans = await res.json() ;
            setData(ans.items) ;
        } catch (error) {
            return <h1>Something went wrong</h1>
        }
    }
    
    useEffect(()=>{
        fetchData() ;
    },[])
    // console.log(Data) ;

    return <AppContext.Provider value={Data} >
      {children}
    </AppContext.Provider>
  }

export default AppContextProvider
