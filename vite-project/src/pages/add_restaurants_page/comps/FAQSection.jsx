import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      question: "What are the documents and details required to start deliveries through Zomato?",
      answer: (
        <div>
          <p><strong>To ensure a smooth onboarding experience, please have the following documents ready:</strong></p>
          <p><strong>Mandatory documents:</strong></p>
          <ul className="list-disc pl-5">
            <li>PAN card: Only adult PAN cards are accepted.</li>
            <li>FSSAI license certificate: <a href="#" className="text-blue-500">Apply now</a></li>
            <li>Bank details: A copy of your cheque or passbook.</li>
            <li>Restaurant’s delivery menu</li>
            <li>One food image: Used as your restaurant’s cover image on Zomato.</li>
          </ul>
          <p><strong>Optional documents:</strong></p>
          <ul className="list-disc pl-5">
            <li>GST certificate: If applicable based on the PAN provided.</li>
          </ul>
        </div>
      ),
    },
    {
        question: "How long will it take for a restaurant to go live on Zomato after submitting the documents?",
        answer:(
            <div>
                Once all mandatory documents are uploaded and the contract is accepted, our team typically takes around <b>24 hours</b> to verify the documents and build your menu.<br/><br/><ul><li>If all documents are correct, your restaurant will be ready to accept orders within <b>24 hours</b>.</li><li>If any document is rejected, the go-live process will be delayed until you resubmit the correct documents.</li></ul>
            </div>
        ),
        
      },
      {
        question: "What is the one-time onboarding fee? Do I have to pay it at the time of registration?",
        answer:(<div>The one-time onboarding fee covers:<ul><li>Administrative, operational, and technical services</li><li>Document verification</li><li>Menu digitization</li><li>Quality checks</li><li>Training on using the Zomato platform</li><li>Query resolutions</li></ul><br/>This fee will be <b>deducted</b> from your statement of accounts <b>only after</b> your restaurant goes live on Zomato and starts receiving online orders. </div>),
        
        
       
      },
      {
        question: "How can I get help and support from Zomato if I get stuck?",
        answer:
        (
            <div>
                The Zomato team is here to help! <br/><br/>📩 <b>Email us at</b> <a href='mailto:merchantonboarding@zomato.com'>merchantonboarding@zomato.com</a> with your restaurant ID, and we’ll resolve your query within <b>6 hours</b>.
            </div>
        ),


        
      },
      {
        question: "How much commission will I be charged by Zomato?",
        answer: 
        (
            <div>
                Zomato charges a commission for services such as:<ul><li>Order placement</li><li>Catalog hosting</li><li>Demand generation</li><li>Marketing</li><li>Logistics</li><li>Tech infrastructure</li><li>Customer support</li></ul><br/>The commission rates vary based on the <b>city</b> and the <b>restaurant</b>, depending on factors like location and cuisine. You can view your specific commission rate when you accept the online ordering contract.
            </div>
        ),
        
        // "Zomato charges a commission for services such as:<ul><li>Order placement</li><li>Catalog hosting</li><li>Demand generation</li><li>Marketing</li><li>Logistics</li><li>Tech infrastructure</li><li>Customer support</li></ul><br/>The commission rates vary based on the <b>city</b> and the <b>restaurant</b>, depending on factors like location and cuisine. You can view your specific commission rate when you accept the online ordering contract.",
      },
      {
        question: "How will I get my payouts?",
        answer:
        (
            <div>
                Newly registered restaurants on Zomato receive <b>weekly payouts</b> every Wednesday for transactions made from Monday to Sunday of the previous week.<br/><br/>💰 If you prefer <b>daily payouts</b>, you can request them through the <b>Help Centre</b> on the partner app once your restaurant is live for online ordering.
            </div>
        ),


        
        // "Newly registered restaurants on Zomato receive <b>weekly payouts</b> every Wednesday for transactions made from Monday to Sunday of the previous week.<br/><br/>💰 If you prefer <b>daily payouts</b>, you can request them through the <b>Help Centre</b> on the partner app once your restaurant is live for online ordering.",
      },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 bg-gray-50 px-6 md:px-36">
      <div className="mb-14 mt-10 text-center">
        <span className="text-3xl font-bold text-gray-800 ">Frequently Asked Questions</span>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div className="bg-white rounded-md border border-gray-200 p-4">
            <div
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <ChevronDown className={`h-4 w-4 text-gray-500 transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </div>

            {openIndex === index && (
              <div className="ml-4 mt-2 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
