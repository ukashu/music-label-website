import DraggableComponent from "../components/DraggableComponent.jsx"
import Icon from "../components/Icon.js"
import shirticon from "../images/shirticon.svg"
import headicon from "../images/headicon.svg"
import albumsicon from "../images/albumsicon.svg"
import React from "react"

const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "COT", "NOV", "DEC"]

export default function Desktop() {
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
    <>
      <DraggableComponent />
      <div id="icons" className=" flex flex-row gap-16 p-20 blur-xxs">
        <Icon icon={headicon} name="Listen" />
        <Icon icon={albumsicon} name="Artists" />
        <Icon icon={shirticon} name="Merch" />
      </div>
      <div id="datetime" className=" absolute right-20 top-20">
        <p>{date}</p>
      </div>
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-sm text-zinc-500 blur-xxs">
        ukashu 2023
      </footer>
    </>
  )
}
