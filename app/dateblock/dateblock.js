
class DateBlock {
  /*@ngInject*/
  constructor () {
    this.templateUrl = "/app/dateblock/dateblock.html";
    this.restrict = 'AE';
    this.scope = {
      index: '@'
    };
  }
};

export default DateBlock