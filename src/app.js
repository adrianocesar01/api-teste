const express = require ('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
    console.log("Servidor executando na porta: ",PORT)
})

app.get("/status", (request, response) =>{
    const status = {
        Status:"Running"
    }
    response.send(status)
})

app.post("/signup", (request, response) =>{

})

app.post("/login", (request, response)=>{
    const login = {
        "Nome":"nome",
        "Senha":"senha"
    }
    response.send(login)
})