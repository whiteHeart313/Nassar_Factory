import express, { Request, Response, NextFunction } from 'express';

const app = express()
const port = process.env.PPORT || 8080

app.use(express.json());
app.use( (req: Request, res: Response, next: NextFunction)=>{
    console.log(`this is the request comming :  ${JSON.stringify(req.body)}`)
    next()
} ) 

app.get('/' , (req : Request , res:Response ) => {
    res.status(200).send('Hello World!')
})
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

app.listen(port , ()=> {
    // callback fun 
    console.log(`server is listening on http://localhost:${port} ✈️` )
})