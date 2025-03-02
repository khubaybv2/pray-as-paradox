// Bengali Date
function getBanglaDate() {
  const date = new Date();
  const banglaMonths = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
  const day = date.getDate();
  const month = banglaMonths[date.getMonth()];
  const year = date.getFullYear() - 593;
  return `বাংলা তারিখ: ${day} ${month}, ${year}`;
}

// Hijri Date
function getHijriDate() {
  const hijriDate = moment().format('iYYYY/iM/iD');
  return `হিজরি তারিখ: ${hijriDate}`;
}

// Gregorian Date (Bengali Locale)
function getGregorianDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return `ইংরেজি তারিখ: ${new Date().toLocaleDateString('bn-BD', options)}`;
}

// Update Dates on Load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bangla-date').textContent = getBanglaDate();
  document.getElementById('hijri-date').textContent = getHijriDate();
  document.getElementById('gregorian-date').textContent = getGregorianDate();
});