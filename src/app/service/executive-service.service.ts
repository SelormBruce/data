import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ExecutiveServiceService {

  constructor(private fireStore: AngularFirestore, private storage: AngularFireStorage
  ) { }
  userdetialList() {
    return this.fireStore.collection('Members').snapshotChanges();
  }
  executivesList() {
    return this.fireStore.collection('Executives').snapshotChanges();
  }
}
