import {Component, View, bootstrap, NgIf, NgFor, Binding, Injectable, Inject, EventEmitter, ChangeDetectionStrategy} from "angular2/angular2";
// import {Injector, } from "angular2/web_worker/worker";
// import {LogIn} from "./components/login";

export class Joop {
    exercises: Array<string>;
    // fbRef: Firebase;
    // log: LogIn;
    isLogged: boolean = false;
    loggedIn(val: boolean): void {
        console.log('JOOOP ' + val);
        this.isLogged = val;
    }

}

@Component({
    selector: 'training-diary-fireba',
    properties: ['isLogged'],
    bindings: [Joop]
})
@View({
    template: `
        <div class="container center row">
      <button (click)="change2()"> vaihda </button>
      </div>
        <div [hidden]="isLogged" class="center container row">
        <div>
        <span class="field-caption">title</span>
        <input type="text" class="input-feed" #title>
        </div>
           <div>
            <span class="field-caption">description</span>
        <input type="text" class="input-feed" #descr>
        </div>
           <div>
            <span class="field-caption">Notes</span>
        <input type="text" class="input-feed" #notes>
        </div>
           <div>
            <span class="field-caption">tags</span>
        <input type="text" class="input-feed" #tag>
        </div>
            <button (click)="addHarjoite(title.value, notes.value, descr.value, tag.value)">Lisää harjoite</button>
        <div id="harjoitteet">
           <ul>
            <li *ng-for="#exercise of exercises">
            {{ exercise }}
            </li>
            </ul>

        </div>
        <textarea id="ta" style="height:200px; width:100%; margin-top:12px;"> </textarea>
        <button (click)="getData()"> hae data</button>
        </div>
    `,
    directives: [NgFor, NgIf]

})
export class TrainingDiaryFireba {

    exercises: Array<string>;
    // logged: EventEmitter;
    // fbRef: Firebase;
    // log: LogIn;
    isLogged: boolean = false;
    // @Output() open: EventEmitter = new EventEmitter();
    // @Output() close: EventEmitter = new EventEmitter();
    //authD: String<String>;
    // this.fbRef = new Firebase('https://trainingdiary.firebaseio.com');         
    constructor( @Inject(Joop) joop) {
        this.exercises = ["Harjoitus1", "Harjoitus2", "Harjoitus3", "Harjoitus4"];
        console.log('nuuuu ' + joop.isLogged);
        // this.logged = new EventEmitter();
        // console.log('nuuuu ' + log.isLogged());
        // this.log = log;
        // this.isLogged = this.log.isLogged();
        // this.fbRef = LogIn.logged();
        this.isLogged = joop.isLogged;
        // fbRef = 
        //this.fbRef = FireBS;

        /*function add(item) {
            console.log(this.exercises, item);
            //this.exercises.push(item);
        }*/
        // console.log(ex);
    }

    change(val: boolean): void {
        console.log('## CHANGE ##: ' + val);
        this.isLogged = val;
        this.change2();
        /*if(this.isLogged) {
            this.logged.next('in');
        } else {
            this.logged.next('out');
        }*/

    }
    change2(): void {
        console.log('*********->>>');
        this.isLogged = !this.isLogged;
    }
    /*var ex: string[];
        fbRef.ref().child("exercises").on("child_added", function(snapshot) {
        //console.log("******", snapshot.key());
        console.log("******", snapshot.val());
        console.log("******", snapshot.val().title);
        //console.log("******", this.exercises);
        // add(snapshot.val().title);
        ex.push(snapshot.val().title);
    });*/
        
    //this.fbRef.child("exercises").on("child_removed", function(snapshot){
    //     console.log("* DEL * ****", snapshot.key());
    /*d = '';
    d += JSON.stringify(snapshot.val()) +'\n\n';
    this.gotData(d);*/
    //    });

    addHarjoite(title: string, notes: string, descr: string, tag: string): void {
        // console.log('**** ' + this.log.isLogged());
        console.log(title, notes, descr, tag);
        /*    if (authD !== null){
            var data = JSON.parse('{ "title": "'+ti+'", "notes": "'+no+'", "description": "'+de+'" ,"'+tag+'": "true", "createdByUser": "'+authD.uid+'" }');
            console.log('####', data);
            var exerc = new Firebase('https://trainingdiary.firebaseio.com/exercises');
            exerc.push(data);
            } else {
                alert("You must log in first");
            }*/
    }

    /*
        delHarjoite(hId){
            console.log(hId);
            this.fbRef.child("exercises").child(hId).remove();
        }
    */

}

bootstrap(TrainingDiaryFireba, [Joop]);