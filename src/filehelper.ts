import { IServer } from "./interfaces";
import fs from 'fs'
class FileHelper{
      loadFile(filename: string) : Array<IServer>  {
        var data = fs.readFileSync(filename, 'utf8');
        let servers : Array<IServer> = JSON.parse(data);
        return servers;
    }    
      saveFile(filename: string, data: Array<IServer>){
       fs.writeFileSync(filename, JSON.stringify(data),  'utf8');
    }
}

export const fileHelper = new FileHelper()
