import { openai } from "./openai";
import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//keep the history and send latest user message to openAI
const newMessage =  async (history, message) => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        message: [...history, message]

    })
    return chatCompletion.choices[0].message
}
//formats the user message in required structure for openAi
const formatMessage = (userInput) => ({role: 'user', content: userInput})