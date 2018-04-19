import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(talk: any, termSearch?: any): any {
    if(!talk)return null;
        if(!termSearch)return termSearch;

        return talk.filter(function(item){
           // return JSON.stringify(item).toLowerCase().includes(termSearch);
           return item.track.label.toLowerCase().includes(termSearch.toLowerCase());
        });
  }

}
