import express, { Express, Request, Response } from 'express';
import { fileHelper } from './filehelper';
import { netUtils } from './netutils';
import { IServerRequest } from "./interfaces";

const app: Express = express();
app.use(express.json()) 
const filename = 'server.json'

app.get('/', async(req: Request<IServerRequest>, res: Response) =>  {
    const server = await fileHelper.loadFile(filename)
    res.send(server)
})
app.post('/add', async (req: Request, res: Response) =>  {
   console.log(req.body)
    const server = await fileHelper.loadFile(filename)
    server.push(req.body)
    fileHelper.saveFile(filename, server)
    res.send(200)
})
app.get('/all', async (req: Request, res: Response) =>  {
    const server = await fileHelper.loadFile(filename)
    let response = server.map(item =>{
        return { 
            host: item.host,
            status:  netUtils.ping(item.host, item.port)}
     })
     res.send(response)
 })
 

app.listen(3000)