// --- 1. SQUAD DATA (Placeholder for 2025/26) ---
// I've added a 'photoUrl' property to each player for individual images.
const squadData = [
    // Goalkeepers
    { id: 1, name: "Marc-André ter Stegen", number: 1, position: "Goalkeeper", nationality: "Germany", appearances: 45, goals: 0, assists: 0, isBench: false, photoUrl: "https://www.fichajes.net/sites/default/files/styles/epsa_detail_thumbail/public/2025-10/Ter-Stegen-fichajes-rumores-Barcelona-Salida-enero.jpg.webp?h=74051d34&itok=LpMos31s" },
    { id: 2, name: "Iñaki Peña", number: 13, position: "Goalkeeper", nationality: "Spain", appearances: 5, goals: 0, assists: 0, isBench: true, photoUrl: "https://images.news9live.com/wp-content/uploads/2024/09/MixCollage-25-Sep-2024-03-55-PM-6321.jpg?w=1200&enlarge=true" },

    // Defenders
    { id: 3, name: "Ronald Araújo", number: 4, position: "Defender", nationality: "Uruguay", appearances: 40, goals: 3, assists: 1, isBench: false, photoUrl: "https://platform.barcablaugranes.com/wp-content/uploads/sites/21/chorus/uploads/chorus_asset/file/25843992/2193038059.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400" },
    { id: 4, name: "Jules Koundé", number: 23, position: "Defender", nationality: "France", appearances: 48, goals: 1, assists: 4, isBench: false, photoUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_5577,h_3137,x_181,y_4/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01k139mja7gg0vbc2r23.jpg" },
    { id: 5, name: "Alejandro Balde", number: 3, position: "Defender", nationality: "Spain", appearances: 35, goals: 1, assists: 5, isBench: false, photoUrl: "https://pbs.twimg.com/media/GtfJQhUWsAE_ZC4?format=jpg&name=large" },
    { id: 6, name: "Andreas Christensen", number: 15, position: "Defender", nationality: "Denmark", appearances: 30, goals: 0, assists: 0, isBench: true, photoUrl: "https://platform.barcablaugranes.com/wp-content/uploads/sites/21/chorus/uploads/chorus_asset/file/26021716/2212179007.jpg?quality=90&strip=all&crop=0.0050000000000026%2C0%2C99.99%2C100&w=2400" },
    { id: 7, name: "Héctor Fort", number: 39, position: "Defender", nationality: "Spain", appearances: 10, goals: 0, assists: 0, isBench: true, photoUrl: "https://s.yimg.com/ny/api/res/1.2/1tuhJg3rUrrTU9ML8eKJUQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://media.zenfs.com/en/football_espana_articles_993/ee912aa1495d36b59095ac8a1cb3f1e3" },

    // Midfielders
    { id: 8, name: "Frenkie de Jong", number: 21, position: "Midfielder", nationality: "Netherlands", appearances: 42, goals: 5, assists: 6, isBench: false, photoUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3933,h_2212,x_0,y_104/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01k7vj748fzzjrzskbdv.jpg" },
    { id: 9, name: "Gavi", number: 6, position: "Midfielder", nationality: "Spain", appearances: 38, goals: 4, assists: 7, isBench: false, photoUrl: "https://www.fcbarcelona.com/photo-resources/2025/02/02/bcb0aee1-e558-4731-ba37-7ebb6726567f/250202_EA023749.JPG?width=1200&height=750" },
    { id: 10, name: "Pedri", number: 8, position: "Midfielder", nationality: "Spain", appearances: 33, goals: 7, assists: 3, isBench: false, photoUrl: "https://platform.barcablaugranes.com/wp-content/uploads/sites/21/chorus/uploads/chorus_asset/file/25819505/2191173318.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C99.987501562305&w=2400" },
    { id: 11, name: "Oriol Romeu", number: 18, position: "Midfielder", nationality: "Spain", appearances: 25, goals: 0, assists: 1, isBench: true, photoUrl: "https://s.yimg.com/ny/api/res/1.2/ypWSYwtEoZvXZHE3QFByZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/barca_universal_articles_732/61dc9960942173fd2bed35c98fd1b3fd" },
    { id: 12, name: "Ilkay Gündoğan", number: 22, position: "Midfielder", nationality: "Germany", appearances: 47, goals: 8, assists: 12, isBench: false, photoUrl: "https://s.yimg.com/ny/api/res/1.2/5_fBVAwR7mDprYZBtKM_7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://media.zenfs.com/en/get_spanish_football_news_articles_403/c55490a2141130eb26931e7905856f82" },

    // Forwards
    { id: 13, name: "Robert Lewandowski", number: 9, position: "Forward", nationality: "Poland", appearances: 49, goals: 28, assists: 9, isBench: false, photoUrl: "https://s.yimg.com/ny/api/res/1.2/ZEZXzY8CYQB1Xx2QC4NdoQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://media.zenfs.com/en/get_spanish_football_news_articles_403/e713c81a8f1d6e0bb430d74995253585" },
    { id: 14, name: "Lamine Yamal", number: 27, position: "Forward", nationality: "Spain", appearances: 45, goals: 10, assists: 11, isBench: false, photoUrl: "https://assets.goal.com/images/v3/blt8ca5bd15ac808229/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2232509303.jpg?auto=webp&format=pjpg&width=3840&quality=60" },
    { id: 15, name: "Raphinha", number: 11, position: "Forward", nationality: "Brazil", appearances: 38, goals: 7, assists: 8, isBench: true, photoUrl: "https://dims.apnews.com/dims4/default/b800e19/2147483647/strip/true/crop/2379x1586+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1b%2F02%2F1cb8a79e9246c57a85ce984fa243%2F1b99c1666ded4c5aa6f5dcd8a6b82320" },
    { id: 16, name: "Vitor Roque", number: 19, position: "Forward", nationality: "Brazil", appearances: 22, goals: 6, assists: 2, isBench: true, photoUrl: "https://www.fcbarcelona.com/fcbarcelona/photo/2025/02/28/62bc066c-bf84-450e-98f3-d7b4ed381058/3200x2000-comiat-VITOR-ROQUE.jpg" }
];

// --- 2. DOM Elements ---
const squadListEl = document.getElementById('squad-list');
const benchListEl = document.getElementById('bench-list');
const statsTableBodyEl = document.getElementById('stats-table-body');
const searchInput = document.getElementById('player-search');
const filterSelect = document.getElementById('position-filter');
const sortableHeaders = document.querySelectorAll('#stats-table th.sortable');
const navLinks = document.querySelectorAll('nav a');
const pageSections = document.querySelectorAll('.page-section');

// --- 3. RENDERING FUNCTIONS ---

/**
 * Creates the HTML markup for a single player card.
 * @param {Object} player - Player object from squadData.
 * @returns {string} - HTML string for the player card.
 */
function createPlayerCard(player) {
    // UPDATED: Using player.photoUrl for the image source
    return `
        <div class="player-card" data-position="${player.position}">
            <img src="${player.photoUrl}" alt="Photo of ${player.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="player-info">
                <p><span class="number">${player.number}</span> ${player.position} | ${player.nationality}</p>
                <h4>${player.name}</h4>
            </div>
            <div class="player-stats">
                <div class="stat-item"><strong>${player.appearances}</strong><span>Apps</span></div>
                <div class="stat-item"><strong>${player.goals}</strong><span>Goals</span></div>
                <div class="stat-item"><strong>${player.assists}</strong><span>Assists</span></div>
            </div>
        </div>
    `;
}

/**
 * Renders the filtered squad to the main squad list.
 * @param {Array} players - Array of player objects to display.
 */
function renderSquad(players) {
    const mainSquad = players.filter(p => !p.isBench);
    const benchSquad = players.filter(p => p.isBench);
    
    squadListEl.innerHTML = mainSquad.map(createPlayerCard).join('');
    benchListEl.innerHTML = benchSquad.map(createPlayerCard).join('');
}

/**
 * Renders all players into the sortable statistics table.
 * @param {Array} players - Array of player objects.
 */
function renderStatsTable(players) {
    statsTableBodyEl.innerHTML = players.map(player => `
        <tr>
            <td>${player.number}</td>
            <td>${player.name}</td>
            <td data-value="${player.appearances}">${player.appearances}</td>
            <td data-value="${player.goals}">${player.goals}</td>
            <td data-value="${player.assists}">${player.assists}</td>
        </tr>
    `).join('');
}

// --- 4. NAVIGATION & VIEW MANAGEMENT ---

/**
 * Handles navigation clicks to show/hide sections and set active link.
 */
function handleNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);

            // 1. Update Active Nav Link
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');

            // 2. Show/Hide Sections
            pageSections.forEach(section => {
                section.classList.add('hidden');
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                }
            });
        });
    });
    
    // Initialize view to Home
    document.querySelector('nav a[href="#home"]').click();
}

