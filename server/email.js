import nodemailer from "nodemailer"

export function sendemail(email,otp){
    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        service:"Gmail",
        port: 587,
        secure:true,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.PASS_USER
        }
    })
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is: ${otp}`,
    };

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(info);
        }

    })
}