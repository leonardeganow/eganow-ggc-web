import { METADATA, URL } from "../../utils/constants";
//TODO importing Agent Service
import { AgentMobileSvcClient } from "../../protos/gen/AgentMobile_grpc_web_pb";
import {
  LoginRequest,
  ChangePinRequest,
  MemberCreatedByAgentRequest,
  DonationCollectedRequest,
  TransactionListAgentRequest,
} from "../../protos/gen/AgentMobile_pb";

//NOTE MAIN FUNCTION TO RUN ALL APIS
function agentAPI() {
  // TODO INITIALIZING CLIENT
  const client = new AgentMobileSvcClient(URL, null, null);

  // ANCHOR AGENT LOGIN
  async function loginAgent(params) {
   try{
     // ANCHOR INITIALIZING A LOGIN REQUEST
     const request = new LoginRequest();
     request.setMobilenumber(params.agentMobileNo); //ANCHOR - setting phone number
     request.setPin(params.agentPassword); //ANCHOR - setting pin
 
     return new Promise((resolve, reject) => {
       // ANCHOR CREATE A REQUEST TO LOGIN AN AGENT
       client.agentLogin(request, METADATA, (err, response) => {
         if (err) {
           reject(err);
         }
         const result = response?.toObject(); //ANCHOR CONVERTING RESULTS TO OBJECT
         resolve(result);
       });
     });
   }catch(err){
    console.log(err)
   }
  }

  // ANCHOR CHANGE AGENT PIN
  async function changeAgentPin(params) {
    try{
      // ANCHOR INITIALIZING A CHANGE PIN REQUEST
    const request = new ChangePinRequest();
    request.setMobilenumber(params.agentMobileNo); //ANCHOR - setting the mobile number
    request.setNewpin(params.newPin); //ANCHOR setting new pin
    request.setOldpin(params.oldPin); //ANCHOR - setting old pin

    // console.log(request);

    return new Promise((resolve, reject) => {
      // ANCHOR CREATE A REQUEST TO CHANGE AGENT PING
      client.agentChangePin(request, METADATA, (err, response) => {
        if (err) {
          reject(err);
        }
        const result = response?.toObject(); //ANCHOR CONVERTING RESULTS TO OBJECT
        resolve(result);
      });
    });
    }catch(err){
      console.log(err)
    }
  }

    //TODO GET MEMEBERS TRANSACTIONS
    async function getMemberTransactions(params) {
        try{
          // ANCHOR INITIALIZING A GET TRANSACTION LIST
        const request = new TransactionListAgentRequest()
        request.setAgentid(params.Agentid) //ANCHOR - SETTING AGENT ID
        request.setMembertype(params.Membertype) //ANCHOR -  SETTING MEMEBER TYPER
        console.log(request);

        return new Promise(( resolve,reject) => {
            // ANCHOR CREATE A REQUEST TO CHANGE AGENT PING
            client.getTransactionListForAgent(request, METADATA, (err, response) => {
                if (err) {
                    reject(err)
                }
                const result = response?.toObject() //ANCHOR CONVERTING RESULTS TO OBJECT
                
                resolve(result)
            })
        })
        }catch(err){
          console.log(err)
        }
    }


  //TODO - GET TOTAL DONATIONS
  async function getTotalDonation(params) {
    try{
      // ANCHOR - INITIALIZING A GET DONATION REQUEST
    const request = new DonationCollectedRequest();
    request.setAgentid(params.agentId); //ANCHOR - SETTING AGENT ID
    request.setMembertype(params.Membertype); //ANCHOR - SETTING MEMBER TYPE (GGC)

    // console.log(request)

    return new Promise((resolve, reject) => {
      client.getTotalDonationCollectedByAgent(
        request,
        METADATA,
        (err, response) => {
          if (err) {
            reject(err);
          }
          const result = response?.toObject(); //ANCHOR - converting response to object
          resolve(result);
        }
      );
    });
    }catch(err){
      console.log(err)
    }
  }

  // TODO - GET MEMBERS CREATED BY AGENT
  async function getMemberCreateByAgent(params) {
    try{
      // ANCHOR - INITIALIZING A GET DONATION REQUEST
    const request = new MemberCreatedByAgentRequest();
    request.setAgentid(params.agentId); //ANCHOR - SETTING AGENT ID

    return new Promise((resolve, reject) => {
      client.getListOfGGCMembersCreatedByAgent(
        request,
        METADATA,
        (err, response) => {
          if (err) {
            reject(err);
          }
          const result = response?.toObject(); //ANCHOR - converting response to object
          resolve(result);
        }
      );
    });
    }catch(err){
      console.error(error);
    }
  }

  // ANCHOR - EXPORTING AGENT API FUNCTIONS
  return {
    loginAgent,
    changeAgentPin,
    getMemberTransactions,
    getTotalDonation,
    getMemberCreateByAgent,
  };
}

export default agentAPI;
