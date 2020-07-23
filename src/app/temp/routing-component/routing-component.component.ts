import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-routing-component',
  templateUrl: './routing-component.component.html',
  styleUrls: ['./routing-component.component.scss']
})
export class RoutingComponentComponent implements OnInit {

  constructor(private router: Router) { }
  window = window;

  ngOnInit() {
  }

  onClick() {
    console.log('here')
    // this.router.navigate(['/hi'],
    // // {relativeTo: 'route'}
    // { replaceUrl: true }
    // )
    console.log(window)

    // this.router.navigateByUrl("/team/33/user/11");
    console.log('there')
  }

}
