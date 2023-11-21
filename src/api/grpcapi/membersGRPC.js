import { MembersSvcClient } from "../../protos/gen/Members_grpc_web_pb";
import { MemberExistRequest,MemberRequest, JMOrGGCValues } from "../../protos/gen/Members_pb";
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

          resolve(response?.toObject());
        });
      });
    } catch (error) {
      console.error(error);
    }
  }


  // REGISTER NEW MEMEBER
  function registerMember(params){
    try{

      const request = new MemberRequest() //initialize a new member request
      // setting request body values
      request.setFullname(params.Fullname)
      request.setMobilenumber(params.Mobilenumber)
      request.setEmailaddress(params.Emailaddress)
      request.setGender(params.Gender)
      request.setAgerageid(params.Age)
      request.setCountryofresidence((params.Countryofresidence))
      request.setRegionid(params.Regionid)
      request.setConstituencyid(params.Constituencyid)
      request.setIndustry(params.Industry)
      request.setOccupation(params.Occupation)
      request.setNdcmemberidno(params.Ndcmemberidno)
      request.setAgentid(params.Agentid)
      request.setPin(params.Pin)
      request.setMobielwebussd(params.Mobilewebussd)
      request.setAgerageid(params.Agerageid)
      request.setDisplaynameoncard(params.Displaynameoncard)
      request.setCardpickuplocation(params.Cardpickuplocation)
      request.setCardtypeid(params.Cardtype)
      request.setAccountcreationstatus(params.Accountcreationstatus)

      console.log(request)

      
      return new Promise((resolve,reject)=>{
        client.createMember(request,METADATA,(err,response) => {
          if(err){
            reject(err)
          }
          const result = response.toObject(); //getting an object data from the result object.
          // resolve(result)
          console.log(result)
        })
      })
    }catch(error){
    }
  }

  // returning function to use in our app
  return {createMember,registerMember};
};

export default membersGRPC;
