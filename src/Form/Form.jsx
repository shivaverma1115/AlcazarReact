
import { Box, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import FormControle from './FormControle'
import RadioOption from './RadioOption'
import { AppContext } from '../ContextApp/AppContextProvider'

const Form = () => {
    const {AllUsers,setAllUsers} = useContext(AppContext)
    const [OrderData,setOrderData] = useState({}) ;
    const handleInp = (e)=>{
        setOrderData({...OrderData,[e.target.name]:e.target.value})
    }
    const handleSubmit =()=>{
        setAllUsers([...AllUsers,OrderData])
        console.log(AllUsers) ;
    }


    const form = [
        { label: "Email", type: "text", placeholder: "Email" },
        { label: "Form Filling Date", type: "date", placeholder: "Form_Filling_Date" },
        { label: "Your Name", type: "text", placeholder: "Your_Name" },
        { label: "Whatsapp No.", type: "number", placeholder: "Whatsapp_No." },
        { label: "Product code of the video *GC00*", type: "text", placeholder: "GC00" },
        { label: "If you want to change the music of the video, you can give a link to the YouTube video.", type: "text", placeholder: "Song_link" },

        { label: "On whose behalf do you want to make the invitation video ( Groom/Bride )", type: "Radio", input: "", placeholder: "Groom/Bride", number: "2" },

        { label: "Family Surname", type: "text", placeholder: "Family_Surname" },
        { label: "Groom Name", type: "text", placeholder: "Groom_Name" },
        { label: "Groom's Father Name", type: "text", placeholder: "Groom's_Father_Name" },
        { label: "Groom's Mother Name", type: "text", placeholder: "Groom's_Mother_Name" },
        { label: "Bride Name", type: "text", placeholder: "Bride_Name" },
        { label: "Bride's Father Name", type: "text", placeholder: "Bride's_Father_Name" },
        { label: "Bride's Mother Name", type: "text", placeholder: "Bride's_Mother_Name" },

        { label: "1 Program Name", type: "text", placeholder: "1_Program_Name" },
        { label: "1 Program Date and Time", type: "datetime-local", placeholder: "1_Program_Date" },
        { label: "1 Program Venue", type: "text", placeholder: "1_Program Venue" },

        { label: "2 Program Name", type: "text", placeholder: "2_Program Name" },
        { label: "2 Program Date and Time", type: "datetime-local", placeholder: "2_Program Date" },
        { label: "2 Program Venue", type: "text", placeholder: "2_Program Venue" },

        { label: "3 Program Name", type: "text", placeholder: "3_Program Name" },
        { label: "3 Program Date and Time", type: "datetime-local", placeholder: "3_Program_Date" },
        { label: "3 Program Venue", type: "text", placeholder: "3_Program Venue" },

        { label: "Other details (R.S.V.P etc.)", type: "text", placeholder: "Other_details" },

        { label: "Groom Individual Image", type: "file", placeholder: "Add_file" },
        { label: "Bride Individual image", type: "file", placeholder: "Add_file" },
        { label: "Couple image 1", type: "file", placeholder: "Add_file" },
        { label: "Couple image 2", type: "file", placeholder: "Add_file" },
        { label: "Couple image 3", type: "file", placeholder: "Add_file" },
        { label: "Couple image 4", type: "file", placeholder: "Add_file" },
    ]
  return (
    <Box>
    {
        form.map((ele, i) => {
            if (ele.type != "Radio") {
                return <FormControle key={i} input={ele.input} label={ele.label} type={ele.type} placeholder={ele.placeholder} handleInp={handleInp} />
            }
            else {
                return <RadioOption key={i} label={ele.label} number={ele.number} handleInp={handleInp} />
            }
        })
    }
    <Box m={'auto'} bg={'yellow'} w={'fit-content'}>
        <Button onClick={handleSubmit} p={4} color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)' _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)', }}>
            Submit
        </Button>
    </Box>
    </Box>
  )
}

export default Form
