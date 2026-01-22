const express = require('express')
require('dotenv').config()
const app = express()
const connectToDB = require('./database')
const PORTNO = process.env.PORT || 7000
const cors = require('cors')


app.use(cors())
// app.use(cors({
//     origin: "http://localhost:5173"
// }))
// app.use(cors({
//     origin: ["http://localhost:5173", "origin2",".....3"],
//     methods:['GET']
// }))
app.use(express.json())

connectToDB()
app.get('/', (req, res) => {
    res.send("hello User!")
})

app.use('/api/v3.2/auth', require('./router/auth.router'))
app.use('/api/v3.2/note', require('./router/note.router'))





app.post('/api/v3.2/contact', async (req, res) => {


    const { name, email, subject, message } = req.body;

    try {
        const data = await ContactModel.insertOne({ name, email, subject, message })

        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: "kishanchaurasiya607@gmail.com",
                pass: process.env.SECRETKEY
            }
        })

        let messInfo = {
            from: "kishanchaurasiya607@gmail.com",
            to: email,
            subject: "Thank you for Contact - kishan",
            text: `welcome ${name}!\n Thank you for Contact - MYSHOP`
  }

        transporter.sendMail(messInfo, (error, info) => {
            if (error) {
                return res.send({
                    message: "not send message",
                    success: false
                })
            }

            console.log(info)

            res.send({
                message: "send message successfully",
                user: data,
                success: true
            })

        })

    } catch (error) {
        res.send({
            message: "not send message",
            success: false
        })
    }

})






app.post("/buy-now", async (req, res) => {
  const user = req.body;

  // ChatGPT को भेजने वाला prompt
  const prompt = `
  New Order Details:
  Name: ${user.name}
  Email: ${user.email}
  Phone: ${user.phone}
  Address: ${user.address}
  Payment: ${user.payment}

  Confirm order professionally.
  `;

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.SECRETKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    }
  );

  const data = await response.json();

  res.json({
    message: "Order placed successfully",
    aiReply: data.choices[0].message.content,
  });
});















app.listen(PORTNO, () => {
    console.log(`Server is running on http://localhost:${PORTNO}`)
})




