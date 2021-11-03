const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

const ctrl = require('./controller');
const { getHouses, deleteHouse, createHouse, updateHouse} = ctrl
 
app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
 
const port = 4004;
app.listen(port, () => console.log(`Server is running on port ${port}`))