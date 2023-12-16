

async function sendMessage() {
    
    var userInput = document.getElementById('user-input').value;

   
    var chatLog = document.getElementById('chat-log');

   
    chatLog.innerHTML += '<p>User: ' + userInput + '</p>';

    // Make a request to your backend server which handles the OpenAI API call
    const response = await fetch('/ask-gpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    });

    // Get the response from the server
    const data = await response.json();

    // Display the bot's reply in the chat log
    chatLog.innerHTML += '<p>Bot: ' + data.reply + '</p>';

    // Clear the input field after sending the message
    document.getElementById('user-input').value = '';
}