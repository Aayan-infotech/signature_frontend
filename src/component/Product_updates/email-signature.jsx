import React, { useEffect, useState } from "react";
import "./common.css";
import { useLocation, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import gmail from "./images/Platform/gmail-head.png";
import gmailtwo from "./images/Platform/gmail-head-2.png";
import gmailthree from "./images/Platform/gmail-head-3.png";
import gmailfour from "./images/Platform/gmail-head-4.png";
import gmailfive from "./images/Platform/gmail-head-5.png";

const data = [
  {
    title: "Gmail Signature",
    heading: "How to create a Gmail signature",
    description:
      "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
    image: {
      url: gmail,
      caption: "Just sign in with your Gmail and… you’re done",
    },
    sections: [
      {
        heading: "How to create a Gmail signature",
        description: "There are 3 ways to create your Gmail signature:",
        steps: [
          {
            heading: "Manually add a signature in Gmail",
            description:
              "This option is found in Gmail’s settings. It allows you to add a simple email signature in Gmail using the in-app signature editor. If this is your preferred option go ahead and read our 1-minute step-by-step guide.",
          },
          {
            heading: "Use a Gmail signature generator",
            description:
              "The easiest way to create a professional-looking signature for Gmail is by using a free generator. The WiseStamp Free Signature Generator is the best tool available for creating the best looking Gmail signature.",
          },
          {
            heading:
              "Use designed Gmail signature templates to create your signature",
            description:
              "This is a great option if you want to see what worked for other people before you. It’s also helpful to get some inspiration and a better understanding of what you’d like your signature to achieve before you start making it.",
          },
        ],
        mainImage: gmailtwo,
        imagedesc: "image description",
      },
      {
        heading: "Gmail signature generator by Signature",
        description:
          "Generate a professional Gmail email signature in 2-5 minutes and connect to Gmail with 1-click.",
        steps: [
          "Add your professional details.",
          "Go to the Templates tab > Choose a designed template.",
          "Go to the Social tab > Add social media icons and links.",
          "Go to the Design tab > Refine the design for your signature dividers, icons, and photo.",
          "Go to the Add-ons tab > Add buttons, banners, legal disclaimers, Instagram gallery, and more useful features. You can add an image or a logo and a lot more.",
          "Click 'OK I’m done', and you’re set.",
        ],
      },
      {
        heading: "Create a professional signature in Gmail",
        description:
          "Get a beautiful Gmail email signature that makes an impression. Browse Gmail signature templates, learn tips, and easily generate your signature in 2 minutes.",
        mainImage: gmailtwo,
      },
      {
        heading:
          "How to ace your Gmail signature design and style and make the right impression",
        description:
          "While a professional Gmail signature will work in your favor, a poorly designed signature can work against you. Follow these 5 essential tips to ensure your signature’s success.",
        steps: [
          {
            heading: "Get inspired: ",
            description:
              "We recommend starting your Gmail signature creation process by looking at some cool email signature examples that actual people use to positively stand out.At Wisestamp we see millions of signatures every year, made spontaneously by our users. If we remember these examples it’s because they work. We made these memorable examples into templates you can use as your own. Give them a look-see",
          },
          {
            heading: "Stand out visually:",
            description:
              "To get people’s attention your Gmail signature block has to have either a splash of color or some movement to it. Many beautiful email signature designs use color, without being too colorful and appearing clownish. Our email signature tips page for graphic designers goes into how to do this in-depth.",
          },
          {
            heading: " Stand out with a personal touch:",
            description:
              "Adding something from yourself can grant you big wins. It can influence people into seeing you as more honest, more authentic, and more approachable. But this can also go very wrong if you send the wrong message to the wrong people. So, think about who you’re talking to and what about you will make them trust you rather than brush you off.",
            pointImg: gmailthree,
          },
          {
            heading: " Set your signature a defined goal: ",
            description:
              "Before you run ahead and put the finishing touches on your signature, think a moment about what you want your signature to achieve. This will definitely affect what you decide to add to or remove from your final signature. ",
            pointImg: gmailfour,
          },
          {
            heading: "Set the stage for later engagement ",
            description:
              "Your Gmail email signature is the end of your email, but it doesn’t have to be the end of your recipients’ engagement with you. Even if you added a CTA as I advised in the previous tip you may still miss out. It’s fair to say that most people will not be primed to take you up on your offer, because the commitment may be too high for them at that point. ",
          },
        ],
        mainImage: gmailtwo,
        imagedesc: "image description",
      },
    ],
  },
  {
    title: "Google Workspace",
    heading: "Google Workspace signature manager",
    description:
      "Signature offers a variety of simple integrations to allow user and signature sync between Google Workspace accounts and the WiseStamp Signature Manager platform.",
    image: {
      url: gmailfive,
      caption: "Just sign in with your google and… you’re done",
    },
    sections: [
      {
        heading: "",
        description:
          "Seamless integration. Highly secure. User sync. Data transfer. No maintenance after the initial install.",
        steps: [
          "One time set up",
          "No write nor read permissions within emails are necessary",
          "You keep control over user management",
          "You keep ownership over email data",
          "Integration done by Super Admin only",
        ],
      },
      {
        heading:
          "Save dozens of IT hours with Google Workspace signature integration",
        description:
          "Signature is the perfect solution for IT managers looking to easily take control over the entire company’s Google workspace email signature management and integration. Install once and never look back!",
        steps: [
          {
            heading: "One time set up",
            description:
              "With One time set up for Google Workspace signatures, you can now create a company-wide signature that will automatically appear on all outgoing emails.",
          },
          {
            heading: "Seamless integration",
            description:
              "Expect an unparalleled level of Google workspace integration and security. Our seamless integration means that you’ll be up and running in no time, with easy user sync and data transfer capabilities.",
          },
          {
            heading: "Enable roles and permissions",
            description:
              "With Role-Based Access Control, we provide you with a practical solution for granting specific administrative privileges to individual users or groups.",
          },
          {
            heading: "Assign signatures by department or teams",
            description:
              "Signature’s signature software for Google Workspace enables IT administrators to easily assign dedicated Email signatures by specific department.",
          },
          {
            heading: "Automated new employees process",
            description:
              "Our signature management software provides an automated and easy solution for new employees onboarding.",
          },
          {
            heading: "Sync with Google Workspace directory",
            description:
              "With our synchronization feature of Google Workspace, you can easily sync your employees’ directory information and email signatures with just a few clicks.",
          },
        ],
      },
    ],
  },
  {
    title: "Outlook Signature",
    heading: "Create a professional signature in Outlook",
    description:
      "Enhance your Outlook email signature with a touch of professionalism and style. Dive into our selection of Outlook signature templates, discover helpful tips, and create your own outlook signature in just 5 minutes with Signature.",
    image: {
      url: gmailfive,
      caption: "Just sign in with your google and… you’re done",
    },
    sections: [
      {
        heading: "How to create an Outlook signature",
        description: "There are 3 ways to create your Outlook signature.",
        steps: [
          {
            heading: "Manually add a signature in Outlook",
            description:
              "This option can be found in Outlook’s settings. It enables you to add an email signature in Outlook using the in-app signature editor.",
          },
          {
            heading: "Use an Outlook signature generator",
            description:
              "The easiest way to create a professional-looking signature for Outlook is by using a free generator. The Signature Email signature generator is the top tool available for crafting the best looking Outlook signature.",
          },
          {
            heading:
              "Use designed Outlook signature templates to create your signature",
            description:
              "Email signature templates are a great option if you’re interested in seeing what has worked for others before you. It’s also beneficial for gaining some inspiration and a better understanding of what you want your signature to achieve before you start creating it.",
          },
        ],
      },
      {
        heading: "Outlook signature generator by Signature",
        description:
          "Generate an Outlook email signature in 2 minutes and connect it to Outlook with a single click:",
        steps: [
          "Visit Signature’s free email signature maker.",
          "Enter your professional details.",
          "Navigate to the Templates tab and select a designed template.",
          "Move to the Social tab to add social media icons and links.",
          "Proceed to the Design tab to refine the design of your signature’s dividers, icons, and photo.",
          "Visit the Add-ons tab to incorporate buttons, banners, legal disclaimers, Instagram galleries, and other useful features. You have the option to include an image or a logo, among other things.",
          "Once you’re satisfied, click “OK I’m done”, and your Outlook signature will be ready to use.",
        ],
      },
      {
        heading:
          "Perfecting your Outlook signature: Design tips for an impressive impact",
        description:
          "Mastering the design and style of your Outlook signature is crucial for making a lasting, positive impact in your professional communications. A well-crafted signature can be a significant asset, enhancing your professional image and credibility. Conversely, a poorly designed signature can detract from your message and professionalism. To ensure your Outlook signature contributes positively to your email interactions, here are five detailed tips:",
        steps: [
          {
            heading: "Seek Inspiration",
            description:
              "Embark on your signature design process by exploring a range of effective email signature examples. At Signature, we encounter millions of signatures each year, each uniquely reflecting its creator’s professional identity. Many of these signatures are so impactful that we convert them into templates for others to use. Take the time to check these templates. They offer a great resource for ideas and styles, ranging from the conservative and classic to modern and innovative.Identify the elements that resonate with your personal brand and professional needs. This step is not just about copying what others have done but about understanding the principles that make these signatures work and how they can be adapted to your own style and professional context.",
          },
          {
            heading: "Visual Impact",
            description:
              "The visual appeal of your Outlook signature plays a pivotal role in capturing the attention of your email recipients. A signature that stands out visually can make your emails more memorable and can even reflect your personal brand or the ethos of your organization. When incorporating color, the key is balance – your signature should be vibrant enough to draw the eye without overwhelming your message. A splash of color can be used to highlight your name, company, or profession, aligning with your brand’s color scheme if applicable.",
          },
          {
            heading: " Incorporate personal elements",
            description:
              "Personalizing your signature is a powerful way to connect with your recipients. This could involve adding an inspirational quote that reflects your personal or professional ethos, providing insight into your values and personality. Alternatively, consider the tone and formality of your email sign-offs – they can be tailored to the specific recipient, making your communication more personal and thoughtful.For a more unique touch, add a handwritten sign off. This can be either static or animated and creates a sense of personal investment and authenticity in your communication. Our signature generator allows you to easily create this personalized element.",
          },
          {
            heading: " Assign a clear purpose to your Outlook signature:",
            description:
              "Before finalizing your generated Outlook signature, it’s essential to take a moment to reflect on its intended purpose. What do you hope to achieve with your signature? This consideration is critical as it will guide your choices in what to include or exclude in your signature.Review some of the email signature examples from our users that effectively incorporate a call to action (CTA). These examples demonstrate how a well-crafted CTA can drive engagement and generate leads directly through an Outlook signature. Based on your specific objectives – whether itGRBRA’s expanding your network, generating leads, promoting sales, or enhancing your professional presence – choose and add features that align with these goals.",
          },
          {
            heading: "Set the stage for later engagement",
            description:
              "Your generated Outlook signature marks the end of your email, but it doesn’t have to signify the end of engagement with your recipients. Even with the inclusion of a call to action (CTA), as suggested earlier, there’s a chance of not capturing immediate interest. Often, people may not be ready to respond to your offer immediately, perhaps due to the level of commitment it involves at that moment.For the best results, it’s worthwhile to explore strategies on effectively using social media within your email signature. These insights can help optimize the placement and choice of social icons, ensuring they promote your social media marketing efforts by attracting interest and encouraging interaction.",
          },
        ],
      },
    ],
  },
];

export default function Email_signature() {
  const location = useLocation();
  const [allData, setAllData] = useState();
  const [filterData, setFilterData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", ""); // Decode and remove leading slash
    const matchedData = data.find((item) => item.title === decodedPath);
    setAllData(matchedData || null); // Set to matched data or null if no match
  };

  useEffect(() => {
    handleData(location.pathname); // Pass the path to match
  }, [location.pathname]);

  useEffect(() => {
    const handleFilterData = () => {
      const filter = data?.filter((item) => item?.title !== allData?.title);
      console.log(filter);

      setFilterData(filter);
    };
    handleFilterData();
  }, [allData]);


  return (
    <>
      <div className="email-signature">
        {allData ? (
          <div>
            <div className="container">
              <div className="row gy-4 align-items-center my-lg-5 my-3">
                <div className="col-lg-7 pt-5">
                  <h1>{allData?.heading}</h1>
                  <p className="pt-4">{allData?.description}</p>
                  <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
                    <button className="learnmore-button">Learn More</button>
                    <button className="view_pricing">View Pricing</button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <img
                    src={allData?.image?.url}
                    alt={allData?.image?.caption}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div>
                <div className="row mt-5">
                  <div className="col-lg-8">
                    {allData?.sections?.map((item, index) => (
                      <div className="section-wrapper transparent" key={index}>
                        <h2 className="wp-block-heading">{item.heading}</h2>

                        <p> {item?.description}</p>
                        <ol className="list-unstyled">
                          {item?.steps?.map((item, index) => (
                            <li key={index} className={item?.heading && "py-2"}>
                              <span className={item?.heading && "fs-4 fw-bold"}>
                                {item?.heading || item}
                              </span>

                              <br />
                              <span> {item?.description || ""}</span>
                              <span>
                                {" "}
                                {item?.pointImg ? (
                                  <img
                                    src={item?.pointImg}
                                    alt="image"
                                    className="w-100 py-5 my-4 shadow ps-4 rounded-5"
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </li>
                          ))}
                        </ol>
                        <div className="ws-section">
                          <div className="ws-image ws-box 111">
                            {item?.mainImage ? (
                              <img
                                src={item?.mainImage}
                                loading="lazy"
                                alt={item?.imagedesc}
                                className="w-100"
                              />
                            ) : (
                              <></>
                            )}{" "}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-lg-4">
                    <div className="position-sticky" style={{ top: "110px" }}>
                    <h4 className="text-start w-100 d-flex">
                      Related Articles
                    </h4>
                    {filterData?.map((item, index) => (
                      <div className="profile-card" key={index}>
                        <div className="profile-name mb-3">
                          <Link
                            to={`/${item.title}`}
                            className="text-dark text-decoration-none"
                          >
                            {item?.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No data found for the specified title.</div>
        )}

        <Footer />
      </div>
    </>
  );
}
