import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://localhost:44363/api/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getUserTicket(id) {
    return this.http.get(`${baseUrl}/UserTicket/${id}`);
  }
  getTicketDates(id) {
    return this.http.get(`${baseUrl}/TicketDates/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title) {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
