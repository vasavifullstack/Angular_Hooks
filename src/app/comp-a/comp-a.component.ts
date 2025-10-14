import { Component,OnChanges,Input,OnInit, AfterContentInit, ContentChild} from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnChanges,OnInit,AfterContentInit{
//@input --parent to child
@Input("amount") Amount:any
@Input("Location") location:any
  address="";
  ngOnChanges(): void {
    console.log("trigger");
    this.Amount=Number(this.Amount)+500;       //adding extra amount to present amount.
    if(this.location =='vijayawada'){
      this.address="MG Road"
    }
    console.log("ngonchanges loaded");
  }
    ngOnInit(): void{
      console.log("ngonit loaded");

  }
  @ContentChild('subject') subject:any;
  ngAfterContentInit(): void {
    console.log(this.subject);

  }
}
