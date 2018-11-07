// const axios = require("axios");
// const router = require("express").Router();

// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query }) 
//     .then(({ data: { results } }) => {
//       console.log("http://www.recipepuppy.com/api/", { params: req.query })
//       console.log("---------" + {params: req.query}.params.q + "----------");
//       console.log(results);
//       console.log("------")
//       res.json(results)
//     })
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;



const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=42a734f8687844acbb8acd3a72dfa392&q=" + {params: req.query}.params.q )
    .then(
      ({ data: { response } }) => {
        // const results = res.data.response.docs;
        console.log("----------------------------");
        console.log(response);
        console.log("----------------------------");
        res.json(response);
    })
    .catch(err => console.log(err));
    // res.status(422).json(err)
});

module.exports = router;


// https://static01.nyt.com/images/2018/07/04/opinion/sunday/04johnston/merlin_139573884_570a430b-b978-4d5b-803b-16eaf23d34d2-superJumbo.jpg?quality=90&auto=webp


// const axios = require("axios");
// const router = require("express").Router();

// router.get("/recipes", (req, res) => {
//   axios
//     .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=42a734f8687844acbb8acd3a72dfa392&fl=headline&q=" + {params: req.query}.params.q )
//     .then(
//       res => {
//         const results = res.data.response.docs
//         console.log("----------------------------");
//         console.log(results);
//         console.log("----------------------------");
//         // res.json(results)
//         return res;
//     })
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;
