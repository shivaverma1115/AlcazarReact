import React, { createContext, useEffect, useState } from 'react'
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [Data, setData] = useState([]
        || JSON.parse(localStorage.getItem("Data"))
    );

    const [playListId, setplayListId] = useState('PLdZ7wsCqF8CZNFPSnnPEc3_A0DOFcWGlg')
    const [nextPageToken, setNextPageToken] = useState('');
    const fetchData = async () => {
        try {
            var res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&pageToken=${nextPageToken}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            var ans = await res.json();
            setData(data =>(data,ans.items));
            console.log(ans);
            if( ans.nextPageToken !== undefined ){
                setNextPageToken(ans.nextPageToken);
            }
        } catch (error) {
            return <h1>Something went wrong</h1>
        }
    }
    useEffect(() => {
        fetchData();
    }, [nextPageToken])
    localStorage.setItem("Data", JSON.stringify(Data));

    const [state, setState] = useState({
        isAuth: false,
        loading: false,
        error: null,
        token: "",
    })

    console.log(Data);
    return <AppContext.Provider value={{ Data, state, setState }} >
        {children}
    </AppContext.Provider>
}

export default AppContextProvider
