    import {Component, OnInit} from 'angular2/core';
    import {NotificacionEventos} from './notificacion-eventos';
    import {NotifDetailComponent} from './notif-detail.component';
    import {NotifService} from './notif.service';
    import {HTTP_PROVIDERS} from 'angular2/http';
    
    @Component({
      selector: 'my-app',
      template:`
        <h1>{{title}}</h1>
        <h2>Mi angular mod</h2>
        <div class="form-group">
          <label for="power">Eventos:</label>
          <select class="form-control" required
            [(ngModel)]="evento"
            (ngModelChange)="getNotificaciones()" >
            <option *ngFor="#p of eventos" [value]="p">{{p}}</option>
          </select>
        </div>

        <table class="table table-hover">
            <thead> 
                <tr> 
                    <th>Id</th> 
                    <th>Ccpt</th> 
                    <th>Evento</th> 
                    <th>User</th> 
                </tr> 
            </thead>
            <tbody>
                <tr *ngFor="#notif of notificaciones"
                    [class.selected]="notif === selectedNotif"
                    (click)="onSelect(notif)">
                    <th scope="row">{{notif.id}}</th>
                    <td>{{notif.ccptId}}</td>
                    <td>{{notif.evento}}</td>
                    <td>{{notif.personaId}}</td>
                </tr>
            </tbody>
        </table>
        <my-notificacion-detail [notificacion]="selectedNotif"></my-notificacion-detail>
        <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
      `,
      styles:[`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
      `],
      directives: [NotifDetailComponent],
      providers: [HTTP_PROVIDERS, NotifService]
    })
    export class AppComponent implements OnInit {
      public title = 'Notificaciones de Eventos de NC';
      public notificaciones: NotificacionEventos[];
      public errorMessage: string;
      public selectedNotif: NotificacionEventos;
      public evento: string;
      public ccptId: string;
      public eventos = ['', 'GENERACION', 'TRATAMIENTO', 'QA', 'JEFE', 'QA_CIERRE', 'CIERRE'];
      constructor(private _notifService: NotifService) { 
          this.evento = '';
          this.ccptId = '';
      }
      getNotificaciones() {
        this._notifService.getNotificaciones(this.evento, this.ccptId).subscribe(notificaciones => this.notificaciones = notificaciones, error =>  this.errorMessage = <any>error);
      }
      ngOnInit() {
        this.getNotificaciones();
      }
      onSelect(notif: NotificacionEventos) { this.selectedNotif = notif; }
    }