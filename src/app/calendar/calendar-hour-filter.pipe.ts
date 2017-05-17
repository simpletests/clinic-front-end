import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendarHourFilter'
})
export class CalendarHourFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let vals: any[] = [];
    for (var i = 0; i < value.length; i++) {
      if (value[i].start.getHours() == args.hour) {
        if (!args.day || value[i].start.getDay() == args.day) {
          vals.push(value[i]);
        }
      }
    }
    return vals;
  }

}
