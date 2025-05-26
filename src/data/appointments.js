// Calendar appointments — consistently structured with `date`, `isToday`, `isSelected`, and `times`
export const calendarAppointments = [
  {
    date: 25,
    isToday: false,
    isSelected: false,
    times: [
      { label: "10:00", isHighlighted: false },
      { label: "11:00", isHighlighted: false },
      { label: "12:00", isHighlighted: false },
    ],
  },
  {
    date: 26,
    isToday: true,
    isSelected: true,
    times: [
      { label: "08:00", isHighlighted: false },
      { label: "09:00", isHighlighted: true },
      { label: "10:00", isHighlighted: false },
    ],
  },
  {
    date: 27,
    isToday: false,
    isSelected: false,
    times: [
      { label: "09:00", isHighlighted: false },
      { label: "11:00", isHighlighted: false },
    ],
  },
  {
    date: 28,
    isToday: false,
    isSelected: false,
    times: [
      { label: "13:00", isHighlighted: false },
      { label: "15:00", isHighlighted: false },
    ],
  },
  {
    date: 29,
    isToday: false,
    isSelected: false,
    times: [
      { label: "10:00", isHighlighted: false },
      { label: "14:00", isHighlighted: false },
    ],
  }
];

// Upcoming appointments section — structured per day
export const upcomingAppointments = [
  {
    day: "Thursday",
    appointments: [
      { title: "Ophthalmologist", time: "09:00 AM", icon: "eye-icon" },
      { title: "Cardiologist", time: "11:00 AM", icon: "heart-icon" }
    ]
  },
  {
    day: "Saturday",
    appointments: [
      { title: "Neurologist", time: "10:00 AM", icon: "brain-icon" },
      { title: "Dentist", time: "01:00 PM", icon: "tooth-icon" }
    ]
  }
];
