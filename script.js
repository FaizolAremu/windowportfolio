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
            const appName = icon.getAttribute('data-app');
            console.log(`Opening app: ${appName}`);
            if (window.openApp) {
                window.openApp(appName);
            }
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

    // 13. Dynamic Window Manager state (declared early so power options can reference it)
    const openWindows = {};
    let highestZIndex = 500;

    // 12. Taskbar App Toggles & Start Menu
    const startBtn = document.getElementById('start-btn');
    const startMenu = document.getElementById('start-menu');
    const startSearchInput = document.getElementById('start-search-input');
    const startIcons = document.querySelectorAll('#start-pinned-grid .start-icon');
    const powerBtn = document.getElementById('power-btn');
    const powerMenu = document.getElementById('power-menu');

    // Search Filtering
    if (startSearchInput) {
        startSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            startIcons.forEach(icon => {
                const name = icon.getAttribute('data-name');
                if (name.includes(query)) {
                    icon.style.display = 'block';
                } else {
                    icon.style.display = 'none';
                }
            });
        });
    }

    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Reset Search & Power Menu
        if (startSearchInput) {
            startSearchInput.value = '';
            startIcons.forEach(i => i.style.display = 'block');
        }
        if (powerMenu) powerMenu.classList.add('hidden');

        startMenu.classList.remove('hidden');
        setTimeout(() => startMenu.classList.toggle('active'), 10);
    });

    // Close start menu or power menu when clicking outside
    document.addEventListener('click', (e) => {
        if (startMenu && !startMenu.contains(e.target) && !startBtn.contains(e.target)) {
            startMenu.classList.remove('active');
            setTimeout(() => {
                if (!startMenu.classList.contains('active')) {
                    startMenu.classList.add('hidden');
                }
            }, 200);
        }
        if (powerMenu && !powerBtn.contains(e.target) && !powerMenu.contains(e.target)) {
            powerMenu.classList.add('hidden');
        }
    });

    // Power Options
    if (powerBtn) {
        powerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            powerMenu.classList.toggle('hidden');
        });
    }

    const sleepBtn = document.getElementById('po-sleep');
    const restartBtn = document.getElementById('po-restart');
    const shutdownBtn = document.getElementById('po-shutdown');
    const sleepScreen = document.getElementById('sleep-screen');
    const shutdownScreen = document.getElementById('shutdown-screen');
    const turnOnBtn = document.getElementById('turn-on-btn');

    if (sleepBtn) {
        sleepBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            powerMenu.classList.add('hidden');
            startMenu.classList.remove('active');
            startMenu.classList.add('hidden');
            
            sleepScreen.classList.remove('hidden');
            sleepScreen.style.pointerEvents = 'auto';
            setTimeout(() => sleepScreen.style.opacity = '1', 50);
        });
    }

    if (sleepScreen) {
        const wakeUp = () => {
            if (sleepScreen.style.opacity === '1') {
                sleepScreen.style.opacity = '0';
                sleepScreen.style.pointerEvents = 'none';
                setTimeout(() => sleepScreen.classList.add('hidden'), 500);
            }
        };
        sleepScreen.addEventListener('click', wakeUp);
        window.addEventListener('keydown', wakeUp);
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            powerMenu.classList.add('hidden');
            startMenu.classList.remove('active');
            startMenu.classList.add('hidden');
            
            // "Restart": Close all open windows
            Object.values(openWindows).forEach(win => {
                win.querySelector('.close-btn').click();
            });
            // Show boot screen to simulate restart
            const bootScreen = document.getElementById('boot-screen');
            if (bootScreen) {
                bootScreen.classList.remove('hidden');
                setTimeout(() => {
                    bootScreen.classList.add('hidden');
                    const lockScreen = document.getElementById('lock-screen');
                    if (lockScreen) lockScreen.classList.remove('hidden', 'slide-up');
                    const loginScreen = document.getElementById('login-screen');
                    if (loginScreen) loginScreen.classList.add('hidden');
                    const desktopScreen = document.getElementById('desktop-screen');
                    if (desktopScreen) desktopScreen.classList.add('hidden');
                }, 3000);
            }
        });
    }

    if (shutdownBtn) {
        shutdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            powerMenu.classList.add('hidden');
            startMenu.classList.remove('active');
            startMenu.classList.add('hidden');
            
            shutdownScreen.classList.remove('hidden');
            shutdownScreen.style.pointerEvents = 'auto';
            setTimeout(() => {
                shutdownScreen.style.opacity = '1';
                setTimeout(() => {
                    const spinner = document.getElementById('shutdown-spinner');
                    const text = document.getElementById('shutdown-text');
                    if (spinner) spinner.style.display = 'none';
                    if (text) text.style.display = 'none';
                    if (turnOnBtn) turnOnBtn.classList.remove('hidden');
                }, 3000);
            }, 50);
        });
    }

    if (turnOnBtn) {
        turnOnBtn.addEventListener('click', () => {
            // Turn back on
            turnOnBtn.classList.add('hidden');
            
            // Reset spinner/text for next time
            const spinner = document.getElementById('shutdown-spinner');
            const text = document.getElementById('shutdown-text');
            if (spinner) spinner.style.display = 'block';
            if (text) text.style.display = 'block';

            shutdownScreen.style.opacity = '0';
            shutdownScreen.style.pointerEvents = 'none';
            setTimeout(() => {
                shutdownScreen.classList.add('hidden');
                
                // Show boot sequence like a fresh start
                const bootScreen = document.getElementById('boot-screen');
                const lockScreen = document.getElementById('lock-screen');
                const loginScreen = document.getElementById('login-screen');
                const desktopScreen = document.getElementById('desktop-screen');
                
                if (desktopScreen) desktopScreen.classList.add('hidden');
                if (lockScreen) lockScreen.classList.remove('slide-up');
                if (loginScreen) loginScreen.classList.add('hidden');

                if (bootScreen) {
                    bootScreen.classList.remove('hidden');
                    setTimeout(() => {
                        bootScreen.classList.add('hidden');
                        if (lockScreen) lockScreen.classList.remove('hidden');
                    }, 3000);
                }
            }, 500);
        });
    }

    document.querySelectorAll('.app-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const appName = btn.getAttribute('data-app');
            if (btn.classList.contains('active')) {
                if (window.closeApp) window.closeApp(appName, true);
            } else {
                if (window.openApp) window.openApp(appName);
            }
        });
    });

    // 13. Dynamic Window Manager (continued)

    function bringToFront(winElem) {
        highestZIndex++;
        winElem.style.zIndex = highestZIndex;
        document.querySelectorAll('.app-window').forEach(w => w.classList.remove('active'));
        winElem.classList.add('active');
    }

    window.createWindow = function({ id, title, icon, content, width=800, height=550, x, y }) {
        if (openWindows[id]) {
            const win = openWindows[id];
            if (win.classList.contains('minimized') || win.classList.contains('hidden')) {
                win.classList.remove('minimized', 'hidden');
            }
            bringToFront(win);
            return win;
        }

        const win = document.createElement('div');
        win.className = 'app-window active';
        win.id = `${id}-window`;
        win.setAttribute('data-app-name', title);
        
        // Default centering if no x/y provided
        if (x === undefined) x = (window.innerWidth - width) / 2;
        if (y === undefined) y = (window.innerHeight - height) / 2;
        
        win.style.width = `${width}px`;
        win.style.height = `${height}px`;
        win.style.left = `${x}px`;
        win.style.top = `${y}px`;

        win.innerHTML = `
            <div class="window-header">
                <div class="window-title">
                    ${icon}
                    ${title}
                </div>
                <div class="window-controls">
                    <button class="win-btn min-btn">—</button>
                    <button class="win-btn max-btn">☐</button>
                    <button class="win-btn close-btn">✕</button>
                </div>
            </div>
            ${content}
            <div class="resize-handle resize-n"></div>
            <div class="resize-handle resize-s"></div>
            <div class="resize-handle resize-e"></div>
            <div class="resize-handle resize-w"></div>
            <div class="resize-handle resize-nw"></div>
            <div class="resize-handle resize-ne"></div>
            <div class="resize-handle resize-sw"></div>
            <div class="resize-handle resize-se"></div>
        `;

        document.getElementById('window-layer').appendChild(win);
        openWindows[id] = win;
        bringToFront(win);

        win.addEventListener('mousedown', () => bringToFront(win));

        // Button Logic
        const minBtn = win.querySelector('.min-btn');
        const maxBtn = win.querySelector('.max-btn');
        const closeBtn = win.querySelector('.close-btn');

        minBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            win.classList.add('minimized');
            const taskbarBtn = document.querySelector(`.app-btn[data-app="${title}"]`);
            if (taskbarBtn) taskbarBtn.classList.remove('active');
        });

        let isMaximized = false;
        let preMaxRect = null;

        function toggleMaximize() {
            if (!isMaximized) {
                preMaxRect = {
                    left: win.style.left,
                    top: win.style.top,
                    width: win.style.width,
                    height: win.style.height
                };
                win.style.left = '0px';
                win.style.top = '0px';
                win.style.width = '100vw';
                win.style.height = 'calc(100vh - 50px)'; // 50px taskbar
                isMaximized = true;
            } else {
                win.style.left = preMaxRect.left;
                win.style.top = preMaxRect.top;
                win.style.width = preMaxRect.width;
                win.style.height = preMaxRect.height;
                isMaximized = false;
            }
        }

        maxBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMaximize();
        });

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            win.classList.add('hidden');
            setTimeout(() => {
                win.remove();
                delete openWindows[id];
                const taskbarBtn = document.querySelector(`.app-btn[data-app="${title}"]`);
                if (taskbarBtn) taskbarBtn.classList.remove('active', 'open');
            }, 200);
        });

        // Drag Logic
        const header = win.querySelector('.window-header');
        let isDragging = false;
        let dragOffsetX = 0;
        let dragOffsetY = 0;

        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls')) return;
            if (isMaximized) return; 
            isDragging = true;
            bringToFront(win);
            
            const rect = win.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            
            // Temporarily disable transitions during drag for smooth performance
            win.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            let newX = e.clientX - dragOffsetX;
            let newY = e.clientY - dragOffsetY;

            // Edge Snap: Maximize if dragged to top edge
            if (e.clientY <= 0) {
                isDragging = false;
                win.style.transition = '';
                toggleMaximize();
                return;
            }

            win.style.left = `${newX}px`;
            win.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                win.style.transition = '';
            }
        });

        // Resize Logic
        let isResizing = false;
        let currentHandle = null;
        let startX = 0, startY = 0;
        let startW = 0, startH = 0;
        let startL = 0, startT = 0;

        win.querySelectorAll('.resize-handle').forEach(handle => {
            handle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                if (isMaximized) return;
                isResizing = true;
                currentHandle = handle.className;
                bringToFront(win);
                win.style.transition = 'none';
                
                startX = e.clientX;
                startY = e.clientY;
                const rect = win.getBoundingClientRect();
                startW = rect.width;
                startH = rect.height;
                startL = rect.left;
                startT = rect.top;
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            const minW = 300;
            const minH = 200;

            if (currentHandle.includes('resize-e')) {
                let nw = startW + dx;
                if (nw > minW) win.style.width = `${nw}px`;
            }
            if (currentHandle.includes('resize-w')) {
                let nw = startW - dx;
                if (nw > minW) {
                    win.style.width = `${nw}px`;
                    win.style.left = `${startL + dx}px`;
                }
            }
            if (currentHandle.includes('resize-s')) {
                let nh = startH + dy;
                if (nh > minH) win.style.height = `${nh}px`;
            }
            if (currentHandle.includes('resize-n')) {
                let nh = startH - dy;
                if (nh > minH) {
                    win.style.height = `${nh}px`;
                    win.style.top = `${startT + dy}px`;
                }
            }
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                win.style.transition = '';
            }
        });

        // Re-attach internal scripts if necessary (e.g. settings navigation)
        if (id === 'settings') {
            initSettingsApp(win);
        }

        return win;
    };

    // Initialize specific logic for settings app after rendering its template
    function initSettingsApp(win) {
        const settingsNavItems = win.querySelectorAll('.settings-nav-item');
        const settingsPages = win.querySelectorAll('.settings-page');

        settingsNavItems.forEach(item => {
            item.addEventListener('click', () => {
                settingsNavItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                const targetPageId = item.getAttribute('data-page');
                settingsPages.forEach(page => {
                    if (page.id === targetPageId) page.classList.add('active');
                    else page.classList.remove('active');
                });
            });
        });
    }

    const settingsAppBtn = document.getElementById('settings-app-btn');
    if (settingsAppBtn) {
        settingsAppBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.openApp('Settings');
            document.getElementById('quick-settings-panel').classList.add('hidden');
            document.getElementById('quick-settings-panel').classList.remove('active');
        });
    }
});

