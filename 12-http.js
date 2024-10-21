const http = require('http')

const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.end('welcome to my home page')
}
if(req.url === '/about'){
    res.end('This is about our company')
}
res.end(`
    <h1>Oops!</h1>
    <p>We can't find the content you are searching for</p>
    <a href="/"> back home </a>
    `)

})
server.listen(5000)