import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-create-new-seller-offer-dialog',
  templateUrl: './create-new-seller-offer-dialog.component.html',
  styleUrls: ['./create-new-seller-offer-dialog.component.scss']
})
export class CreateNewSellerOfferDialogComponent implements OnInit {
  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }
  // selected = new FormControl('valid', [
  //   Validators.required,
  //   Validators.pattern('valid'),
  // ]);

  // selectFormControl = new FormControl('valid', [
  //   Validators.required,
  //   Validators.pattern('valid'),
  // ]);

  // nativeSelectFormControl = new FormControl('valid', [
  //   Validators.required,
  //   Validators.pattern('valid'),
  // ]);

  // matcher = new CreateNewSellerOfferDialogComponent ();
  constructor() { }

  ngOnInit(): void {
  }

}
