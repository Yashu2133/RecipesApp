const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.json({ message:'Hello world'})
});
app.listen(3001,()=>{
    console.log('server is running')
});
