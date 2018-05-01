import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { WelcomeContent } from './welcome';

@Injectable()
export class WelcomeService {
   private _welcomeurl = 'http://tva.local/tva-services/welcome?_format=json';
   constructor(private _http: Http){
     this.getWelcome();
   }

   getWelcome(): Observable<WelcomeContent[]> {
      return this._http.get(this._welcomeurl)
      .map((response: Response) => <WelcomeContent[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}