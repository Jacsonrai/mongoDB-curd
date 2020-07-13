const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    
    
    if(!err){
        console.log('mongoDB connection succeded.')

    }
    else{
        console.log('error while connecting:'+err)
    }
})
require('./employee.model')