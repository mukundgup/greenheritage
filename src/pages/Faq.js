import React, { useState } from 'react';
import './faq.css';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What is Green Heritage?",
            answer: "Green Heritage is an initiative focused on preserving and promoting environmental sustainability through various eco-friendly practices and education."
        },
        {
            question: "How can I contribute to Green Heritage?",
            answer: "You can contribute by participating in our programs, volunteering for environmental activities, or supporting our initiatives through donations."
        },
        {
            question: "What are your main environmental focus areas?",
            answer: "We focus on sustainable agriculture, waste management, renewable energy, and environmental education."
        },
        {
            question: "Do you offer educational programs?",
            answer: "Yes, we offer various educational programs and workshops on environmental conservation and sustainable practices."
        },
        {
            question: "How can I contact Green Heritage?",
            answer: "You can reach us through our contact form, email, or visit our office during business hours."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <Navigation/>
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <button
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.question}
                                <span className="faq-icon">{activeIndex === index ? '^' : '>'}</span>
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                                <p>Ans. {faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>

        </>
    );
};

export default Faq;
