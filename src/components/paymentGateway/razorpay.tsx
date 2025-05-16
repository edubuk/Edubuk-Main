import React, { useState, useEffect } from "react";
// import ConfettiExplosion from "react-confetti-explosion";
import axios from "axios";
import toast from "react-hot-toast";
//import Razorpay from "razorpay";
import SmallLoader from "../Loader/Loader";

interface Props {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  email:string;
}

interface payload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  couponCode?: string;
  emailId: string;
}

const API_BASE_URL = "http://localhost:8000";

const PaymentPopup: React.FC<Props> = ({ showPopup, setShowPopup,email }) => {
  const [coupon, setCoupon] = useState<string>("");
  const [amount, setAmount] = useState<number>(89);
  const [isCouponValid, setCouponValid] = useState<boolean>(false);
  const [curr, setCurr] = useState<string>("INR");
  const [loading, setLoading] = useState<boolean>(false);

  const checkOutHandler = async () => {
    try {
      setLoading(true);
      const orderRes = await axios.post(
        `${API_BASE_URL}/api/v1/user/checkout`,
        { amount: amount * 100, curr: curr }, // Send amount in paise
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("order",orderRes.data.order.id)
      if (orderRes.data.success) {
        const options = {
          key: import.meta.env.VITE_Rz_Key,
          amount: amount * 100,
          currency: curr,
          name: "Edubuk (Eduprovince Technologies Private Limited)",
          description: "",
          order_id: orderRes.data.order.id,
          handler: async (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) => {
            try {
              const payload: payload = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                emailId: email,
              };


              const res = await axios.post(
                `${API_BASE_URL}/api/v1/user/payment-verification`,
                payload,
                { headers: { "Content-Type": "application/json" } }
              );

              if (res.data.success) {
                toast.success("Payment successful.");
                setShowPopup(false);
                setLoading(false);
                localStorage.setItem("paymentId", res.data.paymentId);
              } else {
                toast.error("Payment verification failed.");
                setLoading(false);
              }
            } catch (error) {
              console.error("Error during payment verification:", error);
              toast.error("Something went wrong.");
              setLoading(false);
            }
          },
          theme: { color: "#006666" },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
      } else {
        console.error("Order creation failed.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      setLoading(false);
    }
  };

  const verifyCoupon = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/v1/user/coupon-verification/${coupon}`
      );
      if (res.data.success) {
        if (res.data.value === 0) {
          localStorage.setItem("isFreeCoupon", "true");
          toast.success("This one's on us! Enjoy your free access.");
          setAmount(res.data.value);
          setCouponValid(true);
          setShowPopup(false);
        } else {
          console.log("coupon log", res);
          setAmount(res.data.value);
          setCouponValid(true);
        }
      } else {
        setAmount(res.data.value);
      }
    } catch (error) {
      console.log("error while coupon verification");
    }
  };

  useEffect(() => {
    // Dynamically add Razorpay script to the document
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30 h-full w-full">
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full  md:w-1/2 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                <img
                  src="/animateImg.gif"
                  alt="Resume Animation"
                  className="w-50 h-50 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                {isCouponValid ? (
                  <h2 className="text-[#006666] text-xl font-semibold mb-4 animate-bounce">
                    Hurrey! You got an amazing discount 🎉
                  </h2>
                ) : (
                  <h2 className="text-[#006666] text-xl font-semibold mb-4">
                    Enter coupon code and get an amazing discount
                  </h2>
                )}
                <div className="relative">
                  {isCouponValid}
                  <div className="flex justify-between gap-2">
                    <input
                      type="text"
                      onChange={(e) => setCoupon(e.target.value)}
                      value={coupon}
                      placeholder="Enter Coupon Code"
                      className="text-[#006666] w-full px-4 py-2 border-2 rounded-lg mb-6 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500"
                    />
                    <button
                      className="px-4 py-2 mb-6 bg-[#006666] text-[white] rounded active:translate-y-1 cursor-pointer"
                      onClick={verifyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                  {coupon?.length > 0 && amount === 499 && (
                    <p className="absolute text-[red] bottom-[0.01rem]">
                      code is invalid
                    </p>
                  )}
                  {/* {isCouponValid && (
                    <p className="absolute text-[#ff6a00] bottom-[0.01rem]">
                      valid till 28 Feb 2025
                    </p>
                  )} */}
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <p className="text-xl">
                    <strong className="text-[#006666]">₹</strong>
                    {isCouponValid ? (
                      <strong className="text-[#006666]">
                        <del>499</del> 89
                      </strong>
                    ) : (
                      <strong className="text-[#006666]">499</strong>
                    )}{" "}
                    Only
                  </p>
                  {!loading ? (
                    <>
                      <div className="relative inline-block w-auto">
                        <select
                          onChange={(e: any) => setCurr(e.target.value)}
                          className="w-full px-2 py-1 border text-center border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Select Currency</option>
                          <option value="INR">INR</option>
                          <option value="AED">AED</option>
                          <option value="SGD">SGD</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                          ▼
                        </div>
                      </div>
                      <button
                        className="rounded-lg bg-[#007bff] py-2 px-4 text-white cursor-pointer active:translate-y-1"
                        onClick={checkOutHandler}
                      >
                        Pay Now To Register
                      </button>
                    </>
                  ) : (
                    <SmallLoader />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentPopup;
