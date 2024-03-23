"use client";

import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import React, { useState } from "react";

function CalendarComponent() {
  const [events, setEvents] = useState<EventInput[]>([
    { title: "eventを", start: "2024-03-14" },
    { title: "こんな感じで追加できます", start: "2024-03-15", end: "2024-03-17" },
  ]);

  const handleEventAdd = () => {
    const eventName = prompt("イベントを入力してください");

    if (eventName) {
      const newEvent: EventInput = {
        title: eventName,
        start: new Date().toISOString(), // 現在の日時を使用
        allDay: true,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

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
        select={handleEventAdd}
      />
    </div>
  );
}

export default CalendarComponent;
