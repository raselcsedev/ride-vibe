import Heading from "@/components/reusable/heading";

const whyRideWithUs = [
  {
    title: "Road Bikes",
    points: [
      "Experience unmatched speed and efficiency on paved surfaces, perfect for dedicated long-distance enthusiasts.",
      "Conquer longer routes with less fatigue thanks to our ultra-lightweight frames and precision aerodynamic design.",
    ],
  },
  {
    title: "Mountain Bikes",
    points: [
      "Master any trail with confidence – from rocky paths to steep climbs and challenging descents.",
      "Enjoy superior control and comfort with our advanced suspension systems designed for the most demanding terrain.",
    ],
  },
  {
    title: "Active Lifestyle",
    points: [
      "Transform your daily commute and weekend adventures with bikes built for comfort and versatility.",
      "Maintain perfect posture and enjoy smooth handling with our ergonomically designed frames and intuitive controls.",
    ],
  },
  {
    title: "Electric Assist",
    points: [
      "Extend your range and conquer challenging hills with our powerful yet whisper-quiet pedal-assist technology.",
      "Embrace sustainable transportation that's both environmentally friendly and remarkably cost-effective.",
    ],
  },
];

export default function WhyRideWithUs() {
  return (
    <div className="py-16 bg-gray-50 rounded-lg">
      <Heading
        title="Why Ride"
        highlight="With Us?"
        text=" Discover the perfect bike for your lifestyle and adventure needsremium"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            className="object-cover rounded-lg hidden md:block"
            src="/why-us.jpg"
            alt="Cyclist enjoying the ride"
          />
        </div>

        <div className="space-y-8 px-2 lg:px-0">
          {whyRideWithUs.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 group  rounded-lg transition-all duration-300"
            >
              <div className="space-y-2">
                <h4 className="text-primary font-semibold text-lg group-hover:text-primary/80">
                  {item.title}
                </h4>
                <ul className="space-y-3 ml-2 text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
