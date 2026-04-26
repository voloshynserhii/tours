import React from 'react';
export interface Tour {
  slug: string;
  title: string;
  subtitle?: string;
  section1Title?: string | React.ReactNode;
  dates: string;
  location: string | React.ReactNode;
  averageDistance?: string;
  flights: string;
  experienceTitle: string | React.ReactNode;
  experienceDescription: string | React.ReactNode;
  included: string[];
  notIncluded?: string[];
  days?: { [key: string]: string }[];
  dayImages?: { [key: string]: string }[];
  prices: { label: string; price: string }[];
}

export const tours: Tour[] = [
  {
    slug: 'custom-tour',
    title: 'CUSTOM TOUR',
    subtitle: 'WE BUILD A TRIP THAT SUITS YOU',
    dates: 'March 31st - June 1st',
    location: 'Maestrat Mountains, Castellón, Spain',
    flights: 'Castellón or Valencia',
    experienceTitle: 'RIDE ON YOUR OWN SCHEDULE',
    experienceDescription: 'Ride at your own pace, on your own schedule, with the freedom to explore Castellón your way. Our custom tours are fully customised to suit you and your group, designed for riders who want flexibility without unnecessary structure. With direct access to quiet mountain roads from the moment you leave the door, you’re free to ride as much or as little as you like, entirely on your own terms.',
    included: [
      'Castellon Cycling Co. Welcome pack',
      'Completely customised route planning',
      '4 Star Hotel Accommodation',
      'Cycling-focused base',
      'Direct access to world-class riding from your doorstep',
      'Expert local knowledge and route selection',
      'Flexible pacing to suit the group',
      'Café stops and local highlights along the way',
      'Support vehicle',
      'On-site support if needed',
      'Secure bike storage',
      'Access to bike cleaning and maintenance facilities',
      'GPX files and computer set-up'
    ],
    days: [
      { '1': 'Arrival day is all about settling in and getting ready for the week ahead. Check into the hotel, build your bike, and have the option to head out for a short test ride before dinner.' },
      { '2': 'Explore the stunning coastal roads and picturesque villages of Castellon at your own pace.' },
      { '3': 'Challenge yourself with the iconic climbs and breathtaking views that Castellon has to offer.' },
      { '4': 'Discover hidden gems and secret routes that only locals know about, creating your own unique cycling experience.' },
      { '5': 'Enjoy a leisurely ride along the coast, soaking in the Mediterranean vibes before departing with unforgettable memories.' },
      { '6': 'Extend your adventure with optional add-ons, such as guided tours, local experiences, or additional days of riding.' },
      { '7': 'Depart from Castellon, taking with you the unforgettable memories of your self-guided cycling adventure.' },
    ],
    prices: [{ label: 'Deposit', price: '€350' }],
  },
  {
    slug: 'short-guided',
    title: 'GUIDED TOURS',
    subtitle: 'SHORT',
    section1Title: (
      <div className='w-[50%] flex flex-col items-end text-right'>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">Just</h3>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">focus</h3>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">on the</h3>
        <h2 className="text-3xl md:text-[180px] uppercase text-yellow-300 leading-[1]">ride</h2>
      </div>
    ),
    dates: 'March 31st - June 1st',
    location: (
      <>
        <span className="text-base font-bold text-gray-800 tracking-tight">Maestrat Mountains</span>
        <span className="text-base font-bold text-gray-800 tracking-tight">Castellón, Spain</span>
      </>
    ),
    averageDistance: '70km',
    flights: 'Castellón or Valencia',
    experienceTitle: (
      <div className='w-[50%] flex flex-col items-start text-start'>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">WE'LL HANDLE ALL THE ROUTE PLANNING</h3>
      </div>
    ),
    experienceDescription: (
      <div className="flex flex-col gap-4">
        <p className='text-lg font-bold'>Discover the best of Castellón with expert guidance. Ride the best routes without needing to plan a thing.</p>
        <p className='text-lg font-bold'>Our guided tours are designed to give you the best possible riding experience, without the need to organise or navigate.</p>
        <p className='text-lg font-bold'>Ride alongside experienced local guides who know the roads, the climbs, and the hidden highlights of the region.</p>
      </div>
    ),
    included: [
      'Castellon Cycling Co. Welcome pack',
      '4 Star Hotel Accommodation',
      'Cycling-focused base',
      'Direct access to world-class riding from your doorstep',
      'Expert local knowledge and route selection',
      'Flexible pacing to suit the group',
      'Café stops and local highlights along the way',
      'Support vehicle',
      'On-site support if needed',
      'Secure bike storage',
      'Access to bike cleaning and maintenance facilities',
      'GPX files and computer set-up'
    ],
    dayImages: [
      { '1': '/images/optimized/tours-short/2.png' },
      { '2': '/images/optimized/tours-short/2.png' },
      { '3': '/images/optimized/tours-short/3.png' },
      { '4': '/images/optimized/tours-short/4.png' },
      { '5': '/images/optimized/tours-short/5.png' },
      { '6': '/images/optimized/tours-short/6.png' },
      { '7': '/images/optimized/tours-short/6.png' },
    ],
    days: [
      { '1': 'Arrival day is all about settling in and getting ready for the week ahead. Check into the hotel, build your bike, and have the option to head out for a short test ride before dinner. The day usually wraps up over dinner, giving everyone a chance to relax, meet the group, and prepare for the rides to come.' },
      { '2': 'This is a short and easy first-day shakedown ride. The route features gentle rolling terrain and a few light climbs, just enough to get the legs moving and the bike dialled in. With a 3/10 diﬃculty, it’s the perfect way to ease into the week ahead.' },
      { '3': 'During the first of the bigger days we’ll be covering 80 km with 1,150m of climbing, this route delivers a compact but demanding ride. The middle section brings the toughest eﬀort with sustained climbing, while the rest of the route rolls nicely with opportunities to find rhythm. Rated 7/10, it’s a punchy day that balances eﬀort and flow without the longer distance.' },
      { '4': 'With 84 km with 1,515m of elevation gain, this is our most intense day on the bike. Featuring multiple sustained climbs, especially in the second half. We keep the pressure high, with little chance to fully recover between eﬀorts. Rated 9/10, it’s a tough, punchy route that demands strong climbing legs and smart pacing.' },
      { '5': 'Rolling through 71 km with 893m of elevation gain, this route oﬀers a steady mix of climbing and flowing terrain. The climbs are more gradual and manageable, making it a good opportunity to recover slightly while still keeping a consistent rhythm. With a 5/10 diﬃculty, it’s a balanced day that eases the legs without feeling too easy.' },
      { '6': 'One last ride! We finish things up with a challenging, climb-heavy profile. A steady build into a major ascent is followed by rolling terrain before a tougher second climb later in the ride. Rated 8/10, it’s a strong final eﬀort that tests the legs one last time while keeping the distance manageable.' },
      { '7': 'Departure day is a relaxed wrap-up to the week, with no riding scheduled. Guests enjoy breakfast, pack down their bikes, and check out of the hotel at their own pace. It’s a chance to unwind, reflect on the week, and head home feeling accomplished after an EPIC 350km+ week in the Spanish mountains.' },
    ],
    prices: [
      { label: 'Double Occupancy', price: '895€ pp' },
      { label: 'Single Occupancy', price: '1195€ pp' },
      { label: 'Non-rider', price: '545€ pp' },
      { label: 'Deposit', price: '350€ pp' },
    ],
  },
  {
    slug: 'long-guided',
    title: 'GUIDED TOURS',
    subtitle: 'LONG',
    section1Title: (
      <div className='w-[50%] flex flex-col items-end text-right'>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">Just</h3>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">focus</h3>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">on the</h3>
        <h2 className="text-3xl md:text-[180px] uppercase text-yellow-300 leading-[1]">ride</h2>
      </div>
    ),
    dates: 'March 31st - June 1st',
    location: (
      <>
        <span className="text-base font-bold text-gray-800 tracking-tight">Maestrat Mountains</span>
        <span className="text-base font-bold text-gray-800 tracking-tight">Castellón, Spain</span>
      </>
    ),
    averageDistance: '110km',
    flights: 'Castellón or Valencia',
    experienceTitle: (
      <div className='w-[50%] flex flex-col items-start text-start'>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">WE'LL HANDLE ALL THE ROUTE PLANNING</h3>
      </div>
    ),
    experienceDescription: (
      <div className="flex flex-col gap-4">
        <p className='text-lg font-bold'>Discover the best of Castellón with expert guidance. Ride the best routes without needing to plan a thing.</p>
        <p className='text-lg font-bold'>Our guided tours are designed to give you the best possible riding experience, without the need to organise or navigate.</p>
        <p className='text-lg font-bold'>Ride alongside experienced local guides who know the roads, the climbs, and the hidden highlights of the region.</p>
      </div>
    ),
    included: [
      'Castellon Cycling Co. Welcome pack',
      '4 Star Hotel Accommodation',
      'Cycling-focused base',
      'Direct access to world-class riding from your doorstep',
      'Expert local knowledge and route selection',
      'Flexible pacing to suit the group',
      'Café stops and local highlights along the way',
      'Support vehicle',
      'On-site support if needed',
      'Secure bike storage',
      'Access to bike cleaning and maintenance facilities',
      'GPX files and computer set-up'
    ],
    dayImages: [
      { '1': '/images/optimized/tours-long/2.jpg' },
      { '2': '/images/optimized/tours-long/2.jpg' },
      { '3': '/images/optimized/tours-long/3.jpg' },
      { '4': '/images/optimized/tours-long/4.jpg' },
      { '5': '/images/optimized/tours-long/5.jpg' },
      { '6': '/images/optimized/tours-long/6.jpg' },
      { '7': '/images/optimized/tours-long/6.jpg' },
    ],
    days: [
      { '1': 'Arrival day is all about settling in and getting ready for the week ahead. Check into the hotel, build your bike, and have the option to head out for a short test ride before dinner. The day usually wraps up over dinner, giving everyone a chance to relax, meet the group, and prepare for the rides to come.' },
      { '2': 'This 66 km first-day shakedown ride features 1,159m of elevation gain, with a smooth mix of rolling terrain and two main climbs. The first builds gradually early on, while the second is shorter and slightly sharper, followed by flowing descents and sweeping bends. Overall, it’s a moderately challenging (4/10) route, perfect for settling into the legs and the week ahead.' },
      { '3': 'Today we combining long rolling sections with a sustained mid-ride climb. The toughest eﬀort comes around the halfway mark, followed by undulating terrain and a final climb before a fast, flowing descent to finish. Overall, it’s a challenging (7/10) endurance day that demands some strong cycling.' },
      { '4': 'The second of our big days comes with 2,547m of elevation gain, making it the toughest day of the week. A long, sustained climb dominates the first half, followed by rolling terrain before a final punchy ascent and technical descent late in the ride. With an 8/10 diﬃculty, it’s a true climbing test that rewards smart pacing and strong legs.' },
      { '5': 'With very little elevation and a lighter distance, this recovery-focused ride helps us heal up after the harder days. It features gentle rolling terrain with a few short climbs, keeping the eﬀort steady but manageable throughout. With a 3/10 diﬃculty, it’s an easier day designed to spin the legs and recover while still enjoying the roads.' },
      { '6': 'And here we arrive at the final push of the week, featuring a long, sustained climb early on followed by rolling terrain and a punchy late ascent. The profile keeps the pressure on throughout, with little true recovery before a fast, technical finish. At 8/10 diﬃculty, it’s a demanding last day that rewards us with stunning views throughout.' },
      { '7': 'Departure day is a relaxed wrap-up to the week, with no riding scheduled. Guests enjoy breakfast, pack down their bikes, and check out of the hotel at their own pace. It’s a chance to unwind, reflect on the week, and head home feeling accomplished after an EPIC 550km+ week in the Spanish mountains.' },
    ],
    prices: [
      { label: 'Double Occupancy', price: '895€ pp' },
      { label: 'Single Occupancy', price: '1195€ pp' },
      { label: 'Non-rider', price: '545€ pp' },
      { label: 'Deposit', price: '350€ pp' },
    ],
  },
  {
    slug: 'self-guided',
    title: 'SELF-GUIDED',
    section1Title: (
      <div className='w-[50%] flex flex-col items-end text-right'>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">YOU</h3>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">ARE</h3>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">the</h3>
        <h2 className="text-3xl md:text-[180px] uppercase text-yellow-300 leading-[1]">BOSS</h2>
      </div>
    ),
    dates: 'All year round',
    location: (
      <>
        <span className="text-base font-bold text-gray-800 tracking-tight">Maestrat Mountains</span>
        <span className="text-base font-bold text-gray-800 tracking-tight">Castellón, Spain</span>
      </>
    ),
    flights: 'Castellón or Valencia',
    experienceTitle: (
      <div className='w-[50%] flex flex-col items-start text-start'>
        <h3 className="text-3xl md:text-[80px] uppercase text-yellow-300 leading-[1] w-[50%]">RIDE ON YOUR OWN SCHEDULE</h3>
      </div>
    ),
    experienceDescription: (
      <div className="flex flex-col gap-4">
        <p className='text-lg font-bold'>Ride at your own pace, on your own schedule with the freedom to explore Castellón your way.</p>
        <p className='text-lg font-bold'>Our self-guided tours are designed for riders who want flexibility without unnecessary structure.</p>
        <p className='text-lg font-bold'>With direct access to quiet mountain roads from the moment you leave the door, you’re free to ride as much or as little as you like. On your own terms.</p>
      </div>
    ),
    included: [
      'Castellon Cycling Co. Welcome pack',
      '4 Star Hotel Accommodation',
      'Cycling-focused base',
      'Direct access to world-class riding from your doorstep',
      'Secure bike storage',
      'Access to bike cleaning and maintenance facilities',
      'Light route guidance if needed (no GPX files or similar computer based assistance)'
    ],
    notIncluded: [
      'Expert local knowledge and route selection',
      'Café stops and local highlights along the way',
      'Support vehicle',
      'On-site support if needed',
      'GPX files and computer set-up'
    ],
    prices: [
      { label: 'Double Occupancy', price: '725€ pp' },
      { label: 'Single Occupancy', price: '1025€ pp' },
      { label: 'Non-rider', price: '495€ pp' },
      { label: 'Deposit', price: '250€ pp' },
    ],
  },
];