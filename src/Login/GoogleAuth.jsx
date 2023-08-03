import React from 'react'

const GoogleAuth = () => {
    const ClientId = "1089768944300-5uvrgaumpht9oqoccbg1mkm2guks77b1.apps.googleusercontent.com"

    const onSuccess = (res) => {
        console.log("LogIn Success! Current user : ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LogIn Failed ! res : ", res);
    }
    return (
        <div>
            hiiiii
            {/* <GoogleLogin
                clientId={ClientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={true}
            />, */}
        </div>
    )
}

export default GoogleAuth
