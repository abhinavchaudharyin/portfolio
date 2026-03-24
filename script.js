const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const copyEmailButton = document.getElementById("copyEmailButton");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotPanel = document.getElementById("chatbotPanel");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotPrompts = document.getElementById("chatbotPrompts");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = "abhichiku2004@gmail.com";
    const originalText = copyEmailButton.textContent;

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "Copied";
      setTimeout(() => {
        copyEmailButton.textContent = originalText;
      }, 1500);
    } catch (error) {
      window.prompt("Copy this email address:", email);
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const finalSubject = subject || "Portfolio Inquiry";
    const finalBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=abhichiku2004@gmail.com` +
      `&su=${encodeURIComponent(finalSubject)}&body=${finalBody}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (formNote) {
      formNote.textContent = "Gmail compose opened with your full message.";
    }
  });
}

const chatbotKnowledge = [
  {
    keys: ["about", "who is abhinav", "introduce", "profile", "tell me about abhinav", "summary"],
    answer:
      "Abhinav Kumar Chaudhary is a final-year Information Technology student and AI/ML Engineer candidate focused on machine learning, data science, NLP, RAG systems, computer vision, and analytics. He builds practical AI products with strong technical foundations and production-oriented thinking."
  },
  {
    keys: ["contact", "email", "phone", "call", "linkedin", "github", "reach", "hire"],
    answer:
      "You can contact Abhinav at abhichiku2004@gmail.com or call him at +91 9971365525. His GitHub is github.com/abhichiku18 and his LinkedIn is linkedin.com/in/abhichiku18."
  },
  {
    keys: ["resume", "cv"],
    answer:
      "The portfolio includes Abhinav's resume as a downloadable PDF. It highlights his AI/ML internship, B.Tech in Information Technology, certifications, leadership experience, and project work across RAG, OCR, analytics, and machine learning."
  },
  {
    keys: ["experience", "internship", "scholarrank", "work"],
    answer:
      "Abhinav worked as an AI/ML Engineer Intern at ScholarRank AI from May 2025 to August 2025. He improved predictive accuracy by 15 percent, contributed to feature engineering and tuning workflows, and helped deliver API-based ML automation that reduced processing time by 30 percent in a 5-member AI team."
  },
  {
    keys: ["education", "college", "degree", "btech", "university"],
    answer:
      "Abhinav is pursuing a Bachelor of Technology in Information Technology at Noida Institute of Engineering and Technology, Greater Noida, from August 2022 to May 2026."
  },
  {
    keys: ["certification", "certifications", "training", "course", "courses"],
    answer:
      "His certifications and training include Python for Data Science, AI and Development from IBM and Coursera, the Data Scientist (Python) program from NCET+, and Data Science and Machine Learning Training from My Anatomy."
  },
  {
    keys: ["leadership", "leader", "coordination", "head coordinator", "team lead"],
    answer:
      "Abhinav has leadership experience as Head Coordinator of the Green Gold Society at NIET, where he helped drive more than 30 percent engagement growth across 1,000 plus students. He has also served as Team Lead on the Mera Kisan App and other Agile team projects."
  },
  {
    keys: ["skills", "tool", "tools", "technology", "stack", "tech stack"],
    answer:
      "His core skills include Python, SQL, MySQL, JavaScript, machine learning, data science, feature engineering, model evaluation, FastAPI, Flask, Streamlit, Scikit-learn, TensorFlow, Pandas, NumPy, Power BI, Git, GitHub, LangChain, FAISS, OCR, Groq LLM, and prompt engineering. He also covers statistics and probability topics such as Bayes theorem, Bayesian inference, hypothesis testing, normal distribution, CLT, correlation, and data interpretation."
  },
  {
    keys: ["project", "projects", "portfolio", "best project", "top projects"],
    answer:
      "The portfolio showcases six main projects: FormSathi for AI document intelligence, LexiMind AI for RAG-based document chat, Customer Churn Prediction System for explainable data science, AI Virtual Mouse for computer vision, Netflix Content Analysis for exploratory analytics, and an HR Analytics Dashboard in Power BI."
  },
  {
    keys: ["formsathi", "form sathi", "ocr", "document intelligence"],
    answer:
      "FormSathi is an end-to-end AI document intelligence platform that supports form understanding, multilingual assistance, guided completion, OCR extraction, and LLM-backed workflows using Python, Tesseract OCR, Groq LLM, and LangChain."
  },
  {
    keys: ["leximind", "rag", "document chat", "faiss", "chatbot"],
    answer:
      "LexiMind AI is a dual-mode AI assistant that switches between general chat and document-grounded retrieval. It uses Python, FastAPI, LangChain, FAISS, and LLM workflows to improve answer quality for document-based Q and A."
  },
  {
    keys: ["churn", "customer churn", "mlflow", "shap", "xgboost"],
    answer:
      "Customer Churn Prediction System is a data science and machine learning project focused on telecom customer retention risk. It includes feature engineering, XGBoost modeling, experiment tracking with MLflow, explainability with SHAP, and deployment-ready serving."
  },
  {
    keys: ["virtual mouse", "computer vision", "mediapipe", "opencv", "pyautogui"],
    answer:
      "AI Virtual Mouse is a computer vision project that uses MediaPipe, OpenCV, and PyAutoGUI to convert hand gestures from a webcam into live cursor movement and click actions."
  },
  {
    keys: ["netflix", "eda", "analytics project", "pandas", "matplotlib"],
    answer:
      "Netflix Content Analysis is a data science and EDA project built with Python, Pandas, NumPy, and Matplotlib. It studies content trends, genre behavior, ratings, and audience-oriented distribution patterns."
  },
  {
    keys: ["hr analytics", "power bi", "dashboard", "attrition"],
    answer:
      "HR Analytics Dashboard is a Power BI and business intelligence project for employee attrition analysis across salary, role, education, age, gender, and tenure."
  }
];

