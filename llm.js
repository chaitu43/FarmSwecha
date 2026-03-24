const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = ""; #get it from groq.com

const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

async function checkGroqStatus() {
    // Assuming Groq is online to avoid unnecessary authenticated API calls.
    statusDot.classList.add('online');
    statusText.textContent = "Groq AI Online";
    statusDot.style.backgroundColor = ''; // Reset any previous error styling
    return true;
}

function appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role}`;
    if (role === 'ai') {
        msgDiv.innerHTML = marked.parse(text);
    } else {
        msgDiv.textContent = text;
    }
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msgDiv;
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    userInput.value = '';
    userInput.style.height = 'auto';
    appendMessage('user', text);

    const aiMsgDiv = appendMessage('ai', '...');
    sendBtn.disabled = true;

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful farming assistant for Indian farmers. Provide advice on crops, soil, pest control, and government schemes in the Indian context. Use markdown for formatting (bold, lists, etc.) to make responses readable.'
                    },
                    {
                        role: 'user',
                        content: text
                    }
                ],
                stream: true
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || "Failed to connect to Groq");
        }

        const reader = response.body.getReader();
        let aiText = '';
        aiMsgDiv.innerHTML = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = new TextDecoder().decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') continue;
                    try {
                        const json = JSON.parse(data);
                        const content = json.choices[0].delta.content || '';
                        aiText += content;
                        aiMsgDiv.innerHTML = marked.parse(aiText);
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    } catch (e) {
                        console.error("Error parsing JSON chunk", e);
                    }
                }
            }
        }
    } catch (error) {
        aiMsgDiv.textContent = `Error connecting to Groq API: ${error.message}`;
        console.error(error);
    } finally {
        sendBtn.disabled = false;
    }
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Auto-expand textarea
userInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Initial Status Check
checkGroqStatus();

