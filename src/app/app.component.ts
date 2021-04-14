import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {

  formgroup: FormGroup;
  title = 'app';

  constructor(
    changePassword: FormBuilder,
  ) {
    this.formgroup = changePassword.group({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      name: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

  }
  ngOnChanges(changes: SimpleChanges) {
  }

  finish() {
    console.log(this.formgroup.value)
  }

}
