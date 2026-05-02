import {
  CheckCircle,
  Clock,
  Droplet,
  Leaf,
  Scale,
  Utensils,
  Heart,
  MapPin,
  Wheat,
  Circle,
  Flame,
  UtensilsCrossed,
  ChefHat,
  Smile,
  Brain,
  FileText,
  Bell,
  BookUp,
} from "lucide-react";

import support1 from "../assets/image/Support/Support_1.png";
import support2 from "../assets/image/Support/Support_2.png";
import support3 from "../assets/image/Support/Support_3.png";
import support4 from "../assets/image/Support/Support_4.png";
import som1 from "../assets/image/Support/som1.png";
import som2 from "../assets/image/Support/som2.png";

import popular1 from "../assets/image/Popular/P_1.png";
import popular2 from "../assets/image/Popular/P_2.png";
import popular3 from "../assets/image/Popular/P_3.png";
import popular4 from "../assets/image/Popular/P_4.png";
import popular5 from "../assets/image/Popular/P_5.png";
import popular6 from "../assets/image/Popular/P_6.png";

import balanced_I from "../assets/image/Balanced/Balaced.png";

import Breakfast from "../assets/image/Recips/Breakfast.C.png";
import Dinner from "../assets/image/Recips/Dinner.C.png";
import Gluten from "../assets/image/Recips/Gluten.C.png";
import Lunch from "../assets/image/Recips/Lunch.C.png";
import Quick from "../assets/image/Recips/Quick.C.png";
import Snacks from "../assets/image/Recips/Snacks.C.png";
import Vegan from "../assets/image/Recips/Vegan.C.png";
import Vegetarian from "../assets/image/Recips/Vegetarian.C.png";

import Bowl from "../assets/image/Recips/Bowl.png";
import Salsa from "../assets/image/Recips/Salsa.png";
import Pudding from "../assets/image/Recips/Pudding.png";

import mea from "../assets/image/Recips/meal.png";

import stress from "../assets/image/stress/stress.png";

import m1 from "../assets/image/movements/m1.png";
import m2 from "../assets/image/movements/m2.png";
import m3 from "../assets/image/movements/m3.png";
import m4 from "../assets/image/movements/m4.png";

export const WeightLossTips = [
  {
    Icon: CheckCircle,
    title: "Set Realistic Goals",
    description:
      "Aim for 1–2 pounds per week of weight loss. This pace is sustainable and helps preserve muscle mass while losing fat.",
  },
  {
    Icon: Scale,
    title: "Create a Calorie Deficit",
    description:
      "Consume fewer calories than you burn. A deficit of 500–750 calories per day is generally effective for sustainable weight loss.",
  },
  {
    Icon: Leaf,
    title: "Focus on Nutrient Density",
    description:
      "Choose foods that provide the most nutrients for the fewest calories. This helps you feel satisfied while eating less.",
  },
  {
    Icon: Utensils,
    title: "Portion Control",
    description:
      "Be mindful of portion sizes. Using smaller plates, measuring servings, and eating slowly can help prevent overeating.",
  },
  {
    Icon: Droplet,
    title: "Stay Hydrated",
    description:
      "Drink plenty of water. Sometimes thirst is mistaken for hunger, and staying hydrated can help control appetite.",
  },
  {
    Icon: Clock,
    title: "Consistency is Key",
    description:
      "Maintain consistent eating patterns. Skipping meals often leads to overeating later and can slow metabolism.",
  },
];

export const supportLoss = [
  {
    image: support1,
    title: "Lean Proteins",
    description:
      "Chicken breast, turkey, fish, tofu, legumes, and low-fat dairy help build muscle and keep you full longer.",
  },
  {
    image: support4,
    title: "Non-Starchy Vegetables",
    description:
      "Broccoli, spinach, kale, bell peppers, and cauliflower are low in calories but high in fiber and nutrients.",
  },
  {
    image: support3,
    title: "Whole Grains",
    description:
      "Quinoa, brown rice, oats, and barley provide fiber and sustained energy without spiking blood sugar.",
  },
  {
    image: support2,
    title: "Healthy Fats",
    description:
      "Avocados, nuts, seeds, and olive oil provide essential fatty acids and help with nutrient absorption.",
  },
];

