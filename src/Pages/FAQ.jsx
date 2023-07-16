import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import SlideFloder from './SlideFloder'
import Ads from '../Componects/Ads'
import Footer from '../Componects/Footer'

const FAQ = () => {
  const faq = [
    { first: "How much cost of this video?", second: "The cost of all the videos is different and price is mention our website." },
    { first: "How can we place an order for the video or card?", second: "This is a very simple process, you just have to follow 3 steps. 1 Select your product. 2 Take its code or screenshot and share it with our WhatsApp. 3 Fill out the order form. We will contact you as soon as we receive your order." },
    { first: "What content do you want to create a video?", second: "You will get all the details in the order form. You can see it, fill the order form correctly, your product will be prepared according to your filled details." },
    { first: "How can we contact you?", second: "It's very simple to contact us. You can Call or WhatsApp us on this number (+91 8707505812) and You can get all the product information from us." },
    { first: "How to send details and where?", second: "You can share your details via Order Form, WhatsApp or Email, Order form mention in payment page and footer, WhatsApp number is +91 8707505812 or Email-id- globalcreations22@gmail.com" },
    { first: "What is your payment mode?", second: "Payment is taken online here. You can pay through Google Pay, Phone Pay, Paytm and UPI. You will get the payment details on the payment page." },
    { first: "How much advance do we have to make at the time of product order?", second: "For this you can contact us, although we do not take any advance, but it may be that if any product requires advance, then it can be taken. Advance will be communicated to you on WhatsApp or Call." },
    { first: "How will you send the product to us?", second: "The product will be sent to you on WhatsApp. In which a normal WhatsApp video and the other will be sent from WhatsApp document, so that the quality of the video will be good. If you want video on email, you will get it too." },
    { first: "When do we have to make payment?", second: "You have to pay after demo." },
    { first: "What will be the difference between demo and final product?", second: "Screenshots of slides will be sent to you in the demo. After the demo is final, you have to make full payment, after that the final product will be sent to you." },
    { first: "How long after payment we will get the final product?", second: "You will get the product within 30 minutes of payment." }
  ]
  return (
    <>
    <Ads display={"block"} />
    <Box maxW={'100vh'} m={'auto'} p={10}>
      <Box>
        <Text fontSize={30} fontWeight={700}>Frequently Asked Questions (FAQ)</Text>
        <Text mb={5}>Note: The data-parent attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</Text>
      </Box>
      {
        faq.map((ele, i) => {
          return <SlideFloder first={ele.first} second={ele.second} font={20}left={'left'} />
        })
      }
    </Box>
    <Footer display={"block"} />
    </>
  )
}

export default FAQ
