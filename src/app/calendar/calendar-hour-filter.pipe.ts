import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendarHourFilter'
})
export class CalendarHourFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const vals: any[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].start.getHours() === args.hour) {
        vals.push(value[i]);
      }
    }
    return vals;
  }

}
