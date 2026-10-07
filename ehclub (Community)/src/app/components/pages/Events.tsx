import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, Clock, MapPin, ExternalLink, Trophy } from "lucide-react";
import { useState } from "react";

interface Winner {
  position: string;
  name: string;
  team?: string;
  round?: string;
}

interface Event {
  title: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  type: "upcoming" | "past";
  registerUrl?: string;
  winners?: Winner[];
}

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      title: "Coming soon",
      //date: "March 25, 2026",
      //time: "2:00 PM - 5:00 PM",
      //venue: "Computer Lab A",
      image: "https://i.ibb.co/5hVQLwsr/image-20e7fbed.png",
      type: "upcoming",
      //registerUrl: "https://www.youtube.com/results?search_query=how+to+change+the+name+of+a+website+link",
    },
    /*
    {
      title: "Annual Hackathon 2026",
      date: "April 10-11, 2026",
      time: "9:00 AM - 9:00 PM",
      venue: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBldmVudHxlbnwxfHx8fDE3NzIzOTQ2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      type: "upcoming",
      registerUrl: "https://www.youtube.com/results?search_query=how+to+change+the+name+of+a+website+link",
    },
    {
      title: "Web Development Bootcamp",
      date: "April 20, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "Room 301",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      type: "upcoming",
      registerUrl: "https://www.youtube.com/results?search_query=how+to+change+the+name+of+a+website+link",
    },*/
    {
      title: " Circuit Forensics",
      date: "February 24, 2026",
      time: "5 PM - 6 PM",
      venue: "A5",
      image: "https://i.ibb.co/C3Phns0j/event-5.jpg",
      type: "past",
      winners: [
        { position: "1st Place", name: "", team: "Deepta T.R, Santhya T" },
        { position: "2nd Place", name: "", team: "Joshika S, Harini C" },
        { position: "3rd Place", name: "", team: "Anuja S, Aasgifa Parvenn S" },
        { position: "Special Mention", name: "", team: "Balaji G, Santanu Tripathi" },
      ],
    },
    {
      title: "LOGIFLUX",
      date: "February  23, 2026",
      time: "3:20 PM - 4:20 PM",
      venue: "B8",
      image: "https://i.ibb.co/5gW9HCdf/event-4.jpg",
      type: "past",
      winners: [
        { position: "1st Place", name: "Kevin Joel P"},
        { position: "2nd Place", name: "Shruthii Pritha S"},
        { position: "3rd Place", name: "Hari Prasanth R"},
      ],
    },
    {
      title: "Project Series",
      date: "Ongoing",
      time: "3:20 PM - 5:00 PM",
      venue: "B11",
      image: "https://i.ibb.co/gLW3rCDL/Event-3.jpg",
      type: "past",
      /*winners: [
        { position: "Winner", name: "Team Innovators", team: "Lisa Chen, Tom Wilson" },
        { position: "Runner-up", name: "Team Creators", team: "Nina Patel, Sam Taylor" },
      ],*/
    },
    {
      title: "Decode & Conquer",
      date: "January 27, 2026",
      time: "3:20 PM – 4:20 PM",
      venue: "B8",
      image: "https://i.ibb.co/yFyc6Mqw/event-2.jpg",
      type: "past",
      winners: [
        //{ position: "1st Place", name: "Team Mechatronics", team: "Kevin Brown, Rachel Green, Mark Davis" },
        //{ position: "2nd Place", name: "Team RoboTech", team: "Jessica White, Paul Adams" },
        { position: "Special Mention", name: "", team: "Krithika Thilaka M" },
      ],
    },
    {
      title: "CRACK N BING",
      date: "November 11, 2025",
      time: "3:20 PM – 4:20 PM",
      venue: "A5",
      image: "https://i.ibb.co/jkLYgdD0/event-1.jpg",
      type: "past",
      winners: [
        { round: "Round 1", position: "1st", name: "Abideepthi" },
        { round: "Round 1", position: "2nd", name: "Akilan" },
        { round: "Round 1", position: "3rd", name: "Santhya" },
        { round: "Round 2", position: "Team 1", name: "Vaishnavi, Abideepthi" },
        { round: "Round 2", position: "Team 2", name: "Rohith R, Barath Raj" },
        { round: "Round 2", position: "Team 3", name: "Thanushree, Agnes Femina" },
      ],
    },
  ];

  const upcomingEvents = events.filter((e) => e.type === "upcoming");
  const pastEvents = events.filter((e) => e.type === "past");

  return (
    <div className="bg-white min-h-screen">
      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{event.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Register
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{event.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Trophy className="mr-2 h-4 w-4" />
                    View Winners
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Winners</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              {selectedEvent.title}
            </h4>
            <div className="space-y-4">
              {(() => {
                // Group winners by round if rounds exist
                const hasRounds = selectedEvent.winners?.some(w => w.round);
                
                if (hasRounds) {
                  const rounds = selectedEvent.winners?.reduce((acc, winner) => {
                    const round = winner.round || 'Other';
                    if (!acc[round]) acc[round] = [];
                    acc[round].push(winner);
                    return acc;
                  }, {} as Record<string, Winner[]>);

                  return Object.entries(rounds || {}).map(([round, winners]) => (
                    <div key={round} className="mb-4">
                      <h5 className="text-md font-bold text-gray-800 mb-2">{round}</h5>
                      {winners.map((winner, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-4 py-2 mb-2">
                          <div className="font-semibold text-blue-600">{winner.position}</div>
                          <div className="text-gray-900">{winner.name}</div>
                          {winner.team && <div className="text-sm text-gray-600">{winner.team}</div>}
                        </div>
                      ))}
                    </div>
                  ));
                } else {
                  return selectedEvent.winners?.map((winner, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                      <div className="font-semibold text-blue-600">{winner.position}</div>
                      <div className="text-gray-900">{winner.name}</div>
                      {winner.team && <div className="text-sm text-gray-600">{winner.team}</div>}
                    </div>
                  ));
                }
              })()}
            </div>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}