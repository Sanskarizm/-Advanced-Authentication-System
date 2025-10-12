// utils/twilioClient.js
import twilio from "twilio";

export function getTwilioClient() {
    if (!process.env.TWILIO_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
        throw new Error("Missing Twilio environment variables!");
    }

    return twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
}
