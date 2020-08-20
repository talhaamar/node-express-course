const express = require('express');
const app = express();

const mockUserData=[
    {name : 'Talha'},
    {name: 'Amar'}
]

app.get('/users', function(req,res){
    res.json({
        success : true,
        message: 'succesfully got users.',
        users: mockUserData,
        
    })
})

app.listen(8000, function(){
    console.log("server is running")
})