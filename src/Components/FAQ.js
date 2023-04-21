import { useRef } from "react";
import React from "react";
import {createRoot} from 'react-dom/client';
import "../Styles/main.css";

function FAQ() {

	let content = [];
	// const ReactRoot = ReactDOM.createRoot(document.getElementById('main'));

	const heading = <h1>Frequantly Asked Questions</h1>

	content.push(heading);


	let questions = ["Is the water we drink safe?", "How is drinking water purified?", "What dangers can there be in drinking water?", "How is drinking water quality protected?", "What type of health issues can be related to water quality?", "Can I filter water at my home?", "How can I improve water quality in my home?", "What influences future water requirements?", "What are the main problems with water scarcity in rural communities?", "What are the main water sources in South Africa?", "What are the challenges facing the South African water sector?"];
let answer = [["Tap water in south Africa is safe to drink from in urban areas, but it is recommended to boil water first or use a filter to remove any potential contaminants. However, in some rural areas access to safe drinking water is limited and may be higher risk of waterborne illnesses. It is best to check with your local authority or use our web app to check on the quality of water in your area."],
["The process depends on the source of the water and the treatment plan. However, the general process is to add chemicals to the water and allow it to sit for a period of time, the water is then filtered and disinfected and lastly it is distributed to homes and businesses."],
["Contamination – presence of bacteria, viruses and other microorganisms. As well as chemicals from agriculture and industrial activities", "Heavy metals – metals such as lead and copper can leach into water from pipes and plumbing fixtures", "Others can include agriculture runoff and natural contaminants.",""],
["There are a number of regulatory bodies in South Africa that are there to protect the quality of drinking water such as the South African National Standards, the South African Bureau of Standards, the South African Departments of Water and Sanitation", "Water treatment – municipalities and water service providers are responsible to treating drinking water to meets the standards."],
["Waterborne disease – such as cholera, typhoid fever, hepatitis A", "Gastro and skin problems", "Lead poisoning and cancer"],
["There are several types of water filtration systems available such as ones can be installed to fit directly on the faucet and filter tap water, ones that be installed under the sink and other ones that can filter whole-house water. Lastly pitcher filters can also be used to filter tap water"],
["Install a water filtration system ", "Boil water before you drink or use it to cook", "Do not dispose of hazardous materials such as batteries down the drain as they contaminate the water supply"],
["Climate – hot weather can cause droughts and decreases the water supply", "Standard of living – the higher the standard of living, the more water required", "Population growth – the more people living in a certain area, the greater the demand of water", "Economic growth – the country need economic growth, but growth in the economy will lead to a higher demand in water"],
["Health problems – poor sanitation and hygiene practices", "Economic losses – low quality/quantity water affects agriculture which is the primary source of livelihood for many communities", "Education – children may be forced to miss school to travel to fetch water and schools may not be able to provide safe drinking water", "Woman and girls burden – burden of collecting water falls on woman and girls who may have to walk long distances to fetch water", "Migration – in extreme cases, water scarcity may force rural communities to migrate to urban areas in search of better water and livelihood which may lead to overcrowding", "Scarcity will increase water prices – inadequate water management and distribution may make water more expensive as the aim will be to incentivise people to use water more efficiently"],
["Surface water – rivers and dams", "Groundwater", "Rainwater", "Desalination", "Wastewater management"],
["Poverty – inability to pay for water services", "Access to water – only a percentage of people in rural areas have access to taps and borehole water", "Water re-use – recycle more water than we do now", "Water wars – how to prioritise where are what sector water should go to", "Water quality", "Aging infrastructure – water treatment plants, distribution systems, and storage facilities in the region are old and in need of upgrades, repairs and maintenance", "Inadequate funding – water industry is severely underfunded, this limits the development and maintenance of infrastructure"]];
let endP = ["Department of water and sanitation Department of water and sanitation","Contact number:    +27 12 808 9500"];

	for(let q=0; q<questions.length; q++)
	{
		let pQ = React.createElement("p", {className: 'pQ'}, questions[q]);
		content.push(pQ);
		for(let a=0; a<answer.length; a++)
		{
			let pA = React.createElement("p", {className: 'pA'}, answer[a]);
			content.push(pA);
		}
	}

	for(let i=0; i<2; i++)
	{
		let genP = React.createElement("p", {className: 'genQ'}, endP[i]);
		content.push(genP);
	}

	const rootContainer = document.getElementById('main');
	const root = createRoot(rootContainer);
	root.render(content);

}

export default FAQ;
