import {app} from './index.js';

const PORT = process.env.PORT || 6040;

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})