import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'app',
    template: '<div>Hola Angular 2!</div>'
})
class App{}

bootstrap(App);