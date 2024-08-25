"use client"
import { useState } from 'react';
import styles from './accordion.module.css'

export const Accordions =()=>{

    interface FAQ {
        question: string;
        answer: string;
    }
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index:number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs: FAQ[] = [
        { question: "What is my eligibility to book a car?", answer: "You should be 18 years old or above and possess a valid driving license." },
        { question: "Can I book for any period of time?", answer: "You can book for any period that suits your needs, subject to availability." },
        { question: "Can I opt for a car for a longer period?", answer: "Yes, you can opt for a car for a longer period based on your requirements." },
        { question: "Can I book a one-way trip?", answer: "Yes, one-way trips are available. Please check availability and pricing." },
        { question: "Is there a home delivery option available?", answer: "Yes, home delivery is available for an additional charge." },
        { question: "How can I make the payment?", answer: "Payments can be made online via credit card, debit card, or net banking." }
    ];



    return(
        <>
         <div className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <button
                        className={`${styles.accordion} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {faq.question}
                    </button>
                    <div
                        className={styles.panel}
                        style={{
                            maxHeight: activeIndex === index ? '100px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.2s ease-out',
                        }}
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}