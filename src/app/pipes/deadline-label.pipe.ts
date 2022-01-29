import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deadlineLabel'
})
export class DeadlineLabelPipe implements PipeTransform {

  transform(days: number, ...args: unknown[]): string {

    if (days >= 7 ) {
      const week = Math.round(days / 7);
      return `${week} ${ week === 1 ? 'week' : 'weeks'} left`;
    } else {
      return `${days} days left`;
    }

  }

}
