import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];

  myForm: FormGroup;
  mySecondForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Sammy'),
      email: new FormControl(''),
      message: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl(''),
      }),
    });

    this.mySecondForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),
    });
  }

  onSubmit(form) {
    console.log(form.get('address'));
    console.log(form.value);
  }
}
