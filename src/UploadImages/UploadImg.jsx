import { Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { AppContext } from '../ContextApp/AppContextProvider';

const UploadImg = () => {
  const { userImg, setUserImg } = useContext(AppContext);
  const [image, setImage] = useState("");
  const submitImg = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "global-creations");
    data.append("cloud_name", "dbbuqesjg");

    

    fetch(`https://api.cloudinary.com/v1_1/dbbuqesjg/image/upload`, {
      method: "POST",
      body: data
    }).then((res) => res.json())
      .then((data) =>
        // console.log(data),
        setUserImg([data,...userImg]) 
      )
      .catch(err => console.log(err));
  }
  return (
    <div>
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <Button onClick={submitImg} >Upload</Button>
    </div>
  )
}

export default UploadImg
