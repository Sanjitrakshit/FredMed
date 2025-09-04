const symptoms = [
    { 
      id: 'fever', 
      name: 'Fever', 
      icon: 'fa-thermometer-half',
      remedies: [
        'Stay hydrated with water and clear fluids',
        'Use a cold compress on the forehead',
        'Take a lukewarm bath',
        'Rest and avoid physical exertion',
        'Wear light clothing and use light blankets'
      ]
    },
    { 
      id: 'cough', 
      name: 'Cough', 
      icon: 'fa-lungs',
      remedies: [
        'Drink warm water with honey and lemon',
        'Try ginger tea with a pinch of turmeric',
        'Use a humidifier to moisten dry air',
        'Stay hydrated to thin mucus secretions',
        'Gargle with salt water for throat irritation'
      ]
    },
    { 
      id: 'headache', 
      name: 'Headache', 
      icon: 'fa-head-side-virus',
      remedies: [
        'Apply cold or warm compress to forehead',
        'Rest in a quiet, dark room',
        'Practice relaxation techniques like deep breathing',
        'Stay hydrated and maintain regular meals',
        'Try gentle massage of temples and neck'
      ]
    },
    { 
      id: 'soreThroat', 
      name: 'Sore Throat', 
      icon: 'fa-head-side-cough',
      remedies: [
        'Gargle with warm salt water several times daily',
        'Drink warm fluids like herbal tea with honey',
        'Suck on throat lozenges or hard candies',
        'Use a humidifier to keep air moist',
        'Try a mixture of turmeric and warm milk'
      ]
    },
    { 
      id: 'fatigue', 
      name: 'Fatigue', 
      icon: 'fa-battery-quarter',
      remedies: [
        'Get adequate rest and sleep',
        'Stay hydrated and eat balanced meals',
        'Engage in light physical activity',
        'Try breathing exercises and meditation',
        'Limit caffeine and alcohol consumption'
      ]
    },
    { 
      id: 'bodyAche', 
      name: 'Body Ache', 
      icon: 'fa-user-injured',
      remedies: [
        'Take warm baths with Epsom salt',
        'Apply hot or cold compress to affected areas',
        'Practice gentle stretching exercises',
        'Try aromatherapy with essential oils',
        'Ensure adequate rest between activities'
      ]
    },
    { 
      id: 'nausea', 
      name: 'Nausea', 
      icon: 'fa-face-dizzy',
      remedies: [
        'Consume ginger tea or ginger candies',
        'Eat small, frequent meals instead of large ones',
        'Stay hydrated with clear fluids',
        'Try peppermint tea or aromatherapy',
        'Avoid foods with strong smells'
      ]
    },
    { 
      id: 'diarrhea', 
      name: 'Diarrhea', 
      icon: 'fa-toilet',
      remedies: [
        'Stay hydrated with water and electrolyte solutions',
        'Eat bland foods like rice, bananas, and toast',
        'Avoid dairy, caffeine, and spicy foods',
        'Try probiotic foods like yogurt',
        'Drink chamomile or black tea'
      ]
    },
    { 
      id: 'shortnessOfBreath', 
      name: 'Shortness of Breath', 
      icon: 'fa-lungs-virus',
      remedies: [
        'Practice pursed lip breathing',
        'Use relaxation techniques and controlled breathing',
        'Sit upright to allow better lung expansion',
        'Avoid extreme temperatures',
        'Use a fan to circulate air'
      ]
    },
    { 
      id: 'chestPain', 
      name: 'Chest Pain', 
      icon: 'fa-heart-broken',
      remedies: [
        'Rest and avoid strenuous activity',
        'Practice deep breathing exercises',
        'Track triggers that may cause pain',
        'Maintain good posture',
        'Avoid large, heavy meals'
      ]
    },
    { 
      id: 'dizziness', 
      name: 'Dizziness', 
      icon: 'fa-head-side',
      remedies: [
        'Sit or lie down immediately',
        'Drink plenty of water to stay hydrated',
        'Move slowly when changing positions',
        'Avoid sudden head movements',
        'Ensure adequate rest and sleep'
      ]
    },
    { 
      id: 'rash', 
      name: 'Rash', 
      icon: 'fa-allergies',
      remedies: [
        'Apply cold compress to soothe irritation',
        'Use aloe vera gel on affected areas',
        'Try an oatmeal bath for overall relief',
        'Keep the area clean and dry',
        'Avoid scratching to prevent further irritation'
      ]
    },
    { 
      id: 'stomachPain', 
      name: 'Stomach Pain', 
      icon: 'fa-stomach',
      remedies: [
        'Apply a warm compress to the abdomen',
        'Try peppermint or chamomile tea',
        'Rest and avoid heavy meals',
        'Stay hydrated with clear fluids',
        'Practice deep breathing to relax abdominal muscles'
      ]
    },
    { 
      id: 'jointPain', 
      name: 'Joint Pain', 
      icon: 'fa-bone',
      remedies: [
        'Apply warm compress to affected joints',
        'Try gentle stretching exercises',
        'Use turmeric or ginger in your diet',
        'Maintain a healthy weight to reduce joint stress',
        'Consider omega-3 rich foods like fatty fish'
      ]
    },
    { 
      id: 'eyeIrritation', 
      name: 'Eye Irritation', 
      icon: 'fa-eye',
      remedies: [
        'Rest your eyes from screens and bright light',
        'Apply cool compress to closed eyes',
        'Use artificial tears for dryness',
        'Clean eyelids gently with baby shampoo',
        'Avoid touching or rubbing eyes'
      ]
    },
    { 
      id: 'constipation', 
      name: 'Constipation', 
      icon: 'fa-toilet-paper',
      remedies: [
        'Increase fiber intake through fruits and vegetables',
        'Stay hydrated by drinking plenty of water',
        'Exercise regularly to stimulate bowel movements',
        'Try warm prune juice or fiber supplements',
        'Maintain a regular bathroom schedule'
      ]
    }
  ];
  
  // Detailed symptom questions
  const detailedSymptoms = [
    {
      id: 'fever-severity',
      parentId: 'fever',
      question: 'How severe is your fever?',
      options: ['Mild (37.5-38°C)', 'Moderate (38.1-39°C)', 'High (above 39°C)']
    },
    {
      id: 'fever-duration',
      parentId: 'fever',
      question: 'How long have you had this fever?',
      options: ['Less than 24 hours', '1-3 days', 'More than 3 days']
    },
    {
      id: 'fever-pattern',
      parentId: 'fever',
      question: 'How would you describe the fever pattern?',
      options: ['Continuous (stays high all day)', 'Intermittent (comes and goes)', 'Worse at night', 'Worse during the day']
    },
    {
      id: 'fever-response',
      parentId: 'fever',
      question: 'How does the fever respond to over-the-counter medication?',
      options: ['Reduces quickly', 'Reduces temporarily', 'Little to no effect', 'Haven\'t tried medication']
    },
    {
      id: 'cough-type',
      parentId: 'cough',
      question: 'What type of cough do you have?',
      options: ['Dry cough', 'Wet/productive cough', 'Both']
    },
    {
      id: 'cough-duration',
      parentId: 'cough',
      question: 'How long have you been coughing?',
      options: ['Less than a day', '1-3 days', '4-7 days', 'More than a week']
    },
    {
      id: 'cough-timing',
      parentId: 'cough',
      question: 'When is your cough most noticeable?',
      options: ['Morning', 'Evening/night', 'After exercise/physical activity', 'All the time']
    },
    {
      id: 'cough-trigger',
      parentId: 'cough',
      question: 'What seems to trigger your coughing?',
      options: ['Cold air', 'Physical activity', 'Lying down', 'Talking', 'No obvious trigger']
    },
    {
      id: 'headache-location',
      parentId: 'headache',
      question: 'Where is your headache located?',
      options: ['Front of the head', 'Back of the head', 'One side only', 'All over']
    },
    {
      id: 'headache-severity',
      parentId: 'headache',
      question: 'How would you rate your headache?',
      options: ['Mild', 'Moderate', 'Severe']
    },
    {
      id: 'headache-nature',
      parentId: 'headache',
      question: 'How would you describe the pain?',
      options: ['Throbbing/pulsing', 'Constant pressure', 'Sharp/stabbing', 'Dull ache']
    },
    {
      id: 'headache-triggers',
      parentId: 'headache',
      question: 'Are there any factors that trigger or worsen your headache?',
      options: ['Bright lights', 'Loud noises', 'Physical activity', 'Stress', 'No obvious triggers']
    },
    {
      id: 'soreThroat-severity',
      parentId: 'soreThroat',
      question: 'How severe is your sore throat?',
      options: ['Mild discomfort', 'Painful to swallow', 'Very painful, difficulty speaking']
    },
    {
      id: 'soreThroat-duration',
      parentId: 'soreThroat',
      question: 'How long have you had a sore throat?',
      options: ['Less than a day', '1-2 days', '3-5 days', 'More than 5 days']
    },
    {
      id: 'soreThroat-appearance',
      parentId: 'soreThroat',
      question: 'Have you noticed any changes in the appearance of your throat?',
      options: ['Redness', 'White/yellow patches', 'Swollen tonsils', 'Not observed']
    },
    {
      id: 'fatigue-severity',
      parentId: 'fatigue',
      question: 'How would you describe your fatigue?',
      options: ['Slightly tired', 'Moderate fatigue', 'Extreme exhaustion']
    },
    {
      id: 'fatigue-duration',
      parentId: 'fatigue',
      question: 'How long have you been experiencing fatigue?',
      options: ['A few days', 'About a week', 'Several weeks', 'A month or longer']
    },
    {
      id: 'fatigue-impact',
      parentId: 'fatigue',
      question: 'How is the fatigue affecting your daily activities?',
      options: ['Minimal impact', 'Moderate difficulty with activities', 'Unable to perform normal activities']
    },
    {
      id: 'bodyAche-location',
      parentId: 'bodyAche',
      question: 'Where are you experiencing body aches?',
      options: ['Specific area (back, limbs, etc.)', 'Multiple areas', 'All over body']
    },
    {
      id: 'bodyAche-severity',
      parentId: 'bodyAche',
      question: 'How severe are your body aches?',
      options: ['Mild discomfort', 'Moderate pain', 'Severe pain']
    },
    {
      id: 'bodyAche-timing',
      parentId: 'bodyAche',
      question: 'When do your body aches feel worst?',
      options: ['Morning', 'Evening', 'After physical activity', 'Constantly the same']
    },
    {
      id: 'nausea-severity',
      parentId: 'nausea',
      question: 'How severe is your nausea?',
      options: ['Mild queasiness', 'Moderate nausea', 'Severe nausea with vomiting']
    },
    {
      id: 'nausea-timing',
      parentId: 'nausea',
      question: 'When do you experience nausea?',
      options: ['After eating', 'On empty stomach', 'In the morning', 'Throughout the day']
    },
    {
      id: 'nausea-triggers',
      parentId: 'nausea',
      question: 'Do any of these trigger or worsen your nausea?',
      options: ['Certain foods', 'Strong smells', 'Movement/travel', 'Stress', 'No obvious triggers']
    },
    {
      id: 'diarrhea-frequency',
      parentId: 'diarrhea',
      question: 'How frequently are you experiencing diarrhea?',
      options: ['1-2 times a day', '3-5 times a day', 'More than 5 times a day']
    },
    {
      id: 'diarrhea-duration',
      parentId: 'diarrhea',
      question: 'How long have you had diarrhea?',
      options: ['Less than a day', '1-2 days', '3-5 days', 'More than 5 days']
    },
    {
      id: 'diarrhea-consistency',
      parentId: 'diarrhea',
      question: 'How would you describe the consistency?',
      options: ['Loose', 'Watery', 'Contains mucus or blood']
    },
    {
      id: 'shortnessOfBreath-severity',
      parentId: 'shortnessOfBreath',
      question: 'How severe is your shortness of breath?',
      options: ['Only with exertion', 'Occurs at rest', 'Difficulty completing sentences']
    },
    {
      id: 'shortnessOfBreath-onset',
      parentId: 'shortnessOfBreath',
      question: 'How did the shortness of breath start?',
      options: ['Suddenly', 'Gradually over hours', 'Developed over days']
    },
    {
      id: 'shortnessOfBreath-position',
      parentId: 'shortnessOfBreath',
      question: 'Does your breathing difficulty change with body position?',
      options: ['Worse when lying down', 'Better when sitting up', 'No difference with position']
    },
    {
      id: 'chestPain-character',
      parentId: 'chestPain',
      question: 'How would you describe your chest pain?',
      options: ['Sharp/stabbing', 'Pressure/squeezing', 'Burning', 'Dull ache']
    },
    {
      id: 'chestPain-location',
      parentId: 'chestPain',
      question: 'Where exactly is the chest pain located?',
      options: ['Center of chest', 'Left side', 'Right side', 'All over chest']
    },
    {
      id: 'chestPain-radiation',
      parentId: 'chestPain',
      question: 'Does the pain spread to other areas?',
      options: ['Spreads to left arm', 'Spreads to neck/jaw', 'Spreads to back', 'No spreading']
    },
    {
      id: 'dizziness-character',
      parentId: 'dizziness',
      question: 'How would you describe your dizziness?',
      options: ['Lightheadedness', 'Room spinning (vertigo)', 'Unsteadiness', 'Feeling faint']
    },
    {
      id: 'dizziness-triggers',
      parentId: 'dizziness',
      question: 'What triggers or worsens your dizziness?',
      options: ['Standing up quickly', 'Head movements', 'Specific positions', 'No obvious trigger']
    },
    {
      id: 'dizziness-associated',
      parentId: 'dizziness',
      question: 'Any other symptoms occurring with the dizziness?',
      options: ['Nausea', 'Hearing changes', 'Vision changes', 'No other symptoms']
    },
    {
      id: 'rash-appearance',
      parentId: 'rash',
      question: 'How would you describe the rash?',
      options: ['Flat red patches', 'Raised bumps', 'Blisters', 'Hives/welts']
    },
    {
      id: 'rash-location',
      parentId: 'rash',
      question: 'Where is the rash located?',
      options: ['Face/neck', 'Trunk/chest/back', 'Arms/legs', 'All over body']
    },
    {
      id: 'rash-itching',
      parentId: 'rash',
      question: 'Is the rash itchy?',
      options: ['Not itchy', 'Mildly itchy', 'Very itchy', 'Painful rather than itchy']
    },
    {
      id: 'stomachPain-location',
      parentId: 'stomachPain',
      question: 'Where is your stomach pain located?',
      options: ['Upper abdomen', 'Lower abdomen', 'Right side', 'Left side', 'All over abdomen']
    },
    {
      id: 'stomachPain-character',
      parentId: 'stomachPain',
      question: 'How would you describe the pain?',
      options: ['Cramping', 'Sharp/stabbing', 'Burning', 'Dull/achy']
    },
    {
      id: 'stomachPain-timing',
      parentId: 'stomachPain',
      question: 'When does the stomach pain occur?',
      options: ['After eating', 'On empty stomach', 'No relation to food', 'During night']
    },
    {
      id: 'jointPain-location',
      parentId: 'jointPain',
      question: 'Which joints are painful?',
      options: ['Small joints (fingers, toes)', 'Large joints (knees, hips)', 'Multiple joints', 'Single joint only']
    },
    {
      id: 'jointPain-swelling',
      parentId: 'jointPain',
      question: 'Is there swelling in the painful joint(s)?',
      options: ['No visible swelling', 'Mild swelling', 'Significant swelling']
    },
    {
      id: 'jointPain-movement',
      parentId: 'jointPain',
      question: 'How does movement affect the joint pain?',
      options: ['Pain improves with movement', 'Pain worsens with movement', 'No change with movement']
    },
    {
      id: 'eyeIrritation-type',
      parentId: 'eyeIrritation',
      question: 'What type of eye irritation are you experiencing?',
      options: ['Redness', 'Itchiness', 'Burning sensation', 'Foreign body sensation']
    },
    {
      id: 'eyeIrritation-discharge',
      parentId: 'eyeIrritation',
      question: 'Is there any discharge from your eyes?',
      options: ['No discharge', 'Clear watery discharge', 'Yellow/green discharge']
    },
    {
      id: 'eyeIrritation-light',
      parentId: 'eyeIrritation',
      question: 'Are your eyes sensitive to light?',
      options: ['No sensitivity', 'Mild sensitivity', 'Severe sensitivity']
    },
    {
      id: 'constipation-frequency',
      parentId: 'constipation',
      question: 'How often are you having bowel movements?',
      options: ['Every other day', 'Once every 3-4 days', 'Less than once a week']
    },
    {
      id: 'constipation-consistency',
      parentId: 'constipation',
      question: 'How would you describe your stool consistency?',
      options: ['Hard and dry', 'Lumpy', 'Normal but infrequent']
    },
    {
      id: 'constipation-straining',
      parentId: 'constipation',
      question: 'Do you need to strain during bowel movements?',
      options: ['Rarely', 'Occasionally', 'Frequently', 'Always']
    }
  ];
  
  // Possible conditions based on symptoms
  const conditions = [
    {
      id: 'common-cold',
      name: 'Common Cold',
      symptoms: ['cough', 'soreThroat', 'fever'],
      severity: 'mild',
      description: 'A viral infection of the upper respiratory tract, causing nasal congestion, sore throat and coughing.',
      homeRemedies: [
        'Rest and stay hydrated',
        'Gargle with salt water for sore throat relief',
        'Use honey and lemon in warm water',
        'Use a humidifier or take steamy showers'
      ],
      consultDoctor: false
    },
    {
      id: 'flu',
      name: 'Influenza (Flu)',
      symptoms: ['fever', 'bodyAche', 'fatigue', 'headache', 'cough'],
      severity: 'moderate',
      description: 'A contagious respiratory illness caused by influenza viruses. More intense than a common cold.',
      homeRemedies: [
        'Rest and stay hydrated',
        'Take over-the-counter pain relievers',
        'Stay warm and use a humidifier',
        'Drink warm broth or soup',
        'Try ginger tea with honey for sore throat'
      ],
      consultDoctor: true
    },
    {
      id: 'migraine',
      name: 'Migraine',
      symptoms: ['headache', 'nausea', 'dizziness'],
      severity: 'moderate',
      description: 'A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.',
      homeRemedies: [
        'Rest in a dark, quiet room',
        'Apply cold or warm compresses to the head',
        'Drink ginger tea for nausea',
        'Practice relaxation techniques',
        'Stay hydrated and maintain regular meals'
      ],
      consultDoctor: true
    },
    {
      id: 'food-poisoning',
      name: 'Food Poisoning',
      symptoms: ['nausea', 'diarrhea', 'bodyAche', 'fatigue', 'stomachPain'],
      severity: 'moderate',
      description: 'An illness caused by eating contaminated food, with symptoms including nausea, vomiting and diarrhea.',
      homeRemedies: [
        'Stay hydrated with water and electrolyte solutions',
        'Eat bland foods like rice, bananas, and toast',
        'Get plenty of rest',
        'Try ginger or peppermint tea for nausea',
        'Avoid dairy, caffeine and spicy foods'
      ],
      consultDoctor: true
    },
    {
      id: 'asthma',
      name: 'Asthma Attack',
      symptoms: ['shortnessOfBreath', 'cough', 'chestPain'],
      severity: 'severe',
      description: 'A condition where your airways narrow and swell and may produce extra mucus, causing breathing difficulty.',
      homeRemedies: [
        'Use prescribed rescue inhaler',
        'Sit upright to ease breathing',
        'Practice pursed lip breathing',
        'Move away from any triggers',
        'Stay calm and take slow, measured breaths'
      ],
      consultDoctor: true
    },
    {
      id: 'seasonal-allergies',
      name: 'Seasonal Allergies',
      symptoms: ['cough', 'soreThroat', 'eyeIrritation', 'headache'],
      severity: 'mild',
      description: 'An allergic reaction to environmental factors such as pollen, causing respiratory and eye symptoms.',
      homeRemedies: [
        'Stay indoors when pollen counts are high',
        'Use air purifiers in your home',
        'Rinse sinuses with saline solution',
        'Apply cold compress to itchy eyes',
        'Shower after being outdoors to remove allergens'
      ],
      consultDoctor: false
    },
    {
      id: 'gastritis',
      name: 'Gastritis',
      symptoms: ['nausea', 'stomachPain', 'dizziness'],
      severity: 'moderate',
      description: 'Inflammation of the stomach lining, causing pain, nausea, and sometimes vomiting.',
      homeRemedies: [
        'Eat smaller, more frequent meals',
        'Avoid spicy, acidic foods and alcohol',
        'Try ginger or chamomile tea',
        'Drink plenty of water',
        'Use licorice root supplements (if appropriate)'
      ],
      consultDoctor: true
    },
    {
      id: 'tension-headache',
      name: 'Tension Headache',
      symptoms: ['headache', 'neckPain', 'fatigue'],
      severity: 'mild',
      description: 'A common headache characterized by mild to moderate pain, often described as feeling like a tight band around the head.',
      homeRemedies: [
        'Apply warm or cold compress to neck and shoulders',
        'Practice relaxation techniques like deep breathing',
        'Take breaks from screen time',
        'Ensure proper posture',
        'Get adequate sleep and stay hydrated'
      ],
      consultDoctor: false
    },
    {
      id: 'arthritis',
      name: 'Arthritis Flare-Up',
      symptoms: ['jointPain', 'bodyAche', 'fatigue'],
      severity: 'moderate',
      description: 'Inflammation of one or more joints, causing pain and stiffness that can worsen with age.',
      homeRemedies: [
        'Apply hot or cold packs to affected joints',
        'Gentle exercises like swimming or walking',
        'Try turmeric or ginger supplements',
        'Maintain healthy weight to reduce joint stress',
        'Use assistive devices when needed'
      ],
      consultDoctor: true
    },
    {
      id: 'conjunctivitis',
      name: 'Conjunctivitis (Pink Eye)',
      symptoms: ['eyeIrritation', 'fever', 'headache'],
      severity: 'mild',
      description: 'Inflammation of the conjunctiva, the transparent membrane covering the white part of the eye.',
      homeRemedies: [
        'Apply cold compress to reduce swelling',
        'Avoid touching or rubbing eyes',
        'Wash hands frequently',
        'Remove contact lenses until healed',
        'Use separate towels and washcloths'
      ],
      consultDoctor: false
    },
    {
      id: 'ibs',
      name: 'Irritable Bowel Syndrome',
      symptoms: ['stomachPain', 'constipation', 'diarrhea', 'nausea'],
      severity: 'moderate',
      description: 'A common disorder that affects the large intestine, causing abdominal pain, cramping, bloating, and changes in bowel movements.',
      homeRemedies: [
        'Identify and avoid trigger foods',
        'Increase fiber intake gradually',
        'Practice stress management techniques',
        'Try peppermint oil or tea',
        'Regular exercise and adequate hydration'
      ],
      consultDoctor: true
    },
    {
      id: 'common-cold-2',
      name: 'Common Cold with Sinus Involvement',
      symptoms: ['cough', 'soreThroat', 'headache', 'fever'],
      severity: 'mild',
      description: 'A viral infection affecting the upper respiratory tract with sinus congestion and pressure.',
      homeRemedies: [
        'Steam inhalation with eucalyptus oil',
        'Nasal irrigation with saline solution',
        'Elevate head while sleeping',
        'Stay hydrated and rest',
        'Apply warm compress over sinuses'
      ],
      consultDoctor: false
    }
  ];
  
  // Helper functions
  function getDetailedSymptomsForSelection(selectedSymptomIds) {
    return detailedSymptoms.filter(ds => selectedSymptomIds.includes(ds.parentId));
  }
  
  function analyzeSymptoms(selectedSymptoms, detailedAnswers) {
    // Simple algorithm to match symptoms to conditions
    return conditions.filter(condition => {
      const matchingSymptoms = condition.symptoms.filter(s => selectedSymptoms.includes(s));
      // If more than half of the condition's symptoms match, include it
      return matchingSymptoms.length >= Math.ceil(condition.symptoms.length / 2);
    }).sort((a, b) => {
      // Sort by severity - severe first
      const severityOrder = { 'severe': 0, 'moderate': 1, 'mild': 2 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
  }
  