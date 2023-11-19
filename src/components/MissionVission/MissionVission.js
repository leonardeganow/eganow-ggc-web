import React, { useState } from "react";
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

const Mission = [
  {
    id: "01",
    mImg: standard,
    Title: "Standard",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "01",
    mImg: hope,
    Title: "Hope",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "02",
    mImg: silver,
    Title: "silver",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "03",
    mImg: pristige,
    Title: "pristige",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "04",
    mImg: platinum,
    Title: "platinum",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "05",
    mImg: loyalty,
    Title: "loyalty",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "06",
    mImg: justice,
    Title: "justice",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "07",
    mImg: gold,
    Title: "gold",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "08",
    mImg: freedom,
    Title: "freedom",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },

  {
    id: "08",
    mImg: bronze,
    Title: "bronze",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
  {
    id: "08",
    mImg: arise,
    Title: " arise",
    Des: "Lorem Ipsum has been the industry's standard dummy of the text ever since make.",
  },
];

const MissionVission = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <div onClick={() => setOpen(true)} className="election-mission-wrap">
          <div className="row">
            {Mission.map((mvsion, tsm) => (
              <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={tsm}>
                <div className="election-mission-content">
                  <img src={mvsion.mImg} alt="" />
                  {/* <div className="title">{mvsion.Title}</div> */}
                  <div className="text">
                    <h3>{mvsion.Title}</h3>
                    <p>{mvsion.Des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      )}
    </section>
  );
};

export default MissionVission;
