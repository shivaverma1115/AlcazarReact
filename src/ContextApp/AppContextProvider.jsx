import React, { createContext, useEffect, useState } from 'react'
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [Data, setData] = useState([]);
    const [obj,setObj] = useState({}) ;

    const [Loading, setLoading] = useState(true);

    const [playListId, setplayListId] = useState('PLdZ7wsCqF8CZNFPSnnPEc3_A0DOFcWGlg')
    const [nextPageToken, setNextPageToken] = useState('');

    const fetchData = async () => {
        try {
            var res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&pageToken=${nextPageToken}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            var ans = await res.json();
            var ans1 = ans.items;
            var whole = [];
            ans1.filter((ele) => {
                var GCcode = ele.snippet.title.split("GC")[1];
                if (GCcode !== undefined) {
                    const code = parseInt(GCcode.split(" ")[0]);
                    var obj = {
                        index: code,
                        code: `GC0${code}`,
                        mrp: 2500,
                        price: 1000,
                    }
                    const mergedObj = { ...ele, ...obj };
                    whole.push(mergedObj);
                }
            })

            const newArray = [...Data, ...whole];
            setData(newArray);
            setLoading(false);
            console.log(ans);
            if (ans.nextPageToken !== undefined) {
                setNextPageToken(ans.nextPageToken);
            }
        } catch (error) {
            return <h1>Something went wrong</h1>
        }
    }
    useEffect(() => {
        fetchData();
    }, [nextPageToken])


    const handleSortAcc = () => {
        const sortData = Data.sort((a, b) =>
            a.index - b.index
        )
        setData(sortData);
    };
    const handleSortDes = () => {
        const sortData = Data.sort((a, b) =>
            b.index - a.index
        )
        setData(sortData);
    };


    const [state, setState] = useState({
        isAuth: false,
        loading: false,
        error: null,
        token: "",
    })
    if (Loading) {
        return <h1 style={{ width: 'fit-content', margin: 'auto' }} ><img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' /></h1>
    }

    return <AppContext.Provider value={{
        Data,setData,
        state, setState
        , handleSortAcc
        , handleSortDes
        ,setObj,obj
    }} >
        {children}
    </AppContext.Provider>
}

export default AppContextProvider
