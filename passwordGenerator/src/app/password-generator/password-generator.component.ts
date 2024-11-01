import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css'
})
export class PasswordGeneratorComponent {
  passwordLength: number = 8;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSpecialChars: boolean = true;
  generatedPassword: string = '';
  errorMessage: string = '';
  savedPasswords: string[] = [];

  constructor(private clipboard: Clipboard,private toastr:ToastrService) {}

  generatePassword(): void {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let charSet = '';
    this.generatedPassword = '';
    this.errorMessage = '';

    if (this.includeUppercase) charSet += uppercaseChars;
    if (this.includeLowercase) charSet += lowercaseChars;
    if (this.includeNumbers) charSet += numberChars;
    if (this.includeSpecialChars) charSet += specialChars;

    if (!charSet) {
      this.errorMessage = 'Please select at least one character type!';
      return;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      this.generatedPassword += charSet[randomIndex];
    }
  }

  copyToClipboard(): void {
    if (this.generatedPassword) {
      this.clipboard.copy(this.generatedPassword);
      this.toastr.success('Password copied to clipboard!');
    }
  }

  copy(password:string) {
    if (password) {
      this.clipboard.copy(password);
      this.toastr.success('Password copied to clipboard!');
    }
  }

  savePassword(): void {
    if (this.generatedPassword) {
      this.savedPasswords.push(this.generatedPassword);
      this.generatedPassword = ''; // Clear after saving
      this.toastr.success('Password saved successfully!');
    }
  }
}
