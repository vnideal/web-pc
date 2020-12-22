import moment from 'moment';

export default (date) => {
  return moment(date, 'ddd MMM DD YYYY HH:mm:ss GMT Z').fromNow(true);
};
