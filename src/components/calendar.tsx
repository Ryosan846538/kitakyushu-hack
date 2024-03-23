"use client";

import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import React, { useState } from "react";

function CalendarComponent() {
  const [events] = useState<EventInput[]>([
    { title: "eventを", start: "2024-03-14" },
    {
      title: "こんな感じで追加できます",
      start: "2024-03-15",
      end: "2024-03-17",
    },
  ]);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale="ja"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        events={events}
        selectable
        // select={handleEventAdd}
      />
    </div>
  );
}

export default CalendarComponent;
