import mongoose from "mongoose";
import dotenv from "dotenv";
import Feedback from "./models/Feedback";

dotenv.config();

const initialFeedbacks = [
  {
    company: "Finedine",
    badgeLetter: "F",
    upvoteCount: 99,
    daysAgo: 4,
    text: "hi #Finedine the food is good but i wish the service and quality of water should be better",
  },
  {
    company: "Kathirolls",
    badgeLetter: "K",
    upvoteCount: 23,
    daysAgo: 4,
    text: "#kathirools one of the best tasty rolls in the Campus.. must try!! ",
  },
  {
    company: "OAT",
    badgeLetter: "N",
    upvoteCount: 53,
    daysAgo: 5,
    text: "#Oat after an hectic day goo there and feel the breeze, its so relaxing",
  },
  {
    company: "Hall12",
    badgeLetter: "T",
    upvoteCount: 21,
    daysAgo: 2,
    text: "yesterday in #hall12 the food is very bad, should change the menu from next week",
  },
  {
    company: "MamaMiyo",
    badgeLetter: "M",
    upvoteCount: 33,
    daysAgo: 1,
    text: "#mamaMiyo place is very bad like its not clean, should complaint to heigher people",
  },
  {
    company: "newSportsComplex",
    badgeLetter: "S",
    upvoteCount: 21,
    daysAgo: 2,
    text: " #newSportsComplex gym doesnt have all equipments ",
  },
  {
    company: "Eshop4",
    badgeLetter: "E",
    upvoteCount: 11,
    daysAgo: 1,
    text: "idli in #eShop4 is good!!, but poha should be better one of the better experience with poha in Eshop4",
  },
  {
    company: "#Library",
    badgeLetter: "L",
    upvoteCount: 41,
    daysAgo: 5,
    text: "from past two weeks in #library, its very cold inside. i think they should increse the temp inside lib, its becoming tough to write in this temperature  ",
  },
  {
    company: "CafeCoffeeDay",
    badgeLetter: "C",
    upvoteCount: 22,
    daysAgo: 2,
    text: "#cafeCoffeeDay's the past few times I've been some items were missing from my order. only noticed this when I got to Room. straws, nuggets, fries, they missed",
  },
  {
    company: "Finedine",
    badgeLetter: "F",
    upvoteCount: 9,
    daysAgo: 1,
    text: "the quality of food in #finedine is very bad, should change the chef or the tender here in the college and they are too rude when we said that service and food was bad!!.. disappointed",
  },
  {
    company: "MamaMiyo",
    badgeLetter: "M",
    upvoteCount: 0,
    daysAgo: 0,
    text: "#mamaMiyo shakes here are soo good but the problem is that the place is dirty filled with birds shit and this will for sure impact the business",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Feedback.deleteMany({});
    console.log("Cleared existing feedbacks");

    // Insert new data
    const seededFeedbacks = await Feedback.insertMany(initialFeedbacks);
    console.log(`Seeded ${seededFeedbacks.length} feedbacks`);

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedDatabase();
