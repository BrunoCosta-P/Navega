import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  isMobile: boolean = false;
  mobileBreakpoint: number = 768; // Defina o breakpoint que você considera "mobile"

  constructor() {
    this.checkScreenWidth(); // Verifica a largura inicial da tela
  }

  ngOnInit(): void {
    this.checkScreenWidth(); // Garante que a verificação seja feita na inicialização
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth(); // Verifica a largura da tela sempre que a janela é redimensionada
  }

  checkScreenWidth(): void {
    this.isMobile = window.innerWidth < this.mobileBreakpoint;
  }
}
