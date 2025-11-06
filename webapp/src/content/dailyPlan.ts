export const dashboardFocusAreas = [
  { name: 'Strength Training', status: 'Lower body today', color: 'bg-primary/10 text-primary' },
  { name: 'Mobility', status: '8 minutes of flows', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Mindfulness', status: '10 min breathwork', color: 'bg-amber-100 text-amber-700' }
];

export const energyChecklist = [
  '500ml of water on wake-up',
  'High-protein breakfast prepped',
  'Lunch macro plan confirmed',
  'Sleep: 7h 45m, readiness 82%'
];

export const readinessMetrics = [
  { label: 'HRV Baseline', value: 78, goal: 90, units: '' },
  { label: 'Resting HR', value: 52, goal: 48, units: 'bpm' },
  { label: 'Sleep Debt', value: 1, goal: 7, units: 'h' }
];

export const eveningReset = [
  'Mobility cooldown: 12 minutes',
  'Foam roll quads & lats',
  'Meal prep breakfast + recovery smoothie',
  'Reflect: biggest win + tomorrow\'s focus'
];

export const workoutBlocks = [
  {
    label: 'Prime',
    duration: '10 min',
    focus: 'Mobility & activation',
    checklist: ['Cat-cow x 10', 'Worlds greatest stretch x 8/side', 'Glute bridge x 15 + iso hold', 'Banded walks x 12 steps']
  },
  {
    label: 'Strength',
    duration: '35 min',
    focus: 'Lower body power',
    checklist: [
      'Trap bar deadlift 4x5 @ RPE8',
      'Bulgarian split squat 3x8/side',
      'Nordic lowers 3x6 with assist',
      'Single-leg hip thrust 3x12/side'
    ]
  },
  {
    label: 'Capacity',
    duration: '12 min',
    focus: 'Eccentric control & core',
    checklist: ['Tempo goblet squat 3x10', 'Hanging knee raises 3x12', 'Pallof press ISO 3x30s/side']
  }
];

export const weeklySplits = [
  { day: 'Mon', stimulus: 'Lower strength', intent: 'Heavy hinge + posterior chain' },
  { day: 'Tue', stimulus: 'Conditioning', intent: 'Zone 2 + strides' },
  { day: 'Wed', stimulus: 'Upper strength', intent: 'Pull priority' },
  { day: 'Thu', stimulus: 'Mobility & core', intent: 'Restore + stability' },
  { day: 'Fri', stimulus: 'Full body power', intent: 'Contrast training' },
  { day: 'Sat', stimulus: 'Endurance play', intent: 'Trail run or swim' },
  { day: 'Sun', stimulus: 'Reset', intent: 'Active recovery walk' }
];

export const macroTargets = [
  { label: 'Protein', value: 145, goal: 160, units: 'g' },
  { label: 'Carbs', value: 210, goal: 240, units: 'g' },
  { label: 'Fats', value: 58, goal: 70, units: 'g' },
  { label: 'Hydration', value: 2.8, goal: 3.5, units: 'L' }
];

export const meals = [
  {
    name: 'Kickstart Shake',
    time: '07:00',
    highlight: '30g protein | 10g collagen | greens',
    items: ['Whey isolate + cold brew', 'Frozen berries + spinach', 'Creatine + electrolytes']
  },
  {
    name: 'Lunch Power Bowl',
    time: '12:30',
    highlight: 'Balanced macros, anti-inflammatory',
    items: ['Salmon, quinoa, roasted veg', 'Avocado, pickled onions', 'Citrus dressing + seeds']
  },
  {
    name: 'Post-Training',
    time: '16:15',
    highlight: 'Rapid recovery fuel',
    items: ['Greek yogurt parfait', 'Honey, granola, blueberries', 'BCAA hydration mix']
  },
  {
    name: 'Evening Recharge',
    time: '19:00',
    highlight: 'Light, micronutrient dense',
    items: ['Grilled chicken lettuce wraps', 'Kimchi + ginger tea', 'Magnesium glycinate']
  }
];

export const groceryFocus = [
  'Protein: salmon, turkey, tempeh',
  'Produce: rainbow veg, dark berries',
  'Smart carbs: quinoa, basmati, oats',
  'Extras: bone broth, chia, adaptogens'
];

export const trendMetrics = [
  { label: 'Bodyweight', value: 78.4, goal: 76.5, units: 'kg' },
  { label: 'VO₂ Max', value: 46, goal: 50, units: '' },
  { label: 'Back Squat 1RM', value: 140, goal: 150, units: 'kg' }
];

export const milestoneLog = [
  { date: 'Apr 02', win: 'HRV 85 — best in 30 days', anchor: 'Kept caffeine pre-10AM' },
  { date: 'Apr 10', win: '5k TT 21:12', anchor: 'Negative split executed' },
  { date: 'Apr 18', win: 'Trap bar deadlift 4x5 @ 165kg', anchor: 'Perfect tempo & bracing' },
  { date: 'Apr 23', win: 'Zone 2 compliance 6/7 days', anchor: 'Evening walks locked' }
];

export const recoveryScore = [
  { day: 'Mon', score: 83 },
  { day: 'Tue', score: 79 },
  { day: 'Wed', score: 88 },
  { day: 'Thu', score: 92 },
  { day: 'Fri', score: 85 },
  { day: 'Sat', score: 90 },
  { day: 'Sun', score: 95 }
];

export const habitLoops = [
  {
    title: 'Morning Launch',
    description: 'Create momentum within 30 minutes of waking',
    steps: ['Sunlight exposure 10 min', 'Mobility wake-up flow 5 min', 'Journal: focus + gratitude']
  },
  {
    title: 'Midday Reset',
    description: 'Beat the slump and regulate stress',
    steps: ['Walk + nasal breathing 8 min', 'Protein-centered lunch', 'Inbox zero pulse check']
  },
  {
    title: 'Night Shutdown',
    description: 'Win sleep quality before lights out',
    steps: ['Hot shower + foam roll 10 min', 'Magnesium + herbal tea', 'No screens after 21:15']
  }
];

export const mindfulnessStack = [
  {
    name: 'Box Breathing',
    duration: '4 cycles • 5 min',
    cue: 'Before high output sessions'
  },
  {
    name: 'Body Scan',
    duration: '6 min',
    cue: 'Post-training decompress'
  },
  {
    name: 'Success Visual',
    duration: '3 min',
    cue: 'Evening reflection'
  }
];

export const recoveryProtocols = [
  'Cold plunge 2x weekly (2 min @ 10°C)',
  'Sports massage every other Friday',
  'Daily step target 12k (post-dinner walks)',
  'Red light therapy 3x week (10 min sessions)'
];
