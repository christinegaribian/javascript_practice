console.log("hello world");



class Clock {

  constructor() {
    // 1. Create a Date object.
    var date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // console.log(this);
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // console.log(this);
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds > 59){
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes > 59){
      this.hours += 1;
      this.minutes = 0;
    }
    if (this.hours > 24){
      this.hours = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();
