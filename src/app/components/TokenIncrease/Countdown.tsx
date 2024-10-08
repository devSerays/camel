import { useState, useEffect } from "react";
import { ZoomAnimation } from "../ZoomAnimation";

const Countdown  = () => {
  // Initialize state with your static countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 40,
    minutes: 5,
    seconds: 11,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Stop the countdown when all values are zero
          clearInterval(countdownInterval);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdownInterval); // Clear the interval when component unmounts
  }, []);

  return (
    <div className="flex gap-5 justify-center">
      {/* Days */}
      <ZoomAnimation>
        <div className="text-center">
          <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
            <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
              {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
            </span>
          </div>
          <p className="md:text-xl font-semibold mt-2 text-dark_brown">Days</p>
        </div>
      </ZoomAnimation>

      {/* Hours */}
      <ZoomAnimation>
        <div className="text-center">
          <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
            <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
              {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
            </span>
          </div>
          <p className="md:text-xl font-semibold mt-2 text-dark_brown">Hours</p>
        </div>
      </ZoomAnimation>

      {/* Minutes */}
      <ZoomAnimation>
        <div className="text-center">
          <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
            <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
              {timeLeft.minutes < 10
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes}
            </span>
          </div>
          <p className="md:text-xl font-semibold mt-2 text-dark_brown">
            Minutes
          </p>
        </div>
      </ZoomAnimation>

      {/* Seconds */}
      <ZoomAnimation>
        <div className="text-center">
          <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
            <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
              {timeLeft.seconds < 10
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}
            </span>
          </div>
          <p className="md:text-xl font-semibold mt-2 text-dark_brown">
            Seconds
          </p>
        </div>
      </ZoomAnimation>
    </div>
  );
};

export default Countdown ;
