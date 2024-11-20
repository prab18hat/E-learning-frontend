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
            name: "Abhishek Singh",
            position: "Student",
            message:
                "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
            image:
                "https://media.licdn.com/dms/image/v2/D4D03AQG7z5f9Tr7fKA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702401917444?e=1732752000&v=beta&t=J3x17C9H1MIzoMj221zN8La4nthLGwORjwtzv_7boic",
        },
        {
            id: 3,
            name: "Abhiraj Chaudhry ",
            position: "Student",
            message:
                "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
            image:
                "https://media.licdn.com/dms/image/v2/D4D03AQFSp47q6cHPNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699942304552?e=1737590400&v=beta&t=QC7NHn9cvoHLZxFMAIH_WtLrmP5U1Ck2WIW2CO9oqCs",
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
