
const { GoogleGenerativeAI } = require("@google/generative-ai");
// Access your API key (see "Set up your API key" above)
const API_KEY = "AIzaSyDiUxm2IEQWKYOg_LUbTESUz7PrRCQN9FY";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function run(message) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = message

  const result = await model.generateContent(prompt);
  //return result.text; 
  const response = await result.response;
  const text = response.text();
  return (text);
}
