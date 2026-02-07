export const SITE = {
  name: "AP Appliance Service",
  city: "Las Vegas, NV",
  phone: "123-456-7890",
  phoneTel: "1234567890",
  email: "service@apapplianceservice.com",
  hours: "Mon–Sat 8:00 AM – 5:00 PM",
} as const;

export const SERVICES = [
  { name: "Washing Machines", img: "./services/washer.svg", alt: "Washing machine repair" },
  { name: "Dryers", img: "./services/dryer.svg", alt: "Dryer repair" },
  { name: "Ovens", img: "./services/oven.svg", alt: "Oven repair" },
  { name: "Refrigerators", img: "./services/fridge.svg", alt: "Refrigerator repair" },
  { name: "Dishwashers", img: "./services/dishwasher.svg", alt: "Dishwasher repair" },
  { name: "Freezers", img: "./services/freezer.svg", alt: "Freezer repair" },
  { name: "Microwaves", img: "./services/microwave.svg", alt: "Microwave repair" },
  { name: "Ice Makers", img: "./services/icemaker.svg", alt: "Ice maker repair" },
  { name: "Stoves", img: "./services/stove.svg", alt: "Stove repair" },
] as const;

export const BRANDS = [
  "Amana","Admiral","Bosch","Frigidaire","Whirlpool","KitchenAid","Samsung","LG","GE","Viking","Sub Zero","Thermador","Kenmore","Electrolux","Maytag","Miele","Magic Chef","Dacor","Wolf",
] as const;
