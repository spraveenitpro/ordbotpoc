import {Inscription} from "ordinalsbot";

/**
 * Setup your API Key and environment
 * Allowed environments are ('testnet', 'mainnet', 'signet')
 * default environment is 'mainnet'.
 */
const inscription = new Inscription("", "mainnet");

/**
 *
 * Fetch order information
 */

/**
 * Using promises
 */

inscription
  .getOrder("75dc5b0d7c04d251b7b6a247556372cad95098c8cdfa5210b90aa7d53d1f99c5i0")
  .then((order) => {
    console.log(order);
  })
  .catch((error) => {
    console.error(`${error.status} | ${error.message}`);
  });

/**
 *
 * Using async/await
 */
(async () => {
  try {
    const data = await inscription.getOrder(
      "75dc5b0d7c04d251b7b6a247556372cad95098c8cdfa5210b90aa7d53d1f99c5i0"
    );
    console.log(data);
  } catch (error) {
    console.error(`${error.status} | ${error.message}`);
  }
})();
