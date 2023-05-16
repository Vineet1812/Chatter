const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const path = require('path')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
      const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key":"1fcc9a15-4970-4d0d-897a-65709bf111ce"}}
      )
      return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }

});

app.use(express.static (path.join(__dirname, "./frontend/dist")));
app.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, "./frontend/dist/index.html"));

})

  app.listen(process.env.PORT || 3001, ()=> console.log("listening"));
