// Define translations
const translations = {
    'en': {
      // Login page
      'loginTitle': 'Your personal symptom checker for health concerns and home remedies',
      'selectLanguage': 'Select Language',
      'email': 'Email Address',
      'password': 'Password',
      'login': 'Login',
      'continueAsGuest': 'Continue as Guest',
      
      // Symptoms page
      'selectSymptoms': 'Select Your Symptoms',
      'selectSymptomsSubtitle': 'Choose all symptoms you\'re currently experiencing',
      'symptomsSelected': 'symptoms selected',
      'continue': 'Continue',
      
      // Detailed questions page
      'additionalInfo': 'Additional Information',
      'additionalInfoSubtitle': 'Please provide more details about your symptoms',
      'back': 'Back',
      'getResults': 'Get Results',
      
      // Results page
      'possibleConditions': 'Possible Conditions',
      'possibleConditionsSubtitle': 'Based on the symptoms you provided, here are some possible conditions',
      'seekMedical': 'Seek Medical Attention',
      'seekMedicalDesc': 'Some of your symptoms may indicate a serious condition. Please consult a healthcare professional promptly.',
      'homeRemedies': 'Home Remedies for Your Symptoms',
      'disclaimer': 'Remember that this is not a medical diagnosis. If you\'re concerned about your health, please consult with a healthcare professional.',
      'startOver': 'Start Over',
      'noResults': 'No Specific Conditions Identified',
      'noResultsDesc': 'Based on your symptoms, we couldn\'t identify a specific condition. If symptoms persist, please consult a healthcare professional.',
      'consultDoctor': 'Medical consultation recommended',
      'remediesFor': 'Remedies',
      
      // New symptom names
      'stomachPain': 'Stomach Pain',
      'jointPain': 'Joint Pain',
      'eyeIrritation': 'Eye Irritation',
      'constipation': 'Constipation',
      
      // New condition names
      'seasonal-allergies': 'Seasonal Allergies',
      'gastritis': 'Gastritis',
      'tension-headache': 'Tension Headache',
      'arthritis': 'Arthritis Flare-Up',
      'conjunctivitis': 'Conjunctivitis (Pink Eye)',
      'ibs': 'Irritable Bowel Syndrome',
      'common-cold-2': 'Common Cold with Sinus Involvement',
      
      // Severity levels
      'mild': 'Mild',
      'moderate': 'Moderate',
      'severe': 'Severe'
    },
    'hi': {
      // Login page
      'loginTitle': 'स्वास्थ्य चिंताओं और घरेलू उपचार के लिए आपका व्यक्तिगत लक्षण जांचकर्ता',
      'selectLanguage': 'भाषा चुनें',
      'email': 'ईमेल पता',
      'password': 'पासवर्ड',
      'login': 'लॉगिन',
      'continueAsGuest': 'अतिथि के रूप में जारी रखें',
      
      // Symptoms page
      'selectSymptoms': 'अपने लक्षण चुनें',
      'selectSymptomsSubtitle': 'वर्तमान में अनुभव किए जा रहे सभी लक्षणों का चयन करें',
      'symptomsSelected': 'लक्षण चयनित',
      'continue': 'जारी रखें',
      
      // Detailed questions page
      'additionalInfo': 'अतिरिक्त जानकारी',
      'additionalInfoSubtitle': 'कृपया अपने लक्षणों के बारे में अधिक विवरण प्रदान करें',
      'back': 'वापस',
      'getResults': 'परिणाम प्राप्त करें',
      
      // Results page
      'possibleConditions': 'संभावित स्थितियां',
      'possibleConditionsSubtitle': 'आपके द्वारा प्रदान किए गए लक्षणों के आधार पर, यहां कुछ संभावित स्थितियां हैं',
      'seekMedical': 'चिकित्सकीय ध्यान दें',
      'seekMedicalDesc': 'आपके कुछ लक्षण गंभीर स्थिति का संकेत दे सकते हैं। कृपया तुरंत चिकित्सा पेशेवर से परामर्श करें।',
      'homeRemedies': 'आपके लक्षणों के लिए घरेलू उपचार',
      'disclaimer': 'याद रखें कि यह चिकित्सकीय निदान नहीं है। यदि आप अपने स्वास्थ्य के बारे में चिंतित हैं, तो कृपया चिकित्सा पेशेवर से परामर्श करें।',
      'startOver': 'फिर से शुरू करें',
      'noResults': 'कोई विशिष्ट स्थिति नहीं मिली',
      'noResultsDesc': 'आपके लक्षणों के आधार पर, हम किसी विशिष्ट स्थिति की पहचान नहीं कर सके। यदि लक्षण बने रहते हैं, तो कृपया चिकित्सा पेशेवर से परामर्श करें।',
      'consultDoctor': 'चिकित्सकीय परामर्श अनुशंसित',
      'remediesFor': 'के लिए उपचार',
      
      // New symptom names in Hindi
      'stomachPain': 'पेट दर्द',
      'jointPain': 'जोड़ों का दर्द',
      'eyeIrritation': 'आंखों में जलन',
      'constipation': 'कब्ज',
      
      // New condition names in Hindi
      'seasonal-allergies': 'मौसमी एलर्जी',
      'gastritis': 'गैस्ट्राइटिस',
      'tension-headache': 'तनाव सिरदर्द',
      'arthritis': 'गठिया बढ़ना',
      'conjunctivitis': 'नेत्रश्लेष्मलाशोथ (पिंक आई)',
      'ibs': 'इरिटेबल बाउल सिंड्रोम',
      'common-cold-2': 'साइनस के साथ सामान्य सर्दी',
      'mild': 'हल्का',
    'moderate': 'मध्यम',
    'severe': 'गंभीर'
  }
};

      const state = {
        language: 'en',
        user: null,
        assessment: {
          selectedSymptoms: [],
          detailedAnswers: [],
          possibleConditions: []
        }
      };
      
      // DOM Elements
      document.addEventListener('DOMContentLoaded', () => {
        // Initialize the application
        initializeApp();
        
        // Event listeners for login page
        setupLoginPage();
        
        // Language selector setup
        setupLanguageSelector();
      });
      
      // Initialize app
      function initializeApp() {
        // Setup symptoms data in the page
        populateSymptomsGrid();
      }
      
      // Apply language to UI elements
      function applyLanguage() {
        // Update login page
        document.querySelector('#login-page .subtitle').textContent = getText('loginTitle', state.language);
        document.querySelector('.language-selector h2').textContent = getText('selectLanguage', state.language);
        document.querySelector('#login-form label[for="email"]').textContent = getText('email', state.language);
        document.querySelector('#login-form label[for="password"]').textContent = getText('password', state.language);
        document.querySelector('#login-form button[type="submit"]').textContent = getText('login', state.language);
        document.querySelector('#guest-login-btn').textContent = getText('continueAsGuest', state.language);
      
        // Update symptoms page if it's visible
        if (!document.getElementById('symptoms-page').classList.contains('hidden')) {
          document.querySelector('#symptoms-page h1').textContent = getText('selectSymptoms', state.language);
          document.querySelector('#symptoms-page .subtitle').textContent = getText('selectSymptomsSubtitle', state.language);
          document.querySelector('#continue-btn').textContent = getText('continue', state.language);
          
          // Update "symptoms selected" text
          const selectedCountText = document.querySelector('.selected-count');
          const count = document.getElementById('selected-count').textContent;
          selectedCountText.innerHTML = `<span id="selected-count">${count}</span> ${getText('symptomsSelected', state.language)}`;
        }
      
        // Update detailed questions page if it's visible
        if (!document.getElementById('detailed-questions-page').classList.contains('hidden')) {
          document.querySelector('#detailed-questions-page h1').textContent = getText('additionalInfo', state.language);
          document.querySelector('#detailed-questions-page .subtitle').textContent = getText('additionalInfoSubtitle', state.language);
          document.querySelector('#back-to-symptoms-btn').textContent = getText('back', state.language);
          document.querySelector('#submit-answers-btn').textContent = getText('getResults', state.language);
        }
      
        // Update results page if it's visible
        if (!document.getElementById('results-page').classList.contains('hidden')) {
          document.querySelector('#results-page h1').textContent = getText('possibleConditions', state.language);
          document.querySelector('#results-page .subtitle').textContent = getText('possibleConditionsSubtitle', state.language);
          document.querySelector('#severe-warning .alert-title').textContent = getText('seekMedical', state.language);
          document.querySelector('#severe-warning .alert-message').textContent = getText('seekMedicalDesc', state.language);
          document.querySelector('.disclaimer-box p').textContent = getText('disclaimer', state.language);
          document.querySelector('#start-over-btn').innerHTML = `<i class="fas fa-redo"></i> ${getText('startOver', state.language)}`;
          
          // Update symptom remedies heading
          document.querySelector('#symptom-remedies h2').textContent = getText('homeRemedies', state.language);
        }
      }
      
      // Login page setup
      function setupLoginPage() {
        const loginForm = document.getElementById('login-form');
        const guestLoginBtn = document.getElementById('guest-login-btn');
        
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          
          // For demo purposes, simulate login with any credentials
          handleUserLogin({ email });
        });
        
        guestLoginBtn.addEventListener('click', () => {
          handleUserLogin({ isGuest: true });
        });
      }
      
      // Handle user login
      function handleUserLogin(user) {
        state.user = user;
        showToast('Login successful', 'success');
        
        // Navigate to symptoms page
        navigateTo('symptoms-page');
      }
      
      // Setup language selector
      function setupLanguageSelector() {
        const languageBtns = document.querySelectorAll('.language-btn');
        
        languageBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            // Set active state
            languageBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update state
            state.language = btn.dataset.lang;
            
            // Apply language changes
            applyLanguage();
            
            // Show notification
            const langName = btn.dataset.lang === 'en' ? 'English' : 'हिन्दी';
            showToast(`Language changed to ${langName}`, 'success');
          });
        });
      
        // Apply initial language
        applyLanguage();
      }
      
      // Populate symptoms grid
      function populateSymptomsGrid() {
        const symptomsGrid = document.getElementById('symptoms-grid');
        const continueBtn = document.getElementById('continue-btn');
        const selectedCountEl = document.getElementById('selected-count');
        
        // Clear existing content
        symptomsGrid.innerHTML = '';
        
        // Add symptoms
        symptoms.forEach(symptom => {
          const symptomCard = document.createElement('div');
          symptomCard.className = 'symptom-card';
          symptomCard.dataset.id = symptom.id;
          
          // Check if symptom is already selected
          if (state.assessment.selectedSymptoms.includes(symptom.id)) {
            symptomCard.classList.add('selected');
          }
          
          // Use appropriate icon or fallback to a generic one
          const iconClass = symptom.icon || 'fa-notes-medical';
          
          symptomCard.innerHTML = `
            <div class="symptom-icon">
              <i class="fas ${iconClass}"></i>
            </div>
            <div class="symptom-name">${symptom.name}</div>
          `;
          
          // Add click handler
          symptomCard.addEventListener('click', () => {
            toggleSymptom(symptom.id, symptomCard);
            updateSelectedCount(selectedCountEl, continueBtn);
          });
          
          symptomsGrid.appendChild(symptomCard);
        });
        
        // Initial count update
        updateSelectedCount(selectedCountEl, continueBtn);
        
        // Setup continue button
        continueBtn.addEventListener('click', handleContinueToDetailed);
        
        // Setup back button in detailed questions
        document.getElementById('back-to-symptoms-btn').addEventListener('click', () => {
          navigateTo('symptoms-page');
        });
        
        // Setup submit answers button
        document.getElementById('submit-answers-btn').addEventListener('click', handleSubmitAnswers);
        
        // Setup start over button on results page
        document.getElementById('start-over-btn').addEventListener('click', handleStartOver);
      }
      
      // Toggle symptom selection
      function toggleSymptom(symptomId, symptomCard) {
        const index = state.assessment.selectedSymptoms.indexOf(symptomId);
        
        if (index === -1) {
          // Add symptom
          state.assessment.selectedSymptoms.push(symptomId);
          symptomCard.classList.add('selected');
        } else {
          // Remove symptom
          state.assessment.selectedSymptoms.splice(index, 1);
          symptomCard.classList.remove('selected');
        }
      }
      
      // Update selected count and continue button state
      function updateSelectedCount(countElement, continueBtn) {
        const count = state.assessment.selectedSymptoms.length;
        countElement.textContent = count;
        
        // Enable/disable continue button
        if (count > 0) {
          continueBtn.disabled = false;
        } else {
          continueBtn.disabled = true;
        }
      }
      
      // Handle continue to detailed questions
      function handleContinueToDetailed() {
        // Get detailed questions for selected symptoms
        const detailedQuestions = getDetailedSymptomsForSelection(state.assessment.selectedSymptoms);
        
        if (detailedQuestions.length > 0) {
          // Populate detailed questions
          populateDetailedQuestions(detailedQuestions);
          navigateTo('detailed-questions-page');
        } else {
          // No detailed questions available, go directly to results
          handleSubmitAnswers();
        }
      }
      
      // Populate detailed questions
      function populateDetailedQuestions(questions) {
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        
        questions.forEach((question, index) => {
          const questionCard = document.createElement('div');
          questionCard.className = 'question-card';
          
          // Find parent symptom name
          const parentSymptom = symptoms.find(s => s.id === question.parentId);
          const parentName = parentSymptom ? parentSymptom.name : question.parentId;
          
          questionCard.innerHTML = `
            <h3>${question.question}</h3>
            <p class="question-context">About your ${parentName}</p>
            <div class="options-list">
              ${question.options.map((option, optIndex) => `
                <div class="option-item">
                  <input type="radio" id="${question.id}-${optIndex}" name="${question.id}" value="${option}">
                  <label for="${question.id}-${optIndex}">${option}</label>
                </div>
              `).join('')}
            </div>
          `;
          
          container.appendChild(questionCard);
        });
      }
      
      // Handle submit answers
      function handleSubmitAnswers() {
        // Collect answers from detailed questions
        state.assessment.detailedAnswers = [];
        
        const questionInputs = document.querySelectorAll('#questions-container input[type="radio"]:checked');
        questionInputs.forEach(input => {
          const questionId = input.name;
          const answer = input.value;
          
          state.assessment.detailedAnswers.push({
            detailedId: questionId,
            answer: answer
          });
        });
        
        // Analyze symptoms
        state.assessment.possibleConditions = analyzeSymptoms(
          state.assessment.selectedSymptoms,
          state.assessment.detailedAnswers
        );
        
        // Navigate to results page
        showResultsPage();
      }
      
      // Show results page
      function showResultsPage() {
        // Navigate to results page
        navigateTo('results-page');
        
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';
        
        const remediesContainer = document.getElementById('remedies-container');
        remediesContainer.innerHTML = '';
        
        const severeWarning = document.getElementById('severe-warning');
        const hasSevereCondition = state.assessment.possibleConditions.some(c => c.severity === 'severe');
        
        // Show/hide severe warning
        if (hasSevereCondition) {
          severeWarning.classList.remove('hidden');
        } else {
          severeWarning.classList.add('hidden');
        }
        
        // If no conditions found
        if (state.assessment.possibleConditions.length === 0) {
          resultsContainer.innerHTML = `
            <div class="no-results">
              <div class="alert-box" style="background-color: #fff3cd; border-left-color: #ffc107;">
                <div class="alert-icon">
                  <i class="fas fa-exclamation-circle" style="color: #664d03;"></i>
                </div>
                <div class="alert-content">
                  <p class="alert-title" style="color: #664d03;">${getText('noResults', state.language)}</p>
                  <p class="alert-message" style="color: #664d03;">
                    ${getText('noResultsDesc', state.language)}
                  </p>
                </div>
              </div>
            </div>
          `;
        } else {
          // Create result cards
          state.assessment.possibleConditions.forEach(condition => {
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';
            
            // Create HTML for home remedies if available
            let remediesHTML = '';
            if (condition.homeRemedies && condition.homeRemedies.length > 0) {
              remediesHTML = `
                <h4>${getText('homeRemedies', state.language)}</h4>
                <ul class="remedies-list">
                  ${condition.homeRemedies.map(remedy => `<li>${remedy}</li>`).join('')}
                </ul>
              `;
            }
            
            // Create HTML for doctor consultation recommendation
            const doctorHTML = condition.consultDoctor 
              ? `<div class="result-doctor">
                  <i class="fas fa-user-md" style="color: var(--primary); margin-right: 0.5rem;"></i>
                  <strong>${getText('consultDoctor', state.language)}</strong>
                </div>`
              : '';
            
            // Get severity text based on language
            const severityText = getText(condition.severity, state.language);
            
            resultCard.innerHTML = `
              <div class="result-header">
                <span class="result-severity severity-${condition.severity}">
                  ${severityText}
                </span>
                <h3>${condition.name}</h3>
              </div>
              <div class="result-body">
                <p class="result-description">${condition.description}</p>
                ${remediesHTML}
                ${doctorHTML}
              </div>
            `;
            
            resultsContainer.appendChild(resultCard);
          });
        }
        
        // Add symptom remedies
        if (state.assessment.selectedSymptoms.length > 0) {
          state.assessment.selectedSymptoms.forEach(symptomId => {
            const symptom = symptoms.find(s => s.id === symptomId);
            if (symptom && symptom.remedies && symptom.remedies.length > 0) {
              const remedyCard = document.createElement('div');
              remedyCard.className = 'remedy-card';
              
              remedyCard.innerHTML = `
                <div class="remedy-header">
                  <div class="remedy-icon">
                    <i class="fas ${symptom.icon || 'fa-notes-medical'}"></i>
                  </div>
                  <h3>${symptom.name} ${getText('remediesFor', state.language)}</h3>
                </div>
                <div class="remedy-body">
                  <ul class="remedies-list">
                    ${symptom.remedies.map(remedy => `<li>${remedy}</li>`).join('')}
                  </ul>
                </div>
              `;
              
              remediesContainer.appendChild(remedyCard);
            }
          });
        } else {
          remediesContainer.innerHTML = `
            <div class="no-remedies">
              <p>No symptoms selected to show remedies for.</p>
            </div>
          `;
        }
      }
      
      // Handle start over
      function handleStartOver() {
        // Reset assessment state
        state.assessment = {
          selectedSymptoms: [],
          detailedAnswers: [],
          possibleConditions: []
        };
        
        // Navigate back to symptoms page
        navigateTo('symptoms-page');
        
        // Repopulate symptoms grid
        populateSymptomsGrid();
        
        showToast(getText('startOver', state.language), 'success');
      }
      
      // Navigation between pages
      function navigateTo(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
          page.classList.add('hidden');
        });
        
        // Show requested page
        document.getElementById(pageId).classList.remove('hidden');
        
        // Apply language to newly visible page
        applyLanguage();
        
        // Scroll to top
        window.scrollTo(0, 0);
      }
      
      // Toast notification
      function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        const toastIcon = document.getElementById('toast-icon');
        
        // Set message content
        toastMessage.textContent = message;
        
        // Set icon based on type
        if (type === 'success') {
          toastIcon.className = 'fas fa-check';
        } else if (type === 'error') {
          toastIcon.className = 'fas fa-exclamation-circle';
        } else {
          toastIcon.className = 'fas fa-info-circle';
        }
        
        // Show toast
        toast.classList.add('active');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
          toast.classList.remove('active');
        }, 3000);
      }
      
      // Helper function to get text in the current language
      function getText(key, lang = state.language) {
        return translations[lang]?.[key] || translations['en']?.[key] || key;
      }
      // Severity levels
