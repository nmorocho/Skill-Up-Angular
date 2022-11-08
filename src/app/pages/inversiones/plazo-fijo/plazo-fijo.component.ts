import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FixedDeposit, FixedDepositCreated } from 'src/app/core/interfaces/FixedDeposits';


@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {

  data: FixedDeposit = {
    userId: 0,
    accountId: 0,
    amount: 0,
    creation_date: new Date(),
    closing_date: new Date(),
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  createFixedDeposit(data: FixedDeposit) {
    this.data = data;
    return this.http.post<FixedDepositCreated>(`${environment.API_URL}/fixeddeposits`, this.data)
    .subscribe((res) => {
      this.data = Object(res).flat(2);
      console.log(Array.of(res));
      console.log('This data',this.data);
      console.log('Plazo fijo creado', res);
    }


    )
  }

}
