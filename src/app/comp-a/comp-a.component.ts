import { Component,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnChanges{
//@input --parent to child
@Input("amount") Amount:any

  ngOnChanges(): void {
    console.log("trigger");
  
  }

}
