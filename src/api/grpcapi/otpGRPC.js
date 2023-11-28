import { OtpVerificationSvcClient } from "../../protos/gen/OtpVerification_grpc_web_pb";
import {
  MemberOtpRequest,
  VerifyOtpRequest,
  MemberEmailOtpRequest,
} from "../../protos/gen/OtpVerification_pb";
import { URL, METADATA } from "../../utils/constants";

const otpGRPC = () => {
  const client = new OtpVerificationSvcClient(URL, null, null);

  //send otp to number
  const sendOtp = (params) => {
    try {
      return new Promise((resolve, reject) => {
        const request = new MemberOtpRequest();
        console.log(params.mobileNo);
        request.setMobilenumber(params.mobileNo);
        console.log(params.mobileNo);
        console.log(request);
        client.sendSMSOTPToMemberPhoneNumber(
          request,
          METADATA,
          (err, response) => {
            if (err) {
              reject(err);
            }
            const result = response?.toObject();
            //   console.log(result);
            resolve(result);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  //send email otp
  const sendEmailOtp = (params) => {
    try {
      return new Promise((resolve, reject) => {
        const request = new MemberEmailOtpRequest();
        console.log(params);
        request.setEmailaddress(params);
        console.log(request);
        client.sendOTPToMemberEmailAddress(
          request,
          METADATA,
          (err, response) => {
            if (err) {
              reject(err);
            }
            const result = response?.toObject();
            //   console.log(result);
            resolve(result);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = (params) => {
    try {
      return new Promise((resolve, reject) => {
        const request = new VerifyOtpRequest();
        console.log(request);
        console.log(params);
        request.setOtpvalue(params.otp);
        request.setMobilenumberoremailaddress(
          params.telephoneNo ? params.telephoneNo : params.email
        );
        console.log(request);
        client.verifyOTPForMember(request, METADATA, (err, response) => {
          if (err) {
            reject(err);
          }
          const result = response?.toObject();
          //   console.log(result);
          resolve(result);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    sendOtp,
    verifyOtp,
    sendEmailOtp,
  };
};

export default otpGRPC;
