
class DateBlock {
  /*@ngInject*/
  constructor () {
    console.log('dateblock constructor');
    this.templateUrl = "/app/dateblock/dateblock.html";
    this.restrict = 'AE';
    this.scope = {};
  }
};

export default DateBlock