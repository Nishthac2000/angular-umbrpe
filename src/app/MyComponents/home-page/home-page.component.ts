import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RapidApiService } from '../../services/rapid-api.service';
import{ FormControl , FormGroup , Validators} from '@angular/forms'
import { Team } from 'src/app/services/rapid-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private RapidApi : RapidApiService){}

  teams : Team[] = [];
  
  teamsList : Team[] = [];
  
  // teamId!: number;

  form = new FormGroup({
    //TODO
    teamName : new FormControl("1")
  })

  ngOnInit() : void {
    this.loadTeams();
    
  }

  loadTeams(){
    this.RapidAPi.getTeamData().subscribe(( res : any) => {
      this.teams = res.data;
      
    })
  }

}