import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { RestService } from 'src/app/services/rest.service';
import { SystemModel } from 'src/app/models/system.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-precio',
  templateUrl: './navbar-precio.component.html',
  styleUrls: ['./navbar-precio.component.scss']
})
export class NavbarPrecioComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<SystemModel>;
  system: Observable<SystemModel[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.itemsCollection = this.db.collection<SystemModel>('system');
    this.system = this.itemsCollection.valueChanges();
    
  }

}
