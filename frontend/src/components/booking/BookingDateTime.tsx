import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './BookingDateTime.Calendar.scss';
import styles from "./BookingDateTime.module.scss";
import Button from "../common/Button";

const BookingDateTime = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Book an Service</h3>
        <p className={styles.text}>
          Select Date and Time slot to book a service
        </p>
        <p className={styles.selectDate}>Select Date</p>
      </div>
      <div className="calendar-container">
        <Calendar
          minDate={new Date()}
          view="month"
        />
      </div>

      <div>
        <p className={styles.selectTime}>Select Time Slot</p>
      </div>
      <Button
        onClick={() => console.log("booked")}
        className={styles.bookButton}
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingDateTime;
