async function sendMessage() {
    const userMessage = document.getElementById('user-message').value;

    if (!userMessage.trim()) return;

    const chatBox = document.getElementById('chat-box');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);

    document.getElementById('user-message').value = '';

    try {
        const response = await fetch('https://draingang-ffdedd58e800.herokuapp.com/chat', {  // Zmieniony URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot';
        botMessageDiv.textContent = data.response || 'No response.';
        chatBox.appendChild(botMessageDiv);

        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
    }
}
