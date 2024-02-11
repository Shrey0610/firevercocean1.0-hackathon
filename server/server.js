// const express = require('express');
// const readline = require('readline');
// const OpenAI = require('openai');
// var cors= require('cors');
// const app = express();
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// app.use(cors());

// const openai = new OpenAI({
//   apiKey: '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',  
// });

// const messages = [];

// async function main(input) {
//   messages.push({ role: "user", content: 'what is the color of water' });
//   const completions = await openai.chat.completions.create({
//     messages: messages,
//     model: 'gpt-3.5-turbo',
//   });
//   return completions.choices[0].message.content;
// }

// app.use(express.json());

// app.get('/chat', async (req, res) => {
//   try {
//     const input = req.body.input;
//     const response = await main(input);
//     res.json({ response });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// const server = app.listen(9005, () => {
//   console.log('Express server is listening on port 9005');
// });

// rl.on('line', async (input) => {
//   try {
//     const response = await main(input);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// });

// rl.on('close', () => {
//   console.log('Readline interface closed');
//   server.close();
// });

const express = require('express');
const OpenAI = require('openai');
const app = express();
var cors= require('cors');
const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY',  
});

app.use(express.json());
app.use(cors());
app.post('/chat', async (req, res) => {
  try {
    const input = req.body.prompt;
    const response = await main(input);
    res.json({ output: response });
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function main(input) {
  const messages = [{ role: "user", content: input }];
  const completions = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
  });
  return completions.choices[0].message.content;
}

const server = app.listen(9005, () => {
  console.log('Express server is listening on port 9005');
});
