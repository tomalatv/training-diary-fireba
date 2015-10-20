import {Component, View, bootstrap, Binding, Inject} from "angular2/angular2";
import {Joop, TrainingDiaryFireba} from './trainingfireba';
import {Firebase} from "firebase";
@Component ({
    selector: 'log-in'/*,
    bindings: [Joop, TrainingDiaryFireba]*/
})
@View ({
template:`
        <div class="center container row">
        <div>
        <span class="field-caption">user name</span>
        <input type="text" class="input-feed" #userid>
        </div>
        <div>
        <span class="field-caption">password</span>
        <input type="password" class="input-feed" #pwd>
        </div>
        <button (click)="logIn(userid.value, pwd.value)">Log In</button>
        <button (click)="logOut()">Log Out</button>
        <button (click)="isLogged()">Sign In</button>
        </div> 
        `
})
export class LogIn {    
    
    fbRef: Firebase;
    private joop: Joop;
    t: TrainingDiaryFireba;

    constructor( @Inject(Joop) joop, @Inject(TrainingDiaryFireba) tdf){
         console.log('ERRRSDFFf '+ joop.isLogged);
         this.fbRef = new Firebase('https://trainingdiary.firebaseio.com');
         // this.fbRef = fbRef;
         this.joop = joop;
         this.t = tdf;
    }

    logIn(userid: string, pwd: string) {
        console.log("sdlkfjlkdjfsdlkfj", userid, pwd);

        this.fbRef.authWithPassword({
            "email": userid,
            "password": pwd
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                // console.info( );
                Joop.prototype.loggedIn(true);
                TrainingDiaryFireba.prototype.change(true);
            }
        });
        // this.isLogged();
        /*function log() {
            console.info('LOOOOOG');
            joop.loggedIn(true);
            t.change(true); 
        }*/
    }

    logOut() {
        console.log("#### OUT -->>>!");
        this.fbRef.unauth();
        this.joop.loggedIn(false);
        this.t.change(false);
    }

    signIn() {
        alert("This projec is heavily under construction so new user are not yet allowed to register !!");
    }
    isLogged():boolean {
        this.fbRef.ref().getAuth() !== null ? console.log('trueeee') : console.log('faskjdfkj');
        // return this.fbRef.ref().getAuth() !== null ? true : false;
        if (this.fbRef.ref().getAuth() !== null) {
            this.joop.loggedIn(true);
            this.t.change(true);
            return true;
        } else {
            this.joop.loggedIn(false);
            this.t.change(false);
            return false;
        }

    }
    
}
bootstrap(LogIn, [Joop, TrainingDiaryFireba]);