import React from "react";

const AboutContent = () => {
  return (
    <section
      style={{ minHeight: "50vh", backgroundColor: "#006436" }}
      className=" py-5"
    >
      <h1 className="text-center text-danger">About</h1>
      <p className="text-white text-center px-3 ">
        INTRODUCING THE GOOD GOVERNANCE CARD: <br /> SHAPING GHANA'S FUTURE
        THROUGH INCLUSIVE PARTICIPATION
      </p>

      <div className="d-md-flex justify-content-center gap-5 px-md-5 px-4 py-5">
        <div className=" px-md-5">
          <p className="text-white">
            Welcome to the innovative realm of the Good Governance Card, a
            transformative initiative crafted by the National Democratic
            Congress (NDC) to reshape the landscape of campaign funding in
            Ghana. With a visionary commitment to inclusivity, this
            groundbreaking endeavour is set to empower everyday Ghanaians and
            the middle class, ushering them into the heart of the political
            process.
          </p>

          <p className="text-white">
            In a bold departure from the norm, the Good Governance Card embarks
            on a mission to engage individuals who have long stood at the
            periphery of active party politics. By tapping into the collective
            resources, expertise, and enthusiasm of this previously untapped
            demographic, the NDC endeavours to counteract the economic tumult
            stemming from corruption and mismanagement under the current
            administration, the New Patriotic Party (NPP).
          </p>
          <p className="text-danger fw-bolder">EMPOWERING CHANGE: GET YOUR CARD, SHAPE YOUR FUTURE!</p>
        </div>
        <div className="px-md-5" >
          <p className="text-white">
            Embodying the NDC's unwavering dedication to the welfare of the
            nation, the Good Governance Card is a beacon of opportunity,
            offering a platform for shaping a brighter tomorrow for Ghana.
            Through this transformative vehicle, we strive to cultivate an
            environment of good governance, laying the groundwork for a
            sustainable future that resonates throughout our beloved nation.
          </p>
          <p className="text-white">
            The Good Governance Card is more than just a financial instrument;
            it's a catalyst for positive change. It symbolizes a movement that
            embraces diversity, elevates voices, and champions transparency.
            Together, as we harness the power of the ordinary citizen and the
            middle class, we embark on a journey toward progress, unity, and
            collective prosperity. Join us in this historic endeavour as we
            revolutionize campaign funding, empower our fellow Ghanaians, and
            pave the way for a better future.
          </p>
          <p className="text-white">
            The Good Governance Card is not just a card it's a key to a more
            inclusive, prosperous, and harmonious Ghana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
