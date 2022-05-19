const http = require("http");
axios = require("axios");
http.createServer((req, res)=>{
    res.write(users.join(", "));
    res.write("\n\n"+email.join(", "));
    res.end()
}).listen(8000);

(async function getNames(){
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name)
        email = data.map(email=>email.email)
        
    } catch(error){
        console.log(error)
    }
})()

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, {useNewUrlParser: true, 
useUnifiedTopology: true })
        .then((result)=>console.log('connected to db'))
        .catch((err)=>console.log(err));

app.listen(port, function(err){
    console.log("Listening on port:" +port)
});

mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('error', (err)=>{
    console.log('Mongodb Error: ', err);
    process.exit();
});
mongoose.connection.on('connected', ()=>{
    console.log('Mongodb is successfully connected');
});

app.listen(port, function(err){
    console.log("Listening on port: " + port)
});