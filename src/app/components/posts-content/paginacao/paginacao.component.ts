import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrl: './paginacao.component.css'
})
export class PaginacaoComponent implements OnInit {
  
    paginas: number[] = [];
    paginaAtiva: number = 1;
    paginaAtivaClass = "paginaAtiva";

    ngOnInit(): void {
      this.paginas = [1,2,3,4,5,6]
    }

    isPaginaAtiva(numero:number): string{
      console.log(numero)
      console.log(this.paginaAtiva === numero)
      console.log("-------------")
      if(this.paginaAtiva === numero){
        return this.paginaAtivaClass;
      }
      return "";
    }
    
}
