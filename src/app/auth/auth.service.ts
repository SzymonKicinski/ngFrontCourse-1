import { Response } from '@angular/http';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {

    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    this.router.navigate(['/']);
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
                    this.router.navigate(['/']);
                    console.log('Sigin Response');
                    console.log(response);
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

    logout() {
        this.router.navigate(['../signin']);
        firebase.auth().signOut();
        this.token = null;
    }


}
