import "./Profession.scss";
import Profession1 from "./images/template-v1.png";
import Profession2 from "./images/profession2.jpg";
import Profession3 from "./images/template-v14.png";
import Footer from "../Footer/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.png";
import image3 from "./images/image3.jpg";
import easy from "./images/easy3.png";
const data = [
  {
    title: "CEO & Excecutives",
    heading: "How to create a realtor email signature that sells​",
    decription:
      "Create and perfect your real estate email signature in minutes, with proven examples and designed signature templates made especially for your niche.",
    image: easy,
    listData: [
      {
        listhead: "",
        data: [
          {
            heading:
              "Turn your realtor email signature into a powerful marketing tool",
            description: `Your email signature serves as your digital business card. Most people you correspond with will learn to recognize you through the details and professionalism you present in your signature block. Do this right and it can give you a competitive edge in your industry The majority of realtors spend a great amount of time following up with leads, creating portfolios, and establishing an online presence, you’re probably no different. According to a recent survey, 49% of your real estate agent peers work over 40 hours a week. A large percentage of their time is spent on personal branding and advertising.If you spend a lot of your time corresponding with potential clients by email, then your email signature represents a powerful marketing channel. Neglecting it will surely set you back. This article will explore the main elements that every real estate professional should include in their email signature sign-off.`,
          },
          {
            heading: "Learn by example from our best realtor email signatures",
            description: `Below are some of our designed real estate email signature templates. Take a look and get inspired. You can use any of these samples as a base for your own email footer in just a few clicks`,
            stepImg: Profession1,
          },
          {
            heading:
              "Include the 4 essential signature components specifically for real estate",
            description:
              "There is a huge branding and sales potential in your email signature. Don’t leave it untapped. The good news is that there are only 4 main aspects to look out for, and they are fairly simple to understand and set up. We’ll go through them now.",
            stepImg: Profession2,
          },
          {
            heading: "Use balanced fonts and Colors",
            description:
              "If the company’s logo is in the burgundy family, it is recommended to use red-friendly colors such as red, black, gray-brown, etc. On the contrary, If you have a green logo it wouldn’t make sense to use a blue font (this would be considered a color mismatch and would be inherently displeasing for most people).",
          },
          {
            heading:
              "Create a free email signature for real estate agents with Signature generator",
            description:
              "You can use our signature editor to create your own professional realtor signature in minutes. Tens of thousands of your peers are already using our platform to enriched and empower their emails. Don’t miss out, it’s free. ",
          },
        ],
      },
    ],
  },
  {
    title: "Doctors",
    heading: "Doctor signature​",
    decription:
      "Make a doctor’s signature that sets you apart. Learn from examples and take inspiration from beautiful templates.",
    image: easy,
    listData: [
      {
        listhead: "Requirements for a valid doctor’s Email signature",
        data: [
          {
            heading: "Requirements for a valid doctor’s Email signature",
            description: `The following are the criteria used to validate a doctor or NNP signature in the US by some of the major medical authorities in America, including the CMS.Rubber stamps are also acceptable you can prove you have a physical impairment that prevents you from hand-signing`,
          },
          {
            heading: "Make your personal doctor’s hand signature",
            description: `Below are some of our designed real estate email signature templates. Take a look and get inspired. You can use any of these samples as a base for your own email footer in just a few clicks`,
            stepImg: image1,
          },
          {
            heading: "How to create the best doctor email signature",
            description:
              "As a doctor, you’ve earned your credentials with hard work. So, having worked so hard, why risk it by looking unprofessional when it comes to your email signature?",
            sublist: [
              "Full name",
              "Job title: In your title, be specific regarding your field. Are you an anesthesiologist? an ear nose and throat ENT specialist etc…",
              "The name of your hospital, HMO, or private practice ",
              "Direct phone number to you or your assistant",
              "Your personal webpage on the hospital/HMO website or your private practice website",
            ],
            stepImg: image2,
          },
          {
            heading: "How to make your doctor email signature more credible",
            description:
              "Do the following to add deeper insight into your credibility and expertise​:",
            sublist: [
              "Add a clean and respectable photo of you in your hospital uniform or anything else that represents your daily activity",
              "Add a logo of your hospital, HMO, or private practice. This will increase your credibility and your signature’s memorability.",
              "Add a Linkedin icon to your signature block with a link to your personal profile.",
              "Add a Twitter icon to your account, if you are active on social media and build your personal brand as an authority in your field.",
            ],
            stepImg: image3,
          },
          {
            heading:
              "Learn from what others in your professions use as their signature",
            description:
              "Take a peek at a few signature examples based on what our users (doctors like you) actually use. If you like any of these email signature template samples you can easily generate one with Signature email Signature Creator.",
            stepImg: Profession3,
          },
        ],
      },
    ],
  },
];
function Profession() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("Profession/", "").trim();

    console.log("title:", title);

    // Find a match in the LegalData array by `title`
    const matchedData = data?.find((item) => item?.title === title);
    console.log("matchedData:", matchedData);

    setAllData(matchedData || null);
  };

  useEffect(() => {
    const handleFilterData = () => {
      const filter = data?.filter((item) => item?.title !== allData?.title);
      console.log(filter);

      setFilterData(filter);
    };
    handleFilterData();
  }, [allData]);

  useEffect(() => {
    handleData(location.pathname);
  }, [location.pathname]);

  console.log("location.pathname:", location.pathname);
  console.log("allData:", allData);
  return (
    <>
      {allData === null ? (
        <h1 className="text-center my-5">No Data Found</h1>
      ) : (
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
                <p className="pt-4">{allData?.decription}</p>
                <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
                  <button className="learnmore-button">Learn More</button>
                  <button className="view_pricing">View Pricing</button>
                </div>
              </div>
              <div className="col-lg-5">
                <img src={easy} alt="" className="w-100" />
              </div>
            </div>
            <div className="left">
              {/* Section left1 */}

              <div className="Product_updates_1 mt-lg-5">
                {/* Section left2 */}
                <div className="Product_updates_content_para">
                  {allData?.listData?.map((item, index) => (
                    <div key={index} className="">
                      <h2 className="fw-bold mb-3">{item.listhead}</h2>
                      <ol className="my-4">
                        {item.data.map((data, dataIndex) => (
                          <li key={dataIndex} className="my-5">
                            <span className="fs-3 fw-bolder d-block mb-3">
                              {data.heading}
                            </span>
                            <span className="fs-6 fw-normal d-block mb-3">
                              {data.description}
                            </span>
                            <div className="">
                              {data.stepImg === undefined ? (
                                ""
                              ) : (
                                <img
                                  src={data.stepImg}
                                  alt="image"
                                  className="w-100 my-4"
                                />
                              )}
                            </div>
                            {data?.sublist?.length > 0 ? (
                              <>
                                {data?.sublist.map((item, index) => (
                                  <ul>
                                    <li>{item}</li>
                                  </ul>
                                ))}
                              </>
                            ) : (
                              <></>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="right">
              <div className="profile-section">
                <h4 className="text-start w-100 d-flex">Related Articles</h4>
                {filterData?.map((item, index) => (
                  <div className="profile-card" key={index}>
                    <div className="profile-name">
                      <Link
                        to={`/Profession/${item.title}`}
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
        </>
      )}

      <Footer />
    </>
  );
}

export default Profession;
