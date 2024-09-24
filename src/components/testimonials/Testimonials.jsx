import React from "react";
import "./testimonials.css";

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "Sujal Sahu",
            position: "Student",
            message:
                "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
            image:
                "https://media.licdn.com/dms/image/v2/D5603AQFE3uuNtJgTqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703950904978?e=1732752000&v=beta&t=fmaWy9LSqCdeRYpib4ILz9rER17JcHMKTXmC7_0iFZU",
        },
        {
            id: 2,
            name: "Prabhat Mishra",
            position: "Student",
            message:
                "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
            image:
                "https://media.licdn.com/dms/image/v2/D5603AQEvLfyufJc5Ww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724930599591?e=1732752000&v=beta&t=XlEgRGNLfjZ05RqhemWzkxAJqsFO3qJ8VIobeMWZvbA",
        },
        {
            id: 3,
            name: "Shri Krishna ",
            position: "Student",
            message:
                "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
            image:
                "https://media.licdn.com/dms/image/v2/D5603AQGu_GzR7yexgw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712497101980?e=1732752000&v=beta&t=ySwUXxevliVUa3C4incwFK9G7X2vJ7Qla7_QxgVYGuI",
        },
        {
            id: 4,
            name: "Minku Kumar",
            position: "Student",
            message:
                "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
            image:
                "https://media.licdn.com/dms/image/v2/D4D03AQEV992fgnn2Qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725094355653?e=1732752000&v=beta&t=d7yQvqRjscQl91fAToqB-uoYA6qRd3sKDbROANjhNYE",
        },
    ];
    return (
        <section className="testimonials">
            <h2>What our students say</h2>
            <div className="testmonials-cards">
                {testimonialsData.map((e) => (
                    <div className="testimonial-card" key={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt="" />
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                            <p className="name">{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;