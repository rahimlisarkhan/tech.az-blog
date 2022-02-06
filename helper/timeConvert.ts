

export const convertNormalDate = (givenDate: Date | string) => {
    const date = new Date(givenDate)
    const clock = (date.getHours() <= 10 ? `0${date.getHours()}` : date.getHours()) + ":" + (date.getMinutes() <= 10 ? `0${date.getMinutes()}` : date.getMinutes())
    const result = (date.getDate() <= 10 ? `0${date.getDate()}` : date.getDate())
        + "." + (date.getMonth() + 1 <= 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1)
        + "." + date.getFullYear()

    return `${clock + "  " + result}`
}