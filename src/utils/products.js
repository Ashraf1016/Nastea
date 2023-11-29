
import product2 from "../Images/teawhite.png"
import product1 from "../Images/teared.png"
import Tea1 from "../Images/teahand.png";
import Tea2 from "../Images/tea2.png";

export const SliderData = [
  {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Unlock exclusive savings! Enjoy a fabulous 50% off your first purchase with us. Dive into a world of discounts and elevate your shopping experience. It's our way of welcoming you to a fantastic array of products at an unbeatable price. Start saving today!",
      cover: Tea1,
  },
  {
      id: 2,
      title: "Feel every sip",
      desc: "Indulge in the pure essence of Nastea – your go-to brand for authentic, high-quality tea powder. Savor the goodness of fully organic blends, crafted for both taste and health. Elevate your tea experience with our delicious and wholesome offerings, carefully curated to bring you the finest in every sip.",
      cover: Tea2,
  },
  {
      id: 3,
      title: "Place order now",
      desc: "Seize the moment! Place your order now and unlock a world of convenience and quality. Whether you're treating yourself or finding the perfect gift, our seamless ordering process ensures your desired products are just a click away. Don't miss out – order now and experience satisfaction delivered to your doorstep!",
      cover: product1,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy the convenience of free shipping! Shop hassle-free and have your purchases delivered to your doorstep without any additional shipping costs. It's our way of making your shopping experience even more rewarding.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Experience peace of mind with our secure payment options. We prioritize your safety by providing reliable and encrypted payment methods, ensuring a secure and worry-free transaction process for your online purchases.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Rest easy with our secure payment options. We employ advanced encryption technology to safeguard your transactions, ensuring a safe and worry-free shopping experience.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Back Guarantee",
    subtitle: "Shop confidently with our hassle-free money-back guarantee. If you're not completely satisfied with your purchase, we've got you covered. Your satisfaction is our priority, and we stand by our commitment to providing a risk-free shopping experience.",
    bg: "#d6e5fb",
  },
];

export const products = [
  {
    id: "01",
    productName: "Nastea pure natural tea powder (200gm)",
    imgUrl: product2,
    category: "tea",
    price: 240,
    priceBeforeDiscount: 280,
    shortDesc:
      "Indulge in the pure essence of Nastea – your go-to brand for authentic, high-quality tea powder. Savor the goodness of fully organic blends, crafted for both taste and health. Elevate your tea experience with our delicious and wholesome offerings, carefully curated to bring you the finest in every sip.",
    description:
      "Indulge in the pure essence of Nastea – your go-to brand for authentic, high-quality tea powder. Savor the goodness of fully organic blends, crafted for both taste and health. Elevate your tea experience with our delicious and wholesome offerings, carefully curated to bring you the finest in every sip.",
    reviews: [
      {
        rating: 4.7,
        text: "Nice tea i ever had",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Nastea pure natural tea powder (500gm)",
    imgUrl: product1,
    category: "tea",
    price: 350,
    priceBeforeDiscount: 400,
    shortDesc:
      "Indulge in the pure essence of Nastea – your go-to brand for authentic, high-quality tea powder. Savor the goodness of fully organic blends, crafted for both taste and health. Elevate your tea experience with our delicious and wholesome offerings, carefully curated to bring you the finest in every sip.",
    description:
      "Indulge in the pure essence of Nastea – your go-to brand for authentic, high-quality tea powder. Savor the goodness of fully organic blends, crafted for both taste and health. Elevate your tea experience with our delicious and wholesome offerings, carefully curated to bring you the finest in every sip.",
    reviews: [
      {
        rating: 4.7,
        text: "Very good flavour.",
      },
    ],
    avgRating: 4.5,
  },

];
