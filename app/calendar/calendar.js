
class CalendarController {
  /*@ngInject*/
  constructor($scope) {
    $scope.today = new Date();
    $scope.totalDays = new Array(this.getTotalDays($scope.today));
  };
  getTotalDays(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };
};

export default CalendarController