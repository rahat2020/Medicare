import { alterredUserAvatar } from "@/utils/appHelpers";
export const comments = [
  {
    id: 1,
    name: "Robert Smith",
    avatar: alterredUserAvatar,
    time: "4 Hour Ago",
    comment:
      "But the majority have suffered alteration in some form, by injected humour, or randomised its words look even slightly believable.",
    replies: [
      {
        id: 11,
        name: "Steven Smith",
        avatar: alterredUserAvatar,
        time: "1 Hour Ago",
        comment:
          "But the majority have suffered alteration in some form, by injected humour, or randomised its words look even slightly believable."
      }
    ]
  },
  {
    id: 2,
    name: "Deni Rover",
    avatar: alterredUserAvatar,
    time: "6 Hour Ago",
    comment:
      "But the majority have suffered alteration in some form, by injected humour, or randomised its words look even slightly believable.",
    replies: []
  },
  {
    id: 3,
    name: "Robert Smith",
    avatar: alterredUserAvatar,
    time: "4 Hour Ago",
    comment:
      "But the majority have suffered alteration in some form, by injected humour, or randomised its words look even slightly believable.",
    replies: []
  }
];
export const blogs = [
  {
    id: 1,
    category: "Doctor",
    color: "bg-pink-700 text-white",
    title: "The Advantages of Virtual Doctor Consultations",
    date: "10 January 2023",
    description:
      "Explore how virtual doctor consultations make healthcare accessible and efficient for patients worldwide.",
    author: "Admin",
    comments: 8,
    likes: 45,
    shares: 30,
    image:
      "https://media.istockphoto.com/id/2155775525/photo/senior-medical-exam.jpg?s=1024x1024&w=is&k=20&c=7qLMvBRGLq_GQgzhjduRMIlPAtNxT-WFsZd7qKcG6l4=",
    paragraph1:
      "Virtual consultations provide convenience and accessibility, reducing the need for in-person visits.",
    paragraph2:
      "Patients in remote areas benefit significantly, accessing specialists without travel.",
    paragraph3:
      "These services have grown, especially during the pandemic, proving their value in modern healthcare.",
    quote:
      "“Virtual consultations are not just a trend—they are the future of accessible healthcare.”",
    points: [
      "Access specialists from anywhere.",
      "Save time and costs on travel.",
      "Improved follow-up care through telemedicine.",
      "Increased convenience for patients and doctors."
    ]
  },
  {
    id: 2,
    category: "Medical",
    color: "bg-green-700 text-white",
    title: "How Wearable Devices Are Changing Medical Monitoring",
    date: "15 February 2023",
    description:
      "Learn how wearable technology is revolutionizing patient health monitoring and diagnosis.",
    author: "Dr. Smith",
    comments: 12,
    likes: 65,
    shares: 45,
    image:
      "https://media.istockphoto.com/id/1938542779/photo/senior-medical-check-up.jpg?s=612x612&w=0&k=20&c=v-S0_rxA9t6BeZvQWPo64DLHFxO5vVvPww7jObeIh9E=",
    paragraph1:
      "Wearables like smartwatches and fitness bands are enabling real-time health monitoring.",
    paragraph2:
      "These devices provide critical data on heart rate, sleep patterns, and more, aiding in early diagnosis.",
    paragraph3: "Patients and doctors benefit from continuous health tracking, improving outcomes.",
    quote: "“Technology in wearables is a game-changer for preventive healthcare.”",
    points: [
      "Real-time data helps in early disease detection.",
      "Improves patient engagement in their health.",
      "Provides insights for personalized treatments.",
      "Enables remote health monitoring for chronic conditions."
    ]
  },
  {
    id: 3,
    category: "Hospital",
    color: "bg-blue-700 text-white",
    title: "Revolutionizing Hospital Care with AI Technology",
    date: "20 March 2023",
    description:
      "Discover how AI is transforming patient care, diagnosis, and hospital management systems.",
    author: "Admin",
    comments: 15,
    likes: 70,
    shares: 55,
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph1:
      "Artificial intelligence is enabling hospitals to deliver faster and more accurate diagnoses.",
    paragraph2:
      "AI-powered tools streamline administrative workflows, allowing doctors more time for patients.",
    paragraph3:
      "Machine learning is also aiding in predictive analytics to prevent hospital readmissions.",
    quote: "“AI is not replacing human doctors; it’s making them more efficient.”",
    points: [
      "Streamlines administrative workflows.",
      "Provides accurate and early diagnoses.",
      "Enhances hospital management systems.",
      "Predicts and prevents readmissions."
    ]
  },
  {
    id: 4,
    category: "Technology",
    color: "bg-red-700 text-white",
    title: "Emerging Tech Trends in Modern Clinics",
    date: "5 April 2023",
    description:
      "Understand how the latest technology is enhancing the clinic experience for patients and doctors.",
    author: "Tech Team",
    comments: 10,
    likes: 40,
    shares: 25,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph1: "Technological advancements are revolutionizing patient management systems.",
    paragraph2:
      "Tools like EHRs (Electronic Health Records) and telemedicine apps make clinics more efficient.",
    paragraph3: "AI is being integrated to streamline patient diagnosis and treatment plans.",
    quote: "“Technology bridges the gap between patient needs and healthcare delivery.”",
    points: [
      "Improves patient data management.",
      "Enables seamless telemedicine consultations.",
      "Increases diagnostic accuracy.",
      "Enhances overall patient care."
    ]
  },
  {
    id: 5,
    category: "Healthcare",
    color: "bg-purple-700 text-white",
    title: "How to Choose the Right Healthcare Plan",
    date: "12 May 2023",
    description:
      "Step-by-step guidance to select a healthcare plan that fits your needs and budget.",
    author: "John Doe",
    comments: 7,
    likes: 50,
    shares: 35,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph1:
      "Selecting the right healthcare plan is crucial for financial and physical well-being.",
    paragraph2: "Consider factors like coverage, premiums, deductibles, and provider networks.",
    paragraph3: "Tailor your choice based on your specific health needs and family requirements.",
    quote: "“A healthcare plan is not one-size-fits-all; choose wisely for peace of mind.”",
    points: [
      "Understand your medical needs.",
      "Compare coverage and premiums.",
      "Check the provider network.",
      "Review deductibles and out-of-pocket expenses."
    ]
  },
  {
    id: 6,
    category: "Lifestyle",
    color: "bg-yellow-700 text-white",
    title: "Balancing Work and Health as a Busy Professional",
    date: "18 June 2023",
    description: "Tips for maintaining a healthy lifestyle while juggling a demanding career.",
    author: "Health Coach",
    comments: 9,
    likes: 35,
    shares: 20,
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph1: "Work-life balance is essential to prevent burnout and maintain overall health.",
    paragraph2:
      "Incorporate regular exercise, healthy eating, and mindfulness into your daily routine.",
    paragraph3: "Small, consistent changes can make a significant difference in well-being.",
    quote: "“Health is not a luxury—it’s a necessity for peak performance at work.”",
    points: [
      "Set boundaries between work and personal life.",
      "Adopt a consistent sleep schedule.",
      "Incorporate physical activity into your day.",
      "Prioritize mental health and stress management."
    ]
  },
  {
    id: 7,
    category: "Wellness",
    color: "bg-orange-700 text-white",
    title: "The Role of Nutrition in Preventive Healthcare",
    date: "25 July 2023",
    description:
      "A comprehensive look at how diet impacts long-term health and disease prevention.",
    author: "Dr. Jane",
    comments: 5,
    likes: 25,
    shares: 18,
    image:
      "https://media.istockphoto.com/id/2086018126/photo/healthy-eating-and-exercising-concept.jpg?s=1024x1024&w=is&k=20&c=_6UX9ZWtMkkrlYbK34tcwn9MjruZrDmm08D_W6l754o=",
    paragraph1:
      "A balanced diet reduces the risk of chronic illnesses like diabetes and heart disease.",
    paragraph2: "Foods rich in nutrients strengthen the immune system and improve overall health.",
    paragraph3: "Preventive healthcare begins with the daily choices you make about food.",
    quote: "“Good nutrition is the foundation of a healthy life.”",
    points: [
      "Incorporate fruits and vegetables into every meal.",
      "Choose whole grains over refined options.",
      "Limit processed foods and added sugars.",
      "Stay hydrated throughout the day."
    ]
  },
  {
    id: 8,
    category: "Science",
    color: "bg-cyan-700 text-white",
    title: "Understanding the Future of Genetic Medicine",
    date: "10 August 2023",
    description:
      "Explore breakthroughs in genetic research and how it influences modern treatments.",
    author: "Science Lab",
    comments: 4,
    likes: 30,
    shares: 10,
    image:
      "https://media.istockphoto.com/id/2148124381/photo/sparkling-dna-helix-structure-in-blue-and-red-high-tech-concept-of-genetic-research.jpg?s=1024x1024&w=is&k=20&c=uq3OeWr6-44Li4CpXoYNqhyHQ86TuBU32QJj9WOGa9s=",
    paragraph1: "Genetic medicine opens new possibilities for personalized treatments.",
    paragraph2: "Advances in CRISPR and gene editing are transforming the medical field.",
    paragraph3:
      "Research continues to focus on curing inherited disorders through genetic solutions.",
    quote: "“The genome is the blueprint of life, and we are learning how to edit it.”",
    points: [
      "Offers potential cures for genetic disorders.",
      "Enables personalized treatment plans.",
      "Supports early detection of inherited diseases.",
      "Revolutionizes approaches to chronic illness management."
    ]
  },
  {
    id: 9,
    category: "Research",
    color: "bg-gray-700 text-white",
    title: "The Impact of Clinical Trials on Modern Healthcare",
    date: "15 September 2023",
    description: "Insights into how clinical trials shape the future of medicine.",
    author: "Research Team",
    comments: 6,
    likes: 20,
    shares: 12,
    image:
      "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph1: "Clinical trials are essential for developing new treatments and ensuring safety.",
    paragraph2: "Volunteers play a critical role in advancing medical science and innovation.",
    paragraph3: "Every major medical breakthrough starts with rigorous testing through trials.",
    quote: "“Clinical trials are the backbone of medical progress.”",
    points: [
      "Evaluate the safety of new treatments.",
      "Ensure efficacy before public availability.",
      "Help researchers understand side effects.",
      "Support the development of groundbreaking therapies."
    ]
  },
  {
    id: 10,
    category: "Pediatrics",
    color: "bg-teal-700 text-white",
    title: "Mental Health Awareness: Breaking the Stigma",
    date: "10 October 2023",
    description: "A deep dive into promoting mental well-being and breaking stereotypes.",
    author: "Counselor Sarah",
    comments: 11,
    likes: 55,
    shares: 40,
    image:
      "https://images.unsplash.com/photo-1690306815535-dbe66a7c6185?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph1: "Children and teenagers face unique mental health challenges today.",
    paragraph2: "Raising awareness is crucial to ensure they receive timely support and care.",
    paragraph3: "Breaking stigmas helps foster environments where kids can thrive emotionally.",
    quote: "“Mental health is as important as physical health, especially in growing children.”",
    points: [
      "Promote open conversations about mental health.",
      "Provide access to counseling and resources.",
      "Educate families on recognizing early signs.",
      "Encourage healthy coping mechanisms."
    ]
  },
  {
    id: 11,
    category: "Neurology",
    color: "bg-indigo-700 text-white",
    title: "How Regular Exercise Enhances Brain Function",
    date: "15 November 2023",
    description:
      "Explore the positive impact of physical activity on cognitive function and mental health.",
    author: "Neuro Specialist",
    comments: 8,
    likes: 60,
    shares: 50,
    image:
      "https://media.istockphoto.com/id/1869420726/photo/human-brain.jpg?s=1024x1024&w=is&k=20&c=ui2uCTPbWaLU3zoAZz2pHVtM97yRR_2y1PBDMyfiGAw=",
    paragraph1:
      "Exercise stimulates the production of brain-derived neurotrophic factor (BDNF), which supports neural growth and connectivity.",
    paragraph2:
      "Regular physical activity reduces the risk of neurodegenerative diseases like Alzheimer’s.",
    paragraph3: "It also helps improve mood, reduce anxiety, and enhance focus and memory.",
    quote: "“A healthy body fuels a healthy mind—exercise is the ultimate brain booster.”",
    points: [
      "Improves memory and learning capabilities.",
      "Reduces stress and enhances emotional stability.",
      "Promotes better sleep and recovery.",
      "Supports overall cognitive health and resilience."
    ]
  },
  {
    id: 12,
    category: "Innovation",
    color: "bg-lime-700 text-white",
    title: "AI in Healthcare: A Game Changer",
    date: "20 December 2023",
    description: "Understand how artificial intelligence is reshaping the healthcare landscape.",
    author: "AI Expert",
    comments: 10,
    likes: 80,
    shares: 60,
    image:
      "https://media.istockphoto.com/id/2154829989/photo/a-doctor-interacting-with-medical-icons-on-a-futuristic-interfac.jpg?s=1024x1024&w=is&k=20&c=x5B3eD84z1nLokUFjEyw4HtZjIILJUQcdKMBraHTMCo=",
    paragraph1:
      "Artificial intelligence is revolutionizing diagnostics, treatment planning, and patient monitoring.",
    paragraph2:
      "AI-powered tools like predictive analytics and virtual health assistants improve healthcare efficiency.",
    paragraph3:
      "From imaging analysis to robotic surgeries, AI is transforming how care is delivered.",
    quote: "“The integration of AI into healthcare is not the future—it’s the present.”",
    points: [
      "Enhances diagnostic accuracy.",
      "Improves patient outcomes with predictive insights.",
      "Streamlines administrative workflows.",
      "Supports personalized medicine approaches."
    ]
  }
];
