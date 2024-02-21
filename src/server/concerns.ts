import fever from "../../public/images/concerns/Fever.png";
import diabeties from "../../public/images/concerns/Glucose meter.png";
import pregnancy from "../../public/images/concerns/Pregnancy.png";
import cough from "../../public/images/concerns/Sneezing.png";
import virus from "../../public/images/concerns/Virus.png";

export const concerns = [
	{
		id: 1,
		name: "Covid-19",
		image: virus,
		concernItems: [
			{ id: 1, imageURL: virus, itemName: "Virus Item" },
			{ id: 2, imageURL: virus, itemName: "Virus Item" },
			{ id: 3, imageURL: virus, itemName: "Virus Item" },
			{ id: 4, imageURL: virus, itemName: "Virus Item" },
			{ id: 5, imageURL: virus, itemName: "Virus Item" },
			{ id: 6, imageURL: virus, itemName: "Virus Item" },
			{ id: 7, imageURL: virus, itemName: "Virus Item" },
			{ id: 8, imageURL: virus, itemName: "Virus Item" },
		],
	},
	{
		id: 2,
		name: "Fever",
		image: fever,
		concernItems: [
			{ id: 1, imageURL: fever, itemName: "Fever Item" },
			{ id: 2, imageURL: fever, itemName: "Fever Item" },
			{ id: 3, imageURL: fever, itemName: "Fever Item" },
			{ id: 4, imageURL: fever, itemName: "Fever Item" },
			{ id: 5, imageURL: fever, itemName: "Fever Item" },
			{ id: 6, imageURL: fever, itemName: "Fever Item" },
			{ id: 7, imageURL: fever, itemName: "Fever Item" },
			{ id: 8, imageURL: fever, itemName: "Fever Item" },
		],
	},
	{
		id: 3,
		name: "Cough",
		image: cough,
		concernItems: [
			{ id: 1, imageURL: cough, itemName: "Cough Item" },
			{ id: 2, imageURL: cough, itemName: "Cough Item" },
			{ id: 3, imageURL: cough, itemName: "Cough Item" },
			{ id: 4, imageURL: cough, itemName: "Cough Item" },
			{ id: 5, imageURL: cough, itemName: "Cough Item" },
			{ id: 6, imageURL: cough, itemName: "Cough Item" },
			{ id: 7, imageURL: cough, itemName: "Cough Item" },
			{ id: 8, imageURL: cough, itemName: "Cough Item" },
		],
	},
	{
		id: 4,
		name: "Pregnancy",
		image: pregnancy,
		concernItems: [
			{ id: 1, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 2, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 3, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 4, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 5, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 6, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 7, imageURL: pregnancy, itemName: "Pregnancy Item" },
			{ id: 8, imageURL: pregnancy, itemName: "Pregnancy Item" },
		],
	},
	{
		id: 5,
		name: "Diabeties",
		image: diabeties,
		concernItems: [
			{ id: 1, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 2, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 3, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 4, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 5, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 6, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 7, imageURL: diabeties, itemName: "Diabeties Item" },
			{ id: 8, imageURL: diabeties, itemName: "Diabeties Item" },
		],
	},
];