export const sample = [
  {
    title: "Breakfast",
    desc1: "Greek yogurt with berries and a tablespoon of honey",
    desc2: "Overnight oats with almond milk and chia seeds",
    desc3: "Vegetable omelet with whole grain toast",
  },
  {
    title: "Lunch",
    desc1: "Grilled chicken salad with olive oil dressing",
    desc2: "Quinoa bowl with roasted vegetables and chickpeas",
    desc3: "Turkey and avocado wrap with side salad",
  },
  {
    title: "Dinner",
    desc1: "Baked salmon with steamed broccoli and sweet potato",
    desc2: "Stir-fried tofu with mixed vegetables and brown rice",
    desc3: "Lentil soup with a side of mixed greens",
  },
];

export const success = [
  {
    image: som1,
    title: "Sarah J.",
    subTitle: "Lost 32 pounds in 6 months",
    description:
      "“NutriTracker changed my relationship with food. The meal tracking made me aware of my portions, and the personalized recommendations helped me make better choices. I’ve never felt healthier!”",
    rating: "★★★★★",
  },
  {
    image: som2,
    title: "Michael T.",
    subTitle: "Lost 45 pounds in 8 months",
    description:
      "“As someone who travels frequently for work, eating healthy was always a challenge. The app’s restaurant suggestions and meal planning features made it so much easier to stay on track, even on the road.”",
    rating: "★★★★★",
  },
];

export const popular = [
  {
    image: popular1,
    title: "Mediterranean Diet",
    description:
      "Focuses on whole foods, fruits, vegetables, whole grains, and healthy fats \nlike olive oil.",
    detail1: "Heart-Healthy",
    detail2: "Anti-Inflammatory",
    detail3: "Sustainable",
  },
  {
    image: popular2,
    title: "Ketogenic Diet",
    description:
      "Very low-carb, high-fat diet that shifts the body into ketosis. Popular for rapid weight loss.",
    detail1: "Weight-Loss",
    detail2: "Blood Sugar Control",
    detail3: "Hight Fat",
  },
  {
    image: popular3,
    title: "Plant-Based Diet",
    description:
      "Emphasizes plant foods like vegetables, fruits, legumes, nuts, and seeds with minimal animal products.",
    detail1: "Eco-Friendly",
    detail2: "High Fiber",
    detail3: "Nutrient-Rich",
  },
  {
    image: popular4,
    title: "Paleo Diet",
    description:
      "Based on foods presumed to be eaten by early humans, including meats, fish, fruits, and vegetables.",
    detail1: "Whole Foods",
    detail2: "Grain-Free",
    detail3: "Low Sugar",
  },
  {
    image: popular5,
    title: "Intermittent Fasting",
    description:
      "Alternates between periods of eating and fasting to improve metabolic.\n  health.",
    detail1: "Metabolic Health",
    detail2: "Flexible",
    detail3: "Autophagy",
  },
  {
    image: popular6,
    title: "DASH Diet",
    description:
      "Designed to lower blood pressure and improve heart health through balanced nutrition.",
    detail1: "Blood Pressure",
    detail2: "Low Sodium",
    detail3: "Heart Health",
  },
];

export const understanding = [
  {
    Icon: Heart,
    title: "Proteins",
    description:
      "Essential for building and repairing tissues, immune function, and enzyme production.",
    subTitle: "Good Sources:",
    detail1: "Lean meats and poultry",
    detail2: "Fish and seafood",
    detail3: "Eggs and dairy",
    detail4: "Legumes and tofu",
    detail5: "Nuts and seeds",
  },
  {
    Icon: MapPin,
    title: "Carbohydrates",
    description:
      "Primary energy source for the body, especially the brain and during high-intensity exercise.",
    subTitle: "Good Sources:",
    detail1: "Whole grains",
    detail2: "Fruits and vegetables",
    detail3: "Legumes and beans",
    detail4: "Sweet potatoes",
    detail5: "Quinoa and oats",
  },
  {
    Icon: Wheat,
    title: "Fats",
    description:
      "Essential for hormone production, brain health, vitamin absorption, and cell membrane integrity.",
    subTitle: "Good Sources:",
    detail1: "Avocados",
    detail2: "Olive oil and olives",
    detail3: "Nuts and seeds",
    detail4: "Fatty fish (salmon, sardines)",
    detail5: "Eggs and full-fat yogurt",
  },
];

