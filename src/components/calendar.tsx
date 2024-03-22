import { VStack } from "@chakra-ui/react"; // Chakra UIのVStackをインポート
import { Calendar } from "@yamada-ui/calendar"; // 外部のカレンダーコンポーネントをインポート
import React from "react";

function CalendarComponent() {
  return (
    <VStack>
      <Calendar
        variant="solid"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />
      <Calendar
        variant="subtle"
        today
        defaultValue={new Date(new Date().setDate(1))}
      />
    </VStack>
  );
}

export default CalendarComponent;
