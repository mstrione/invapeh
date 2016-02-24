System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var NotifService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            NotifService = (function () {
                function NotifService(http) {
                    this.http = http;
                    this._notifUrl = 'http://localhost:9697/ws/noconformidades/findNotificacionEventos';
                    this._addUrl = 'http://localhost:9697/ws/noconformidades/addNotificacionEventos';
                }
                NotifService.prototype.getNotificaciones = function (evento, ccptId) {
                    //return Promise.resolve(NOTIFICACIONES);
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('appId', '_2JD0URVLD');
                    searchParams.set('evento', evento);
                    searchParams.set('ccptId', ccptId);
                    return this.http.get(this._notifUrl, { search: searchParams })
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                NotifService.prototype.addNotif = function (evento, ccptId, personaId) {
                    var appId = '_2JD0URVLD';
                    var body = JSON.stringify({ appId: appId, ccptId: ccptId, evento: evento, personaId: personaId });
                    /*ne: NotificacionEventos;
                    ne.appId = appId;
                    ne.ccptId = ccptId;
                    ne.evento = evento;
                    ne.personaId = personaId;*/
                    /* body = JSON.stringify({ ne });*/
                    var creds = "?appId=" + appId + "&evento=" + evento + "&ccptId=" + ccptId + "&personaId=" + personaId;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'a8234': 'SSZNUR    ' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    //return this.http.post(this._addUrl+creds, body, options)
                    return this.http.post(this._addUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                NotifService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                NotifService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NotifService);
                return NotifService;
            })();
            exports_1("NotifService", NotifService);
        }
    }
});
//# sourceMappingURL=notif.service.js.map