export const balanced = [
  {
    title: "The Plate Method",

    items: [
      {
        image: balanced_I,
      },

      {
        bold: "Fill half your plate with non-starchy vegetables ",
        normal: "- leafy greens, broccoli, peppers, etc.",
      },
      {
        bold: "Fill one quarter with protein ",
        normal: "- chicken, fish, tofu, beans, etc.",
      },
      {
        bold: "Fill one quarter with complex carbohydrates ",
        normal: "- brown rice, quinoa, sweet potato, etc.",
      },
      {
        bold: "Add a small amount of healthy fat ",
        normal: "- olive oil, avocado, nuts, etc.",
      },
    ],
  },

  {
    title: "Meal Prep Tips",

    tips: [
      {
        Icon: Utensils,
        subTitle: "Batch cook staples",
        description:
          "Prepare grains, proteins, and roasted vegetables in advance for quick meal assembly throughout the week.",
      },
      {
        Icon: Leaf,
        subTitle: "Use the rainbow approach",
        description:
          "Include a variety of colorful fruits and vegetables to ensure a wide range of nutrients.",
      },
      {
        Icon: Scale,
        subTitle: "Invest in quality containers",
        description:
          "Use glass containers with compartments to keep foods separate and maintain freshness.",
      },
      {
        Icon: Clock,
        subTitle: "Plan ahead",
        description:
          "Set aside dedicated time each week for meal planning, shopping, and preparation.",
      },

      {
        subTitle1: "Pro Tip",
        description1:
          "Freeze individual portions of soups, stews, and casseroles for quick, nutritious meals when you're short on time.",
      },
    ],
  },
];

export const asked = [
  {
    title: "How many calories should I eat per day?",
    description:
      "Caloric needs vary based on age, sex, weight, height, and activity level. For general guidance, adult women typically need 1,600-2,400 calories per day, while adult men need about 2,000-3,000 calories. Use our calculator for personalized recommendations.",
  },
  {
    title: "What's the difference between simple and complex carbohydrates?",
    description:
      "Simple carbs (like sugar and white flour) are quickly digested and can spike blood sugar. Complex carbs (like whole grains and vegetables) contain fiber, digest more slowly, and provide sustained energy without dramatic blood sugar fluctuations.",
  },
  {
    title: "How much protein do I need?",
    description:
      "The Recommended Dietary Allowance (RDA) is 0.8 grams per kilogram of body weight. However, active individuals, older adults, and those looking to build muscle may benefit from higher intake, typically 1.2-2.0 g/kg of body weight.",
  },
];

export const category = [
  {
    image: Breakfast,
    title: "Breakfast",
    description: "Start your day right",
  },
  {
    image: Lunch,
    title: "Lunch",
    description: "Midday fuel",
  },
  {
    image: Dinner,
    title: "Dinner",
    description: "Evening satisfaction",
  },
  {
    image: Snacks,
    title: "Snacks",
    description: "Healthy bites",
  },
  {
    image: Vegetarian,
    title: "Vegetarian",
    description: "Plant-powered meals",
  },
  {
    image: Vegan,
    title: "Vegan",
    description: "100% plant-based",
  },
  {
    image: Gluten,
    title: "Gluten-Free",
    description: "No gluten, all flavor",
  },
  {
    image: Quick,
    title: "Quick & Easy",
    description: "30 minutes or less",
  },
];

