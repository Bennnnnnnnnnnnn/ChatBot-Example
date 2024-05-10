// JavaScript (chatbot.js)
document.getElementById('ai_send').addEventListener('click', sendMessage);
document.getElementById('ai_input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var input = document.getElementById('ai_input').value;
    var messages = document.getElementById('ai_messages');

    // Display user's message
    messages.innerHTML += `<p>User: ${input}</p>`;

    // Clear input field
    document.getElementById('ai_input').value = '';

    // AI response
    var response = "This is a generic AI response.";

    // Display AI's message
    messages.innerHTML += `<p>AI: ${response}</p>`;
}

document.getElementById('ai_chatbot_title').addEventListener('click', function() {
    var chatbot = document.getElementById('ai_chatbot');
    var messages = document.getElementById('ai_messages');
    var inputContainer = document.getElementById('ai_input_container');

    if (chatbot.style.height !== '30px') {
        chatbot.style.height = '30px';
        messages.style.display = 'none';
        inputContainer.style.display = 'none';
    } else {
        chatbot.style.height = '600px';
        messages.style.display = 'block';
        inputContainer.style.display = 'block';
    }
});