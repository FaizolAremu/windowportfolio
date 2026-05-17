/**
 * WALLPAPERS
 */
const WALLPAPERS = [
    { name: "Dark Code Editor", url: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { name: "Neon Circuit Board", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { name: "Terminal Green", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { name: "Abstract Neon City", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { name: "Tron Grid", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" }
];

/**
 * USER CONFIGURATION
 * Edit these values to customize your portfolio
 */
const USER_CONFIG = {
    name: "Faizol Aremu",
    initials: "FA",
    currentWallpaperIndex: 0
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply User Configuration
    document.documentElement.style.setProperty('--bg-url', `url('${WALLPAPERS[USER_CONFIG.currentWallpaperIndex].url}')`);
    document.getElementById('avatar-display').textContent = USER_CONFIG.initials;
    document.getElementById('name-display').textContent = USER_CONFIG.name;

    // 2. DOM Elements
    const bootScreen = document.getElementById('boot-screen');
    const lockScreen = document.getElementById('lock-screen');
    const loginScreen = document.getElementById('login-screen');
    const desktopScreen = document.getElementById('desktop-screen');
    
    const timeDisplay = document.getElementById('time-display');
    const dateDisplay = document.getElementById('date-display');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password-input');

    // 3. Lock Screen Clock
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        // Convert to 12-hour format for the lock screen
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        timeDisplay.textContent = `${hours}:${minutes}`;

        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString('en-US', options);
    }
    
    setInterval(updateTime, 1000);
    updateTime(); // Initial call

    // 4. Boot Sequence
    // Hide boot screen and show lock screen after 3 seconds
    setTimeout(() => {
        bootScreen.classList.add('hidden');
        lockScreen.classList.remove('hidden');
    }, 3000);

    // 5. Lock Screen to Login Screen Transition
    function unlock() {
        if (!lockScreen.classList.contains('slide-up') && !lockScreen.classList.contains('hidden')) {
            lockScreen.classList.add('slide-up');
            loginScreen.classList.remove('hidden');
            
            // Focus the password input after the slide animation completes
            setTimeout(() => {
                passwordInput.focus();
            }, 600); 
        }
    }

    // Trigger unlock on click or any key press
    lockScreen.addEventListener('click', unlock);
    window.addEventListener('keydown', (e) => {
        // Prevent triggering if lock screen is not active
        if (!lockScreen.classList.contains('hidden') && !lockScreen.classList.contains('slide-up')) {
            unlock();
        }
    });

    // 6. Login to Desktop Transition
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Accept any password, transition to desktop
        loginScreen.classList.add('hidden');
        desktopScreen.classList.remove('hidden');
        
        // Optional: clear password field
        passwordInput.value = '';
    });

    // 7. Desktop Initialization & Wallpaper Picker
    const contextMenu = document.getElementById('context-menu');
    const personalizePanel = document.getElementById('personalize-panel');
    const wallpaperGrid = document.getElementById('wallpaper-grid');
    const bgLayer1 = document.getElementById('desktop-bg-layer1');
    const bgLayer2 = document.getElementById('desktop-bg-layer2');
    let activeBgLayer = 1;

    // Init desktop background
    bgLayer1.style.backgroundImage = `url('${WALLPAPERS[USER_CONFIG.currentWallpaperIndex].url}')`;

    // Populate wallpaper grid
    WALLPAPERS.forEach((wp, index) => {
        const thumb = document.createElement('div');
        thumb.className = `wallpaper-thumb ${index === USER_CONFIG.currentWallpaperIndex ? 'active' : ''}`;
        thumb.style.backgroundImage = `url('${wp.url}')`;
        thumb.title = wp.name;
        thumb.addEventListener('click', () => changeWallpaper(index, thumb));
        wallpaperGrid.appendChild(thumb);
    });

    function changeWallpaper(index, thumbElement) {
        // Update active class on thumbnails
        document.querySelectorAll('.wallpaper-thumb').forEach(t => t.classList.remove('active'));
        if (thumbElement) thumbElement.classList.add('active');

        const newUrl = WALLPAPERS[index].url;
        
        // Update CSS variable so lock/login match if reopened
        document.documentElement.style.setProperty('--bg-url', `url('${newUrl}')`);

        // Smooth crossfade on desktop
        if (activeBgLayer === 1) {
            bgLayer2.style.backgroundImage = `url('${newUrl}')`;
            bgLayer2.classList.remove('hidden-bg');
            bgLayer1.classList.add('hidden-bg');
            activeBgLayer = 2;
        } else {
            bgLayer1.style.backgroundImage = `url('${newUrl}')`;
            bgLayer1.classList.remove('hidden-bg');
            bgLayer2.classList.add('hidden-bg');
            activeBgLayer = 1;
        }
    }

    // 8. Desktop Context Menu
    desktopScreen.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Prevent default browser menu
        
        // Position menu
        let x = e.clientX;
        let y = e.clientY;
        
        // Boundary checks to keep menu on screen
        const menuWidth = 250;
        const menuHeight = 175; 
        if (x + menuWidth > window.innerWidth) x = window.innerWidth - menuWidth;
        if (y + menuHeight > window.innerHeight) y = window.innerHeight - menuHeight;

        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
        contextMenu.classList.add('active');
    });

    document.addEventListener('click', (e) => {
        // Close context menu if clicking outside
        if (!contextMenu.contains(e.target)) {
            contextMenu.classList.remove('active');
        }
    });

    // Context Menu Actions
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            contextMenu.classList.remove('active');
            
            if (action === 'personalize') {
                personalizePanel.classList.remove('hidden');
            } else if (action === 'refresh') {
                // Flash icons for refresh effect
                const iconsContainer = document.querySelector('.desktop-icons');
                iconsContainer.style.opacity = '0';
                setTimeout(() => iconsContainer.style.opacity = '1', 150);
            }
        });
    });

    // 9. Personalize Panel Logic
    document.getElementById('close-personalize').addEventListener('click', () => {
        personalizePanel.classList.add('hidden');
    });

    // 10. Desktop Icons Logic
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('dblclick', () => {
            console.log(`Opening app: ${icon.getAttribute('data-app')}`);
        });
        
        // Single click selection
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.desktop-icon').forEach(i => {
                i.style.background = '';
                i.style.border = '1px solid transparent';
            });
            icon.style.background = 'rgba(255, 255, 255, 0.15)';
            icon.style.border = '1px solid rgba(255, 255, 255, 0.15)';
        });
    });

    // Deselect icons when clicking empty desktop area
    desktopScreen.addEventListener('click', () => {
        document.querySelectorAll('.desktop-icon').forEach(i => {
            i.style.background = '';
            i.style.border = '1px solid transparent';
        });
    });

    // 11. Taskbar Clock & Calendar
    const taskbarTime = document.getElementById('taskbar-time');
    const taskbarDate = document.getElementById('taskbar-date');
    const trayTimeBtn = document.getElementById('tray-time-btn');
    const calendarPanel = document.getElementById('calendar-panel');

    function updateTaskbarTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // '0' should be '12'
        
        taskbarTime.textContent = `${hours}:${minutes} ${ampm}`;
        taskbarDate.textContent = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        trayTimeBtn.title = now.toLocaleDateString('en-US', options);
        document.getElementById('calendar-date-display').textContent = now.toLocaleDateString('en-US', options);
    }
    setInterval(updateTaskbarTime, 1000);
    updateTaskbarTime();

    // Render Calendar Grid
    function renderCalendar() {
        const calGrid = document.getElementById('cal-days-container');
        if (!calGrid) return;
        calGrid.innerHTML = '';
        
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        
        for(let i=0; i<firstDay; i++) {
            const empty = document.createElement('div');
            calGrid.appendChild(empty);
        }
        
        for(let i=1; i<=daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = `cal-day ${i === now.getDate() ? 'today' : ''}`;
            dayDiv.textContent = i;
            calGrid.appendChild(dayDiv);
        }
    }
    renderCalendar();

    trayTimeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        calendarPanel.classList.remove('hidden');
        setTimeout(() => {
            calendarPanel.classList.toggle('active');
        }, 10);
    });

    document.addEventListener('click', (e) => {
        if (!calendarPanel.contains(e.target) && !trayTimeBtn.contains(e.target)) {
            calendarPanel.classList.remove('active');
            setTimeout(() => {
                if (!calendarPanel.classList.contains('active')) {
                    calendarPanel.classList.add('hidden');
                }
            }, 200);
        }
        if (!quickSettingsPanel.contains(e.target) && !trayIconsBtn.contains(e.target)) {
            quickSettingsPanel.classList.remove('active');
            setTimeout(() => {
                if (!quickSettingsPanel.classList.contains('active')) {
                    quickSettingsPanel.classList.add('hidden');
                }
            }, 200);
        }
    });

    // Quick Settings Panel Logic
    const trayIconsBtn = document.getElementById('tray-icons-btn');
    const quickSettingsPanel = document.getElementById('quick-settings-panel');

    trayIconsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        quickSettingsPanel.classList.remove('hidden');
        setTimeout(() => quickSettingsPanel.classList.toggle('active'), 10);
    });

    // Range Sliders Logic
    const volumeSlider = document.getElementById('volume-slider');
    const volumePct = document.getElementById('volume-pct');
    const brightnessSlider = document.getElementById('brightness-slider');
    const brightnessPct = document.getElementById('brightness-pct');

    function updateSliderBackground(slider) {
        const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.setProperty('--val', `${val}%`);
    }

    volumeSlider.addEventListener('input', (e) => {
        updateSliderBackground(e.target);
        volumePct.textContent = e.target.value;
    });
    updateSliderBackground(volumeSlider);

    const desktopBgLayer1 = document.getElementById('desktop-bg-layer1');
    const desktopBgLayer2 = document.getElementById('desktop-bg-layer2');
    
    let currentBrightness = 1.0;
    let isNightLightOn = false;

    function updateDesktopFilters() {
        let filterString = `brightness(${currentBrightness})`;
        if (isNightLightOn) {
            filterString += ` sepia(0.4) hue-rotate(-15deg) saturate(1.2)`;
        }
        desktopBgLayer1.style.filter = filterString;
        desktopBgLayer2.style.filter = filterString;
    }

    brightnessSlider.addEventListener('input', (e) => {
        updateSliderBackground(e.target);
        brightnessPct.textContent = e.target.value;
        currentBrightness = e.target.value / 100;
        updateDesktopFilters();
    });
    updateSliderBackground(brightnessSlider);

    // QS Buttons advanced toggle logic
    const qsWifi = document.getElementById('qs-wifi');
    const qsBluetooth = document.getElementById('qs-bluetooth');
    const qsAirplane = document.getElementById('qs-airplane');
    const qsBatterySaver = document.getElementById('qs-battery-saver');
    const qsNightLight = document.getElementById('qs-night-light');
    const qsAccessibility = document.getElementById('qs-accessibility');

    if (qsNightLight) {
        qsNightLight.addEventListener('click', () => {
            qsNightLight.classList.toggle('active');
            isNightLightOn = qsNightLight.classList.contains('active');
            updateDesktopFilters();
        });
    }

    if (qsAirplane) {
        qsAirplane.addEventListener('click', () => {
            qsAirplane.classList.toggle('active');
            if (qsAirplane.classList.contains('active')) {
                if (qsWifi) qsWifi.classList.remove('active');
                if (qsBluetooth) qsBluetooth.classList.remove('active');
            }
        });
    }

    if (qsWifi) {
        qsWifi.addEventListener('click', () => {
            qsWifi.classList.toggle('active');
            if (qsWifi.classList.contains('active') && qsAirplane) qsAirplane.classList.remove('active');
        });
    }

    if (qsBluetooth) {
        qsBluetooth.addEventListener('click', () => {
            qsBluetooth.classList.toggle('active');
            if (qsBluetooth.classList.contains('active') && qsAirplane) qsAirplane.classList.remove('active');
        });
    }

    if (qsBatterySaver) {
        qsBatterySaver.addEventListener('click', () => {
            qsBatterySaver.classList.toggle('active');
            if (qsBatterySaver.classList.contains('active')) {
                brightnessSlider.value = 40;
            } else {
                brightnessSlider.value = 100;
            }
            brightnessSlider.dispatchEvent(new Event('input'));
        });
    }

    if (qsAccessibility) {
        qsAccessibility.addEventListener('click', () => {
            qsAccessibility.classList.toggle('active');
        });
    }

    // 12. Taskbar App Toggles
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
        console.log("Start Menu toggled!");
    });

    document.querySelectorAll('.app-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle open state
            btn.classList.toggle('open');
            // Toggle active state
            if (btn.classList.contains('open')) {
                document.querySelectorAll('.app-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        });
    });

    // 13. Window Manager (Dragging)
    let activeWindow = null;
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    document.querySelectorAll('.window-header').forEach(header => {
        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls')) return; // Don't drag if clicking buttons
            const win = header.closest('.app-window') || header.closest('.window');
            if (!win) return;
            
            isDragging = true;
            activeWindow = win;
            
            // Bring to front
            document.querySelectorAll('.app-window, .window').forEach(w => w.style.zIndex = 500);
            activeWindow.style.zIndex = 501;

            const rect = activeWindow.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !activeWindow) return;
        
        // Remove transform if it exists (for legacy .window)
        if (activeWindow.style.transform) {
            activeWindow.style.transform = 'none';
        }

        activeWindow.style.left = `${e.clientX - dragOffsetX}px`;
        activeWindow.style.top = `${e.clientY - dragOffsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        activeWindow = null;
    });

    // 14. Settings App Logic
    const settingsAppBtn = document.getElementById('settings-app-btn');
    const settingsApp = document.getElementById('settings-app');

    if (settingsAppBtn && settingsApp) {
        settingsAppBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsApp.classList.remove('hidden');
            // Center it on first open if it hasn't been dragged
            if (!settingsApp.style.left) {
                settingsApp.style.left = `${(window.innerWidth - 800) / 2}px`;
                settingsApp.style.top = `${(window.innerHeight - 550) / 2}px`;
            }
            // Bring to front
            document.querySelectorAll('.app-window, .window').forEach(w => w.style.zIndex = 500);
            settingsApp.style.zIndex = 501;
            
            // close quick settings
            document.getElementById('quick-settings-panel').classList.add('hidden');
            document.getElementById('quick-settings-panel').classList.remove('active');
        });
    }

    const settingsNavItems = document.querySelectorAll('.settings-nav-item');
    const settingsPages = document.querySelectorAll('.settings-page');

    settingsNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active nav
            settingsNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update active page
            const targetPageId = item.getAttribute('data-page');
            settingsPages.forEach(page => {
                if (page.id === targetPageId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });
});
