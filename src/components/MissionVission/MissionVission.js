import React, { useEffect, useState } from "react";
// import arise from "../../images/election-mission/arise.jpg";
import bronze from "../../images/Bronze_Doner_card.svg";
import freedom from "../../images/Freedom_Doner_card.svg";
// import gold from "../../images/election-mission/Gold.jpg";
import justice from "../../images/Justice_Doner_card.svg";
import loyalty from "../../images/Loyalty_Doner_card.svg";
import platinum from "../../images/Platinum_Doner_card.svg";
import pristige from "../../images/Prestige_Doner_card.svg";
import silver from "../../images/Silver_Doner_card.svg";
import standard from "../../images/Standard_Doner_card.svg";
import hope from "../../images/Hope_Doner_card.svg";
import arise from "../../images/arise_Doner_card.svg";
import GgcRegisterModal from "../modals/GgcRegisterModal";
import useStore from "../../formstore/formStore";
import gold from "../../images/Gold_Doner_card.svg";
import CardTypeAPI from "../../api/grpcapi/cardTypeGRPC";
import { RpcError } from "grpc-web";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import { Avatar } from "@mui/material";

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
    mImg: freedom,
  },
  {
    id: "9",
    mImg: justice,
  },
  {
    id: "10",
    mImg: arise,
  },
  {
    id: "11",
    mImg: hope,
  },
];

const MissionVission = (props) => {
  const [cardTypeValues, setCardTypeValues] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { updateRoleAndCardType } = useStore(); //zustand state to hanndle role annd card select

  const { getCardTypes } = CardTypeAPI();

  //

  //get ggc card packages and store in zustand state
  function handleCardGet(cardtype, cardamount, cardId) {
    const newRole = "GGC";

    const cardDisplay = `${cardtype} card - ${cardamount}`;

    updateRoleAndCardType(newRole, cardDisplay, cardId, cardamount);
  }

  const getCardTypeHandler = async () => {
    setisLoading(true);
    // console.log("hi");
    try {
      const response = await getCardTypes();
      if (response.cardtypesList) {
        setisLoading(false);
      } else {
        alert("err");
      }
      // console.log(response.cardtypesList);
      const cardsList = response.cardtypesList;

      if (cardsList.length < 0) {
        alert("NO cards");
        return;
      }
      const newCards = cardsList.map((card, i) => {
        return { ...card, img: Mission[i]?.mImg };
      });

      setCardTypeValues(newCards);
    } catch (error) {
      console.error(error);
      if (error instanceof RpcError) {
        toast("Network Error");
        return;
      } else {
        toast("Please try again");
      }
      // setIsError(true);
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
          <div className=" d-flex flex-wrap justify-content-center gap-3">
            {/* <span
              style={{ fontSize: "100px" }}
              className="spinner-border text-success  spinner-border-sm mr-1 text-center"
            ></span> */}
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
            <Skeleton variant="rectangular" width={410} height={200}>
              <Avatar
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                className="w-25"
              />
            </Skeleton>
          </div>
        ) : (
          <div className="election-mission-wrap">
            <div className="row">
              {cardTypeValues?.map((card, i) => (
                <div
                  onClick={() => {
                    setOpen(true);
                    handleCardGet(
                      card.cardtypename,
                      card.cardamount,
                      card.cardtypeid
                    );
                  }}
                  className="col-lg-4 col-md-4 col-sm-6 col-12"
                  key={card.cardtypeid}
                >
                  <div className="election-mission-content">
                    <img src={card.img} alt="" />

                    <div className="title">
                      {card.cardtypename} - GHS{" "}
                      {card.cardamount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
