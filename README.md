# OrdinalsBot Inscription Manager

This project demonstrates how to interact with the OrdinalsBot API to manage Bitcoin Ordinals inscriptions. It includes functionality to create text inscriptions, view order details, and explore existing inscriptions.

## Prerequisites

- Node.js (v14 or later recommended)
- npm (Node Package Manager)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add your OrdinalsBot API key to the `.env` file:

## Usage

The `index.js` file contains several functions to interact with the OrdinalsBot API:

### Explore an Inscription

To explore details of an existing inscription:

```javascript
exploreInscription(inscriptionId, address);
```

### View Order Details

```javascript
viewOrder(orderInfo);
```

### Create a Text Inscription

```javascript
createInscriptionOrder();
```

### Running the Script

node index.js