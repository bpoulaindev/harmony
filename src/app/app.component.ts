import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucidePanelTopOpen } from '@ng-icons/lucide';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'harmony-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [provideIcons({ lucidePanelTopOpen })],
})
export class AppComponent {
  title = 'Harmony';
}
