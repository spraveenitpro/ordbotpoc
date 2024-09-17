
import 'dotenv/config';
import { Inscription, Ordinalsbot } from "ordinalsbot";


const ordinalsbotObj = new Ordinalsbot(process.env.ORDINALSBOT_API_KEY, "mainnet");
const inscriptionId = '75dc5b0d7c04d251b7b6a247556372cad95098c8cdfa5210b90aa7d53d1f99c5i0';
const address = '13ASqpckjkRERLQBo6MugXxwkzASixzFjc';
const orderInfo = 'd0f99da7-54c2-410b-aad5-ff415d85be19';
const satscanner = ordinalsbotObj.Satscanner();
const inscription = ordinalsbotObj.Inscription();

/**
 * Fetch details of an inscription
 * @param {*} id
 * @param {*} address
 */

async function exploreInscription(id, address) {
	try {
		const response = await satscanner.findSpecialRanges({ address: address });

		if (response.result && response.result.inscriptions) {
			const inscriptionData = JSON.stringify(response.result.inscriptions, null, 2);
			console.log("Available inscription : ", inscriptionData);
			console.log("Raw ranges: ", JSON.stringify(response.result.ranges, null, 2));
		}

	} catch (error) {
		console.error('Error:', error);
	}
}

/**
 * Get details of an order
 * @param {*} order
 */


function viewOrder(order) {
	inscription
		.getOrder(orderInfo)
		.then((order) => {
			console.log(order);
		})
		.catch((error) => {
			console.error(`${error.status} | ${error.message}`);
		})
}



//exploreInscription(inscriptionId, address);
viewOrder(orderInfo);

/**
 * Create an order via ordinalsBot
 */

function createInscriptionOrder() {

	const order = {
		texts: ["Man cannot remake himself without suffering, for he is both the marble and the sculptor. - Alexis Carrell"],
		lowpostage: true,
		receiveAddress: "bc1p8z7ny6x0e60np4ugxcuu870nastn58xhm2tgwx0cagyfynj8fgzsg49m2d",
		fee: 11
	}

	inscription
		.createTextOrder(order)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.error(`${error.status} | ${error.message}`);
		});
}

//createInscriptionOrder();