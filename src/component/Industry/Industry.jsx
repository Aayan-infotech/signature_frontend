import "./Industry.scss";
import Industry01 from "./images/page11.png";
import Industry1 from "./images/Industry_1.png";
import Industry2 from "./images/Industry_2.png";
import Industry3 from "./images/Industry_3.png";
import Industry4 from "./images/Industry_4.png";
import Footer from "../Footer/Footer";
// import data from "./industry.json";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import easy1 from "./images/ease1.gif";
import easy2 from "./images/ease2.webp";
import easy3 from "./images/easy3.png";
import easy4 from "./images/easy4.webp";
import easy5 from "./images/easy5.gif";
import easy6 from "./images/easy6.gif";
import easy7 from "./images/easy7.gif";
import easy8 from "./images/easy8.png";
import easy9 from "./images/easy9.webp";

const data = [
  {
    title: "Education Facilities",
    heading: "Email signature management solution for schools & universities",
    description:
      "Maintain consistent email signatures across all departments and faculties in your educational institution.",
    image: easy1,
    section: {
      title: "Consistent branding across all emails",
      description:
        "Maintain a consistent image and build your institution’s reputation. WiseStamp makes sure all email signatures in your organization are always up-to-date, with no tampering by individual staff members.",
      steps: [
        {
          heading: "Easy to create, simple to manage",
          description:
            "Design and set up university-wide signatures in minutes using a central dashboard. WiseStamp doesn’t require any technical knowledge or IT assistance to manage. Compatible with Google Workspace or Office 365.",
          image: easy1,
        },
        {
          heading: "Create the best signature for each department",
          description: "Let each faculty showcase their best:",
          stepper: [
            "Promote scientific research",
            "Announce scholarships",
            "Provide department-based access",
            "Show off badges & certifications",
          ],
          image: easy2,
        },
      ],
    },
  },
  {
    title: "Real Estate Agent",
    heading: "Email signature management solution for Real Estate Agencies",
    description:
      "Get more leads and close more deals with a branded email signature for all your agents.",
    image: easy3,
    section: {
      title: "Control your branding across all email signatures",
      description:
        "Your emails are your most powerful marketing channel. Agents send thousands of emails to interact with clients daily. Increase brand recognition by putting your logo front and center to help clients recognize your brand alongside the agent.",
      steps: [
        {
          heading: "Your new, targeted sales channel",
          description:
            "Add a banner or an image gallery to showcase your listings at the bottom of every agent’s signature to grab prospects’ attention. Localize your signatures using different banners for each of your offices. ",
          image: easy4,
        },
        {
          heading: "Keep your prospects engaged",
          description:
            "Showcase upcoming open houses to increase attendance, promote virtual tours and video walkthroughs, and add an online scheduler to every agent’s email signature to allow prospects to book meetings in one click.  ",
          image: easy5,
        },
        {
          heading: "Build you prospects’ trust",
          description: "",
          stepper: [
            "Showcase agent certifications",
            "Post testimonials & reviews",
            "Offer free market report",
            "Add legal disclaimers",
          ],
          image: easy6,
        },
      ],
    },
  },
  {
    title: "Saas Companies",
    heading: "Email signature management solution for SaaS companies",
    description:
      "Build your brand and increase conversion using a highly cost-effective marketing channel.",
    image: easy7,
    section: {
      title: "High-visibility, low-cost marketing channel",
      description:
        "Compared to other digital marketing channels, email signatures are by far the most cost-effective. Use your company-wide email signature to build consistent branding, increase engagement, and drive sales and conversion with banner campaigns.",
      steps: [
        {
          heading: "Streamlined email signature management",
          description:
            "You want your email signature solution to be as automated and efficient as any other software in your inventory. WiseStamp’s unified dashboard, fast onboarding, smart campaign management, and advanced tracking mean everything is right there at your fingertips. ",
          image: easy8,
        },
        {
          heading: "Your new billboard",
          description:
            "With so many things to announce on a regular basis, your easily-updated employees’ email signatures are the best spot.",
          stepper: [
            "Webinars & videos   ",
            "Disclaimers & green footers   ",
            "Awards & Certification ",
            " Events promotion",
            "  eBooks & content  ",
            "Calls-to-action",
          ],
          image: easy9,
        },
      ],
    },
  },
];

function Industry() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("Industry/", "").trim();

    console.log("title:", title);

    // Find a match in the LegalData array by `title`
    const matchedData = data?.find((item) => item?.title === title);
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
      {allData === null ? (
        <div className="py-5">
          <h1 className="text-center">No Data Found</h1>
        </div>
      ) : (
        <div className="Industry">
          {/* Section 1 */}
          <div className="container-fluid">
            <div className="row gy-4 align-items-center mb-3 mb-lg-5">
              <div className="col-lg-6">
                <div className="Industry_section1_content">
                  <h4 className="Industry_h4">Industry</h4>
                  <h1 className="Industry_h1 fs-2">{allData?.heading}</h1>
                  <h6 className="Industry_content">{allData?.description}</h6>
                  <div className="buttons d-flex gap-3 flex-row mt-4 mb-5 justify-content-center">
                    <button className="learnmore-button">Learn More</button>
                    <button className="view_pricing">View Pricing</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={allData?.image}
                  alt="Industry image"
                  className="w-100"
                />
              </div>
            </div>
          </div>

          {/* Design Background with Ellipses */}
          <div className="industry_design position-relative">
            <div className="ellipse55"></div>
            <div className="ellipse62"></div>
            <div className="ellipse59"></div>
            <div className="ellipse72"></div>
            <div className="ellipse60"></div>
            <div className="ellipse61"></div>
            <div className="ellipse56"></div>
            <div className="ellipse57"></div>
            <div className="ellipse64"></div>
            <div className="ellipse58"></div>
            <div className="ellipse71"></div>
            <div className="ellipse63"></div>
            <div className="group9079">
              <div className="ellipse65"></div>
              <div className="ellipse67"></div>
              <div className="ellipse68"></div>
              <div className="ellipse69"></div>
              <div className="ellipse70"></div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-8  mx-auto text-center">
                <h2>{allData?.section?.title}</h2>
                <h6>{allData?.section?.description}</h6>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="container">
            <div className="AlternatingSections">
              {allData?.section?.steps?.map((item, index) => (
                <div
                  className="row gy-5 align-items-center mb-4 mb-lg-5"
                  key={index}
                >
                  <div
                    className="col-lg-6"
                    style={{ order: index % 2 === 0 ? 1 : 2 }}
                  >
                    <h2>{item?.heading}</h2>
                    <p>{item?.description}</p>
                    {item?.stepper && (
                      <ul>
                        {item?.stepper?.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ order: index % 2 === 0 ? 2 : 1 }}
                  >
                    <img src={item?.image} alt="Industry" className="w-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container my-5">
            <div className="row gy-5 text-center">
              <div className="col-lg-6 mx-auto">
                <h5 className="fs-2">
                  Manage your institution’s email signatures today!
                </h5>
                <a href="#">
                  <button className="view_pricing">Start Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Industry;
