import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface ISexo {
    codigo: string
  , descricao: string
}

interface ITeste {
    dataNascimento: Date
  , idade: number
  , isDesempregado: boolean
  , lista: Array<string>
  , nome: string
  , sexo: ISexo
  , visual: object
}

@Component({
  selector: 'teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  postsCol: AngularFirestoreCollection<ITeste>;
  posts: Observable<ITeste[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.db.collection('teste');
    this.posts = this.postsCol.valueChanges();

    this.posts.subscribe(
      data => console.log(data)
    );
  }

}
