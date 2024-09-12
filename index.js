import { Ordinalsbot } from "ordinalsbot";

// fetch latest incriptions

async function fetchInscriptions() {
    try {
        const inscriptions = await Ordinalsbot.getInscriptions();

        console.log("Latest inscriptions: ", inscriptions);
    } catch (error) {
        console.error('Error fetching inscriptions ', error)
    }
}

// Example: Get details about a specific ordinal
async function fetchOrdinalDetails(ordinalId) {
    try {
        const ordinal = await Ordinalsbot.getOrdinal(ordinalId);
        console.log('Ordinal details:', ordinal);
    } catch (error) {
        console.error('Error fetching ordinal details:', error);
    }
}

// Call the functions
fetchInscriptions();
fetchOrdinalDetails('75dc5b0d7c04d251b7b6a247556372cad95098c8cdfa5210b90aa7d53d1f99c5i0');