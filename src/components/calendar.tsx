"use client";

import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import React, { useState } from "react";

function CalendarComponent() {
  interface EventType {
    title: string;
    start: string;
    end?: string;
    allDay?: boolean;
  }

  const [events, setEvents] = useState<EventType[]>([
    { title: "eventを", start: "2024-03-14" },
    {
      title: "こんな感じで追加できます",
      start: "2024-03-15",
      end: "2024-03-17",
    },
  ]);

  const handleEventAdd = (info: { start?: Date; end?: Date }) => {
    // 入力ダイアログ
    const eventName = prompt("イベントを入力してください");

    if (eventName) {
      // イベントの追加
      const newEvent: EventType = {
        title: eventName,
        start: info.start?.toISOString() ?? "", // FullCalendarのイベント型に合わせてプロパティを修正
        end: info.end?.toISOString() ?? "", // FullCalendarのイベント型に合わせてプロパティを修正
        allDay: true,
      };
      setEvents((prevEvents: EventType[]) => {
        const updatedEvents: EventType[] = [...prevEvents]; // 新しい配列を作成し、既存の要素を展開
        updatedEvents.unshift(newEvent); // 新しいイベントを配列の先頭に追加
        return updatedEvents; // 新しい配列を返す
      });
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
