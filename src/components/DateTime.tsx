import React from "react"

const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "COT", "NOV", "DEC"]

export default function DateTime() {
  const [date, setDate] = React.useState(getDateString(new Date()))

  React.useEffect(() => {
    const interval = setInterval(() => setDate(getDateString(new Date())), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  function addZeroInFront(x: number): string {
    if (x < 10) {
      return `0${x}`
    } else {
      return `${x}`
    }
  }

  function getDateString(date: Date): string {
    let seconds = addZeroInFront(date.getSeconds())
    let minutes = addZeroInFront(date.getMinutes())
    let hour = addZeroInFront(date.getHours())
    let dateString = `${hour}:${minutes}:${seconds} ${weekday[date.getDay()]} ${
      date.toLocaleDateString().split(".")[0]
    } ${month[date.getMonth()]}`
    return dateString
  }

  return (
    <div id="datetime" className=" absolute right-20 top-20 text-2xl blur-xxs">
      <p>{date}</p>
    </div>
  )
}
