const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("authenticated", () => {
  console.log("Autenticação realizada com sucesso!");
});

client.on("message", async (message) => {
  console.log("Mensagem recebida:", message.body);

  if (message.body.toLowerCase() === "!adriel") {
    console.log("Enviando resposta...");
    await message.reply("teste Adriel!");
  } else if (message.body.toLowerCase() === "!marcos") {
    console.log("Enviando resposta...");
    await message.reply("teste marcos!");
  } else if (message.body.toLowerCase() === "!lucas") {
    console.log("Enviando resposta...");
    await message.reply("teste lucas!");
  } else if (message.body.toLowerCase() === "!sarah") {
    console.log("Enviando resposta...");
    await message.reply("teste sarah!");
  }
});

client.initialize();
