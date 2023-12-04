import React, { useEffect, useState } from "react";
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
import GgcRegisterModal from "../../components/modals/GgcRegisterModal";
import useStore from "../../formstore/formStore";
import gold from "../../images/Gold_Doner_card.svg";
import CardTypeAPI from "../../api/grpcapi/cardTypeGRPC";
import { RpcError } from "grpc-web";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import { Avatar } from "@mui/material";

function AgentCards() {

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

      const [cardTypeValues, setCardTypeValues] = useState(null);
      const [open, setOpen] = useState(false);
      const [isLoading, setisLoading] = useState(false);
      // const [isError, setIsError] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
      const { updateRoleAndCardType, info } = useStore(); //zustand state to hanndle role annd card select
    
      const { getCardTypes } = CardTypeAPI();
    
      //
    
      //get ggc card packages and store in zustand state
      function handleCardGet(cardtype, cardamount, cardId,agentId) {
        const newRole = "GGC";
    
        const cardDisplay = `${cardtype} card - ${cardamount}`;
    
        updateRoleAndCardType(newRole, cardDisplay, cardId, cardamount,agentId);
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
    
      className="wpo-election-mission-section  px-5"
    >
      <div style={{ cursor: "pointer" }} className="container">
        <div className="row justify-content-center">
        
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
                      card.cardtypeid,
                      info.agentId
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
}

export default AgentCards;
