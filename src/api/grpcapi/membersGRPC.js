import { MembersSvcClient } from "../../protos/gen/Members_grpc_web_pb";
import {
  MemberExistRequest,
  MemberRequest,
  MemberLoginRequest,
  JMRequest,
  JMOrGGCValues,
} from "../../protos/gen/Members_pb";
import { URL, METADATA } from "../../utils/constants";

const membersGRPC = () => {
  const client = new MembersSvcClient(URL, null, null);

  function createMember(param) {
    try {
      const request = new MemberExistRequest();
      request.setMobilenumber(param.telephoneNo);
      request.setMembertype(JMOrGGCValues[param.role]);
      console.log(param);

      return new Promise((resolve, reject) => {
        client.checkIfMemberExist(request, METADATA, (err, response) => {
          if (err) {
            reject(err);
          }
          console.log(response);

          resolve(response?.toObject());
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  // REGISTER NEW MEMEBER
  function registerMember(params) {
    try {
      const request = new MemberRequest(); //initialize a new member request
      // setting request body values
      request.setFullname(params.fullName);
      request.setMobilenumber(params.telephoneNo);
      request.setEmailaddress(null);
      request.setGender(params.gender);
      request.setAgerageid(params.ageRange);
      request.setCountryofresidence(params.country);
      request.setRegionid(params.regions);
      request.setConstituencyid(params.constituencies);
      request.setIndustry(params.industry);
      request.setOccupation(params.occupation);
      request.setNdcmemberidno(null);
      request.setAgentid(null);
      request.setPin(params.pin);
      request.setMobielwebussd("WEB");
      request.setAge(null);
      request.setDisplaynameoncard(params.Displaynameoncard);
      request.setCardpickuplocation(params.card_pickup_location);
      request.setCardtypeid(params.cards);
      // request.setAccountcreationstatus(null);

      return new Promise((resolve, reject) => {
        client.createMember(request, METADATA, (err, response) => {
          console.log(request);
          if (err) {
            reject(err);
          }
          const result = response.toObject(); //getting an object data from the result object.
          resolve(result);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  function createJmMember(params) {
    try {
      const request = new JMRequest(); //initialize a new member request
      // setting request body values
      request.setMobilenumber(params.telephoneNo);
      
      request.setPin(params.pin);
      request.setMobielwebussd("WEB");
   
      // request.setAccountcreationstatus(null);

      return new Promise((resolve, reject) => {
        client.createJMMember(request, METADATA, (err, response) => {
          console.log(request);
          if (err) {
            reject(err);
          }
          const result = response.toObject(); //getting an object data from the result object.
          resolve(result);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  function loginMember(params) {
    try {
      const request = new MemberLoginRequest();

      console.log(request);
      request.setMobilenumber(params.telephoneNo);
      request.setPin(params.pin);

      return new Promise((resolve, reject) => {
        client.checkIfMemberExist(request, METADATA, (err, response) => {
          if (err) {
            reject(err);
          }

          resolve(response?.toObject());
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  // returning function to use in our app
  return { createMember, registerMember, loginMember, createJmMember };
};

export default membersGRPC;
