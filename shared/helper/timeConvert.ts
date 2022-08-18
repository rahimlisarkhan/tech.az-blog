export const convertNormalDate = (
  givenDate: Date | string | number | undefined
) => {
  if (!givenDate) return;

  const date = new Date(givenDate);

  const nowDateDay = new Date().getDate();
  const nowDateMonth = new Date().getMonth();
  const nowDateYear = new Date().getFullYear();
  const nowDateMin = new Date().getMinutes();
  const nowDateHour = new Date().getHours();

  const hours = date.getHours();
  const min = date.getMinutes();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const clock =
    (hours < 10 ? `0${hours}` : hours) + ":" + (min < 10 ? `0${min}` : min);
  const result =
    (day < 10 ? `0${day}` : day) +
    "." +
    (month + 1 < 10 ? `0${month + 1}` : month + 1) +
    "." +
    year;

  if (nowDateYear === year && nowDateMonth === month && day === nowDateDay) {
    return `${
      nowDateHour - hours !== 0
        ? `${nowDateHour - hours} saat əvvəl`
        : nowDateMin - min === 0
        ? "bu dəqiqə"
        : nowDateMin - min + " dəqiqə əvvəl"
    }`;
  }

  return `${clock + "  " + result}`;
};
