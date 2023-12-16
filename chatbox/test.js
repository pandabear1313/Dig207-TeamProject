
const express = require('express');
const openai = require('openai'); 

const app = express();


const openaiAPI = new openai.OpenAI('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'); 


app.post('/ask-gpt', async (req, res) => {
    const userInput = req.body.message;

  
    const gptResponse = await openaiAPI.complete({
        engine: 'text-davinci-003', 
        prompt: userInput,
        max_tokens: 150 
    });

    
    res.json({ reply: gptResponse.choices[0].text.trim() });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
