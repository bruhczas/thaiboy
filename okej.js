async function sendMessage() {
    const userMessage = document.getElementById('user-message').value;

    if (!userMessage.trim()) return;

    // Add user message to chat
    const chatBox = document.getElementById('chat-box');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);

    // Clear input
    document.getElementById('user-message').value = '';

    // Send message to backend
    try {
        const response = await fetch('/chat', {
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