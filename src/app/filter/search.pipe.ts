import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
  //pure : false
})
export class SearchPipe implements PipeTransform {

  // transform(value: any, termSearch?: string ,propName?: string): any {
  //            if(!value)
  //            {return value;}
            
  //            const resultArray =[];
  //            return value.filter(function(item){
  //           for(const item of value){
  //               if(item[propName] === termSearch){
  //                 resultArray.push(item);
  //               }
  //           }
  //           return resultArray;
  //       });
  // }
   transform(value, keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }

}
