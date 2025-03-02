// DOM এলিমেন্ট
const dateSelector = document.getElementById('date-selector');
const prayerTimesEl = document.getElementById('prayer-times');

// তারিখ পরিবর্তন হলে ডেটা আপডেট করুন
dateSelector.addEventListener('change', (e) => {
    fetchPrayerTimes(e.target.value);
});

// বর্তমান তারিখ সেট করুন
dateSelector.value = new Date().toISOString().split('T')[0];

// নামাজের সময় ফেচ করুন
async function fetchPrayerTimes(date = null) {
    const city = "Dhaka";
    const country = "Bangladesh";
    const apiDate = date ? moment(date).format('DD-MM-YYYY') : '';

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${apiDate}?city=${city}&country=${country}&method=1`
        );
        const data = await response.json();
        
        // নামাজের সময় ডিসপ্লে করুন
        displayPrayerTimes(data.data.timings);
    } catch (error) {
        prayerTimesEl.innerHTML = `<div class="error">তথ্য লোড করতে সমস্যা হয়েছে। ইন্টারনেট সংযোগ চেক করুন।</div>`;
    }
}

// নামাজের সময় ডিসপ্লে ফাংশন
function displayPrayerTimes(timings) {
    const prayers = {
        Fajr: 'ফজর',
        Dhuhr: 'যোহর',
        Asr: 'আসর',
        Maghrib: 'মাগরিব',
        Isha: 'ইশা'
    };

    let html = '';
    for (const [key, name] of Object.entries(prayers)) {
        html += `
            <div class="prayer-time">
                <span>${name}</span>
                <span>${timings[key]}</span>
            </div>
        `;
    }

    prayerTimesEl.innerHTML = html;
}

// প্রথম লোডে ডেটা ফেচ করুন
fetchPrayerTimes();
