import { info } from "console";
import { experiences } from "./experiences";

export const tours = [
  {
    slug: 'self-guided',
    title: 'Self-Guided',
    section1title: 'Epic routes from the first kilometre',
    section2title: 'Start where the real route begins',
    dates: 'All year round',
    location: 'Mountains, Castellon, Spain',
    averageDistance: '95km',
    flights: 'Castellon or Valencia',
    experiences: 'This is the simplest way to experience Castollon. No fixed schedules, no group riding, no pressure. Just great roads, epic riding and the freedom to enjoy it your way.',
    days: [
      { '1': 'Arrive in Castellon, pick up your bike and get ready for an unforgettable cycling adventure.' },
      { '2': 'Explore the stunning coastal roads and picturesque villages of Castellon at your own pace.' },
      { '3': 'Challenge yourself with the iconic climbs and breathtaking views that Castellon has to offer.' },
      { '4': 'Discover hidden gems and secret routes that only locals know about, creating your own unique cycling experience.' },
      { '5': 'Enjoy a leisurely ride along the coast, soaking in the Mediterranean vibes before departing with unforgettable memories.' },
      { '6': 'Extend your adventure with optional add-ons, such as guided tours, local experiences, or additional days of riding to further explore the beauty of Castellon.' },
      { '7': 'Depart from Castellon, taking with you the unforgettable memories of your self-guided cycling adventure.' },
    ],
    prices: [
      { 'Double Occupancy': '€895' },
      { 'Single Occupancy': '€1195' },
      { 'Non-Rider': '€545' },
      { 'Deposit': '€350' },
    ],
    images: [
      'https://images.unsplash.com/photo-1675213131942-0735b90312bb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
      'https://images.unsplash.com/photo-1675213442157-f6feba921d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpZGUlMjBiaWN5Y2xlfGVufDB8MHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1715223445399-adc8a1032ac8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
  },
  {
    slug: 'guided',
    title: 'Guided Tours',
    section1title: 'Epic routes from the first kilometre',
    section2title: 'Start where the real route begins',
    information: [
      { 'Dates': 'All year round', },
      { 'Location': 'Mountains, Castellon, Spain', },
      { 'Average Distance': '95km', },
      { 'Flights': 'Castellon or Valencia', },
    ],
    experiences: 'This is the simplest way to experience Castollon. No fixed schedules, no group riding, no pressure. Just great roads, epic riding and the freedom to enjoy it your way.',
    days: [
      { '1': 'Arrive in Castellon, pick up your bike and get ready for an unforgettable cycling adventure.' },
      { '2': 'Explore the stunning coastal roads and picturesque villages of Castellon at your own pace.' },
      { '3': 'Challenge yourself with the iconic climbs and breathtaking views that Castellon has to offer.' },
      { '4': 'Discover hidden gems and secret routes that only locals know about, creating your own unique cycling experience.' },
      { '5': 'Enjoy a leisurely ride along the coast, soaking in the Mediterranean vibes before departing with unforgettable memories.' },
      { '6': 'Extend your adventure with optional add-ons, such as guided tours, local experiences, or additional days of riding to further explore the beauty of Castellon.' },
      { '7': 'Depart from Castellon, taking with you the unforgettable memories of your self-guided cycling adventure.' },
    ],
    prices: [
      { 'Double Occupancy': '€895' },
      { 'Single Occupancy': '€1195' },
      { 'Non-Rider': '€545' },
      { 'Deposit': '€350' },
    ],
    images: [
      'https://images.unsplash.com/photo-1675213131942-0735b90312bb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
      'https://images.unsplash.com/photo-1675213442157-f6feba921d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpZGUlMjBiaWN5Y2xlfGVufDB8MHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1715223445399-adc8a1032ac8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
  },
  {
    slug: 'full-support',
    title: 'Full Support',
    description: 'Experience the ultimate in cycling comfort and convenience with our full support tours. We take care of all the logistics, so you can focus on enjoying the ride and the stunning scenery.',
        days: [
      { '1': 'Arrive in Castellon, pick up your bike and get ready for an unforgettable cycling adventure.' },
      { '2': 'Explore the stunning coastal roads and picturesque villages of Castellon at your own pace.' },
      { '3': 'Challenge yourself with the iconic climbs and breathtaking views that Castellon has to offer.' },
      { '4': 'Discover hidden gems and secret routes that only locals know about, creating your own unique cycling experience.' },
      { '5': 'Enjoy a leisurely ride along the coast, soaking in the Mediterranean vibes before departing with unforgettable memories.' },
      { '6': 'Extend your adventure with optional add-ons, such as guided tours, local experiences, or additional days of riding to further explore the beauty of Castellon.' },
      { '7': 'Depart from Castellon, taking with you the unforgettable memories of your self-guided cycling adventure.' },
    ],
    images: [
      'https://images.unsplash.com/photo-1675213131942-0735b90312bb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
      'https://images.unsplash.com/photo-1675213442157-f6feba921d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpZGUlMjBiaWN5Y2xlfGVufDB8MHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1715223445399-adc8a1032ac8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
  },
];