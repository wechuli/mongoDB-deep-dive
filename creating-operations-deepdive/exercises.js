use companies

db.companyProfile.insertMany([
    {_id:1,name:"Microsoft",industry:"Software"},
    {_id:2,name:"@iLabAfrica",industry:"Research"},
    {_id:3,name:"WechuliCorp",industry:"Software and AI"},
    {_id:4,name:"Andela",industry:"Software"}
])

db.companyProfile.insertMany([
    {_id:5,name:"Google",industry:"Software"},
    {_id:2,name:"@iLabAfrica",industry:"Research"},
    {_id:7,name:"WechuliCorp2",industry:"Software and AI"},
    {_id:8,name:"Andela2",industry:"Software"}
])


db.companyProfile.insertMany([
    {_id:5,name:"Google",industry:"Software"},
    {_id:2,name:"@iLabAfrica",industry:"Research"},
    {_id:7,name:"WechuliCorp2",industry:"Software and AI"},
    {_id:8,name:"Andela2",industry:"Software"}
],{ordered:false})

db.companyProfile.insertOne({
    _id:9,name:"WaweshCyber",industry:"IT"
},{writeConcern:{w:1,j:true,wtimeout:200}} )