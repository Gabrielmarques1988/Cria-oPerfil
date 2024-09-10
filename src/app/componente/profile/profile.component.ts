import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name = 'Maria Rosa';
  role = 'SuperAdmin';
  company = 'Gê mais Pê';
  jobTitle = 'Diretora';
  cpf = '111.222.333-44';
  address = 'Rua Santa Luzia, 735 - Cinelândia, Rio de Janeiro';
  email = 'usuario@empresa.com';

}


