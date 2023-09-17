import React ,{useState}from 'react'
import GooglePayButton from '@google-pay/button-react'
import { UserAuth } from '../context/AuthContext'
import{Navigate,useNavigate} from 'react-router-dom'
import {API_VERSION,APIVERSIONMINOR,ALLOWED_PAYMENT_METHODS,
        MERCHANT_INFO,TRANSACTION_INFO,SHIPPING_ADDRESS_REQUIRED,
        EXISTING_PAYMENT_METHOD_REQUIRED,BUTTON_COLOR,BUTTON_TYPE
        } from '../utils/contants'

const Payment = () => {
 const{updateUser,user} = UserAuth()
 const[isUserPaid,setIsUserPaid] = useState(false)
 const navigate = useNavigate()
 if(isUserPaid===true)
 {
  navigate('/shop')
 }
  return (
    <div className="googlepay-btn">
    <p>You are exceeded our free trail limit. Please pay to use our service</p>
    <h3 className="payment-item-text">Pay through google pay</h3>
        <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: API_VERSION,
    apiVersionMinor: APIVERSIONMINOR,
    allowedPaymentMethods: ALLOWED_PAYMENT_METHODS,
    merchantInfo: MERCHANT_INFO,
    transactionInfo: TRANSACTION_INFO,
    shippingAddressRequired:SHIPPING_ADDRESS_REQUIRED,
    callbackIntents:['PAYMENT_AUTHORIZATION'],

  }}
  onLoadPaymentData={paymentRequest => {
    // console.log('load payment data', paymentRequest);
  }}
  onPaymentAuthorized={paymentData=>{
    // console.log('Payment authorized success',paymentData)
    // console.log("user data in payment",user)
    updateUser(user.email,true,0)
    setIsUserPaid(true)
    return {transactionState:'Success'}
  }}
  existingPaymentMethodRequired={EXISTING_PAYMENT_METHOD_REQUIRED}
  buttonColor={BUTTON_COLOR}
  buttonType={BUTTON_TYPE}

/>
    </div>
  )
}

export default Payment