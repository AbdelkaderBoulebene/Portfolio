import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly EMAILJS_SERVICE_ID = 'service_vb6uyqg';
  private readonly EMAILJS_TEMPLATE_ID = 'template_euwpssi';
  private readonly EMAILJS_PUBLIC_KEY = 'Wlq-Kr0iwZMMm7K5a';

  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  status: SendStatus = 'idle';

  socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/AbdelkaderBoulebene',
      icon: 'github',
    },
    {
      label: 'Email',
      href: 'mailto:boulebene.abdelkaderpro@gmail.com',
      icon: 'mail',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abdelkader-boulebene',
      icon: 'linkedin',
    },
  ];

  async onSubmit() {
    if (this.status === 'sending') return;
    this.status = 'sending';

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      subject: this.form.subject,
      message: this.form.message,
    };

    try {
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: this.EMAILJS_PUBLIC_KEY }
      );
      this.status = 'success';
      this.resetForm();
      setTimeout(() => this.status = 'idle', 5000);
    } catch {
      this.status = 'error';
      setTimeout(() => this.status = 'idle', 4000);
    }
  }

  private resetForm() {
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
