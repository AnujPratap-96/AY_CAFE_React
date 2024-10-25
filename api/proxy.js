export default async function handler(req, res) {
    const { lat, lng, type, restaurantId } = req.query;
  
    // Validate query parameters
    if (!lat || !lng || !type) {
      return res.status(400).json({ error: "Latitude, longitude, and type are required" });
    }
  
    // Construct the URL based on the `type` parameter
    let targetUrl;
    switch (type) {
      case "restaurantList":
        targetUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
        break;
      case "menu":
        if (!restaurantId) {
          return res.status(400).json({ error: "restaurantId is required for menu type" });
        }
        targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;
        break;
      case "pizzaList":
        targetUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null&collection=`;
        break;
      default:
        return res.status(400).json({ error: "Invalid type specified" });
    }
  
    try {
      // Fetch data from the target URL
      const response = await fetch(targetUrl, {
        method: req.method,
        headers: { 'Content-Type': 'application/json', ...req.headers },
      });
      const data = await response.json();
  
      // Set CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
      // Return the fetched data as JSON
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch data from Swiggy" });
    }
  }
  