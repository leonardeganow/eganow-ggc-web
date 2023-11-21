/**
 * @fileoverview gRPC-Web generated client stub for OtpVerification
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.1
// source: OtpVerification.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.OtpVerification = require('./OtpVerification_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.OtpVerification.OtpVerificationSvcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.OtpVerification.OtpVerificationSvcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OtpVerification.MemberOtpRequest,
 *   !proto.OtpVerification.OtpResponse>}
 */
const methodDescriptor_OtpVerificationSvc_SendSMSOTPToMemberPhoneNumber = new grpc.web.MethodDescriptor(
  '/OtpVerification.OtpVerificationSvc/SendSMSOTPToMemberPhoneNumber',
  grpc.web.MethodType.UNARY,
  proto.OtpVerification.MemberOtpRequest,
  proto.OtpVerification.OtpResponse,
  /**
   * @param {!proto.OtpVerification.MemberOtpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OtpVerification.OtpResponse.deserializeBinary
);


/**
 * @param {!proto.OtpVerification.MemberOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OtpVerification.OtpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OtpVerification.OtpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.OtpVerification.OtpVerificationSvcClient.prototype.sendSMSOTPToMemberPhoneNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/SendSMSOTPToMemberPhoneNumber',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_SendSMSOTPToMemberPhoneNumber,
      callback);
};


/**
 * @param {!proto.OtpVerification.MemberOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OtpVerification.OtpResponse>}
 *     Promise that resolves to the response
 */
proto.OtpVerification.OtpVerificationSvcPromiseClient.prototype.sendSMSOTPToMemberPhoneNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/SendSMSOTPToMemberPhoneNumber',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_SendSMSOTPToMemberPhoneNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OtpVerification.VerifyOtpRequest,
 *   !proto.OtpVerification.OtpResponse>}
 */
const methodDescriptor_OtpVerificationSvc_VerifyOTPForMember = new grpc.web.MethodDescriptor(
  '/OtpVerification.OtpVerificationSvc/VerifyOTPForMember',
  grpc.web.MethodType.UNARY,
  proto.OtpVerification.VerifyOtpRequest,
  proto.OtpVerification.OtpResponse,
  /**
   * @param {!proto.OtpVerification.VerifyOtpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OtpVerification.OtpResponse.deserializeBinary
);


/**
 * @param {!proto.OtpVerification.VerifyOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OtpVerification.OtpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OtpVerification.OtpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.OtpVerification.OtpVerificationSvcClient.prototype.verifyOTPForMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/VerifyOTPForMember',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_VerifyOTPForMember,
      callback);
};


/**
 * @param {!proto.OtpVerification.VerifyOtpRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OtpVerification.OtpResponse>}
 *     Promise that resolves to the response
 */
proto.OtpVerification.OtpVerificationSvcPromiseClient.prototype.verifyOTPForMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/VerifyOTPForMember',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_VerifyOTPForMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OtpVerification.OTPRequest,
 *   !proto.OtpVerification.OtpResponse>}
 */
const methodDescriptor_OtpVerificationSvc_SendOTPToCustomerEmail = new grpc.web.MethodDescriptor(
  '/OtpVerification.OtpVerificationSvc/SendOTPToCustomerEmail',
  grpc.web.MethodType.UNARY,
  proto.OtpVerification.OTPRequest,
  proto.OtpVerification.OtpResponse,
  /**
   * @param {!proto.OtpVerification.OTPRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OtpVerification.OtpResponse.deserializeBinary
);


/**
 * @param {!proto.OtpVerification.OTPRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OtpVerification.OtpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OtpVerification.OtpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.OtpVerification.OtpVerificationSvcClient.prototype.sendOTPToCustomerEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/SendOTPToCustomerEmail',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_SendOTPToCustomerEmail,
      callback);
};


/**
 * @param {!proto.OtpVerification.OTPRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OtpVerification.OtpResponse>}
 *     Promise that resolves to the response
 */
proto.OtpVerification.OtpVerificationSvcPromiseClient.prototype.sendOTPToCustomerEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/SendOTPToCustomerEmail',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_SendOTPToCustomerEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OtpVerification.VerifyCustOTPRequest,
 *   !proto.OtpVerification.OtpResponse>}
 */
const methodDescriptor_OtpVerificationSvc_VerifyCustomerOTP = new grpc.web.MethodDescriptor(
  '/OtpVerification.OtpVerificationSvc/VerifyCustomerOTP',
  grpc.web.MethodType.UNARY,
  proto.OtpVerification.VerifyCustOTPRequest,
  proto.OtpVerification.OtpResponse,
  /**
   * @param {!proto.OtpVerification.VerifyCustOTPRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OtpVerification.OtpResponse.deserializeBinary
);


/**
 * @param {!proto.OtpVerification.VerifyCustOTPRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OtpVerification.OtpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OtpVerification.OtpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.OtpVerification.OtpVerificationSvcClient.prototype.verifyCustomerOTP =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/VerifyCustomerOTP',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_VerifyCustomerOTP,
      callback);
};


/**
 * @param {!proto.OtpVerification.VerifyCustOTPRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OtpVerification.OtpResponse>}
 *     Promise that resolves to the response
 */
proto.OtpVerification.OtpVerificationSvcPromiseClient.prototype.verifyCustomerOTP =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/VerifyCustomerOTP',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_VerifyCustomerOTP);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OtpVerification.OTPRequest,
 *   !proto.OtpVerification.OtpResponse>}
 */
const methodDescriptor_OtpVerificationSvc_ForgotCustomerPassword = new grpc.web.MethodDescriptor(
  '/OtpVerification.OtpVerificationSvc/ForgotCustomerPassword',
  grpc.web.MethodType.UNARY,
  proto.OtpVerification.OTPRequest,
  proto.OtpVerification.OtpResponse,
  /**
   * @param {!proto.OtpVerification.OTPRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OtpVerification.OtpResponse.deserializeBinary
);


/**
 * @param {!proto.OtpVerification.OTPRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OtpVerification.OtpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OtpVerification.OtpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.OtpVerification.OtpVerificationSvcClient.prototype.forgotCustomerPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/ForgotCustomerPassword',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_ForgotCustomerPassword,
      callback);
};


/**
 * @param {!proto.OtpVerification.OTPRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OtpVerification.OtpResponse>}
 *     Promise that resolves to the response
 */
proto.OtpVerification.OtpVerificationSvcPromiseClient.prototype.forgotCustomerPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/OtpVerification.OtpVerificationSvc/ForgotCustomerPassword',
      request,
      metadata || {},
      methodDescriptor_OtpVerificationSvc_ForgotCustomerPassword);
};


module.exports = proto.OtpVerification;