// --- 5. SEARCH & FILTER LOGIC ---

/**
 * Filters and searches the squad data based on current inputs.
 */
function filterAndSearchSquad() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const positionFilter = filterSelect.value;

    const filteredPlayers = squadData.filter(player => {
        const nameMatch = player.name.toLowerCase().includes(searchTerm);
        const positionMatch = positionFilter === 'All' || player.position === positionFilter;

        return nameMatch && positionMatch;
    });

    renderSquad(filteredPlayers);
}

// Add event listeners for search and filter
searchInput.addEventListener('input', filterAndSearchSquad);
filterSelect.addEventListener('change', filterAndSearchSquad);

// --- 6. SORTABLE TABLE LOGIC ---

let currentSort = { column: 'appearances', direction: 'desc' }; // Default sort

/**
 * Sorts the player data and re-renders the stats table.
 * @param {string} column - The stat key to sort by (e.g., 'goals').
 */
function sortTable(column) {
    // Determine new direction
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'desc'; // Default to descending for new column
    }

    // Sort the full squad data
    const sortedData = [...squadData].sort((a, b) => {
        const valA = a[column];
        const valB = b[column];

        if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
        if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Update table headers to show current sort state
    sortableHeaders.forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
        th.textContent = th.textContent.replace(' ⬇️', '').replace(' ⬆️', '');

        if (th.getAttribute('data-sort-by') === column) {
            const arrow = currentSort.direction === 'asc' ? ' ⬆️' : ' ⬇️';
            th.textContent += arrow;
        }
    });

    renderStatsTable(sortedData);
}

// Add event listeners for table headers
sortableHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const column = header.getAttribute('data-sort-by');
        if (column) {
            sortTable(column);
        }
    });
});


// --- 7. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup navigation/view
    handleNavigation();

    // 2. Initial render of squad cards and bench
    renderSquad(squadData); 

    // 3. Initial render of the sortable table (default sort by appearances)
    sortTable(currentSort.column); 
});