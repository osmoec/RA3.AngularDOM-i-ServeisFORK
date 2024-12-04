import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
// @ts-ignore
import {yellowSubmarine,changeSize,countWords} from './funcions.js';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ExercicisAngularDomiServeisDavidGelmaDam1';
  constructor(){}

  ngOnInit(){
    const element = document.getElementById('text');
    element!.innerText = element!.innerText.toUpperCase();

    const Url = document.getElementById('url');
    Url!.innerText = document.URL;

    const contar = countWords('lorem');


    const Comptador = document.getElementById('comptador');
    Comptador!.innerText = `El paragraf conte ${contar} paraules.`;

    yellowSubmarine("text");
    changeSize('50px','100px','taula');
  }
}
