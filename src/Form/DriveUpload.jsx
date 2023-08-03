import { Button } from '@chakra-ui/react';
import React from 'react'
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

const DriveUpload = () => {
    const [openPicker, authResponse] = useDrivePicker();  
    const handleOpenPicker = () => {
    openPicker({
        clientId: "1089768944300-tp5t2vv1ii6sspopo316eb2cnlnennv5.apps.googleusercontent.com",
        developerKey: `${process.env.REACT_APP_DRICE_API_KEY}`,
        viewId: "DOCS",
        token: "ya29.a0AfB_byAVXHsIOdLa1D5VA2tO9M6ZYndJPGaBVl5fZXY0KMCJak2GS4jNgaWGp6xSpOIxhivWb_h6Z6OSvuQaK1JN2bmiWfxf4ifMZnwjjctLB77cGWY8ZZVGbo71DHDD1vQJOGDyIHSox1f56GfRQGEiKWmCaCgYKAZwSARASFQHsvYlszbiIG1q0w5ZwgHFesZri5Q0163",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        // customViews: customViewsArray, // custom view
        callbackFunction: (data) => {
          if (data.action === 'cancel') {
            console.log('User clicked cancel/close button')
          }
          console.log(data)
        },
      })
    }
  return (
    <div>
        <Button onClick={() => handleOpenPicker()}>Open Picker</Button>
    </div>
  )
}

export default DriveUpload
