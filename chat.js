import { openai } from "./openai.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//keep the history and send latest user message to openAI
const newMessage = async (history, message) => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    message: [...history, message],
  });
  return chatCompletion.choices[0].message;
};
//formats the user message in required structure for openAi
const formatMessage = (userInput) => ({ role: "user", content: userInput });

const chat = () => {
  const history = [
    {
      role: "system",
      content:
        "Hey! you and an AI assistant answer the question according to you understanding!!",
    },
  ];

  const start = () => {
    rl.question("You: ", async (userInput) => {
      if (userInput.toLowerCase() === "exit") {
        rl.close();
        return;
      }

      const userMessage = formatMessage(userInput);
      const response = newMessage(history, userMessage);
      history.push(userMessage, response);

      console.log(`\n\n\ AI: ${response.content}\n\n `);
    });
  };

  start();
};
console.log("Chatbot initialize!! Type 'exit' to end the chat .");
chat();
