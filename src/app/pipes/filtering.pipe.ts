import { Pipe, PipeTransform } from '@angular/core';
import {Project} from "../types/project.type";

@Pipe({
  pure: false,
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(items: Project[], term: string): Project[] {
    let rItems = [...items];
    if (term) {
      return rItems.filter( item => {
        return item.author.name.toLowerCase().includes(term) ||
          item.author.role.toLowerCase().includes(term) ||
          item.project.company.toLowerCase().includes(term) ||
          item.project.name.toLowerCase().includes(term);
      });
    } else {
      return rItems;
    }
  }

}
