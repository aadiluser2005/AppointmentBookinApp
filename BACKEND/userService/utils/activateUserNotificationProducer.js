import amqp from "amqplib"





export const userActivationMail=async(user)=> {
        
  try {
      const connection=await amqp.connect(`${process.env.RABBITMQ_URL}`);
      const channel=await connection.createChannel();
  
      const exchange="notificationExchange";
       const routingKey ="mailService";


       

        // console.log(appointmentdate);
        //  console.log(bookingDate);
          const body = userIDActivationMessage(user.fullName,user.email,user.joinDate,user.activeStatus);
  
      const message={
          email:user.email,
          msg:body,
          subject:"User activation notification",
      }



  
  
      await channel.assertExchange(exchange,"direct",{durable:true});
  
      
  
      channel.publish(exchange,routingKey,Buffer.from(JSON.stringify(message)),{persistent:true});
  
      setTimeout(()=>{
          // channel.close();
           //connection.close();
      },500);


  } catch (error) {
     console.log(error);
  }
}





const userIDActivationMessage = (
  fullName,
  email,
  joinDate,
  activeStatus
) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Account Reactivation</title>
    <style>
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          padding: 10px !important;
        }
        .content {
          padding: 16px !important;
        }
        table {
          font-size: 14px !important;
        }
        h2 {
          font-size: 20px !important;
        }
      }
    </style>
  </head>

  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fb; margin: 0; padding: 0;">
    <div class="container" style="max-width: 600px; background-color: #ffffff; margin: 20px auto; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
      
      <div style="background: linear-gradient(135deg, #28a745, #66bb6a); padding: 16px; color: #ffffff; text-align: center;">
        <h2 style="margin: 0;">MK Hospital, Jhansi</h2>
        <p style="margin: 4px 0;">Account Reactivation Notice</p>
      </div>

      <div class="content" style="padding: 24px; color: #333333;">
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>We’re pleased to inform you that your user account has been <strong>successfully reactivated</strong> by the MK Hospital Administration. You can now continue accessing all services and book appointments as usual.</p>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #28a745; margin-bottom: 10px;">Account Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">🧍 <strong>Full Name</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">📧 <strong>Email</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">📅 <strong>Joined On</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${joinDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px;">🔓 <strong>Account Status</strong></td>
              <td style="padding: 8px; color: ${activeStatus ? '#28a745' : '#dc3545'}; font-weight: bold;">
                ${activeStatus ? 'Active' : 'Inactive'}
              </td>
            </tr>
          </table>
        </div>

        <p style="margin-top: 20px;">We’re happy to have you back! You can now log in to your dashboard, manage appointments, and continue using MK Hospital’s digital services without interruption.</p>

        <p style="margin-top: 20px;">If you have any concerns or encounter issues accessing your account, please reach out to our support team.</p>

        <p style="margin-top: 20px; font-size: 14px; color: #555;">Thank you for continuing to trust <strong>MK Hospital Jhansi</strong> with your care.<br>
        <strong>Team MK Hospital Jhansi</strong><br>
        📧 support@mkhopedialysisunit@gmail.com</p>
      </div>
    </div>
  </body>
  </html>
`;
