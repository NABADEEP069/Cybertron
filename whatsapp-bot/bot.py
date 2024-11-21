from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route('/whatsapp', methods=['POST'])
def whatsapp_bot():
    incoming_msg = request.values.get('Body', '').lower()
    response = MessagingResponse()
    msg = response.message()

    if 'report' in incoming_msg:
        msg.body("Please share the photo of the waste and your location.")
    elif 'location' in incoming_msg:
        msg.body("Location received. Your report is being processed.")
    else:
        msg.body("Sorry, I didn't understand. Reply with 'report' to submit an issue.")
    return str(response)

if __name__ == '__main__':
    app.run(port=5000)
