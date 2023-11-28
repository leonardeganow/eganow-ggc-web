import { CustomerSetupsSvcClient } from "../../protos/gen/CustomerSetups_grpc_web_pb";
import { EmptySetupRequest } from "../../protos/gen/CustomerSetups_pb";
import { URL, METADATA } from "../../utils/constants";

const customerSetupsGRPC = () => {
  const client = new CustomerSetupsSvcClient(URL, null, null);

  const getRegions = () => {
    try {
      return new Promise((resolve, reject) => {
        const request = new EmptySetupRequest();
        client.getRegions(request, METADATA, (err, response) => {
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

  const getOtherCountries = () => {
    try {
      return new Promise((resolve, reject) => {
        const request = new EmptySetupRequest();
        client.getSetupCountry(request, METADATA, (err, response) => {
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

  const getConstituencies = () => {
    try {
      return new Promise((resolve, reject) => {
        const request = new EmptySetupRequest();

        client.getConstituencies(request, METADATA, (err, response) => {
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

  const getAgeRange = () => {
    try {
      return new Promise((resolve, reject) => {
        const request = new EmptySetupRequest();

        client.getListOfAgeRange(request, METADATA, (err, response) => {
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

  const getPayment = () => {
    try {
      return new Promise((resolve, reject) => {
        const request = new EmptySetupRequest();
        client.getPaymentMethods(request, METADATA, (err, response) => {
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
    getConstituencies,
    getRegions,
    getAgeRange,
    getPayment,
    getOtherCountries,
  };
};

export default customerSetupsGRPC;
