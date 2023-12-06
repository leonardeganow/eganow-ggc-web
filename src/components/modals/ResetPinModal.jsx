import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";


//ANCHOR- IMPORING API'S
import membersGRPC from '../../api/grpcapi/membersGRPC';
import otpGRPC from '../../api/grpcapi/otpGRPC';




function ResetPinModal({ open, close }) {

    //ANCHOR -GETTING API FUNCTIONS
    const { checkIfUserExist, resetMemberPin } = membersGRPC();
    const { sendOtp, verifyOtp, sendEmailOtp } = otpGRPC();

    const { register, getValues } = useForm() //USEFORM 

    // TODO - PHONE NUMBER OF EMAIL FORM STATE
    const [showphone, setShowPhone] = useState(true)
    //TODO - OTP FORM STATE
    const [showOTP, setShowOTP] = useState(false)
    //TODO -  NEW PIN FORM STATE
    const [showPin, setShowPin] = useState(false)
    // TODO - ISLOADING STATE
    const [isLoading, setIsLoading] = useState(false);

    // ANCHOR - GET PHONE VALUES AND CHANGE THE SHOW STATE
    const getPhone = async () => {

        let phoneValue = getValues('phoneemail')
        //ANCHOR Check if the value is an email
        const isEmail = /\S+@\S+\.\S+/.test(phoneValue);
        //ANCHOR Check if the value is a phone number
        const isPhoneNumber = /^\d{10}$/.test(phoneValue);
        let payload = {
            telephoneNo: phoneValue,
            role: "GGC"
        }

        if (isPhoneNumber) {
            setIsLoading(true) //set loading state
            try {
                const response = await checkIfUserExist(payload); //REVIEW - checking if user exist with nunber 
                if (response.status === true) {
                    const response = await sendOtp({ mobileNo: phoneValue }); //TODO - sending otp
                    console.log(response)
                    if (response.status == true) {
                        setShowOTP(true); //ANCHOR - set otp form 
                        setShowPhone(false) //ANCHOR - set the show phone 
                        toast(response?.message);
                        setIsLoading(false) //ANCHOR - setting loading state to false
                        console.log("sendOtp", response)
                    } else if (response.status === false && response.message == 'OTP already exist, Kindly enter the otp sent to your email.') {
                        setShowOTP(true); //ANCHOR - set otp form 
                        setShowPhone(false) //ANCHOR - set the show phone 
                        toast(response?.message);
                        setIsLoading(false) //ANCHOR - seting loading state
                        console.log("sendOtp", response)
                    } else {
                        toast(response?.message);
                        setIsLoading(false) //ANCHOR - setting loading state to false
                        return;
                    }
                } else {
                    toast.error(response.message)
                    setIsLoading(false)
                    return;
                }
            } catch (err) {
                toast.error("Network Error")
                setIsLoading(false)
            }
        } else if (isEmail) {
            setIsLoading(true) //set loading state
            try {
                const response = await checkIfUserExist({ email: phoneValue, role: "GGC" });  //making request to check of use exit
                setIsLoading(true)
                if (response.status === true) {
                    const response = await sendEmailOtp({ email: phoneValue }); //TODO - sending otp
                    console.log(response)
                    if (response?.status == true) {
                        setShowOTP(true); //ANCHOR - set otp form 
                        setShowPhone(false) //ANCHOR - set the show phone 
                        toast(response?.message);
                        setIsLoading(false) //ANCHOR - seting loading state
                        console.log("sendOtp", response)
                    } else {
                        toast.error(response?.message);
                        setIsLoading(false)
                        return
                    }
                } else if (response.status === false && response.message == 'OTP already exist, Kindly enter the otp sent to your email.') {
                    setShowOTP(true); //ANCHOR - set otp form 
                    setShowPhone(false) //ANCHOR - set the show phone 
                    toast(response?.message);
                    setIsLoading(false) //ANCHOR - seting loading state
                    console.log("sendOtp", response)
                } else {
                    toast.error(response.message)
                    setIsLoading(false)
                    return;
                }
            } catch (err) {
                console.error(err)
                toast(err.message);
                setIsLoading(false)
            }
        } else {
            toast.error('Inavlid Number or Email')
            setIsLoading(false)
            return;
        }
    }

    // ANCHOR - GET AND VERIFY OTP AND CHANGE STATE
    const getOtp = async () => {
        let otpValue = getValues('otp')
        let phoneValue = getValues('phoneemail')
        //ANCHOR - PAYLOAD TO SEND
        const payload = {
            otp: otpValue,
            telephoneNo: phoneValue,
            email: phoneValue
        }
        setIsLoading(true) //ANCHOR - setting loading state
        try {
            const response = await verifyOtp(payload); //NOTE - VERIFY OTP METHOD
            if (response.status === true) {
                setShowPin(true)
                setShowOTP(false)
                setShowPhone(false)
                toast(response?.message);
                setIsLoading(false)
            } else {
                toast.error(response.message)
                setIsLoading(false)
                return;
            }
        } catch (err) {
            toast.error(err?.message)
            setIsLoading(false)
        }
    }

    //ANCHOR - GET AND VERIFY PIN AND CHANGE STATE
    const getPin = async () => {
        let pinValue = getValues('pin')
        let confirmPin = getValues('confirmpin')
        let phoneValue = getValues('phoneemail')
        console.log(pinValue)
        if (pinValue === confirmPin) { //ANCHOR if confirm pin and pin is equals
            let payload = {
                mobileNumber: phoneValue,
                pin: pinValue,
                email: phoneValue
            }
            try {
                setIsLoading(true) //ANCHOR - setting loading state
                // TODO - MAKE API CALL WITH THE PAYLOAD
                const response = await resetMemberPin(payload);

                // TODO - IF CALL IS SUCCESSULLY THEN RESET PIN
                if (response.status === true) {
                    setShowOTP(false)
                    setShowPhone(false)
                    setShowPin(false)
                    toast(response?.message);
                    setIsLoading(false)
                    console.log(response)
                } else {
                    toast(response?.message);
                    setIsLoading(false)
                    return
                }
            } catch (err) {
                toast(err?.message);
                setIsLoading(false)
            }
        } else {
            toast.error("Pin Code does not match");
            setIsLoading(false)
            return
        }
    }



    return (
        <div className='bg-danger'>
            <Modal
                open={open}
                onClose={close}
            >
                <div className="p-md-5 p-3 "
                    style={{
                        position: "relative",
                        top: "35%",
                        width: "95vw",
                        margin: "auto",
                        maxWidth: "450px",
                        background: 'white',
                        padding: "60px",
                        borderRadius: "0.5rem"
                    }}>
                    <div className='text-center'>
                        <h4>Reset Pin</h4>
                        <small>Reset you pin </small>
                    </div>

                    {/* REVIEW FORM FOR NAME FORM OR EMAIL */}
                    <form action="" className='my-3'>
                        {
                            showphone && (
                                <div>
                                    <label htmlFor="">Phone or Email</label>
                                    <input type="text" className='form-control my-1' {...register('phoneemail', { require: true })} />
                                    <div className='text-end mt-2'>
                                        <button type='button' className='btn btn-success' onClick={getPhone} >
                                            {isLoading ? <span className="spinner-border spinner-border-sm mr-1"></span> : "Next"}
                                        </button>
                                    </div>
                                </div>
                            )
                        }

                        {/* TODO SHOW OTP WHEN NAME IS PHONE IS TRUE */}
                        {
                            showOTP && (
                                <div>
                                    <label htmlFor="">Enter OTP</label>
                                    <input type="text" className='form-control my-1' {...register('otp', { require: true })} />
                                    <div className='text-end mt-2'>
                                        <button type='button' className='btn btn-success' onClick={getOtp} >{isLoading ? <span className="spinner-border spinner-border-sm mr-1"></span> : "Next"}</button>
                                    </div>
                                </div>
                            )
                        }


                        {/* REVIEW SHOW NEW PIN FORM IF OTP IS TRUE */}
                        {
                            showPin && (
                                <div>
                                    <label htmlFor="">Create New Pin</label>
                                    <input type="text" className='form-control my-1' {...register('pin', { require: true })} />
                                    <br />
                                    <label htmlFor="">Confirm New Pin</label>
                                    <input type="text" className='form-control my-1' {...register('confirmpin', { require: true })} />
                                    <div className='text-end mt-2'>
                                        <button type='button' className='btn btn-success' onClick={getPin} >{isLoading ? <span className="spinner-border spinner-border-sm mr-1"></span> : "Submit"}</button>
                                    </div>
                                </div>
                            )
                        }

                        {/* REVIEW SUCCESS PAGE */}
                        {
                            showPin === false && showOTP === false && showphone === false ? (
                                <div>
                                    <h3 className='text-success text-center'>Successful</h3>
                                    <div className='text-end'>
                                        <button className='btn btn-sm btn-success' onClick={close}>Back</button>
                                    </div>
                                </div>
                            ) : ""
                        }
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ResetPinModal;
