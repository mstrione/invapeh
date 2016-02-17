//import {NOTIFICACIONES} from './mock-heroes';
import {NotificacionEventos} from './notificacion-eventos';
import {Injectable} from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class NotifService {
    constructor (private http: Http) {}
    
    private _notifUrl = 'http://localhost:9697/ws/noconformidades/findNotificacionEventos';
    
    getNotificaciones(evento: String, ccptId: String) {
        //return Promise.resolve(NOTIFICACIONES);
        let searchParams = new URLSearchParams();
        searchParams.set('appId', '_2JD0URVLD');
        searchParams.set('evento', evento);
        searchParams.set('ccptId', ccptId);
        return this.http.get(this._notifUrl, {search: searchParams})
                            .map(res => <NotificacionEventos[]> res.json())
                            .do(data => console.log(data)) 
                            .catch(this.handleError);
    }
    
    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
      }
}