function addChatMessage(role, text) {
  if (!chatbotMessages) {
    return;
  }

  const article = document.createElement("article");
  article.className = `chatbot-message chatbot-message-${role}`;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  article.appendChild(paragraph);
  chatbotMessages.appendChild(article);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getChatbotReply(input) {
  const normalized = input.toLowerCase().trim();

  for (const item of chatbotKnowledge) {
    if (item.keys.some((key) => normalized.includes(key))) {
      return item.answer;
    }
  }

  return "I can help with Abhinav's projects, skills, internship experience, education, certifications, leadership, resume, and contact details. Try asking about FormSathi, LexiMind AI, customer churn, AI Virtual Mouse, Netflix analysis, HR analytics, or how to contact him.";
}

function toggleChatbot(forceOpen) {
  if (!chatbotPanel || !chatbotToggle) {
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : chatbotPanel.hidden;
  chatbotPanel.hidden = !shouldOpen;
  chatbotToggle.setAttribute("aria-expanded", String(shouldOpen));

  if (shouldOpen && chatbotInput) {
    chatbotInput.focus();
  }
}

if (chatbotToggle && chatbotPanel) {
  chatbotToggle.addEventListener("click", () => {
    toggleChatbot();
  });
}

if (chatbotClose) {
  chatbotClose.addEventListener("click", () => {
    toggleChatbot(false);
  });
}

if (chatbotPrompts) {
  chatbotPrompts.querySelectorAll(".chatbot-chip").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = button.dataset.prompt || button.textContent || "";
      toggleChatbot(true);
      addChatMessage("user", prompt);
      addChatMessage("bot", getChatbotReply(prompt));
    });
  });
}

if (chatbotForm && chatbotInput) {
  chatbotForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const prompt = chatbotInput.value.trim();
    if (!prompt) {
      return;
    }

    toggleChatbot(true);
    addChatMessage("user", prompt);
    addChatMessage("bot", getChatbotReply(prompt));
    chatbotInput.value = "";
  });
}
