import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext() ;

const AppContextProvider = ({children})=>{
    const [section,setSection] = useState('videos') ;
    const [Data,setData] = useState([]) ;

    const fetchData = async()=>{
        var q = 'global creations'
        try {
            var res = await fetch
            // (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${youtubeAPI}`)
            (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=globalCreations&channelId=UCGQ_44ZukjKrTbSZdMvBvmw&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            var ans = await res.json() ;
            setData(ans.items) ;
        } catch (error) {
            return <h1>Something went wrong</h1>
        }
    }
    console.log(Data) ;
    useEffect(()=>{
        fetchData() ;
    },[])

    return <AppContext.Provider value={Data} >
      {children}
    </AppContext.Provider>
  }

export default AppContextProvider
