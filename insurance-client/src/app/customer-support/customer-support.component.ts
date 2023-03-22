import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit, AfterViewInit {
  selectedCard: String;
  constructor() {
    this.selectedCard = 'contact';
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectCard('contact');
  }

  selectCard(cardId: String): void {
    this.selectedCard = cardId;
    if(this.selectedCard === 'payment') {
      document.getElementById("support-screen").style.display = "none";
      document.getElementById("payment-screen").style.display = "block";
    } else {
      document.getElementById("payment-screen").style.display = "none";
      document.getElementById("support-screen").style.display = "block";
    }
  }

}
