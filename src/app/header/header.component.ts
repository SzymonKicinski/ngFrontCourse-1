import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data.storage.service';
import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSaveData() {
    return this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFeatchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