// Global Window Management Functions
window.openApp = function(appName) {
    if (appName === 'GitHub') {
        window.open('https://github.com/faizolaremu', '_blank');
        return;
    }
    if (appName === 'Recycle Bin') {
        alert('Recycle Bin is empty!');
        return;
    }

    const appConfigs = {
        'Settings': { id: 'settings', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69-.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07-.49-.12-.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>' },
        'About Me': { id: 'about-me', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#32B579"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
        'My Projects': { id: 'my-projects', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#FCCA3F"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>' },
        'Resume': { id: 'resume', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#4B89D6"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' },
        'Skills': { id: 'skills', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#E65A4A"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>' },
        'Terminal': { id: 'terminal', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#555"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm-8.5 13H4v-2h7.5v2zm2.3-4.1l-1.4 1.4L7.5 9.4 12.4 4.5l1.4 1.4-3.5 3.5 3.5 3.5z"/></svg>' }
    };

    const config = appConfigs[appName];
    if (config) {
        const template = document.getElementById(`tpl-${config.id}`);
        if (template) {
            window.createWindow({
                id: config.id,
                title: appName,
                icon: config.icon,
                content: template.innerHTML
            });

            // Close start menu after launching app (Windows 11 behavior)
            const startMenu = document.getElementById('start-menu');
            if (startMenu) {
                startMenu.classList.remove('active');
                setTimeout(() => startMenu.classList.add('hidden'), 200);
            }
            
            // update taskbar
            const taskbarBtn = document.querySelector(`.app-btn[data-app="${appName}"]`);
            if (taskbarBtn) {
                document.querySelectorAll('.app-btn').forEach(b => b.classList.remove('active'));
                taskbarBtn.classList.add('open', 'active');
            }
        }
    } else {
        console.log(`App not implemented: ${appName}`);
    }
}

window.closeApp = function(appName, minimizeOnly = false) {
    const configId = appName.toLowerCase().replace(/\s+/g, '-');
    const win = document.getElementById(`${configId}-window`);
    
    if (win) {
        if (minimizeOnly) {
            win.querySelector('.min-btn').click();
        } else {
            win.querySelector('.close-btn').click();
        }
    }
}

window.openPersonalizePanel = function() {
    window.openApp('Settings');
    // We simulate switching to the personalization tab:
    setTimeout(() => {
        const win = document.getElementById('settings-window');
        if (win) {
            const navItems = win.querySelectorAll('.settings-nav-item');
            navItems.forEach(n => {
                if (n.getAttribute('data-page') === 'page-personalization') n.click();
            });
        }
    }, 100);
}
