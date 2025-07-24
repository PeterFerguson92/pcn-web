import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../shared/email.service';
import { NotificationMessageComponent } from '../notification-message/notification-message.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us-content',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NotificationMessageComponent, SpinnerComponent],
  templateUrl: './contact-us-content.component.html',
  styleUrl: './contact-us-content.component.css',
})
export class ContactUsContentComponent implements OnInit {
  infoText: string | null = '';
  errorText!: string | null;
  showInfoText!: boolean;
  showErrorText: boolean = false;
  showSpinner = false;
  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', Validators.email],
      message: ['', [Validators.required]],
    });
  }

  getFormControl(fControlName: string) {
    return this.contactForm.get(fControlName);
  }

  isSubmitDisabled() {
    return !this.contactForm.valid;
  }

  onSubmit() {
    const requestDetails: { [key: string]: any } = {};
    Object.keys(this.contactForm.controls).forEach((key) => {
      const formControl =
        this.contactForm.controls[
          key as keyof typeof this.contactForm.controls
        ];
      requestDetails[key] = formControl.value;
    });
    this.sendEmail(requestDetails);
  }

  sendEmail(message: {}): void {
    this.showSpinner = true;
    this.emailService.SendEmail(message).subscribe(
      (data) => {
        this.showSpinner = false;
        this.infoText = 'Request Sent Succesfully';
        this.showInfoText = true;
        this.clearNotification();
        this.clearFields();
      },
      (error) => {
        console.log(error);
        this.showSpinner = false;
        this.showErrorText = true;
        this.errorText = 'Something went wrong, Please contact support';
        this.clearNotification();
        this.clearFields();
      }
    );
  }

  clearNotification() {
    setTimeout(() => {
      this.showInfoText = false;
      this.showErrorText = false;
      this.errorText = null;
      this.infoText = null;
    }, 3000);
  }

  clearFields() {
    (Object.keys(this.contactForm.controls) as Array<keyof typeof this.contactForm.controls>).forEach((key) => {
      this.contactForm.controls[key].reset();
    });
  }
}
