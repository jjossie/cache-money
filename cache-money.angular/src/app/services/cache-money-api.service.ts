import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from, map, of } from 'rxjs';
import { GenerateChatResponse } from '../models/responses/generate-chat-response';
import { GenerateBudgetResponse } from '../models/responses/generate-budget';
import { CurrentSpendingResponse } from '../models/responses/current-spending';


const baseUrl = 'https://cache-money-api.onrender.com/'


@Injectable({
  providedIn: 'root'
})
export class CacheMoneyApiService {

  constructor() { }

  sendChatMessage(text: string, userID: string): Observable<GenerateChatResponse> {
    return from(axios.get(`${baseUrl}generate_chat_response`, {
      params: { text, userID }
    })).pipe(
      map((response: AxiosResponse<GenerateChatResponse>) => response.data),

    );
  }

  getGeneratedBudget(userID: string): Observable<GenerateBudgetResponse> {
    return from(axios.get(`${baseUrl}generate_budget`, {
      params: { userID }
    })).pipe(
      map((response: AxiosResponse<GenerateBudgetResponse>) => response.data)
    );
  }
  
  getCurrentSpending(userID: string): Observable<CurrentSpendingResponse> {
    return from(axios.get(`${baseUrl}current_spending`, {
      params: { userID }
    })).pipe(
      map((response: AxiosResponse<CurrentSpendingResponse>) => response.data)
    );
  }
}


