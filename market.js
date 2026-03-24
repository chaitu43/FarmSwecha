const defaultMarketData = [
    { commodity: "Paddy (Dhan)", variety: "Common", price: 2183, change: 15, trend: "up" },
    { commodity: "Maize", variety: "Hybrid", price: 1960, change: -5, trend: "down" },
    { commodity: "Cotton", variety: "Long Staple", price: 7020, change: 110, trend: "up" },
    { commodity: "Turmeric", variety: "Salem", price: 12450, change: 340, trend: "up" },
    { commodity: "Red Chilli", variety: "Guntur Sannam", price: 18200, change: -50, trend: "down" },
    { commodity: "Groundnut", variety: "Pod", price: 6850, change: 25, trend: "up" },
    { commodity: "Soybean", variety: "Yellow", price: 4520, change: -10, trend: "down" }
];

const insights = [
    "Cotton prices are showing a strong upward trend due to increased export demand. Farmers might consider holding stock for another week for potentially better margins.",
    "Paddy arrival is increasing in the mandi. Prices are expected to stabilize. Ensure proper drying to avoid moisture-related deductions.",
    "Turmeric demand is rising in international markets. Salem variety is fetching a premium. Good time to sell if product is cured.",
    "Chilli harvest is peaking. Guntur Sannam prices are slightly volatile due to high arrivals. Monitor market trends daily."
];

function updatePricesUI(marketName = "Guntur (Mandi)") {
    const tbody = document.getElementById('price-tbody');
    const updateTime = document.getElementById('update-time');
    const marketAdvice = document.getElementById('market-advice');
    const marketNameEl = document.getElementById('market-name');

    marketNameEl.textContent = marketName;

    // Simulate price variations based on market name length/randomness
    const seed = marketName.length;
    const currentData = defaultMarketData.map(item => {
        const variation = (Math.sin(seed + item.price) * 0.05); // +/- 5%
        const newPrice = Math.round(item.price * (1 + variation));
        const newChange = Math.round(item.change + (variation * 100));
        return {
            ...item,
            price: `₹${newPrice.toLocaleString('en-IN')}`,
            change: `${newChange >= 0 ? '+' : ''} ₹${Math.abs(newChange)}`,
            trend: newChange >= 0 ? 'up' : 'down'
        };
    });

    tbody.innerHTML = '';

    currentData.forEach(item => {
        const tr = document.createElement('tr');
        const trendClass = item.trend === 'up' ? 'trend-up' : 'trend-down';
        const trendIcon = item.trend === 'up' ? 'fas fa-chart-line' : 'fas fa-chart-line fa-flip-vertical';

        tr.innerHTML = `
            <td><strong>${item.commodity}</strong></td>
            <td>${item.variety}</td>
            <td>${item.price}</td>
            <td class="${trendClass}">${item.change}</td>
            <td><i class="${trendIcon} ${trendClass}"></i></td>
        `;
        tbody.appendChild(tr);
    });

    // Update time to now
    const now = new Date();
    updateTime.textContent = `Today, ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;

    // Random insight
    marketAdvice.textContent = insights[Math.floor(Math.random() * insights.length)];
}

document.getElementById('search-market-btn').addEventListener('click', () => {
    const market = document.getElementById('market-input').value;
    if (market) {
        document.getElementById('price-tbody').style.opacity = '0.5';
        setTimeout(() => {
            updatePricesUI(market);
            document.getElementById('price-tbody').style.opacity = '1';
        }, 500);
    }
});

document.getElementById('market-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const market = document.getElementById('market-input').value;
        if (market) {
            document.getElementById('price-tbody').style.opacity = '0.5';
            setTimeout(() => {
                updatePricesUI(market);
                document.getElementById('price-tbody').style.opacity = '1';
            }, 500);
        }
    }
});

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    updatePricesUI();
});
