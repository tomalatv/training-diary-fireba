///<reference path="./typings/tsd.d.ts" />
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, bootstrap, NgIf, NgFor} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, routerBindings, Route, Router, Location} from 'angular2/router';
import {TrainingDiaryFireba} from './ts/components/trainingfireba';
import {LogIn} from './ts/components/login';

declare var System: any;

@Component({
  selector: 'diary'
})
@View({
  templateUrl: './app.html',  
  directives: [LogIn, TrainingDiaryFireba, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/', component: LogIn, as: 'login' }),
    new Route({ path: '/training', component: TrainingDiaryFireba, as: 'trainings' })
])
class DiaryApp { 
    router: Router;
    location: Location
    
    constructor(router: Router, location: Location) {
        console.log('DiaryApp');
        this.router = router;
        this.location = location;
        this.location.go('/training');
    }

    getLinkStyle(path) {
        console.log('Path: ' + path);
        return this.location.path() === path;
    }    
    
}
 
bootstrap(DiaryApp, [HTTP_PROVIDERS]);