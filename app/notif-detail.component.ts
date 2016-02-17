import {Component} from 'angular2/core';
import {NotificacionEventos} from './notificacion-eventos';


@Component({
  selector: 'my-notificacion-detail',
  template: `
  <div *ngIf="notificacion">
    <h2>{{notificacion.idPersona}} details!</h2>
    <div><label>id: </label>{{notificacion.id}}</div>
    <div>
      <label>idPersona: </label>
      <input [(ngModel)]="notificacion.personaId" placeholder="personaId"/>
    </div>
  </div>
`,
  inputs: ['notificacion']
})
export class NotifDetailComponent {
    public notificacion: NotificacionEventos;
}