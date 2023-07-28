import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [Data, setData] = useState([]);

    const [Loading, setLoading] = useState(true);

    const [playListId, setplayListId] = useState('PLdZ7wsCqF8CZNFPSnnPEc3_A0DOFcWGlg')
    const [nextPageToken, setNextPageToken] = useState('');
    const fetchData = async () => {
        try {
            var res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&pageToken=${nextPageToken}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            var ans = await res.json();
            const newArray = [...Data, ...ans.items];
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

    var arr = [];
    var whole = [] ;
    const handleSort = () => {
        const word = "GC";
        const foundObjects = Data.filter((ele) => {
            const title = ele.snippet.title;
            const index = title.toLowerCase().indexOf(word.toLowerCase());
            var GCcode = ele.snippet.title.split("GC")[1];
            if (GCcode !== undefined) {
                const code = parseInt(GCcode.split(" ")[0]);
                arr.push(code);
                whole.push(ele) ;
            }
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j + 1] < arr[j]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;

                        var temp2 = whole[j];
                        whole[j] = whole[j + 1];
                        whole[j + 1] = temp2;
                    }
                }
            }

            return index !== -1;
        });
        console.log(foundObjects);
        console.log(whole);
        setData(whole);
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
        Data, state, setState
        , handleSort
    }} >
        {children}
    </AppContext.Provider>
}

export default AppContextProvider
