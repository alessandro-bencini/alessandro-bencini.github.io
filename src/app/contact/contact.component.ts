import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name: string | undefined;
  subject: string | undefined;
  email: string | undefined;
  message: string | undefined;

  showMsg: boolean | false | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // @ts-ignore
  submitForm(contactForm) {
    const formUrl = 'https://alessandro-bencini.herokuapp.com/api/mail';
    const data = contactForm.value;

    this.http.post(formUrl, data).subscribe((response) => {
      if (contactForm.valid) {
        this.showMsg = true;
        contactForm.reset();
      }
    });
  }
}
