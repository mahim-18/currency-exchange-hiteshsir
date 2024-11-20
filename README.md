# Currency Converter App 💰

A dynamic **Currency Converter** built using **React.js**. This app allows users to convert between various currencies with real-time exchange rates fetched from the `currencyapi`.

---

## Features

- **Real-time Exchange Rates**: Fetches live exchange rates using `currencyapi`.
- **Dynamic Currency Support**: Supports conversion between multiple global currencies.
- **Bidirectional Conversion**: Easily swap between the "From" and "To" currencies.
- **Customizable Input**: Provides a reusable and modular `InputBox` component.
- **Responsive UI**: Styled using TailwindCSS for seamless user experience across devices.

---

## Tech Stack

- **Frontend**: React.js with functional components and hooks.
- **Styling**: TailwindCSS for modern, responsive design.
- **API**: Fetches live data from the `currencyapi`.

---

## Components and Hooks

### 1. **`InputBox` Component**
A reusable component for input fields and dropdowns.

#### Props:
- `label` (string): The label text for the input.
- `amount` (number): Current value of the input field.
- `onAmountChange` (function): Callback for handling input value changes.
- `currencyOptions` (array): Array of available currencies for the dropdown.
- `selectCurrency` (string): The currently selected currency.
- `onCurrChange` (function): Callback for handling currency dropdown changes.
- `amountDisabled` (boolean): Disables the input field if `true`.
- `currencyDisabled` (boolean): Disables the dropdown if `true`.
- `className` (string): Additional styles or classes for the component.

---

### 2. **`useCurrInfo` Hook**
A custom hook to fetch and manage live exchange rates.

#### Functionality:
- Fetches real-time exchange rates for all available currencies from the `currencyapi`.
- Dynamically updates rates when the "From" currency changes.

#### Returns:
An object containing currency codes and their respective rates.

---

### 3. **`App` Component**
The main container for the currency converter app.

#### State Variables:
- `amount` (number): The amount to convert.
- `from` (string): Currency to convert from.
- `to` (string): Currency to convert to.
- `convertedAmount` (number): The converted amount.

#### Key Functions:
- **`swap`**: Swaps the "From" and "To" currencies.
- **`convert`**: Converts the entered amount based on the selected currencies and their exchange rates.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- A valid API key from [CurrencyAPI](https://currencyapi.com/).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/currency-converter.git
   cd currency-converter
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up API Key**:
    - Replace the **`apikey`** in the **`useCurrInfo`** hook with your valid API key:
   ```bash
   const API_KEY = "your_api_key_here";
   ```

4. **Start the App**:
   ```bash
   npm start
   ```

## Folder Structure

The folder structure of the project is as follows:

```bash
.
├── src
│   ├── components
│   │   └── InputBox.jsx   # Reusable InputBox component
│   ├── hooks
│   │   └── useCurrInfo.js # Custom hook for fetching exchange rates
│   ├── App.js             # Main app component
│   ├── index.css          # TailwindCSS styles
│   └── index.js           # Entry point
├── public
│   ├── index.html         # HTML template
│   └── favicon.ico        # Favicon
└── package.json           # Project configuration
```

## How It Works

1. The app initializes with default values for the "From" and "To" currencies (`USD` and `INR` respectively).
2. Users can:
   - Enter an amount in the "From" field.
   - Select currencies from the dropdowns.
   - Swap the currencies using the **Swap** button.
3. On submission, the app fetches live exchange rates and calculates the converted amount.
4. The "To" field updates dynamically to reflect the converted value.

---

## Example

### **UI Components**:
1. **InputBox**:
   - Currency dropdown for selecting the "From" and "To" currencies.
   - Amount input field for entering the value to convert.

2. **Swap Button**:
   - Swaps the "From" and "To" currencies, allowing users to reverse the conversion direction.

3. **Convert Button**:
   - Fetches live exchange rates from the API and updates the "To" field with the converted amount.

### **Usage Example**:
- **From Currency**: USD
- **To Currency**: INR
- **Amount to Convert**: 100 USD

When the user clicks **Convert**, the app will fetch the latest exchange rate for USD to INR and display the equivalent value in INR.

---

## API Details

The app fetches real-time exchange rates from the **CurrencyAPI**.

### Endpoint:
```bash
https://api.currencyapi.com/v3/latest
```


### Query Parameters:
- `apikey`: Your API key.
- `currencies`: Comma-separated list of currency codes (optional for all currencies).

### Example:
```bash
https://api.currencyapi.com/v3/latest?apikey=your_api_key&currencies=USD,EUR,INR
```

---

## Future Improvements

- **Searchable Currency Dropdown**: Improve user experience by allowing users to search for currencies in the dropdown.
- **API Caching**: Cache API responses to reduce the number of requests and improve performance.
- **Error Handling**: Add more robust error handling for API failures and network issues.
- **Multi-language Support**: Provide translations for different languages to make the app more accessible internationally.
- **Historical Exchange Rates**: Add support for displaying historical exchange rates over a period of time.

---

## Screenshots

![Currency Converter App](https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

Example of the currency converter UI with a background image.
___

Feel free to reach out for suggestions or contributions! 😊 💻
