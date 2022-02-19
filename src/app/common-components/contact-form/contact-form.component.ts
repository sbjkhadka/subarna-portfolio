import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactDetail } from 'src/app/Models/contact-details.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({});
  @Input() contactDetails: ContactDetail;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      subject: [''],
      message: ['']
    });
  }

  sendMessage(): void {}

}
