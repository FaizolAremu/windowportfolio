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

/**
 * RESUME CONFIGURATION
 * Define all your professional data here.
 * The Resume App dynamically renders this data and provides a printable view.
 */
const RESUME = {
    name: "Faizol Aremu",
    title: "Fullstack Developer",
    email: "waliufaizol@gmail.com",
    github: "https://github.com/faizolaremu",
    linkedin: "https://linkedin.com/in/faizolaremu",
    portfolio: "https://proxycowrywise.netlify.app/",
    summary: "Ambitious Computer Science student at LAUTECH and Fullstack Developer Intern at SQI College of ICT. Extremely passionate about building modern, responsive, and highly interactive digital experiences. I integrate advanced AI tools into my engineering workflow to boost velocity, write cleaner code, and deliver premium products at speed.",
    experience: [
        {
            company: "SQI College of ICT",
            role: "Fullstack Developer Intern",
            dateRange: "2024 - Present",
            achievements: [
                "Collaborate on building modern responsive web interfaces using JavaScript, CSS3, Tailwind CSS, and frontend frameworks.",
                "Integrate generative AI tools into development workflows to accelerate coding velocity, optimize debug cycles, and structure clean modular files.",
                "Acquire hands-on experience in backend architectures, database connectivity, API design, and fullstack application logic."
            ]
        },
        {
            company: "LAUTECH",
            role: "Computer Science Undergraduate",
            dateRange: "2021 - Present",
            achievements: [
                "Acquired deep theoretical foundations in data structures, algorithms, database systems, and software engineering methodologies.",
                "Designed and built interactive personal and team web projects using vanilla HTML, CSS, and modular JavaScript structures.",
                "Developed clean, modern UI layout prototypes using modern design tools like Figma before translating them into frontend code."
            ]
        }
    ],
    education: [
        {
            school: "Ladoke Akintola University of Technology (LAUTECH)",
            degree: "B.Tech in Computer Science",
            year: "2021 - Present"
        },
        {
            school: "SQI College of ICT",
            degree: "Professional Diploma in Software Engineering",
            year: "2024 - Present"
        }
    ],
    skills: {
        languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"],
        frameworks: ["React.js", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js"],
        tools: ["Git & GitHub", "Figma", "VS Code", "AI Assistant Tools", "Postman", "PostgreSQL"]
    }
};

/**
 * PROJECTS DATA
 * Easily add or edit projects here
 */
const PROJECTS = [
    {
        title: "Cowrywise",
        description: "A premium responsive clone cowrywise website.",
        tags: ["HTML", "CSS", "Bootstrap"],
        category: "Web Apps",
        image: "",
        demo: "https://proxycowrywise.netlify.app/",
        repo: "https://github.com/FaizolAremu/Cowry-wise"
    },
    {
        title: "E-Commerce Suite",
        description: "A premium responsive shop with dynamic widgets, fast analytics dashboard, and stripe integration.",
        tags: ["React", "Node.js", "JS"],
        category: "Web Apps",
        image: "",
        demo: "https://github.com/faizolaremu",
        repo: "https://github.com/faizolaremu"
    },
    {
        title: "Fintech Mobile Wallet",
        description: "Secure cross-platform wallet application featuring dynamic multi-currency conversions and swift payments.",
        tags: ["Flutter", "Firebase", "CSS"],
        category: "Mobile",
        image: "",
        demo: "https://github.com/faizolaremu",
        repo: "https://github.com/faizolaremu"
    },
    {
        title: "Auto-Code CLI Tool",
        description: "High-speed developer CLI utility that structuralizes complex folders and auto-generates custom setup templates.",
        tags: ["Python", "JS", "Node.js"],
        category: "Open Source",
        image: "",
        demo: "https://github.com/faizolaremu",
        repo: "https://github.com/faizolaremu"
    },
    {
        title: "WebGL Fluid Simulation",
        description: "Ultra smooth vector flow particle system utilizing dynamic fragment shaders for realistic liquid physics.",
        tags: ["JS", "HTML", "CSS"],
        category: "Experiments",
        image: "",
        demo: "https://github.com/faizolaremu",
        repo: "https://github.com/faizolaremu"
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent offline assistant running state-of-the-art quantized large language models completely in-browser.",
        tags: ["React", "Python", "TS"],
        category: "Web Apps",
        image: "",
        demo: "https://github.com/faizolaremu",
        repo: "https://github.com/faizolaremu"
    }
];

/**
 * Global Skills Configuration
 * Used by the Skills App to render category-specific skill progress cards.
 */
const SKILLS = [
    // Languages
    { category: "Languages", name: "JavaScript", icon: "javascript", color: "#f7df1e", level: 90 },
    { category: "Languages", name: "HTML5", icon: "html5", color: "#e34f26", level: 95 },
    { category: "Languages", name: "CSS3", icon: "css3", color: "#1572b6", level: 92 },
    { category: "Languages", name: "TypeScript", icon: "typescript", color: "#3178c6", level: 80 },
    { category: "Languages", name: "SQL", icon: "database", color: "#0078d4", level: 75, fallback: "🛢️" },

    // Frameworks & Libraries
    { category: "Frameworks & Libraries", name: "React.js", icon: "react", color: "#61dafb", level: 88 },
    { category: "Frameworks & Libraries", name: "Tailwind CSS", icon: "tailwindcss", color: "#38bdf8", level: 90 },
    { category: "Frameworks & Libraries", name: "Bootstrap", icon: "bootstrap", color: "#7952b3", level: 85 },
    { category: "Frameworks & Libraries", name: "Node.js", icon: "nodedotjs", color: "#339933", level: 78 },
    { category: "Frameworks & Libraries", name: "Express.js", icon: "express", color: "#828282", level: 80, fallback: "🚀" },

    // Tools & Platforms
    { category: "Tools & Platforms", name: "Git & GitHub", icon: "git", color: "#f05032", level: 85 },
    { category: "Tools & Platforms", name: "Figma", icon: "figma", color: "#f24e1e", level: 80 },
    { category: "Tools & Platforms", name: "VS Code", icon: "visualstudiocode", color: "#007acc", level: 92 },
    { category: "Tools & Platforms", name: "Postman", icon: "postman", color: "#ff6c37", level: 82 },

    // Cloud & DevOps
    { category: "Cloud & DevOps", name: "PostgreSQL", icon: "postgresql", color: "#4169e1", level: 70 },
    { category: "Cloud & DevOps", name: "Vercel", icon: "vercel", color: "#ffffff", level: 85 },
    { category: "Cloud & DevOps", name: "Netlify", icon: "netlify", color: "#00c7b7", level: 88 },

    // Soft Skills
    { category: "Soft Skills", name: "AI Workflows", icon: "openai", color: "#8a2be2", level: 95, fallback: "🤖" },
    { category: "Soft Skills", name: "Problem Solving", icon: "puzzle", color: "#ff8c00", level: 90, fallback: "🧩" },
    { category: "Soft Skills", name: "Collaboration", icon: "people", color: "#32cd32", level: 92, fallback: "🤝" },
    { category: "Soft Skills", name: "Fast Learning", icon: "speed", color: "#ff007f", level: 95, fallback: "🚀" }
];

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
        if (id === 'my-projects') {
            initProjectsApp(win);
        }
        if (id === 'resume') {
            initResumeApp(win);
        }
        if (id === 'about-me') {
            initAboutMeApp(win);
        }
        if (id === 'skills') {
            initSkillsApp(win);
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

    // Initialize specific logic for My Projects app
    function initProjectsApp(win) {
        const folderItems = win.querySelectorAll('.proj-folder');
        const grid = win.querySelector('#proj-grid');
        const locationSpan = win.querySelector('#proj-location');
        const countSpan = win.querySelector('#proj-count');

        const tagStyles = {
            'javascript': { bg: '#f7df1e', color: '#000' },
            'js': { bg: '#f7df1e', color: '#000' },
            'react': { bg: '#61dafb', color: '#000' },
            'python': { bg: '#3776ab', color: '#fff' },
            'node.js': { bg: '#339933', color: '#fff' },
            'node': { bg: '#339933', color: '#fff' },
            'css': { bg: '#1572b6', color: '#fff' },
            'html': { bg: '#e34c26', color: '#fff' },
            'typescript': { bg: '#3178c6', color: '#fff' },
            'ts': { bg: '#3178c6', color: '#fff' },
            'flutter': { bg: '#02569b', color: '#fff' },
            'firebase': { bg: '#ffca28', color: '#000' },
            'bootstrap': { bg: '#7952b3', color: '#fff' }
        };

        const gradients = [
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
            'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
            'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
        ];

        function render(cat) {
            if (!grid) return;
            grid.innerHTML = '';
            if (locationSpan) locationSpan.textContent = cat;

            const filtered = cat === 'All Projects'
                ? PROJECTS
                : PROJECTS.filter(p => p.category === cat);

            if (countSpan) {
                countSpan.textContent = `(${filtered.length} item${filtered.length !== 1 ? 's' : ''})`;
            }

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="proj-empty">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="#555"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
                        <span>No projects found in this folder.</span>
                    </div>
                `;
                return;
            }

            filtered.forEach((p, idx) => {
                const initials = p.title.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase();
                const grad = gradients[idx % gradients.length];
                
                const card = document.createElement('div');
                card.className = 'proj-card';
                
                let thumbHTML = '';
                if (p.image) {
                    thumbHTML = `<div class="proj-thumb" style="background-image: url('${p.image}'); background-size: cover; background-position: center; height: 110px;"></div>`;
                } else {
                    thumbHTML = `<div class="proj-thumb" style="background: ${grad};">${initials}</div>`;
                }

                const tagsHTML = p.tags.map(t => {
                    const norm = t.toLowerCase();
                    const style = tagStyles[norm] || { bg: '#555', color: '#fff' };
                    return `<span class="proj-tag" style="background-color: ${style.bg}; color: ${style.color};">${t}</span>`;
                }).join('');

                card.innerHTML = `
                    ${thumbHTML}
                    <div class="proj-body">
                        <h4 class="proj-title">${p.title}</h4>
                        <div class="proj-tags">${tagsHTML}</div>
                        <p class="proj-desc">${p.description}</p>
                        <div class="proj-actions">
                            <a href="${p.demo}" target="_blank" class="proj-btn proj-btn-demo">Live Demo</a>
                            <a href="${p.repo}" target="_blank" class="proj-btn proj-btn-repo">GitHub</a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        folderItems.forEach(item => {
            item.addEventListener('click', () => {
                folderItems.forEach(f => f.classList.remove('active'));
                item.classList.add('active');
                render(item.getAttribute('data-cat'));
            });
        });

        // Initial load
        render('All Projects');
    }

    // Initialize specific logic for Resume app
    function initResumeApp(win) {
        const docContainer = win.querySelector('.resume-document');
        if (!docContainer) return;

        // Render resume dynamically from RESUME config!
        let expHTML = RESUME.experience.map(exp => `
            <div class="resume-timeline-item">
                <div class="resume-timeline-marker"></div>
                <div class="resume-timeline-content">
                    <div class="resume-job-header">
                        <h4 class="resume-job-title">${exp.role}</h4>
                        <span class="resume-job-date">${exp.dateRange}</span>
                    </div>
                    <div class="resume-company">${exp.company}</div>
                    <ul class="resume-achievements">
                        ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        let eduHTML = RESUME.education.map(edu => `
            <div class="resume-education-item">
                <div class="resume-edu-header">
                    <h4 class="resume-school">${edu.school}</h4>
                    <span class="resume-edu-year">${edu.year}</span>
                </div>
                <div class="resume-degree">${edu.degree}</div>
            </div>
        `).join('');

        let skillsHTML = '';
        for (const [cat, tags] of Object.entries(RESUME.skills)) {
            const catName = cat.charAt(0).toUpperCase() + cat.slice(1);
            const tagsHTML = tags.map(tag => `<span class="resume-skill-tag">${tag}</span>`).join('');
            skillsHTML += `
                <div class="resume-skills-group">
                    <div class="resume-skills-category">${catName}</div>
                    <div class="resume-skills-tags">${tagsHTML}</div>
                </div>
            `;
        }

        docContainer.innerHTML = `
            <header class="resume-header">
                <h1 class="resume-name">${RESUME.name}</h1>
                <h2 class="resume-subtitle">${RESUME.title}</h2>
                <div class="resume-links">
                    <a href="mailto:${RESUME.email}" class="resume-link" title="Email" target="_blank">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <span>${RESUME.email}</span>
                    </a>
                    <a href="${RESUME.github}" class="resume-link" title="GitHub" target="_blank">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href="${RESUME.linkedin}" class="resume-link" title="LinkedIn" target="_blank">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="${RESUME.portfolio}" class="resume-link" title="Portfolio" target="_blank">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        <span>Portfolio</span>
                    </a>
                </div>
            </header>
            
            <section class="resume-section">
                <h3 class="resume-section-title">Professional Summary</h3>
                <div class="resume-divider-line"></div>
                <p class="resume-summary-text">${RESUME.summary}</p>
            </section>
            
            <section class="resume-section">
                <h3 class="resume-section-title">Experience</h3>
                <div class="resume-divider-line"></div>
                <div class="resume-timeline">
                    ${expHTML}
                </div>
            </section>
            
            <section class="resume-section">
                <h3 class="resume-section-title">Education</h3>
                <div class="resume-divider-line"></div>
                <div class="resume-education-list">
                    ${eduHTML}
                </div>
            </section>
            
            <section class="resume-section">
                <h3 class="resume-section-title">Skills</h3>
                <div class="resume-divider-line"></div>
                <div class="resume-skills-container">
                    ${skillsHTML}
                </div>
            </section>
        `;

        // Handle Download / Print Button
        const downloadBtn = win.querySelector('#resume-download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.print();
            });
        }
    }

    // Initialize specific logic for About Me VS Code app
    function initAboutMeApp(win) {
        const fileItems = win.querySelectorAll('.vscode-file-item');
        const codeContainer = win.querySelector('.vscode-code-content');
        const linesContainer = win.querySelector('.vscode-line-numbers');
        const activeTabName = win.querySelector('#vscode-active-tab');
        const statusLines = win.querySelector('#vscode-status-lines');
        const statusLang = win.querySelector('#vscode-status-lang');

        const filesData = {
            'about-me.md': {
                lang: 'Markdown',
                code: `# Faizol Aremu | Fullstack Developer

## 🚀 The Mission
I am a Computer Science student at LAUTECH and a Fullstack Developer Intern at SQI College of ICT. I don't just write code—I build responsive, modern, and highly interactive digital experiences that feel alive.

## 🤖 Workflow & Velocity
I integrate cutting-edge AI tools into my everyday development workflow to accelerate coding velocity, eliminate bugs, and structure premium products at lightspeed.

## 🛠️ The Tech Stack
- HTML5 & CSS3
- Tailwind CSS
- JavaScript (ES6+)
- Responsive Clean UI Design
- Growing knowledge in Frontend & Backend architectures

Let's create something legendary together!`,
                highlighted: `<span class="vs-md-h"># Faizol Aremu | Fullstack Developer</span>

<span class="vs-md-h">## 🚀 The Mission</span>
I am a Computer Science student at LAUTECH and a Fullstack Developer Intern at SQI College of ICT. I don't just write code—I build responsive, modern, and highly interactive digital experiences that feel alive.

<span class="vs-md-h">## 🤖 Workflow & Velocity</span>
I integrate cutting-edge AI tools into my everyday development workflow to accelerate coding velocity, eliminate bugs, and structure premium products at lightspeed.

<span class="vs-md-h">## 🛠️ The Tech Stack</span>
<span class="vs-md-bullet">-</span> HTML5 & CSS3
<span class="vs-md-bullet">-</span> Tailwind CSS
<span class="vs-md-bullet">-</span> JavaScript (ES6+)
<span class="vs-md-bullet">-</span> Responsive Clean UI Design
<span class="vs-md-bullet">-</span> Growing knowledge in Frontend & Backend architectures

Let's create something legendary together!`
            },
            'fun-facts.md': {
                lang: 'Markdown',
                code: `# Beyond The Code

- 🚀 Fast Learner: Growing knowledge in both frontend and backend architectures
- 🤖 AI Enthusiast: Seamlessly integrates LLMs and AI tools to write cleaner code and deliver products 3x faster
- 💡 Physics-based Motion: Obsessed with building web UI that feels alive and tactile
- 🌟 Ambition: Chasing down complex challenges to shape the future of elegant web engineering`,
                highlighted: `<span class="vs-md-h"># Beyond The Code</span>

<span class="vs-md-bullet">-</span> 🚀 Fast Learner: Growing knowledge in both frontend and backend architectures
<span class="vs-md-bullet">-</span> 🤖 AI Enthusiast: Seamlessly integrates LLMs and AI tools to write cleaner code and deliver products 3x faster
<span class="vs-md-bullet">-</span> 💡 Physics-based Motion: Obsessed with building web UI that feels alive and tactile
<span class="vs-md-bullet">-</span> 🌟 Ambition: Chasing down complex challenges to shape the future of elegant web engineering`
            },
            'contact.js': {
                lang: 'JavaScript',
                code: `// Let's create something legendary together!
export const collaboration = {
    email: "waliufaizol@gmail.com",
    github: "https://github.com/faizolaremu",
    linkedin: "https://linkedin.com/in/faizolaremu",
    status: "Open to bold ideas, intern roles, & fullstack collaborations.",
    action: "Let's connect and build the next big thing!"
};`,
                highlighted: `<span class="vs-comment">// Let's create something legendary together!</span>
<span class="vs-keyword">export</span> <span class="vs-keyword">const</span> <span class="vs-property">collaboration</span> <span class="vs-punct">=</span> <span class="vs-punct">{</span>
    <span class="vs-property">email</span><span class="vs-punct">:</span> <span class="vs-string">"waliufaizol@gmail.com"</span><span class="vs-punct">,</span>
    <span class="vs-property">github</span><span class="vs-punct">:</span> <span class="vs-string">"https://github.com/faizolaremu"</span><span class="vs-punct">,</span>
    <span class="vs-property">linkedin</span><span class="vs-punct">:</span> <span class="vs-string">"https://linkedin.com/in/faizolaremu"</span><span class="vs-punct">,</span>
    <span class="vs-property">status</span><span class="vs-punct">:</span> <span class="vs-string">"Open to bold ideas, intern roles, & fullstack collaborations."</span><span class="vs-punct">,</span>
    <span class="vs-property">action</span><span class="vs-punct">:</span> <span class="vs-string">"Let's connect and build the next big thing!"</span>
<span class="vs-punct">}</span><span class="vs-punct">;</span>`
            }
        };

        function loadFile(fileName) {
            const data = filesData[fileName];
            if (!data) return;

            // Highlighted content + cursor
            codeContainer.innerHTML = data.highlighted + '<span class="vscode-cursor"></span>';

            // Lines calculation and population
            const lines = data.code.split('\n');
            let numbersHTML = '';
            for (let i = 1; i <= lines.length; i++) {
                numbersHTML += `<div>${i}</div>`;
            }
            linesContainer.innerHTML = numbersHTML;

            // Active file visual state
            fileItems.forEach(item => {
                if (item.getAttribute('data-file') === fileName) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Update Tab name
            if (activeTabName) activeTabName.textContent = fileName;

            // Update status details
            if (statusLines) statusLines.textContent = `Ln ${lines.length}, Col 1`;
            if (statusLang) statusLang.textContent = data.lang;
        }

        // Add folder tree clicking triggers
        fileItems.forEach(item => {
            item.addEventListener('click', () => {
                const fileName = item.getAttribute('data-file');
                loadFile(fileName);
            });
        });

        // 1. Folder collapse/expand accordion toggle
        const folderTitle = win.querySelector('.vscode-folder-title');
        const fileList = win.querySelector('.vscode-file-list');
        const folderArrow = win.querySelector('.vscode-arrow');

        if (folderTitle && fileList && folderArrow) {
            folderTitle.addEventListener('click', () => {
                if (fileList.style.display === 'none') {
                    fileList.style.display = 'flex';
                    folderArrow.textContent = '▼';
                } else {
                    fileList.style.display = 'none';
                    folderArrow.textContent = '▶';
                }
            });
        }

        // 2. Activity Bar sidebar toggles & sliding panels
        const sidebar = win.querySelector('.vscode-sidebar');
        const actIcons = win.querySelectorAll('.vscode-act-top .vscode-act-icon');
        const views = win.querySelectorAll('.vscode-sidebar-view');

        actIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const title = icon.getAttribute('title').toLowerCase();
                let targetViewId = 'vscode-view-explorer';
                
                if (title.includes('search')) targetViewId = 'vscode-view-search';
                else if (title.includes('source')) targetViewId = 'vscode-view-git';
                else if (title.includes('run')) targetViewId = 'vscode-view-debug';
                else if (title.includes('extensions')) targetViewId = 'vscode-view-extensions';

                const targetView = win.querySelector(`#${targetViewId}`);

                // If already active, toggle collapse
                if (icon.classList.contains('active')) {
                    icon.classList.remove('active');
                    sidebar.style.width = '0px';
                    sidebar.style.minWidth = '0px';
                    sidebar.style.overflow = 'hidden';
                } else {
                    // Deactivate all
                    actIcons.forEach(i => i.classList.remove('active'));
                    views.forEach(v => v.classList.add('hidden'));

                    // Activate selected
                    icon.classList.add('active');
                    sidebar.style.width = '240px';
                    sidebar.style.minWidth = '240px';
                    sidebar.style.overflow = 'visible';
                    if (targetView) targetView.classList.remove('hidden');
                }
            });
        });

        // 3. Search Engine Filter
        const searchInput = win.querySelector('.vscode-search-input');
        const searchResults = win.querySelector('.vscode-search-results');

        if (searchInput && searchResults) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase().trim();
                searchResults.innerHTML = '';

                if (!query) {
                    searchResults.innerHTML = '<div style="padding: 10px; color: #858585;">Type to search in files...</div>';
                    return;
                }

                let matchesFound = 0;
                for (const [fileName, file] of Object.entries(filesData)) {
                    if (file.code.toLowerCase().includes(query)) {
                        matchesFound++;
                        const lines = file.code.split('\n');
                        const matchingLine = lines.find(line => line.toLowerCase().includes(query)) || '';
                        
                        const matchEl = document.createElement('div');
                        matchEl.className = 'vscode-search-match';
                        matchEl.innerHTML = `
                            <div class="vscode-search-match-file">📄 ${fileName}</div>
                            <div class="vscode-search-match-text">${matchingLine.replace(new RegExp(query, 'gi'), m => `<mark style="background: #613214; color: #ffeb3b; padding: 0 2px; border-radius: 2px;">${m}</mark>`)}</div>
                        `;

                        matchEl.addEventListener('click', () => {
                            // Automatically switch sidebars to explorer and load file
                            const explorerIcon = win.querySelector('.vscode-act-icon[title="Explorer"]');
                            if (explorerIcon) explorerIcon.click();
                            loadFile(fileName);
                        });

                        searchResults.appendChild(matchEl);
                    }
                }

                if (matchesFound === 0) {
                    searchResults.innerHTML = '<div style="padding: 10px; color: #858585;">No results found.</div>';
                }
            });
        }

        // 4. Source Control (Git) Commit Interactive Actions
        const commitBtn = win.querySelector('.vscode-git-commit-btn');
        const gitMsgInput = win.querySelector('.vscode-git-msg-input');
        const gitBadge = win.querySelector('.vscode-git-changes-title .vscode-badge');
        const gitFile = win.querySelector('.vscode-git-file');
        const gitStatusMode = win.querySelector('.vscode-status-mode');

        if (commitBtn && gitMsgInput) {
            commitBtn.addEventListener('click', () => {
                const msg = gitMsgInput.value.trim();
                if (!msg) {
                    alert('Please enter a commit message!');
                    return;
                }

                gitMsgInput.value = '';
                if (gitBadge) gitBadge.style.display = 'none';
                if (gitFile) {
                    gitFile.innerHTML = '<div style="padding: 10px 0; color: #6a9955; font-style: italic;">✓ No changes detected</div>';
                }
                if (gitStatusMode) {
                    gitStatusMode.innerHTML = `<span class="vscode-status-mode">✔ Master (Commit: ${msg.substring(0, 7)})</span>`;
                }
                alert(`Successfully committed changes:\n"${msg}"\n\nBranch: master is up-to-date.`);
            });
        }

        // 5. Debug Session trigger
        const debugBtn = win.querySelector('.vscode-debug-btn');
        if (debugBtn) {
            debugBtn.addEventListener('click', () => {
                alert('🚀 Debugger Session Started...\n\nRunning profile checklist:\n- Name: Faizol Aremu\n- Role: Fullstack Developer\n- Status: Optimized with AI workflows.\n\nResult: SUCCESS! Ready for new challenges.');
            });
        }

        // 6. Settings Link OS integration
        const vsSettingsBtn = win.querySelector('.vscode-act-bottom .vscode-act-icon[title="Settings"]');
        if (vsSettingsBtn) {
            vsSettingsBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.openApp) {
                    window.openApp('Settings');
                }
            });
        }

        // 7. Tab Close Button integration (closes entire window)
        const tabCloseBtn = win.querySelector('.vscode-tab-close');
        if (tabCloseBtn) {
            tabCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.closeApp) {
                    window.closeApp('About Me');
                }
            });
        }

        // 8. Sync Spinner integration
        const syncBtn = win.querySelector('.vscode-status-sync');
        if (syncBtn) {
            syncBtn.addEventListener('click', () => {
                syncBtn.classList.add('spinning');
                setTimeout(() => {
                    syncBtn.classList.remove('spinning');
                    alert('Synchronized successfully with remote branch origin/master!');
                }, 800);
            });
        }

        // Pre-load default file
        loadFile('about-me.md');
    }

    // Initialize specific logic for skills app (Windows 11 Settings clone)
    function initSkillsApp(win) {
        const navItems = win.querySelectorAll('.skills-nav-item');
        const grid = win.querySelector('#skills-grid');
        const catTitle = win.querySelector('#skills-cat-title');

        if (!grid || !catTitle) return;

        function loadCategory(categoryName) {
            // Update title
            catTitle.textContent = categoryName;

            // Filter skills
            const filteredSkills = SKILLS.filter(s => s.category === categoryName);
            grid.innerHTML = '';

            filteredSkills.forEach(skill => {
                const card = document.createElement('div');
                card.className = 'skills-card';

                const hexColor = skill.color.replace('#', '');
                const logoUrl = `https://cdn.simpleicons.org/${skill.icon}/${hexColor}`;

                card.innerHTML = `
                    <div class="skills-card-logo">
                        <img class="skills-brand-img" src="${logoUrl}" alt="${skill.name}" style="width: 28px; height: 28px; object-fit: contain;" />
                        <span class="skills-fallback-icon" style="display: none; font-size: 24px; line-height: 1;">${skill.fallback || '💻'}</span>
                    </div>
                    <div class="skills-card-info">
                        <div class="skills-card-header">
                            <span class="skills-card-name">${skill.name}</span>
                            <span class="skills-card-level" style="color: ${skill.color}; font-weight: 600;">${skill.level}%</span>
                        </div>
                        <div class="skills-progress-track">
                            <div class="skills-progress-fill" style="background: ${skill.color}; width: 0%;" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `;

                // Handle Image Loading Failure (Fallback to emoji/icon)
                const img = card.querySelector('.skills-brand-img');
                const fallbackSpan = card.querySelector('.skills-fallback-icon');
                if (img && fallbackSpan) {
                    img.onerror = () => {
                        img.style.display = 'none';
                        fallbackSpan.style.display = 'inline-block';
                    };
                }

                grid.appendChild(card);
            });

            // Trigger Animation (Fills bars from 0 to actual level)
            setTimeout(() => {
                const fills = grid.querySelectorAll('.skills-progress-fill');
                fills.forEach(fill => {
                    const level = fill.getAttribute('data-level');
                    fill.style.width = `${level}%`;
                });
            }, 50);
        }

        // Add Click Triggers to Categories Sidebar
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                const category = item.getAttribute('data-category');
                loadCategory(category);
            });
        });

        // Pre-load default active category
        loadCategory('Languages');
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
