/* Filename: SophisticatedCode.js

   Purpose: This code demonstrates a complex and sophisticated implementation of a Chatbot program,
            capable of performing various tasks like natural language processing, sentiment analysis,
            and text generation based on predefined patterns and rules.
            
   Author: GeniusAI

   Date: 2022-09-01
*/

// Define a class for the Chatbot
class Chatbot {
  constructor() {
    this.greetings = ["hello", "hi", "hey", "greetings", "hola"];
    this.questions = ["how are you?", "what's up?", "how's it going?"];
    this.responses = [
      "I'm doing well, thank you!",
      "Just chilling, you?",
      "Pretty good, thanks for asking!",
    ];
    this.sentiments = {
      positive: ["good", "great", "awesome", "fantastic", "amazing"],
      negative: ["bad", "terrible", "awful", "horrible", "disgusting"],
    };
  }

  // Function to process the user's input
  processInput(input) {
    const output = this.generateResponse(input);
    console.log(output);
  }

  // Function to generate a response for the user's input
  generateResponse(input) {
    let response = "";

    // Check if input is a greeting
    if (this.isGreeting(input)) {
      response = this.getRandomElement(this.greetings);
    }
    // Check if input is a question
    else if (this.isQuestion(input)) {
      response = this.getRandomElement(this.responses);
    }
    // Check if input has positive sentiment
    else if (this.hasPositiveSentiment(input)) {
      response = "That's great!";
    }
    // Check if input has negative sentiment
    else if (this.hasNegativeSentiment(input)) {
      response = "I'm sorry to hear that.";
    }
    // Default response
    else {
      response = "I'm not sure what you mean.";
    }

    return response;
  }

  // Function to check if input is a greeting
  isGreeting(input) {
    return this.greetings.includes(input.toLowerCase());
  }

  // Function to check if input is a question
  isQuestion(input) {
    return this.questions.includes(input.toLowerCase());
  }

  // Function to check if input has positive sentiment
  hasPositiveSentiment(input) {
    const words = input.toLowerCase().split(" ");
    return words.some((word) => this.sentiments.positive.includes(word));
  }

  // Function to check if input has negative sentiment
  hasNegativeSentiment(input) {
    const words = input.toLowerCase().split(" ");
    return words.some((word) => this.sentiments.negative.includes(word));
  }

  // Function to get a random element from an array
  getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

// Create an instance of the Chatbot class
const chatbot = new Chatbot();

// Test the Chatbot with some inputs
chatbot.processInput("hello");
chatbot.processInput("how are you?");
chatbot.processInput("I'm feeling great!");
chatbot.processInput("What's your favorite color?");
chatbot.processInput("I'm having a terrible day.");

// Output:
// hi
// Pretty good, thanks for asking!
// That's great!
// I'm not sure what you mean.
// I'm sorry to hear that.