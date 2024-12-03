import React, { useState } from "react";
import moment from "moment";
import { CalendarData } from "@/data/CalendarData";
import ComponentHeader from "@/UI/ComponentHeader";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const DoctorsCalendar = () => {
  const [calendarData] = useState(CalendarData || []);
  return (
    <div className=" bg-white rounded-lg w-full overflow-auto h-[100%] md:pb-5">
      <ComponentHeader
        descClassess="mt-4"
        customStyles="py-16"
        title={"Doctors Time Table"}
        desc={
          "Great doctor for immediate assistance, emergency treatment, or a quick consultation for your family."
        }
      />
      <Calendar
        localizer={localizer}
        events={calendarData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "600px" }}
      />
    </div>
  );
};

export default DoctorsCalendar;
