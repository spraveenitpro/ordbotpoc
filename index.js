
import 'dotenv/config';
import { Ordinalsbot } from "ordinalsbot";


const ordinalsbotObj = new Ordinalsbot(process.env.ORDINALSBOT_API_KEY, "mainnet");
const inscriptionId = '75dc5b0d7c04d251b7b6a247556372cad95098c8cdfa5210b90aa7d53d1f99c5i0';
const address = '13ASqpckjkRERLQBo6MugXxwkzASixzFjc';
const satscanner = ordinalsbotObj.Satscanner();



async function exploreInscription(id, address) {
	try {
		const response = await satscanner.findSpecialRanges({ address: address });

		if (response.result && response.result.inscriptions) {
			const inscription = JSON.stringify(response.result.inscriptions, null, 2);
			console.log("Available inscription : ", inscription);
			console.log("Raw ranges: ", JSON.stringify(response.result.ranges, null, 2));
		}

	} catch (error) {
		console.error('Error:', error);
	}
}
exploreInscription(inscriptionId, address);