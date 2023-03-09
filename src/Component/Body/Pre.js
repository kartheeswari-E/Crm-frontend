import React , { useEffect, useState }from 'react'
import '../Body/Pre.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import Test from './Test';
function Pre({data,id}) {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orders, setOrders] = useState([]);

  
  async function fetchOrders() {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL_NO}/list-orders`);
    setOrders(data);
  }
  useEffect(() => {
    fetchOrders();
  }, []);
  
  function loadRazorpay() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL_NO}/create-order`, {
          amount: 2000 + '00',
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get(`${process.env.REACT_APP_BASE_URL_NO}/get-razorpay-key`);

        const options = {
          key: razorpayKey,
          amount: amount,
          currency: currency,
          name: `${data.car_name}`,
          description: `car model:${data.car_model}`,
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post(`${process.env.REACT_APP_BASE_URL_NO}/pay-order`, {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
            fetchOrders();
          },
          prefill: {
            name: 'example name',
            email: 'email@example.com',
            contact: '111111',
          },
          notes: {
            address: 'example address',
          },
          theme: {
            color: '#80c0f0',
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        console.log(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }
   const navigate = useNavigate();
   
   
  return<>
  <div className='card-container'>
    <div className='image-i'>
 <img  src={data.car_img} alt='hero'></img>
   </div>  
    <div className='sub-container'>
      <div className='cont1'>
        <div className='car-name'>{data.car_name}</div><MonetizationOnIcon className='sy'/>
        <div className='car-cost'>{data.car_price}</div>
        </div>
        <div className='sub-cont-3'>
        <div className='model'>
          <p className='mol'>MODEL:&nbsp;{data.car_model}</p></div>
            <div className='cont2'> 
             <EmojiTransportationIcon className='syy'/>
            <div className='state'><p>{data.drive}</p></div>
            </div>
            <div className='cont3'>
            <ShutterSpeedIcon className='sh'/>
            <div className='km'><p>&nbsp;&nbsp;{data.speed}</p></div>
        </div></div>
        <div className='buttons'>
            <button onClick={loadRazorpay} className='sale'>buy</button>
            <button  onClick={() =>navigate(`/api/car/${id}`)}  className='details'>Details</button>
        </div>
    </div>
</div>
  </>
}

export default Pre

