export async function getProducts() {
    const response = await fetch('https://freetestapi.com/api/v1/cars?limit=5');
    return response.json();
  }
  