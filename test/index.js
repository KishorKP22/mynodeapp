const express = require('express');

const app = express();


// Respond with "Hello World" when a GET request is made to the root "/"

app.get('/', (req, res) => {

<<<<<<< HEAD
<<<<<<< HEAD
  res.send('Welcome too my Nodejs App Deploy');
=======
  res.send('Hello from Nodejs App');
>>>>>>> 2e1825f (Commit)
=======
  res.send('Welcome to our Nodejs App');
=======
  res.send('Welcome from Nodejs App');
>>>>>>> f54e83a (buildcommit)
>>>>>>> 6083ca8 (commit1)

});


// Start server on port 3000 or custom port via environment variable

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server is running on http://localhost:${PORT}`);

});


module.exports = app;
