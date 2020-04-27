import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'server funcionando'});
})

app.listen(3333, () => {
    console.log('back-end started.');
});