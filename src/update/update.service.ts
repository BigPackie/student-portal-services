import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class UpdateService {

    versionInfoFilePath: string;

    constructor(){
        this.versionInfoFilePath = path.resolve(__dirname, '../assets',"icit-app-version.json");
    }

    async getAppVersion(): Promise<any> {
        return new Promise(function(resolve, reject) {
            fs.readFile(this.versionInfoFilePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err); 
                } else {
                    const versionInfo = JSON.parse(data);
                    resolve(versionInfo);
                }
            });
        }.bind(this));
    }

}
