const increaseDate = (date, dayNumber = 3) =>
    date.getTime() + dayNumber * 24 * 60 * 60 * 1000;

const increaseAndFormatDate = (dateArray) =>
    dateArray.map(item => new Intl.DateTimeFormat('hu-HU', { year: 'numeric', month: 'numeric', day: 'numeric' }).format(new Date(increaseDate(item))))

module.exports = increaseAndFormatDate