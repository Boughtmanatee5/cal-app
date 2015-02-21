
class DateBlock {
  /*@ngInject*/
  constructor () {
    this.templateUrl = "/app/dateblock/dateblock.html";
    this.restrict = 'AE';
    this.scope = true
  };
  findDate(date, index) {
    let year = date.getFullYear()
    let month = date.getMonth()
    return new Date(year, month, index + 1)
  };
  isToday(date, today) {
    return date.getDate() === today.getDate()
  };
  link(scope) {
    scope.date = this.findDate(scope.today, scope.$index);
    scope.isToday = this.isToday
  };
};

export default DateBlock