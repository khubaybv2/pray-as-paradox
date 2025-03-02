async function fetchPrayerTimes(city = "Dhaka", country = "Bangladesh") {
  try {
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`);
    const data = await response.json();
    const timings = data.data.timings;
    // Example: Display Fajr time
    console.log('ফজরের সময়:', timings.Fajr);
  } catch (error) {
    console.error('সময়সূচী লোড করতে ব্যর্থ:', error);
  }
}

// Fetch on startup
fetchPrayerTimes();
