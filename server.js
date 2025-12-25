app.post("/api/crop-advice", async (req, res) => {
  try {
    const { location } = req.body;

    // 1️⃣ Geocoding
    const geo = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_OWM_API_KEY}`
    ).then(r => r.json());

    if (!geo.length) return res.json({ error: "Invalid location" });

    const { lat, lon } = geo[0];

    // 2️⃣ Weather
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`
    ).then(r => r.json());

    const temperature = weather.main.temp;
    const humidity = weather.main.humidity;
    const ndvi = (0.3 + Math.random() * 0.4).toFixed(2); // simulated NDVI

    // 3️⃣ AI Prompt
    const prompt = `
You are an agriculture expert.

Location: ${location}
Temperature: ${temperature} °C
Humidity: ${humidity} %
NDVI: ${ndvi}

Recommend 3 crops suitable for this taluka.
Explain reasons, sowing season, and risks.
`;

    // 🔽 Call OpenAI here (existing logic)

    res.json({
      crops: ["Rice", "Maize", "Millet"],
      details: [
        "Rice suits high humidity and irrigation.",
        "Maize adapts well to moderate rainfall.",
        "Millet tolerates higher temperatures."
      ],
      tips: ["✅ Weather suitable", "⚠️ Monitor rainfall"],
      summary: `Temperature: ${temperature}°C | Humidity: ${humidity}% | NDVI: ${ndvi}`
    });

  } catch (e) {
    res.json({ error: "Processing failed" });
  }
});
