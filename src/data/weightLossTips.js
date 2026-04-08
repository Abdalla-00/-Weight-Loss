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
