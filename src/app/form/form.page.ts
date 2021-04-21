import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public person = {
  name:null,
  firstname: null,
  age: null,
  job: null,
  skills: []
  };
  constructor() { }

  ngOnInit() {
  }

}