export const fearured = [
  {
    image: Bowl,
    side: "Vegetarian",
    title: "Mediterranean Quinoa Bowl",
    description:
      "Protein-packed quinoa with roasted vegetables, chickpeas, and a lemon-tahini dressing.",
    view: "View Recipe →",
    details: [
      { icon: Clock, text: "25 mins" },
      { icon: Flame, text: "380 cal" },
      { icon: UtensilsCrossed, text: "Easy" },
    ],
  },
  {
    image: Salsa,
    side: "High Protien",
    title: "Grilled Salmon with Avocado Salsa",
    description:
      "Omega-3 rich salmon topped with fresh avocado salsa for a nutrient-dense dinner.",
    view: "View Recipe →",
    details: [
      { icon: Clock, text: "30 mins" },
      { icon: Flame, text: "420 cal" },
      { icon: UtensilsCrossed, text: "Medium" },
    ],
  },
  {
    image: Pudding,
    side: "Vegan",
    title: "Overnight Chia Pudding",
    description:
      "Fiber-rich breakfast with chia seeds, plant milk, and fresh berries for sustained energy.",
    view: "View Recipe →",
    details: [
      { icon: Clock, text: "5 mins + overnight" },
      { icon: Flame, text: "320 cal" },
      { icon: UtensilsCrossed, text: "Easy" },
    ],
  },
];

export const cooking = [
  {
    Icon: ChefHat,
    title: "Knife Skills",
    description:
      "Proper knife techniques are the foundation of efficient cooking. Learn how to chop, dice, julienne, and more.",
    link: "https://www.youtube.com/embed/G-Fg7l7G1zw",
    btn: "Watch Tutorial ",
  },
  {
    Icon: Flame,
    title: "Cooking Methods",
    description:
      "Understanding different cooking methods—sautéing, roasting, steaming, and more—allows you to bring out the best flavors.",
    link: "https://www.youtube.com/embed/2oKbs4jAf7M",
    btn: "Watch Tutorial ",
  },
];

export const meal = {
  title: "Meal Planning Made Simple",
  description:
    "Our meal planning tools help you save time, reduce food waste, and maintain a balanced diet throughout the week.",
  tips: [
    "Customizable weekly meal plans based on your dietary preferences",
    "Automatic grocery lists generated from your selected recipes",
    "Nutritionally balanced meals that meet your health goals",
  ],
  btn: "Try Meal Planning",

  image: mea,
};

export const pro = [
  {
    title: "Prep Before Cooking",
    description:
      "Mise en place (everything in place) is the chef's secret to stress-free cooking. Prepare and measure all ingredients before you start cooking.",
  },
  {
    title: "Season in Layers",
    description:
      "Add seasoning at different stages of cooking rather than all at once to build complex, well-developed flavors.",
  },
  {
    title: "Rest Your Proteins",
    description:
      "Allow meat to rest after cooking to redistribute juices, resulting in more tender and flavorful results.",
  },
];

export const power = [
  {
    Icon: Brain,
    title: "Growth Mindset",
    description:
      "Embrace challenges as opportunities for growth. View setbacks as temporary and valuable learning experiences rather than permanent failures.",
  },
  {
    Icon: Smile,
    title: "Positive Self-Talk",
    description:
      "The way you speak to yourself matters. Replace self-criticism with compassionate, encouraging internal dialogue to build confidence and resilience.",
  },
  {
    Icon: FileText,
    title: "Gratitude Practice",
    description:
      "Regularly acknowledging what you're grateful for shifts focus from what's lacking to what's abundant, fostering contentment and positive emotions.",
  },
];

export const stres = [
  {
    card: [
      {
        image: stress,
        title: "Meditation Practice",
        description:
          "Regular meditation reduces stress hormones, improves focus, and promotes emotional regulation. Even 5-10 minutes daily can make a significant difference.",
      },
    ],
  },

  {
    card2: [
      {
        Icon: Bell,
        title: "Deep Breathing",
        description:
          "Activates the parasympathetic nervous system, triggering relaxation. Try the 4-7-8 technique: inhale for 4 counts, hold for 7, exhale for 8.",
      },

      {
        Icon: BookUp,
        title: "Journaling",
        description:
          "Writing down thoughts and feelings helps process emotions and gain perspective. Spend 10 minutes daily with free-form writing or guided prompts.",
      },
    ],
  },
];

