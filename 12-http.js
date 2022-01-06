const htttp = require('http');

const server = htttp.createServer((req,res) => {
  if(req.url === '/'){
  res.end('Welcome to our homepage!')
}

  if(req.url === '/about'){
      res.end('about page')
}
  res.end(`
  <h1>Something went wrong!</h1>
  <a href='/'>go back</a>`)
})

server.listen(5000)
