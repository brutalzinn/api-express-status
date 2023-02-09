import { IServer } from "./interfaces";

var net = require('net');
 ///TODO: FIX TYPE
class NetUtils{
      private host: string;
      private port: number;
      constructor(host: string, port: number){
        this.host = host
        this.port = port
      }
      ping() : IServer {
        var sock = new net.Socket();
        sock.setTimeout(2500);
        sock.on('connect', function() {
            sock.destroy();
            return {host, port, status:'online'}
        }).on('error', function(e: any) {
            return {host, port, status:'offline'}
        }).on('timeout', function(e: any) {
            return {host, port, status:' is timeout'}
        }).connect(host, port);
    }
}
export const netUtils = new NetUtils()
