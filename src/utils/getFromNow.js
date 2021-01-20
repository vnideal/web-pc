import moment from 'moment';

export default (date) => {
  if (date == null) return '';

  return moment(date, 'YYYY-MM-DD HH:mm:ss')
    .utcOffset('+0700')
    .fromNow();
};
