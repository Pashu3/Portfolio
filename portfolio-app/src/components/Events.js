import React, { useState } from 'react';
import './Events.css'; 
import EventViewer from './EventViewer'; 
import { RiArrowLeftSLine } from 'react-icons/ri'; 

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const closeEventDetails = () => {
    setActiveEvent(null);
  };

  const events = [
    {
      id: 1,
      title: 'Promethean 2K22',
      thumbnail: 'promethean 2K22.png',
      description: (
        <div className="event-description-box">
          <div className="event-info">
            <h2>Event Details</h2>
            <p>
              <span className="info-label"><b>Event Name:</b></span> Promethean 2K22<br />
              <span className="info-label"><b>Date:</b></span> October 12th and 13th, 2022<br />
              <span className="info-label"><b>Location:</b></span> BVRIT-Narsapur<br />
              <span className="info-label"><b>Type:</b></span> Technical and Non-Technical Fest<br />
              <span className="info-label"><b>Role:</b></span> Central Core Member<br />
              <span className="info-label"><b>Responsibilities:</b></span> Management and coordination of all related works
            </p>
          </div>
          <div className="event-summary-details">
            <div className="event-summary">
              <p>
                Promethean 2K22 was an expansive event designed to cater to a diverse audience by incorporating both technical and non-technical activities. This dual-fest was aimed at providing a platform for showcasing talent, fostering innovation, and encouraging participation across various domains.
              </p>
              <p>
                The technical fest featured workshops on Machine Learning & AI and Blockchain Technology, coding competitions like a 24-hour hackathon and various coding contests, tech talks by industry experts, and project exhibitions. The non-technical fest included music and dance performances, drama and theatre shows, fun activities such as a gaming zone and art and craft workshops, competitions like debates, extempore, and quizzes, along with food and merchandise stalls.
              </p>
              <p>
                As a central core member, my responsibilities included planning and organizing event schedules, managing multiple teams, coordinating logistics, overseeing promotional activities, maintaining communication with sponsors and participants, and ensuring smooth execution during the event days. Promethean 2K22 successfully brought together students, professionals, and enthusiasts, fostering innovation and creativity while providing me with valuable experience in event management and leadership.
              </p>
            </div>
            <div className="event-image-container">
              <img className="event-image" src="https://via.placeholder.com/300x200" alt="Event Thumbnail" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'App Development Workshop',
      thumbnail: 'App_Development_Workshop.png',
      description: (
        <div className="event-description-box">
          <div className="event-info">
            <h2>Event Details</h2>
            <p>
              <span className="info-label"><b>Event Name:</b></span> App Development Workshop<br />
              <span className="info-label"><b>Date:</b></span> September 1st to 3rd, 2022<br />
              <span className="info-label"><b>Location:</b></span> BVRIT Narsapur<br />
              <span className="info-label"><b>Type:</b></span> Workshop and Training Event<br />
              <span className="info-label"><b>Role:</b></span> Core Member of GDSC_BVRIT Club<br />
              <span className="info-label"><b>Responsibilities:</b></span> Coordination and Hosting
            </p>
            </div>
            <div className="event-summary-details">
            <div className="event-summary">
            <p>
              The App Development workshop organized by GDSC_BVRIT Club was a pivotal event aimed at empowering students with practical skills in mobile application development. Spanning three engaging days from September 1st to 3rd, 2022, the workshop was facilitated by our esteemed super seniors who served as mentors and hosts.
            </p>
            <p>
              Participants delved into the intricacies of app development, learning essential concepts and techniques through hands-on sessions and interactive discussions. The workshop covered a wide array of topics including frontend and backend development, user interface design, database integration, and deployment strategies.
            </p>
            <p>
              As a core member of GDSC_BVRIT Club, my role involved overseeing the logistics and coordination of the workshop. This included planning the event schedule, ensuring seamless execution of activities, and facilitating a conducive learning environment for all participants. Our goal was not only to impart technical knowledge but also to foster collaboration, innovation, and practical application of skills among the student community.
            </p>
            <p>
              The Offline App Development workshop was well-received, providing a valuable platform for students to enhance their proficiency in app development while nurturing a spirit of creativity and innovation. It was a rewarding experience contributing to the growth and development of our peers in the field of technology.
            </p>
          </div>
          <div className="event-image-container">
            <img className="event-image" src="https://via.placeholder.com/300" alt="Event Thumbnail" />
          </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Machine Learning Workshop',
      thumbnail: 'ML_Workshop.png',
      description: (
        <div className="event-description-box">
          <div className="event-info">
            <h2>Event Details</h2>
            <p>
              <span className="info-label"><b>Event Name:</b></span> Machine Learning Workshop<br />
              <span className="info-label"><b>Date:</b></span> May 8th to 12th, 2023<br />
              <span className="info-label"><b>Location:</b></span> Online<br />
              <span className="info-label"><b>Type:</b></span> Workshop and Training Event<br />
              <span className="info-label"><b>Role:</b></span> Event Organizer<br />
              <span className="info-label"><b>Host:</b></span> Nirmal Goud
            </p>
            </div>
            <div className="event-summary-details">
            <div className="event-summary">
            <p>
              The Machine Learning Workshop was a comprehensive online event designed to equip students with foundational and advanced knowledge in machine learning. Spanning five interactive days from May 8th to 12th, 2022, the workshop was expertly hosted by Nirmal Goud, a seasoned professional in the field of artificial intelligence.
            </p>
            <p>
              Participants were immersed in the world of machine learning through a blend of theoretical sessions and practical exercises. The workshop curriculum covered a wide range of topics including supervised and unsupervised learning, neural networks, natural language processing, and model evaluation techniques. Interactive coding sessions allowed attendees to apply concepts in real-time, fostering a deeper understanding of the material.
            </p>
            <p>
              As an event organizer, my responsibilities included coordinating the event logistics, managing registrations, and ensuring smooth communication between participants and the host. I also facilitated the technical setup for the online platform, handled queries, and provided support throughout the event to enhance the learning experience. Our aim was to create an engaging and informative environment that promoted active learning and collaboration.
            </p>
            <p>
              The online Machine Learning Workshop received positive feedback, with participants appreciating the depth of content and the interactive nature of the sessions. The event successfully provided a robust platform for students to develop their machine learning skills, encouraging innovation and practical application of knowledge. Being an integral part of this event was a fulfilling experience, contributing to the professional growth and expertise of the participants in the rapidly evolving field of machine learning.
            </p>
          </div>
          <div className="event-image-container">
            <img className="event-image" src="https://via.placeholder.com/300" alt="Event Thumbnail" />
          </div>
          </div>
        </div>
      )
    }
    
  ];

  return (
    <div className="events">
      <div className="events-navbar">
        <RiArrowLeftSLine className="toggle-icon" onClick={() => setActiveEvent(null)} />
        <span className="events-heading">Events</span>
      </div>
      <div className={`events-list ${activeEvent ? 'collapsed' : ''}`}>
        {events.map((event) => (
          <div key={event.id} className="event">
            <div className="thumbnail" onClick={() => setActiveEvent(event)}>
              <img src={event.thumbnail} alt={event.title} />
            </div>
            <div className="view-description" onClick={() => setActiveEvent(event)}>
              <span>View Description</span>
            </div>
          </div>
        ))}
      </div>
      {activeEvent && (
        <EventViewer event={activeEvent} onClose={closeEventDetails} />
      )}
    </div>
  );
};

export default Events;
