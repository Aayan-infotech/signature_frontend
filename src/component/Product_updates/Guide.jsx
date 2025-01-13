import React, { useEffect, useState } from "react";
import "./Product_updates.scss";
import Footer from "../Footer/Footer";
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import { useLocation, Link } from "react-router-dom";

const data =[
  {
    "title": "How to add signature in outlook",
    "decription": "Create a signature in Outlook with an image/logo, hyperlink, and social media icons in 5 minutes with this step-by-step guide",
    "image": "https://www.wisestamp.com/wp-content/uploads/2024/02/how-to-add-signature-in-outlook.webp",
    "listData": [
      {
        "listhead": "How to add a signature in Outlook.com (Now outlook.live.com)",
        "data": [
          {
            "heading": "Click on the 'Settings' gear icon",
            "description": "Click on the 'Settings' gear icon in the top right corner of the page and then click on setting",
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/07/how-to-add-signatures-on-outlook-com-1.webp"
          },
          {
            "heading": "In the settings window that opens, click on 'Compose and reply'",
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/step2-compose-and-reply-1.webp"
          },
          {
            "heading": "Navigate to the section labeled 'Email signature'",
            "description": "Under 'Email signature', you will see a text box where you can type your signature. You can format your text using the options above the box – you can change the font, size, color, and more. You can also add links, pictures, and even your business card.",
            "stepImg": image5
          },
          {
            "heading": "Set the signature as the default and more options to consider",
            "description": "Once you're satisfied with your signature, select the checkbox that applies to you (See screen shot below). You can choose to automatically include your signature on new messages, on forwarded or replied-to messages, both, or neither.",
            
          }
        ]
      },
      {
        "listhead": "How to add signature in Outlook for desktop (Windows)",
        "data": [
          {
            "heading": "Open Outlook's in-app editor",
            "description": "Click on the 'Settings' gear icon in the top right corner of the page and then click on setting",
            "sublist": [
              "Go to the search box at the top-left side of your Outlook screen and type in signature",
              "Click on the “Signature” result that appears",
              "Click on “Signature” from the dropdown menu and you’ll be prompted to set a signature in Outlook using the in-app signature editor."
            ],
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/how-to-add-Outlook-2019-and-2016-and-2013-email-signature-search-settings.webp"
          },
          {
            "heading": "Create a new Outlook signature",
            "sublist": [
              "Click on the “New” button to create a new signature for your email",
              "Give your new signature a name (use a name that describes this specific signature well, in case you create multiple signatures in the future)"
            ],
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/Create-new-signature-in-Outlook-2013-and-2016-and-2019.webp"
          },

          {
            "heading": "Add your signature details",
            "description": "To begin with, we’ll create the simplest form of an Outlook email signature – a simple text signature. This may be enough for you. But, in case you want something more professional, later on, I’ll show you ways to create a much richer and more effective email signature.",
            "sublist": [
              "To create your text signature click in the signature editor’s text field, and type in your full name, your job title, and your contact information.",
              "If you’re satisfied with this signature layout you can stop here. Simply click OK, and you’re good to go. For more advanced signature features, keep reading."
            ],
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/03/set-up-new-outlook-signature-1.webp"
          },

          {
            "heading": "Edit outlook signature design",
            "description": "You can design and edit your Outlook signature to make it look more organized and give it a clear visual hierarchy, by setting different colors and font sizes for the most important information.",
            "sublist": [
              "To change the color of any text in your signature, all you need to do is select it with your cursor and click the Color dropdown menu > then pick your color, or click More colors (at the bottom of the panel) to choose a custom color.",
              "To change the text size – select the text then click the Font Size dropdown menu and try different sizes till you feel you’ve reached the best balance.",
              "To change font type – select any text and click the Font type dropdown, try some options till you find your fit."
            ],
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/Edit-signature-in-Outlook-change-design-color-fornt-size-and-font-type-2.webp"
          },
          {
            "heading": "Add an image",
            "sublist": [
              "Click your cursor where you want to place your signature image",
              "Click the image icon on the right-hand side of the tool strip",
              "Upload the image from your computer"
            ],
            "stepImg": image1
          },
          {
            "heading": "Add a hyperlink to your Outlook signature",
            "description": "To begin with, we’ll create the simplest form of an Outlook email signature – a simple text signature. This may be enough for you. But, in case you want something more professional, later on, I’ll show you ways to create a much richer and more effective email signature.",
            "sublist": [
              "To add a hyperlink to your Outlook signature, select any text with your cursor(when text is selected it should have a grey background)",
              "Then click the link icon on the right-hand side of the tool strip.",
              "Now enter the URL you want the text to link to, and hit OK."
            ],
            "stepImg": image1
          },
          {
            "heading": "How to set auto Outlook signatures",
            "sublist": [
              "Select Settings at the top of the page.",
              "Select Mail > Compose and reply.",
              "Under Email signature, type your signature and use the available formatting options to change its appearance.",
              "Select the default signature for new messages and replies.",
              "Select Save when you’re done."
            ],
            "stepImg": image1
          }
        ]
      }
    ]
  },
  {
    "title": "How to add a signature in Gmail",
    "decription": "Don’t worry, this guide was made to be easy and straightforward. It includes helpful images, tips,  and easy ways to enrich your Gmail signature with an image, links, social media icons, and other options.",
    "image": "https://www.wisestamp.com/wp-content/uploads/2024/02/how-to-add-signature-in-outlook.webp",
    "listData": [
      {
        "listhead": "Complete the following 6 steps to set up a new Gmail signature:",
        "data": [
          {
            "heading": "Open Gmail Settings",
            "description": "On the top right of your Gmail screen, click on the gear icon and then click “See all settings” in the Quick settings panel.",
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/Add-email-signature-in-Gmail-Step-1-open-Gmail-Settings.webp"
          },
          {
            "heading": "Create a new signature",
            "stepImg": image2,
            "description": "NOTE: Many people are looking to add a complex structure or advanced features to their signature, but this requires editing the signature’s HTML (which this guide does not cover)."
          },
          {
            "heading": "Name your signature",
            "description": "Give your signature a name > and hit “Create”",
            "stepImg": image3
          },
          {
            "heading": "Add your signature details",
            "description": "Tip: you can use consecutive underscores to create a separator line between your name and job title, and your contact info.",
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/add-Gmail-signature-details-basic-signature-format-1.webp"
          },
          {
            "heading": "Edit your Gmail signature",
            "description": "You can edit your Gmail signature design with a few simple steps to make it look much more professional.",
            "stepImg": "https://www.wisestamp.com/wp-content/uploads/2024/04/Edit-Gmail-signature-change-font-size-font-color-and-font-type-2-2.webp"
          },
          {
            "heading": "Add an image to your Gmail signature",
            "description": "First, you have to create the table using Word or Google docs because Gmail does not give you an option to add a table. Second, the table border will show, which takes away from your signature design. So we’ve taken the liberty to code a simple working signature template in HTML which you can use.",
            "stepImg": image4
          },
          {
            "heading": "Add a hyperlink to your Gmail signature",
            "description": "Tip: if you’d like to add a banner to your email signature you can click below the signature you’ve made and add in your banner as another image.",
            "stepImg": image5
          },
          {
            "heading": "Set auto Gmail signatures",
            "description": "Tip: Set your full signature with your signature image as default for new messages, and set a minimalistic signature or none at all as your default for Reply and Forward messages. The reason for this is that, in long email strings, big signatures add up and make things clunky.",
            "stepImg": image5
          }
        ]
      }
    ]
  }
]
function GuidePage() {
  const location = useLocation();
  const [allData, setAllData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const handleData = (path) => {
    const decodedPath = decodeURIComponent(path).replace("/", "");

    const title = decodedPath.replace("guide/", "").trim();

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

  console.log("allData:", allData);
  console.log("filterData:", filterData);
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
            <p className="pt-4">{allData?.decription}</p>
            <div className="buttons d-flex gap-3 flex-row mt-4 mb-5">
              <button className="learnmore-button">Learn More</button>
              <button className="view_pricing">View Pricing</button>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={allData?.image} alt="" className="w-100" />
          </div>
        </div>
        <div className="left">
          {/* Section left1 */}

          <div className="Product_updates_1 mt-lg-5">
            {/* Section left2 */}
            <div className="Product_updates_content_para">
              {allData?.listData.map((item, index) => (
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
                          {data?.stepImg && (
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
                    to={`/guide/${item.title}`}
                    className="text-dark text-decoration-none"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuidePage;
