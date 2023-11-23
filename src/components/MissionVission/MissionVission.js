import React, { useEffect, useState } from "react";
import arise from "../../images/election-mission/arise.jpg";
import bronze from "../../images/election-mission/Bronze.jpg";
import freedom from "../../images/election-mission/Freedom.jpg";
import gold from "../../images/election-mission/Gold.jpg";
import justice from "../../images/election-mission/Justice.jpg";
import loyalty from "../../images/election-mission/Loyalty.jpg";
import platinum from "../../images/election-mission/Platinum.jpg";
import pristige from "../../images/election-mission/Prestige.jpg";
import silver from "../../images/election-mission/Silver.jpg";
import standard from "../../images/election-mission/Standard.jpg";
import hope from "../../images/election-mission/Hope.jpg";
import GgcRegisterModal from "../modals/GgcRegisterModal";
import useStore from "../../formstore/formStore";
import CardTypeAPI from "../../api/grpcapi/cardTypeGRPC";

const Mission = [
  {
    id: "01",
    mImg: pristige,
  },
  {
    id: "02",
    mImg: platinum,
  },
  {
    id: "03",
    mImg: gold,
  },
  {
    id: "04",
    mImg: silver,
  },
  {
    id: "05",
    mImg: bronze,
  },
  {
    id: "06",
    mImg: standard,
  },
  {
    id: "07",
    mImg: loyalty,
  },

  {
    id: "08",
    mImg: justice,
  },
  {
    id: "9",
    mImg: hope,
  },
  {
    id: "9",
    mImg: arise,
  },
  {
    id: "9",
    mImg: hope,
  },
];

const MissionVission = (props) => {
  const [cardTypeValues, setCardTypeValues] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { info, updateRoleAndCardType } = useStore(); //zustand state to hanndle role annd card select

  const { getCardTypes } = CardTypeAPI();

  //

  //get ggc card packages and store in zustand state
  function handleCardGet(cardtype, cardamount, cardId) {
    const newRole = "GGC";

    const cardDisplay = `${cardtype} card - ${cardamount}`;

    updateRoleAndCardType(newRole, cardDisplay, cardId, cardamount);
  }

  const fakeCards = [
    {
      cardtypeid: "23423",
      cardtypename: "sdfs",
      cardamount: 233,
      carddescription: "sdfsd",
    },
    {
      cardtypeid: "23423",
      cardtypename: "sdfs",
      cardamount: 233,
      carddescription: "sdfsd",
    },
    {
      cardtypeid: "23423",
      cardtypename: "sdfs",
      cardamount: 233,
      carddescription: "sdfsd",
    },
    {
      cardtypeid: "23423",
      cardtypename: "sdfs",
      cardamount: 233,
      carddescription: "sdfsd",
    },
    {
      cardtypeid: "23423",
      cardtypename: "sdfs",
      cardamount: 233,
      carddescription: "sdfsd",
    },
    {
      cardtypeid: "23423",
      cardtypename: "sdfs",
      cardamount: 233,
      carddescription: "sdfsd",
    },
  ];

  const getCardTypeHandler = async () => {
    setisLoading(true);
    // console.log("hi");
    try {
      const response = await getCardTypes();
      if (response.cardtypesList) {
        setisLoading(false);
      }
      // console.log(response.cardtypesList);
      const cardsList = response.cardtypesList;
      const newCards = cardsList.map((card, i) => {
        return { ...card, img: Mission[i]?.mImg };
      });

      setCardTypeValues(newCards);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setisLoading(false);
    }
  };
  // console.log(cardTypeValues);

  useEffect(() => {
    getCardTypeHandler();
  }, []);
  return (
    <section
      id="getggc"
      className="wpo-election-mission-section section-padding"
    >
      <div style={{ cursor: "pointer" }} className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-6 col-md-8 col-12">
            <div className="wpo-section-title">
              <div className="section-titl-shape-1">
                <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                  <g opacity="0.44" filter="url(#filter0_f_1_1040)">
                    <circle cx="343.5" cy="129.5" r="129.5" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_1040"
                      x="0"
                      y="-214"
                      width="687"
                      height="687"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="107"
                        result="effect1_foregroundBlur_1_104"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="section-titl-shape-2">
                <svg width="687" height="473" viewBox="0 0 687 473" fill="none">
                  <g opacity="0.44" filter="url(#filter0_f_1_105)">
                    <circle cx="343.5" cy="129.5" r="129.5" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1_105"
                      x="0"
                      y="-214"
                      width="687"
                      height="687"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="107"
                        result="effect1_foregroundBlur_1_105"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <h2>Good Governance Card packages</h2>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className=" d-flex justify-content-center">
            <span
              style={{ fontSize: "100px" }}
              className="spinner-border text-success  spinner-border-sm mr-1 text-center"
            ></span>
          </div>
        ) : (
          <div onClick={() => setOpen(true)} className="election-mission-wrap">
            <div className="row">
              {cardTypeValues?.map((card, i) => (
                <div
                  onClick={() =>
                    handleCardGet(
                      card.cardtypename,
                      card.cardamount,
                      card.cardtypeid
                    )
                  }
                  className="col-lg-4 col-md-4 col-sm-6 col-12"
                  key={card.cardtypeid}
                >
                  <div className="election-mission-content">
                    <img src={card.img} alt="" />

                    <div className="title">
                      {card.cardtypename} - GHS{card.cardamount}
                    </div>
                    <div className="text">
                      <h3>{card.cardtypename} </h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="shape-1">
        <svg width="1245" height="1206" viewBox="0 0 1245 1206" fill="none">
          <path opacity="0.6" d="M0 0L1245 619V1206H0V0Z" />
          <defs>
            <linearGradient
              id="paint0_linear_1_102"
              x1="622.5"
              y1="0"
              x2="622.5"
              y2="1206"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#F8F2F2" />
              <stop offset="1" stopColor="#F8F2F2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="shape-2">
        <svg width="945" height="884" viewBox="0 0 945 884" fill="none">
          <path opacity="0.6" d="M945 0L0 503V884L945 359V0Z" />
          <defs>
            <linearGradient
              id="paint0_linear_1_106"
              x1="945"
              y1="64"
              x2="661"
              y2="809"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#F8F2F2" />
              <stop offset="1" stopColor="#F8F2F2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {open && (
        <GgcRegisterModal
          cardTypeValues={cardTypeValues}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      )}
    </section>
  );
};

export default MissionVission;
