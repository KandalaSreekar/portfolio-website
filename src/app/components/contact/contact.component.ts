import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputText, Textarea, Button, Toast],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = false;

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Message Sent!',
          detail: 'Thank you for reaching out. I will get back to you soon.',
          life: 5000
        });
        this.contactForm.reset();
        this.isSubmitting = false;
      }, 1000);
    } else {
      this.contactForm.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill in all required fields correctly.',
        life: 3000
      });
    }
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control ? control.invalid && control.touched : false;
  }
}
