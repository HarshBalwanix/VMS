import Razorpay from "razorpay";
import crypto from "crypto";

// Initialize Razorpay instance with your API key and secret

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Function to create a new donation order
const createDonationOrder = async (amount) => {
  try {
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    const order = await razorpay.orders.create(options);

    return order;
  } catch (error) {
    console.error("Error creating donation order:", error);
    throw error;
  }
};

// Function to verify a donation
const verifyDonationOrder = async (
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature
) => {
  try {
    // console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature);
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    // console.log("sign: ", sign);
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    // console.log("expectedSign: ", expectedSign);

    if (expectedSign === razorpay_signature) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error verifying donation:", error);
    throw error;
  }
};

export { createDonationOrder, verifyDonationOrder };
