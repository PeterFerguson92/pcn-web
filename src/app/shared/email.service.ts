import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = 'https://api.emailjs.com/api/v1.0/email/send';
  constructor(private http: HttpClient) {}

  SendEmail(input: any) {
    const data = this.getData(input);
    return this.http.post(this.url, data, { responseType: 'text' });
  }

  getData(params: any) {
    return {
      service_id: 'service_i01lxks',
      template_id: 'template_dnqp99z',
      user_id: 'z0L9DxtMivujEeUk_',
      template_params: params,
    };
  }
}
