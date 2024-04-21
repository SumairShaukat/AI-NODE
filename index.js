import 'dotenv/config'
import OpenAI from 'openai' 

const AI =  new OpenAI();


const answers = AI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    message: [
        {
            role: 'system',
            content: 'You are an AI assistance, answer any question to the best of you abiliy'
        },
        {
            role: 'user',
            content: 'Hi! My name is  sumair'
        }
    ]
})
console.log(answers);

//how to get propts for chatgpt api