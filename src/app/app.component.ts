import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@madinyini',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@madinyini-montañero',
      content: 'El cotopaxi que subí',
    },
    {
      title: 'Richard carapaz',
      imageUrl: 'assets/biking.jpeg',
      username: '@madinyini-ciclista',
      content: 'El rechard carapaz',
    },    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@madinyini',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@madinyini-montañero',
      content: 'El cotopaxi que subí',
    }
  ];
}
