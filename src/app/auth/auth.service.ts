import { Response } from '@angular/http';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;


    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => {
                                console.log('Response - TOKEN');
                                console.log(token);
                                this.token = token;
                            }
                        );
                }
            )
            .catch(
                (error) => {
                    console.log('Error');
                    console.log(error);
                }
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    console.log('Sigin Response');
                    console.log(response);
                }
            )
            .catch(
                (error) => {
                    console.log('Error "Signin auth"');
                    console.log(error);
                }
            );

    }



    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    console.log('GETTOKEN -Response - TOKEN');
                    console.log(token);
                    this.token = token;
                }
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }


}
