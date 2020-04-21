const {createServer} = require('http');
const port = process.env.PORT||3000;

const requestHandler = function (request, response)  {
    const url = new URL(request.url,`http://${request.headers.host}`);
  const name = url.searchParams.get(`name`) || 'world';
  response.end(`Hello ${name} Node.js Server!`);
}

const server = createServer(requestHandler);

server.listen(port,function (err)  {
  if (err) {
 console.log('something bad happened', err);
  }
else {
    console.log(`server is listening on ${port}`);
}
  
});