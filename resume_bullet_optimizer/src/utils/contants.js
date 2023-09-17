
/*..............Firebase.js........................*/


export const FireBaseConfig = {
  apiKey: "AIzaSyCnajWMobR8WvDj_FJxzdhpHDKSzV57YJw",
  authDomain: "ceevee-f56d6.firebaseapp.com",
  projectId: "ceevee-f56d6",
  storageBucket: "ceevee-f56d6.appspot.com",
  messagingSenderId: "82535136521",
  appId: "1:82535136521:web:591f6827ed997c4394a7d8",
  measurementId: "G-EECF1T5NDG"
};

  /*....................ResumeOptimizerPage.js........... */
  // export const POST_URL = "http://localhost:5000/index"
  export const POST_URL = "https://ceevee-app-802089cf9c33.herokuapp.com/index"
  export const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    };

  /*.......................Payment.........................*/
  export const API_VERSION = 2
  export const APIVERSIONMINOR = 0
  export const ALLOWED_PAYMENT_METHODS = [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['MASTERCARD', 'VISA','AMEX','JCB','DISCOVER'],
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },
      },
    },
  ]

  export const MERCHANT_INFO = {
    merchantId: '12345678901234567890',
    merchantName: 'Demo Merchant',
  }
  
  export const TRANSACTION_INFO ={
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '1.00',
        currencyCode: 'USD',
        countryCode: 'US',
      }
  export const SHIPPING_ADDRESS_REQUIRED = true
  
  export const EXISTING_PAYMENT_METHOD_REQUIRED = false

  export const BUTTON_COLOR = 'black'

  export const BUTTON_TYPE = 'Buy'
  
