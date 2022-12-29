import { app } from "../../app";
import 'dotenv/config';

const port = process.env.PORT;
app.listen(port, (): void=>{
    console.log(`App is listening at http://localhost:${port}`)
})
 