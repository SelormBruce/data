import { Component, OnInit } from '@angular/core';
import { Observable } from 'data/node_modules/rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ExecutiveServiceService } from '../service/executive-service.service';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-c-ececutives',
  templateUrl: './c-ececutives.component.html',
  styleUrls: ['./c-ececutives.component.css']
})
export class CEcecutivesComponent implements OnInit {

  CurrenDate: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  CurrentTime: string;
  profileUrl: Observable<string | null>;
  constructor(public fireStore: AngularFirestore,public storage: AngularFireStorage,private exservice:ExecutiveServiceService) {

    const ref = this.storage.ref('UserImages/man.png');
    this.profileUrl = ref.getDownloadURL();
    this.CurrenDate = new Date().toISOString().split('T')[0];

    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }, 1);

  }
 
 
  ngOnInit() {
  



  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = Date.now() + "_" + file[0];
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe();

  }

  AddNewUser(formData: NgForm) {
    let data = formData.value;
    this.fireStore.collection('ConstituencyExecutives').add(data);
   alert('data saved');
    formData.resetForm();
}



  onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onlyText(evt: any) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 32 && (charCode < 48 || charCode > 57) &&
      (charCode > 90 && charCode < 157) || (charCode == 32)) {
      return true;

    }
    return false;
  }
}
