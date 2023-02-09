import { Request, Response, NextFunction } from 'express'
export interface IServer {
    host: string;
    port: number;
    online: boolean;
}
export interface IServerRequest extends Request {
   host: string;
   port:number;
}