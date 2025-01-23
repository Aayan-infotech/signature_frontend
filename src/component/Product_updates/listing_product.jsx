import React, { useEffect, useState } from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/Product_updates.png";
// import template from "./template.json";
import { useLocation } from "react-router-dom";
import template1 from "./template/template-v1.png";
import template2 from "./template/template-v2.png";
import template3 from "./template/template-v3.png";
import template4 from "./template/template-v4.png";
import template5 from "./template/template-v5.png";
import template6 from "./template/template-v6.png";
import template7 from "./template/template-v7.png";
import template8 from "./template/template-v8.png";
import template9 from "./template/template-v9.png";
import template10 from "./template/template-v10.png";
import template11 from "./template/template-v11.png";
import template12 from "./template/template-v12.png";
import template13 from "./template/template-v13.png";
import template14 from "./template/template-v14.png";
import template15 from "./template/template-v15.png";
import template16 from "./template/template-v16.png";
import template17 from "./template/template-v17.png";
import template18 from "./template/template-v18.png";
import template19 from "./template/template-v19.png";
import template20 from "./template/template-v20.png";
import template21 from "./template/template-v21.png";

import template22 from "./template/template-v22.png";
import template23 from "./template/template-v23.png";

import template24 from "./template/template-v24.png";

import template25 from "./template/template-v25.png";

