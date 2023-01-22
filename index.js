const express = require("express");
const app = express();
const port = 3000;

app.get("/:url", (req, res, next) => {
   var data = JSON.stringify({
     url: req.params.url,
     proxyCountry: "us",
     followRedirect: true,
   });

   var config = {
     method: "post",
     headers: {
       "x-api-key": "7d51b2c5-f783-46e2-9aea-d8370b3d3f32",
       "Content-Type": "application/json;charset=utf-8",
     },
     body: data,
   };

   async function check(){
    const URL = "https://api.geekflare.com/brokenlink";
    const Res = fetch(URL,config);
    const response = await Res;
    const json = await response.json();
    console.log(json);
    res.json(json );
    // await fetch(URL,config)
    //  .then(function (response) {
    //    console.log(JSON.stringify(response.data));
    //    res.json(JSON.stringify(response.data));
    //  })
    //  .catch(function (error) {
    //    console.log(error);
    //    res.json(error)
    //  });
    }
    check();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
