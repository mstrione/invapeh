System.register(['angular2/core', './notif-detail.component', './notif.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, notif_detail_component_1, notif_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notif_detail_component_1_1) {
                notif_detail_component_1 = notif_detail_component_1_1;
            },
            function (notif_service_1_1) {
                notif_service_1 = notif_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_notifService) {
                    this._notifService = _notifService;
                    this.title = 'Notificaciones de Eventos de NC';
                    this.eventos = ['', 'GENERACION', 'TRATAMIENTO', 'QA', 'JEFE', 'QA_CIERRE', 'CIERRE'];
                    this.evento = '';
                    this.ccptId = '';
                }
                AppComponent.prototype.getNotificaciones = function () {
                    var _this = this;
                    this._notifService.getNotificaciones(this.evento, this.ccptId).subscribe(function (notificaciones) { return _this.notificaciones = notificaciones; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.addNotif = function () {
                    var _this = this;
                    this._notifService.addNotif('QA', '1122', '1122').subscribe(function (notificaciones) { return _this.notificaciones = notificaciones; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getNotificaciones();
                    this.addNotif();
                };
                AppComponent.prototype.onSelect = function (notif) { this.selectedNotif = notif; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n        <h2>Mi angular mod</h2>\n        <div class=\"form-group\">\n          <label for=\"power\">Eventos:</label>\n          <select class=\"form-control\" required\n            [(ngModel)]=\"evento\"\n            (ngModelChange)=\"getNotificaciones()\" >\n            <option *ngFor=\"#p of eventos\" [value]=\"p\">{{p}}</option>\n          </select>\n        </div>\n\n        <table class=\"table table-hover\">\n            <thead> \n                <tr> \n                    <th>Id</th> \n                    <th>Ccpt</th> \n                    <th>Evento</th> \n                    <th>User</th> \n                </tr> \n            </thead>\n            <tbody>\n                <tr *ngFor=\"#notif of notificaciones\"\n                    [class.selected]=\"notif === selectedNotif\"\n                    (click)=\"onSelect(notif)\">\n                    <th scope=\"row\">{{notif.id}}</th>\n                    <td>{{notif.ccptId}}</td>\n                    <td>{{notif.evento}}</td>\n                    <td>{{notif.personaId}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <my-notificacion-detail [notificacion]=\"selectedNotif\"></my-notificacion-detail>\n        <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      ",
                        styles: ["\n        .selected {\n          background-color: #CFD8DC !important;\n          color: white;\n        }\n      "],
                        directives: [notif_detail_component_1.NotifDetailComponent],
                        providers: [http_1.HTTP_PROVIDERS, notif_service_1.NotifService]
                    }), 
                    __metadata('design:paramtypes', [notif_service_1.NotifService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map