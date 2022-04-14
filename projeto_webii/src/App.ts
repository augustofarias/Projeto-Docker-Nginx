import express from 'express';
const app = express();

const PORT = 5000;

/**
   Todo o código foi feito pela própria dupla.
*/

app.get('/', (req, res) => {
    res.send(`<div><h4>Utilize os seguintes links (ou clique):</h4><p><a href="http://app">http://app</a><br><a href="http://calc">http://calc</a><br><a href="http://soma"> http://soma </a><br><a href="http://sub"> http://sub</a></p></div>`)
})

/** <-------------------------> */

app.get('/app', (req, res) => {
    function ping() {
        res.send('pong')
    }
    ping();
});

/** <-------------------------> */
app.get('/calc', (req, res) => {
    res.status(200).json({
        res: 'calc está funcionando! Versão 1.0'
    })
});

/** <-------------------------> */
app.get('/soma', (req, res) => {

    /**
        Tipagem alternativa.

        var op1: number = parseInt(`${req.query.op1}`)
        var op2: number = parseInt(`${req.query.op2}`)
    */

    var op1: string = `${req.query.op1}`; //Obtém o valor de op1, requisitado através do http.
    var op2: string = `${req.query.op2}`; //Obtém o valor de op2, requisitado através do http.

    function soma(op1: string, op2: string) {
        var total: number = +op1 + +op2; //O operador +, na frente da variável, converte o valor dessa variável para inteiro.

        res.json({
            op1, //Retorna o valor inicial de op1.
            op2, //Retorna o valor inicial de op2.
            total //Retorna o resultado da soma entre ambas variáveis.
        })
    }

    soma(op1, op2)
});

app.get('/sub', (req, res) => {
    var op1: string = `${req.query.op1}`;
    var op2: string = `${req.query.op2}`;

    function sub(op1: string, op2: string) {
        var total: number = +op1 - +op2; //O operador +, na frente da variável, converte o valor dessa variável para inteiro.

        res.json({
            op1, //Retorna o valor inicial de op1.
            op2, //Retorna o valor inicial de op2.
            total //Retorna o resultado da soma entre ambas variáveis.
        })
    }

    sub(op1, op2)
});

/** <-------------------------> */
app.listen(PORT, () => console.log(`O Servidor está rodando na porta ${PORT}`));