export const sleep = [
  {
    main: [
      {
        title: "The Science of Sleep",
        description:
          "Sleep is not merely rest—it's an active period of restoration and processing. During sleep, your body:",
        list: [
          {
            text: "Repairs tissues and strengthens immune function",
          },
          {
            text: "Consolidates memories and learning",
          },
          {
            text: "Regulates hormones that control appetite and metabolism",
          },
          {
            text: "Clears waste products from the brain",
          },
          {
            text: "Balances emotional regulation",
          },
        ],
      },
    ],

    tips: [
      {
        title: "Sleep Hygiene Practices",
      },

      {
        Subtitles: " Consistent Schedule",
        description:
          "Go to bed and wake up at the same time daily, even on weekends, to regulate your body's internal clock.",
      },
      {
        Subtitles: "Optimize Your Environment",
        description:
          "Keep your bedroom cool (60–67°F), dark, and quiet. Consider blackout curtains, white noise machines, or earplugs if needed.",
      },
      {
        Subtitles: "Limit Screen Time",
        description:
          "Avoid screens 1–2 hours before bed. Blue light suppresses melatonin production, making it harder to fall asleep.",
      },
      {
        Subtitles: "Watch Your Consumption",
        description:
          "Avoid caffeine after noon and limit alcohol, which disrupts REM sleep. Finish eating 2–3 hours before bedtime.",
      },
    ],
  },
];

export const movement = {
  title: "Beyond Exercise",
  description:
    "When movement becomes something you look forward to rather than a chore, you're more likely to stay consistent. The best physical activity is the one you'll actually do regularly.",

  main: {
    subtitle: "Benefits of Regular Movement",
    list: [
      {
        text: "Improves mood by releasing endorphins",
      },
      {
        text: "Reduces stress and anxiety",
      },
      {
        text: "Enhances cognitive function and creativity",
      },
      {
        text: "Boosts energy and reduces fatigue",
      },
      {
        text: "Strengthens immune function",
      },
    ],
  },

  tips: {
    subtitle: "Finding Your Movement Style",
    description:
      "Consider these questions to discover activities you'll genuinely enjoy:",

    lists: [
      {
        text: "Do you prefer solo activities or social settings?",
      },
      {
        text: "Do you enjoy being outdoors or indoors?",
      },
      {
        text: "Do you like structure or flexibility?",
      },
    ],
  },

  card: [
    {
      image: m1,
      subtitle: "Yoga & Stretching",
      description:
        "Improves flexibility, balance, and mind-body awareness. Great for stress reduction and recovery.",
    },
    {
      image: m2,
      subtitle: "Walking & Hiking",
      description:
        "Accessible, low-impact activity that combines movement with nature for mental clarity.",
    },
    {
      image: m3,
      subtitle: "Dance & Movement",
      description:
        "Joyful expression through movement that improves coordination, mood, and cardiovascular health.",
    },
    {
      image: m4,
      subtitle: "Strength Training",
      description:
        "Builds muscle, boosts metabolism, and improves functional fitness for daily activities.",
    },
  ],
};

export const practice = [
  {
    Icon: "",
    title: "Mindful Breathing",
    description:
      "The simplest form of meditation. Focus your attention on your breath—the inhale and exhale—without trying to control it.",
    subTitle: "Practice: Box Breathing",
    list: [
      {
        text: "Inhale for 4 counts",
      },
      {
        text: "Hold for 4 counts",
      },
      {
        text: "Exhale for 4 counts",
      },
      {
        text: "Hold for 4 counts",
      },
      {
        text: "Repeat for 3–5 minutes",
      },
    ],
  },
  {
    Icon: "",
    title: "Body Scan",
    description:
      "Systematically bring attention to different parts of your body, noticing sensations without judgment. Helps release tension and increase body awareness.",
    subTitle: "Practice: Mini Body Scan",
    list: [
      {
        text: "Start at your feet and move upward",
      },
      {
        text: "Notice sensations in each body part",
      },
      {
        text: "Release tension as you scan",
      },
      {
        text: "Continue to your head",
      },
      {
        text: "End with awareness of your whole body",
      },
    ],
  },
  {
    Icon: "",
    title: "Mindful Listening",
    description:
      "Fully focus on sounds around you or in music without labeling or judging. Enhances present-moment awareness and reduces mental chatter.",
    subTitle: "Practice: Sound Awareness",
    list: [
      {
        text: "Close your eyes",
      },
      {
        text: "Notice the most prominent sound",
      },
      {
        text: "Expand awareness to subtle sounds",
      },
      {
        text: "Notice the quality of each sound",
      },
      {
        text: "Return to sounds when mind wanders",
      },
    ],
  },
];
