import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meses'
})
export class MesesPipe implements PipeTransform {

  
  
  transform(value: any, args?: any): any {

    if(args=='calendario'){

      switch(value){
        case 'marzo': return 'tercer mes';
        case 'abril': return 'cuarto mes';
        case 'mayo': return 'quinto mes';
      }
    }

    if(args=='significado'){

      switch(value){
        case 'marzo': return ' Marte, dios de la guerra';
        case 'abril': return ' Aprilis o Apertura de flores';
        case 'mayo': return ' Maia, diosa de la abundancia';
      }
    }

    if(args=='ingles'){

      switch(value){
        case 'marzo': return 'March';
        case 'abril': return 'April';
        case 'mayo': return 'May';
      }
    }

      switch(value){
        case 'marzo': return '3';
        case 'abril': return '4';
        case 'mayo': return '5';
      }

      

    

    return null;
  }

}
