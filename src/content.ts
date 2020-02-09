/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs, { write } from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        var age: number = 32; // number variable
        var name: string = "John"; // string variable
        var isUpdated: boolean = true; // Boolean variable
        let fruits: Array<string>; //array
        fruits = ["Banana", "Strawberry", "Watermelon"];
        var person: [number, string, boolean] = [1, "Robert", true]; //tuple
        enum Points {
            George = 5,
            John = 10,
            Robert = 15,
            Jack = 20
        }
        let password: string | number; //union
        password = 123;
        password = "ABC";
        let data: any = "Hello World!";
        data = 25;
        function writeNumbers(): void {
            res.write("123456");
        }
        let number: void = writeNumbers();

        let próba: string = "Alma";
        const próba2: string = "Alma";

        res.write(`${age} ${name} ${isUpdated}`);
        res.write(`${fruits} ${person}`);
        res.write(`${Points.George} ${Points.Jack} ${Points.John} ${Points.Robert}`);
        res.write(`${password} ${data}`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