function Listing_updates() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);

  const template = [
    {
      title: "Email Signature examples",
      description:
        "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      image: [
        {
          url: `${template1}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template2}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template3}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template4}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
      ],
    },
    {
      title: "Email Signature Templates",
      description:
        "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      image: [
        {
          url: `${template5}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template6}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template7}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template8}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
      ],
    },
    {
      title: "Email Signature Design",
      description:
        "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      image: [
        {
          url: `${template9}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template10}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template11}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template12}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
      ],
    },
    {
      title: "Email Sign Off",
      description:
        "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      data: {
        heading: "Email Sign-Offs",
        description:
          "A well-crafted sign-off leaves a lasting impression. Whether you aim to be formal, friendly, or somewhere in between, choosing the right sign-off can set the tone for your message. Here are some common and creative email sign-off ideas to consider:",
        listData: [
          {
            head: "Formal Sign-Offs",
            data: [
              " A professional and polite way to close an email.",
              "Classic and respectful, ideal for business correspondence.",
              "Traditional and formal, suitable for official letters.",
              "Demonstrates deference, great for formal or hierarchical relationships.",
            ],
          },
          {
            head: "Friendly Sign-Offs",
            data: [
              " Casual and friendly, perfect for informal emails.",
              "Simple and effective, especially if you're requesting something.",
              "Warm and caring, a good option for friends and colleagues.",
              "A balance between formal and friendly, suitable for most situations.",
            ],
          },
          {
            head: "Creative Sign-Offs",
            data: [
              " Fun and energetic, great for creative industries.",
              "Casual and relaxed, ideal for informal conversations.",
              "Motivational and upbeat, good for positive messaging.",
              "Cool and edgy, perfect for creative or entertainment sectors.",
            ],
          },
          {
            head: "Inspirational Sign-Offs",
            data: [
              " Encouraging and supportive, perfect for a professional tone.",
              "Motivational, implying a positive outlook.",
              "Inspirational and encouraging, great for startup and innovation contexts",
              "Simple and caring, ideal for healthcare or wellness industries.",
            ],
          },
          {
            head: "Situational Sign-Offs",
            data: [
              " Engages the recipient, encourages a response.",
              "Casual, implies you’ll be in touch again shortly.",
              "Timely and considerate, shows thoughtfulness.",
              "Simple and caring, ideal for healthcare or wellness industries.",
            ],
          },
        ],
      },
      image: [
        {
          url: `${template13}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template14}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template15}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template16}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
      ],
    },
    {
      title: "Email Signature Banner",
      description:
        "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      data: {
        heading: "Email Signature Banners: Stand Out with Every Email",
        description:
          "Boost your brand identity and make a lasting impression with our custom email signature banners. Whether you're promoting a new product, sharing important updates, or simply enhancing your professional image, a well-designed banner can transform your email signature into a powerful marketing tool.",
        listData: [
          {
            head: "Why Use an Email Signature Banner?",
            data: [
              " Keep your brand top of mind with every email you send.",
              " A cohesive and visually appealing signature adds professionalism to your communication.",
              "Showcase your latest offers, events, or announcements directly in your emails.",
              "Drive traffic to your website, social media pages, or special promotions with integrated links.",
            ],
          },
          {
            head: "Features of Our Email Signature Banners",
            data: [
              " Tailored to your brand’s identity and messaging needs.",
              "Looks great on all devices, ensuring a seamless experience for recipients.",
              "Simple to add to your existing email signature with step-by-step guides.",
              "Keep your content fresh and relevant with easily editable banners.",
            ],
          },
          {
            head: "How It Works",
            data: [
              " Choose a Template or start from scratch with our intuitive banner editor.",
              "Customize Your Design with logos, colors, and text that match your brand.",
              "Download and Implement your new banner in minutes.",
            ],
          },
        ],
      },
      image: [
        {
          url: `${template17}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template18}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template19}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template20}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
      ],
    },
    {
      title: "Handwriteen Signatures",
      description:
        "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
      data: {
        heading: "Add a Personal Touch to Your Emails",
        description:
          "Transform your email signature with a personalized handwritten signature. Whether you're aiming for a touch of elegance or a casual vibe, a handwritten signature can set you apart and make your emails more memorable. Here's what makes our handwritten signature feature special:",
        listData: [
          {
            data: [
              " Create a signature that reflects your personal style, making each email feel more genuine and engaging.",
              " Seamlessly incorporate your handwritten signature into any email client. Simply upload or draw your signature, and we'll do the rest.",
              "Choose from a variety of styles to suit your professional needs or creative preferences.",
              "Our tool ensures your signature is crisp and clear, maintaining its quality across all devices and platforms.",
            ],
          },
          {
            head: "Why Choose a Handwritten Signature?",
            data: [
              " In an age where digital communication is the norm, a handwritten signature adds a human touch that can leave a lasting impression. ",
              " It shows attention to detail and a personal approach, which can be especially effective in professional and creative industries.",
            ],
          },
          {
            head: "Get Started Today",
            data: [
              " Ready to make your emails stand out? Use our easy-to-use tool to create your handwritten signature in minutes. ",
              "Whether you prefer to upload an image of your signature or draw it directly on our platform, the choice is yours.",
              "Give your emails a unique signature that captures your personality and professionalism. Try it now!",
            ],
          },
        ],
      },
      image: [
        {
          url: `${template21}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template22}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template23}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
        {
          url: `${template24}`,
          caption: "Just sign in with your Gmail and… you’re done",
        },
      ],
    },
  ];

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("create/", "").trim();

    console.log("title:", title);

    // Find a match in the LegalData array by `title`
    const matchedData = template?.find((item) => item?.title === title);
    console.log("matchedData:", matchedData);

    setAllData(matchedData || null);
  };

  useEffect(() => {
    handleData(location.pathname);
  }, [location.pathname]);

  console.log("location.pathname:", location.pathname);
  console.log("allData:", allData);

  return (
    <>
      <div className="Product_updates left w-100 pt-5 ">
        <div className="Product_updates_p">
          <span className="text-dark">Home /</span> {allData?.title}
        </div>
      </div>
      <div className="Product_updates">
        {/* left section */}
        <div className="row gy-4  pb-5 align-items-center">
          <div className="col-lg-7">
            <h1>{allData?.title}</h1>
            <p className="pt-4">{allData?.description}</p>
            <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
              <button className="learnmore-button">Learn More</button>
              <button className="view_pricing">View Pricing</button>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src={
                "https://www.wisestamp.com/wp-content/uploads/2023/04/gmail-signature-image.webp"
              }
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div className="pt-5">
          <>
            <div className="row align-items-center">
              <div className="col-lg-8 m-auto">
                <h2>{allData?.data?.heading}</h2>
                <h6 className="fw-normal mt-3">{allData?.data?.description}</h6>
                {allData?.data?.listData?.map((item, index) => (
                  <div key={index} className="my-4">
                    <h5>{item?.head}</h5>
                    <ul className="d-flex flex-column gap-2">
                      {item?.data?.map((signOff, idx) => (
                        <li key={idx}>{signOff}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            
            </div>
          </>
        </div>
        <div className="py-5 w-100 listing_product">
          <h2 className="mb-4 justify-content-center d-flex w-100">
            Top Examples
          </h2>
          <ul className="list-unstyled d-flex flex-row gap-4 flex-wrap">
            {allData?.image?.map((item, index) => (
              <>
                <li key={index}>
                  <div className="card w-100 rounded-5">
                    <div className="card-body">
                      <img
                        src={item?.url}
                        className="w-100"
                        alt={item?.caption}
                      />
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Listing_updates;
