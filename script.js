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
    currentWallpaperIndex: 0,
    available: true
};

const CONFIG = {
    user: {
        name: "Faizol Aremu",
        title: "Fullstack Developer",
        avatar: "", // Shows initials fallback
        initials: "FA",
        available: true,
        email: "waliufaizol@gmail.com",
        github: "faizolaremu",
        githubUrl: "https://github.com/faizolaremu",
        linkedin: "linkedin.com/in/faizolaremu",
        linkedinUrl: "https://linkedin.com/in/faizolaremu",
        twitter: "@faizolaremu",
        twitterUrl: "https://twitter.com/faizolaremu",
        location: "Ogbomoso, Oyo State"
    },
    contact: {
        responseTime: "Within 24 hours",
        budgetOptions: ["< $500", "$500–$2k", "$2k–$5k", "$5k+", "Open to discuss"],
        subjects: [
            "💼 Job Opportunity",
            "🤝 Collaboration",
            "🐛 Bug Report",
            "💬 Just saying hi",
            "❓ Other"
        ],
        showBudgetFor: ["💼 Job Opportunity", "🤝 Collaboration"]
    }
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
    summary: "Results-driven CSC student and Fullstack Developer Intern with a proven track record of building high-performance, responsive, and visually compelling web applications. Skilled in leveraging modern JavaScript frameworks (React.js, Node.js) and integrating cutting-edge AI technologies into the software development lifecycle to increase code velocity, automate workflows, and optimize overall software quality. Passionate about software architecture, UI/UX aesthetics, and scalable backend design.",
    experience: [
        {
            company: "SQI College of ICT",
            role: "Fullstack Developer Intern",
            dateRange: "2026 - Present",
            achievements: [
                "Architect and develop clean, responsive user interfaces using React.js, Tailwind CSS, and ES6+ JavaScript, improving frontend loading efficiency and cross-device responsiveness.",
                "Integrate state-of-the-art Generative AI workflows into the development lifecycle, accelerating code authoring, simplifying debugging cycles, and cutting time-to-market for prototypes by 3x.",
                "Collaborate on building scalable backend REST APIs using Node.js and Express.js, connecting relational databases (PostgreSQL) to power dynamic, data-driven features.",
                "Actively participate in code reviews, version control (Git/GitHub), and Agile methodologies to ensure seamless project delivery and alignment with industry standards."
            ]
        },
        {
            company: "Freelance & Open Source Initiatives",
            role: "Frontend Developer",
            dateRange: "2026 - Present",
            achievements: [
                "Design, prototype, and implement a variety of fullstack web applications, employing object-oriented principles, efficient data structures, and modular software designs.",
                "Build and maintain responsive frontend clones and interactive dashboards (e.g., Cowrywise platform replica) using HTML5, CSS3, Tailwind CSS, and Bootstrap, ensuring high fidelity to UX design systems.",
                "Establish robust Git-based version control workflows for team projects, ensuring clean branch management and structured documentation."
            ]
        }
    ],
    education: [
        {
            school: "Ladoke Akintola University of Technology (LAUTECH)",
            degree: "Bachelor of Technology (B.Tech.) in Computer Science (CSC)",
            year: "2022 - (still Ongoing)"
        },
        {
            school: "SQI College of ICT",
            degree: "Professional Diploma in Software Engineering",
            year: "2026 - Present"
        }
    ],
    skills: {
        languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"],
        frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
        tools: ["Git & GitHub", "Figma", "VS Code", "AI Development Assistants", "Postman", "PostgreSQL"]
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

    // 6b. Global Keyboard Shortcuts
    let allMinimized = false;
    let previousWindowStates = {};

    function toggleShowDesktop() {
        const windows = document.querySelectorAll('.app-window');
        if (windows.length === 0) return;

        if (!allMinimized) {
            windows.forEach(win => {
                const id = win.id.replace('-window', '');
                previousWindowStates[id] = win.classList.contains('minimized');
                if (!win.classList.contains('minimized')) {
                    win.classList.add('minimized');
                    const taskbarBtn = document.querySelector(`.app-btn[data-app="${win.getAttribute('data-app-name')}"]`);
                    if (taskbarBtn) taskbarBtn.classList.remove('active');
                }
            });
            allMinimized = true;
        } else {
            windows.forEach(win => {
                const id = win.id.replace('-window', '');
                const wasMinimized = previousWindowStates[id];
                if (!wasMinimized) {
                    win.classList.remove('minimized');
                    const taskbarBtn = document.querySelector(`.app-btn[data-app="${win.getAttribute('data-app-name')}"]`);
                    if (taskbarBtn) taskbarBtn.classList.add('active');
                }
            });
            allMinimized = false;
        }
    }

    window.addEventListener('keydown', (e) => {
        // Skip shortcuts if desktop is not active
        if (!desktopScreen || desktopScreen.classList.contains('hidden')) return;

        const activeEl = document.activeElement;
        const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);

        // Win key alone -> Toggle Start Menu
        if (e.key === 'Meta' && !isTyping) {
            e.preventDefault();
            const startBtn = document.getElementById('start-btn');
            if (startBtn) startBtn.click();
            return;
        }

        // Win + I -> Settings
        if (e.key.toLowerCase() === 'i' && e.metaKey) {
            e.preventDefault();
            window.openApp('Settings');
            return;
        }

        // Win + R -> Terminal
        if (e.key.toLowerCase() === 'r' && e.metaKey) {
            e.preventDefault();
            window.openApp('Terminal');
            return;
        }

        // Win + D -> Toggle Show/Hide Desktop
        if (e.key.toLowerCase() === 'd' && e.metaKey) {
            e.preventDefault();
            toggleShowDesktop();
            return;
        }

        // Ctrl + Shift + Esc -> Open Terminal (Task Manager shortcut)
        if (e.key === 'Escape' && e.ctrlKey && e.shiftKey) {
            e.preventDefault();
            window.openApp('Terminal');
            return;
        }

        // Alt + F4 or Alt + Q -> Close Active Window
        if ((e.key === 'F4' && e.altKey) || (e.key.toLowerCase() === 'q' && e.altKey)) {
            e.preventDefault();
            const activeWin = document.querySelector('.app-window.active');
            if (activeWin) {
                const closeBtn = activeWin.querySelector('.close-btn');
                if (closeBtn) closeBtn.click();
            }
            return;
        }

        // Esc -> Close active window or Start Menu
        if (e.key === 'Escape' && !isTyping) {
            const activeWin = document.querySelector('.app-window.active');
            if (activeWin) {
                const closeBtn = activeWin.querySelector('.close-btn');
                if (closeBtn) closeBtn.click();
            } else {
                const startMenu = document.getElementById('start-menu');
                if (startMenu && startMenu.classList.contains('active')) {
                    startMenu.classList.remove('active');
                    setTimeout(() => startMenu.classList.add('hidden'), 200);
                }
            }
        }
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

    function setSystemBrightness(value) {
        const valNum = parseInt(value, 10);
        // Sync Quick Settings Slider
        const qsSlider = document.getElementById('brightness-slider');
        const qsPct = document.getElementById('brightness-pct');
        if (qsSlider) {
            qsSlider.value = valNum;
            updateSliderBackground(qsSlider);
        }
        if (qsPct) {
            qsPct.textContent = valNum;
        }

        // Sync Settings App Slider
        const settingsSlider = document.querySelector('#settings-brightness');
        if (settingsSlider) {
            settingsSlider.value = valNum;
            settingsSlider.style.setProperty('--val', `${valNum}%`);
        }

        // Apply visual filter to desktop layers
        currentBrightness = valNum / 100;
        updateDesktopFilters();

        // Apply physical dimming to fullscreen overlay
        const overlay = document.getElementById('brightness-overlay');
        if (overlay) {
            overlay.style.opacity = ((100 - valNum) / 100) * 0.7;
        }
    }

    brightnessSlider.addEventListener('input', (e) => {
        setSystemBrightness(e.target.value);
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
        if (id === 'terminal') {
            initTerminalApp(win);
        }
        if (id === 'browser') {
            initBrowserApp(win);
        }
        if (id === 'contact-me') {
            initContactMeApp(win);
        }
        return win;
    };

    // Initialize specific logic for settings app after rendering its template
    function initSettingsApp(win) {
        const settingsNavItems = win.querySelectorAll('.settings-nav-item');
        const settingsPages = win.querySelectorAll('.settings-page');

        // 1. Sidebar Page Navigation
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

        // 2. Brightness Slider
        const settingsBrightness = win.querySelector('#settings-brightness');
        if (settingsBrightness) {
            const globalQsSlider = document.getElementById('brightness-slider');
            if (globalQsSlider) {
                settingsBrightness.value = globalQsSlider.value;
            }
            settingsBrightness.style.setProperty('--val', `${settingsBrightness.value}%`);
            settingsBrightness.addEventListener('input', () => {
                setSystemBrightness(settingsBrightness.value);
            });
        }

        // 3. Sound Volume Slider
        const volumeSlider = win.querySelector('#settings-volume');
        if (volumeSlider) {
            volumeSlider.style.setProperty('--val', `${volumeSlider.value}%`);
            volumeSlider.addEventListener('input', () => {
                const val = volumeSlider.value;
                volumeSlider.style.setProperty('--val', `${val}%`);
                
                // Sync with taskbar Quick Settings panel if open/rendered
                const qsVolume = document.getElementById('qs-volume-slider');
                if (qsVolume) {
                    qsVolume.value = val;
                    qsVolume.style.setProperty('--val', `${val}%`);
                }
            });
        }

        // 4. Light Mode Theme Switcher
        const lightmodeSwitch = win.querySelector('#settings-lightmode');
        if (lightmodeSwitch) {
            lightmodeSwitch.checked = document.body.classList.contains('light-mode');
            lightmodeSwitch.addEventListener('change', () => {
                if (lightmodeSwitch.checked) {
                    document.body.classList.add('light-mode');
                } else {
                    document.body.classList.remove('light-mode');
                }
            });
        }

        // 5. Personalization: Wallpaper Thumbnails Row
        const wallpapersRow = win.querySelector('#settings-wallpapers-row');
        if (wallpapersRow) {
            wallpapersRow.innerHTML = '';
            WALLPAPERS.forEach((wp, index) => {
                const wpItem = document.createElement('div');
                wpItem.className = 'settings-wallpaper-item';
                if (USER_CONFIG.currentWallpaperIndex === index) {
                    wpItem.classList.add('active');
                }
                wpItem.innerHTML = `
                    <img src="${wp.url}" alt="${wp.name}">
                    ${USER_CONFIG.currentWallpaperIndex === index ? '<div class="settings-check-badge">✓</div>' : ''}
                `;
                wpItem.addEventListener('click', () => {
                    USER_CONFIG.currentWallpaperIndex = index;
                    document.documentElement.style.setProperty('--bg-url', `url('${wp.url}')`);
                    
                    // Crossfade using bg layers on desktop if present
                    const bgLayer1 = document.getElementById('desktop-bg-layer1');
                    const bgLayer2 = document.getElementById('desktop-bg-layer2');
                    if (bgLayer1 && bgLayer2) {
                        const style1 = window.getComputedStyle(bgLayer1);
                        if (style1.opacity === '1') {
                            bgLayer2.style.backgroundImage = `url('${wp.url}')`;
                            bgLayer2.style.opacity = '1';
                            bgLayer1.style.opacity = '0';
                        } else {
                            bgLayer1.style.backgroundImage = `url('${wp.url}')`;
                            bgLayer1.style.opacity = '1';
                            bgLayer2.style.opacity = '0';
                        }
                    }

                    // Update Active Thumbnails in Settings panel
                    win.querySelectorAll('.settings-wallpaper-item').forEach((item, idx) => {
                        item.classList.remove('active');
                        const badge = item.querySelector('.settings-check-badge');
                        if (badge) badge.remove();
                        if (idx === index) {
                            item.classList.add('active');
                            const newBadge = document.createElement('div');
                            newBadge.className = 'settings-check-badge';
                            newBadge.textContent = '✓';
                            item.appendChild(newBadge);
                        }
                    });
                });
                wallpapersRow.appendChild(wpItem);
            });
        }

        // 6. Personalization: Accent Color Pickers
        const accentColors = [
            '#0078d4', '#744da9', '#00b7c3', '#107c41',
            '#e81123', '#ff8c00', '#f9d616', '#505050'
        ];
        const accentRow = win.querySelector('#settings-accent-row');
        if (accentRow) {
            accentRow.innerHTML = '';
            
            // Get current accent color from CSS variables (default to #0078d4)
            const currentAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0078d4';
            
            accentColors.forEach(color => {
                const accentItem = document.createElement('div');
                accentItem.className = 'settings-accent-item';
                accentItem.style.backgroundColor = color;
                if (currentAccent.toLowerCase() === color.toLowerCase()) {
                    accentItem.classList.add('active');
                }
                
                accentItem.addEventListener('click', () => {
                    document.documentElement.style.setProperty('--accent', color);
                    
                    // Highlight selected swatch in Settings
                    win.querySelectorAll('.settings-accent-item').forEach(item => {
                        item.classList.remove('active');
                        // Use color comparison helper since style.backgroundColor may return rgb representation
                        const rgbColor = item.style.backgroundColor;
                        if (rgbColor === color || item.style.backgroundColor === color) {
                            item.classList.add('active');
                        }
                    });
                    
                    // Highlight active indicators
                    const activeIndicator = document.querySelector('.taskbar-icon.active .indicator');
                    if (activeIndicator) {
                        activeIndicator.style.backgroundColor = color;
                    }
                });
                accentRow.appendChild(accentItem);
            });
        }

        // 7. Personalization: Transparency Effects Toggle
        const transparencySwitch = win.querySelector('#settings-transparency');
        if (transparencySwitch) {
            const currentBlur = getComputedStyle(document.documentElement).getPropertyValue('--window-blur').trim();
            transparencySwitch.checked = currentBlur !== 'none';
            
            transparencySwitch.addEventListener('change', () => {
                if (transparencySwitch.checked) {
                    document.documentElement.style.setProperty('--window-bg', 'rgba(32, 32, 32, 0.85)');
                    document.documentElement.style.setProperty('--window-bg-light', 'rgba(243, 243, 243, 0.85)');
                    document.documentElement.style.setProperty('--window-blur', 'blur(25px)');
                } else {
                    document.documentElement.style.setProperty('--window-bg', '#1e1e1e');
                    document.documentElement.style.setProperty('--window-bg-light', '#f3f3f3');
                    document.documentElement.style.setProperty('--window-blur', 'none');
                }
            });
        }
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

    // Initialize specific logic for About Me Profile Dashboard
    function initAboutMeApp(win) {
        // Copy to clipboard fallback and mailto link for Email button
        const emailBtn = win.querySelector('#about-email-btn');
        if (emailBtn) {
            emailBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const emailAddress = 'waliufaizol@gmail.com';
                
                // Open mail composition
                window.location.href = `mailto:${emailAddress}`;
                
                // Also copy for convenience
                navigator.clipboard.writeText(emailAddress).then(() => {
                    const originalHTML = emailBtn.innerHTML;
                    emailBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        Copied & Opening!
                    `;
                    emailBtn.style.borderColor = 'rgba(34, 197, 94, 0.4)';
                    emailBtn.style.background = 'rgba(34, 197, 94, 0.15)';
                    emailBtn.style.color = '#4ade80';
                    setTimeout(() => {
                        emailBtn.innerHTML = originalHTML;
                        emailBtn.style.borderColor = '';
                        emailBtn.style.background = '';
                        emailBtn.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.log('Failed to copy: ', err);
                });
            });
        }

        // Animate cards in on open
        const cards = win.querySelectorAll('.about-card');
        cards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        });
    }



    // Initialize specific logic for skills app (Windows 11 Settings clone)
    function initSkillsApp(win) {
        const navItems = win.querySelectorAll('.skills-nav-item');
        const grid = win.querySelector('#skills-grid');
        const catTitle = win.querySelector('#skills-cat-title');
        const searchInput = win.querySelector('#skills-search-input');

        if (!grid || !catTitle) return;

        let currentCategory = 'All Skills';

        function renderSkills(skillsToRender, showHeaders = false) {
            grid.innerHTML = '';
            
            if (skillsToRender.length === 0) {
                grid.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; color: #888; text-align: center;">No skills found.</div>';
                return;
            }

            let currentGroup = '';

            skillsToRender.forEach(skill => {
                if (showHeaders && skill.category !== currentGroup) {
                    currentGroup = skill.category;
                    const header = document.createElement('div');
                    header.className = 'skills-group-header';
                    header.textContent = currentGroup;
                    grid.appendChild(header);
                }

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

        function loadCategory(categoryName, searchQuery = '') {
            currentCategory = categoryName;
            catTitle.textContent = categoryName;
            
            let filteredSkills = SKILLS;
            
            if (categoryName !== 'All Skills') {
                filteredSkills = filteredSkills.filter(s => s.category === categoryName);
            }
            
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filteredSkills = filteredSkills.filter(s => s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query));
            }

            renderSkills(filteredSkills, categoryName === 'All Skills' && !searchQuery);
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                loadCategory(currentCategory, e.target.value);
            });
        }

        // Add Click Triggers to Categories Sidebar
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                if (searchInput) searchInput.value = ''; // clear search when switching tabs

                const category = item.getAttribute('data-category');
                loadCategory(category);
            });
        });

        // Pre-load default active category
        loadCategory('All Skills');
    }

    // Initialize specific logic for Terminal app
    function initTerminalApp(win) {
        const inputField = win.querySelector('#term-input');
        const cmdText = win.querySelector('#term-cmd-text');
        const outputContainer = win.querySelector('#term-output');
        const termContainer = win.querySelector('#terminal-container');
        const bannerName = win.querySelector('#term-banner-name');

        if (bannerName && typeof USER_CONFIG !== 'undefined' && USER_CONFIG.name) {
            bannerName.textContent = USER_CONFIG.name;
        }

        let history = [];
        let historyIndex = -1;

        // Keep focus on input when clicking terminal
        termContainer.addEventListener('click', () => {
            inputField.focus();
        });

        // Sync visual text with hidden input
        inputField.addEventListener('input', () => {
            cmdText.textContent = inputField.value;
        });

        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = inputField.value.trim();
                if (cmd) {
                    history.push(cmd);
                    if (history.length > 20) history.shift();
                }
                historyIndex = history.length;
                processCommand(cmd);
                inputField.value = '';
                cmdText.textContent = '';
                
                // Auto-scroll to bottom
                setTimeout(() => {
                    termContainer.scrollTop = termContainer.scrollHeight;
                }, 10);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    inputField.value = history[historyIndex];
                    cmdText.textContent = inputField.value;
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < history.length - 1) {
                    historyIndex++;
                    inputField.value = history[historyIndex];
                    cmdText.textContent = inputField.value;
                } else {
                    historyIndex = history.length;
                    inputField.value = '';
                    cmdText.textContent = '';
                }
            }
        });

        function appendOutput(cmd, resultHTML) {
            const entry = document.createElement('div');
            entry.className = 'term-entry';
            entry.innerHTML = `
                <div class="term-entry-cmd">
                    <span class="term-entry-prompt">PS C:\\Users\\Faizol></span>
                    <span class="term-entry-text">${cmd}</span>
                </div>
                <div class="term-entry-result">${resultHTML}</div>
            `;
            outputContainer.appendChild(entry);
        }

        function processCommand(cmd) {
            const lowerCmd = cmd.toLowerCase();
            
            if (lowerCmd === 'clear') {
                outputContainer.innerHTML = '';
                return;
            }

            let result = '';
            
            if (lowerCmd === 'help') {
                result = `Available commands:
  help           - Shows this help message
  whoami         - Display user information
  skills         - List top technical skills
  projects       - List portfolio projects
  contact        - Display contact information
  open contact   - Open the Contact Me application
  ls             - List directory contents
  cat about.txt  - Print biography
  date           - Display current date and time
  echo [text]    - Print text to the terminal
  start [app]    - Launch a portfolio app (e.g., start resume)
  systeminfo     - Display system information
  exit           - Close the terminal
  clear          - Clear terminal screen
  sudo hire-me   - Execute hire sequence`;
            } else if (lowerCmd === 'whoami') {
                result = `Name: ${USER_CONFIG.name}\nRole: ${RESUME.title}\nStatus: Online`;
            } else if (lowerCmd === 'skills') {
                const topSkills = SKILLS.filter(s => s.level >= 90).map(s => s.name).join(', ');
                result = `Top Skills (Level 90%+):\n${topSkills}\n\nType 'openApp("Skills")' in console or click the desktop icon for full details.`;
            } else if (lowerCmd === 'projects') {
                result = PROJECTS.map(p => `${p.title.padEnd(25)} - ${p.description.substring(0, 50)}...`).join('\n');
            } else if (lowerCmd === 'contact') {
                result = `<a href="mailto:${RESUME.email}" style="color: #00A4EF; text-decoration: none;">Email: ${RESUME.email}</a>\n<a href="${RESUME.github}" target="_blank" style="color: #00A4EF; text-decoration: none;">GitHub: ${RESUME.github}</a>\n<a href="${RESUME.linkedin}" target="_blank" style="color: #00A4EF; text-decoration: none;">LinkedIn: ${RESUME.linkedin}</a>`;
            } else if (lowerCmd === 'ls') {
                result = `Directory: C:\\Users\\Faizol\\Portfolio\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----         5/19/2026   10:00 AM                about-me\nd-----         5/19/2026   10:00 AM                projects\nd-----         5/19/2026   10:00 AM                skills\n-a----         5/19/2026   10:00 AM            512 about.txt`;
            } else if (lowerCmd === 'cat about.txt') {
                result = RESUME.summary;
            } else if (lowerCmd === 'sudo hire-me') {
                result = `<span style="color: #4ec9b0; font-weight: bold;">Executing hire sequence... ✅ Request sent to your future employer!</span>`;
            } else if (lowerCmd === 'date') {
                result = new Date().toString();
            } else if (lowerCmd === 'open contact' || lowerCmd === 'contact-me') {
                if (window.openApp) window.openApp('Contact Me');
                result = 'Opening Contact Me app...';
            } else if (lowerCmd.startsWith('echo ')) {
                result = cmd.substring(5);
            } else if (lowerCmd.startsWith('start ')) {
                const appToOpen = cmd.substring(6).trim().toLowerCase();
                const appMap = {
                    'resume': 'Resume',
                    'about me': 'About Me',
                    'skills': 'Skills',
                    'projects': 'My Projects',
                    'my projects': 'My Projects',
                    'settings': 'Settings',
                    'github': 'GitHub',
                    'contact': 'Contact Me',
                    'contact me': 'Contact Me',
                    'contact-me': 'Contact Me'
                };
                if (appMap[appToOpen]) {
                    if (window.openApp) window.openApp(appMap[appToOpen]);
                    result = `Starting ${appMap[appToOpen]}...`;
                } else {
                    result = `App not found: ${appToOpen}. Available apps: Resume, About Me, Skills, Projects, Settings, Contact Me.`;
                }
            } else if (lowerCmd === 'systeminfo') {
                result = `OS Name:                   Windows 11 Portfolio Edition
OS Version:                10.0.22000 N/A Build 22000
OS Manufacturer:           Faizol Aremu Corporation
System Type:               x64-based Web Application
Processor(s):              1 Processor(s) Installed. [High Performance AI Node]
Total Physical Memory:     16,384 MB
Network Card(s):           1 NIC(s) Installed (Status: Connected)`;
            } else if (lowerCmd === 'exit') {
                if (window.closeApp) window.closeApp('Terminal');
                return; // Exit out, terminal is closing
            } else if (cmd === '') {
                appendOutput('', '');
                return;
            } else {
                result = `<span style="color: #f44336;">command not found: ${cmd}</span>`;
            }

            appendOutput(cmd, result);
        }
        
        // Initial focus
        setTimeout(() => inputField.focus(), 100);
    }

    function syncSettingsWallpaperUI(url) {
        const settingsWin = document.getElementById('settings-window');
        if (settingsWin) {
            const items = settingsWin.querySelectorAll('.settings-wallpaper-item');
            items.forEach((item, idx) => {
                item.classList.remove('active');
                const badge = item.querySelector('.settings-check-badge');
                if (badge) badge.remove();

                if (idx < WALLPAPERS.length && WALLPAPERS[idx].url === url) {
                    item.classList.add('active');
                    const newBadge = document.createElement('div');
                    newBadge.className = 'settings-check-badge';
                    newBadge.textContent = '✓';
                    item.appendChild(newBadge);
                }
            });
        }
    }

    function initBrowserApp(win) {
        const backBtn = win.querySelector('#browser-back');
        const forwardBtn = win.querySelector('#browser-forward');
        const refreshBtn = win.querySelector('#browser-refresh');
        const homeBtn = win.querySelector('#browser-home');
        const addressInput = win.querySelector('#browser-address-input');
        const goBtn = win.querySelector('#browser-go-btn');
        
        const searchInput = win.querySelector('#browser-search-box');
        const searchBtn = win.querySelector('#browser-search-btn');
        const searchTags = win.querySelectorAll('.browser-search-tag');
        const backHomeBtn = win.querySelector('#browser-back-home');
        
        const homePage = win.querySelector('#browser-home-page');
        const resultsSection = win.querySelector('#browser-results-section');
        const resultsGrid = win.querySelector('#browser-results-grid');
        const queryDisplay = win.querySelector('#browser-query-display');
        const toast = win.querySelector('#browser-toast');

        let historyStack = ['https://bing.com/wallpapers'];
        let historyPointer = 0;

        const BROWSER_WALLPAPERS = {
            "coding": [
                { title: "HTML Code Screen", url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "TypeScript IDE", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "JavaScript Editor", url: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Node.js Workspace", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Python Dashboard", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "AI Code Assistant", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
            ],
            "workspace": [
                { title: "Minimalist Coding Desk", url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Neon Setup", url: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Dual Monitor Desk", url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Developer Office", url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Coffee & Code", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Ultrawide Coding Setup", url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
            ],
            "cyberpunk": [
                { title: "Neon Alleyways", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Circuit City", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Hacker Command Center", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Grid Streets", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Cyber Terminal", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "RGB Coding RIG", url: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
            ],
            "matrix code": [
                { title: "Digital Rain Matrix", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Green Terminal Stream", url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Cyber Protection Grid", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
            ],
            "abstract dark": [
                { title: "Minimal Abstract Wave", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Dark Obsidian Flow", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
                { title: "Deep Space Nebula", url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
            ]
        };

        function updateNavState() {
            if (backBtn) backBtn.disabled = historyPointer <= 0;
            if (forwardBtn) forwardBtn.disabled = historyPointer >= historyStack.length - 1;
            if (addressInput) addressInput.value = historyStack[historyPointer];
        }

        function navigateTo(url, addToHistory = true) {
            if (addToHistory) {
                historyStack = historyStack.slice(0, historyPointer + 1);
                historyStack.push(url);
                historyPointer = historyStack.length - 1;
            }
            updateNavState();

            if (url.includes('bing.com/wallpapers') || url.includes('google.com')) {
                const searchParams = new URLSearchParams(url.split('?')[1] || '');
                const q = searchParams.get('q') || searchParams.get('query') || '';
                if (q) {
                    showQueryResults(q);
                } else {
                    showHome();
                }
            } else if (url.startsWith('http://') || url.startsWith('https://')) {
                showDirectImageCard(url);
            } else {
                const searchUrl = `https://bing.com/wallpapers?q=${encodeURIComponent(url)}`;
                navigateTo(searchUrl, addToHistory);
            }
        }

        function showHome() {
            if (homePage) homePage.classList.remove('hidden');
            if (resultsSection) resultsSection.classList.add('hidden');
            if (searchInput) searchInput.value = '';
        }

        function showQueryResults(query) {
            if (homePage) homePage.classList.add('hidden');
            if (resultsSection) resultsSection.classList.remove('hidden');
            if (queryDisplay) queryDisplay.textContent = query;

            if (!resultsGrid) return;
            resultsGrid.innerHTML = '';
            const normalizedQuery = query.trim().toLowerCase();
            let items = [];

            for (const key of Object.keys(BROWSER_WALLPAPERS)) {
                if (normalizedQuery.includes(key) || key.includes(normalizedQuery)) {
                    items = BROWSER_WALLPAPERS[key];
                    break;
                }
            }

            if (items.length === 0) {
                for (let i = 1; i <= 6; i++) {
                    const randomSig = Math.floor(Math.random() * 1000) + i;
                    items.push({
                        title: `${query.charAt(0).toUpperCase() + query.slice(1)} Wallpaper #${i}`,
                        url: `https://images.unsplash.com/featured/800x600/?${encodeURIComponent(query)}&sig=${randomSig}`
                    });
                }
            }

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'browser-result-card';
                card.innerHTML = `
                    <div style="aspect-ratio: 16/10; overflow: hidden; background: #222; position: relative;">
                        <img src="${item.url}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="browser-result-info">
                        <div class="browser-result-title">${item.title}</div>
                        <button class="browser-set-bg-btn">Set as Background</button>
                    </div>
                `;
                
                card.querySelector('.browser-set-bg-btn').addEventListener('click', () => {
                    setWallpaper(item.url);
                });

                resultsGrid.appendChild(card);
            });
        }

        function showDirectImageCard(url) {
            if (homePage) homePage.classList.add('hidden');
            if (resultsSection) resultsSection.classList.remove('hidden');
            if (queryDisplay) queryDisplay.textContent = `Direct URL`;

            if (!resultsGrid) return;
            resultsGrid.innerHTML = `
                <div class="browser-result-card" style="grid-column: 1 / -1; max-width: 500px; margin: 20px auto 0 auto;">
                    <div style="aspect-ratio: 16/10; overflow: hidden; background: #222; position: relative;">
                        <img src="${url}" alt="Custom Wallpaper" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; alert('Could not load image. Loaded coding fallback instead.');">
                    </div>
                    <div class="browser-result-info">
                        <div class="browser-result-title">Custom Wallpaper from URL</div>
                        <button class="browser-set-bg-btn">Set as Background</button>
                    </div>
                </div>
            `;

            resultsGrid.querySelector('.browser-set-bg-btn').addEventListener('click', () => {
                setWallpaper(url);
            });
        }

        function setWallpaper(url) {
            const desktopBgLayer1 = document.getElementById('desktop-bg-layer1');
            const desktopBgLayer2 = document.getElementById('desktop-bg-layer2');
            
            if (desktopBgLayer1 && desktopBgLayer2) {
                const style1 = window.getComputedStyle(desktopBgLayer1);
                if (style1.opacity === '1') {
                    desktopBgLayer2.style.backgroundImage = `url('${url}')`;
                    desktopBgLayer2.style.opacity = '1';
                    desktopBgLayer1.style.opacity = '0';
                } else {
                    desktopBgLayer1.style.backgroundImage = `url('${url}')`;
                    desktopBgLayer1.style.opacity = '1';
                    desktopBgLayer2.style.opacity = '0';
                }
            }

            USER_CONFIG.currentWallpaperIndex = -1;
            syncSettingsWallpaperUI(url);

            if (toast) {
                toast.classList.add('visible');
                setTimeout(() => {
                    toast.classList.remove('visible');
                }, 3000);
            }
        }

        if (backBtn) {
            backBtn.addEventListener('click', () => {
                if (historyPointer > 0) {
                    historyPointer--;
                    navigateTo(historyStack[historyPointer], false);
                }
            });
        }

        if (forwardBtn) {
            forwardBtn.addEventListener('click', () => {
                if (historyPointer < historyStack.length - 1) {
                    historyPointer++;
                    navigateTo(historyStack[historyPointer], false);
                }
            });
        }

        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                navigateTo(historyStack[historyPointer], false);
            });
        }

        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                navigateTo('https://bing.com/wallpapers');
            });
        }

        if (addressInput) {
            addressInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const val = addressInput.value.trim();
                    if (val) navigateTo(val);
                }
            });
        }

        if (goBtn) {
            goBtn.addEventListener('click', () => {
                const val = addressInput.value.trim();
                if (val) navigateTo(val);
            });
        }

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => {
                const val = searchInput.value.trim();
                if (val) {
                    const searchUrl = `https://bing.com/wallpapers?q=${encodeURIComponent(val)}`;
                    navigateTo(searchUrl);
                }
            });
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const val = searchInput.value.trim();
                    if (val) {
                        const searchUrl = `https://bing.com/wallpapers?q=${encodeURIComponent(val)}`;
                        navigateTo(searchUrl);
                    }
                }
            });
        }

        searchTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const tagVal = tag.getAttribute('data-tag') || tag.textContent.trim();
                const searchUrl = `https://bing.com/wallpapers?q=${encodeURIComponent(tagVal)}`;
                navigateTo(searchUrl);
            });
        });

        if (backHomeBtn) {
            backHomeBtn.addEventListener('click', () => {
                navigateTo('https://bing.com/wallpapers');
            });
        }

        updateNavState();
        showHome();
    }

    // Initialize specific logic for Contact Me app
    function initContactMeApp(win) {
        const avatarContainer = win.querySelector('.contact-avatar-container');
        const nameDisplay = win.querySelector('.contact-user-name');
        const roleDisplay = win.querySelector('.contact-user-role');
        const statusDisplay = win.querySelector('.contact-status-indicator');
        
        const valEmail = win.querySelector('#contact-val-email');
        const valGithub = win.querySelector('#contact-val-github');
        const valLinkedin = win.querySelector('#contact-val-linkedin');
        const valTwitter = win.querySelector('#contact-val-twitter');
        const valLocation = win.querySelector('#contact-val-location');
        
        const btnSocialGithub = win.querySelector('#contact-social-github');
        const btnSocialLinkedin = win.querySelector('#contact-social-linkedin');
        const btnSocialTwitter = win.querySelector('#contact-social-twitter');
        
        const form = win.querySelector('.contact-form');
        const formContainer = win.querySelector('.contact-form-container');
        const successContainer = win.querySelector('.contact-success-container');
        const resetBtn = win.querySelector('#contact-reset-btn');
        
        const inputName = win.querySelector('#contact-input-name');
        const inputEmail = win.querySelector('#contact-input-email');
        const inputSubject = win.querySelector('#contact-input-subject');
        const budgetGroup = win.querySelector('#group-budget');
        const budgetPillsContainer = win.querySelector('.contact-budget-pills');
        const inputMessage = win.querySelector('#contact-input-message');
        const charCounter = win.querySelector('.contact-char-counter');
        const submitBtn = win.querySelector('#contact-submit-btn');
        const submitText = win.querySelector('.contact-btn-text');
        const submitIcon = win.querySelector('.contact-btn-icon');
        
        const aiReplyCard = win.querySelector('#contact-ai-reply');
        const aiReplySender = win.querySelector('.contact-ai-sender-name');
        const aiReplyText = win.querySelector('.contact-ai-text');
        const aiReplyLoading = win.querySelector('.contact-ai-loading');
        
        // 1. Populate profile information
        nameDisplay.textContent = CONFIG.user.name;
        roleDisplay.textContent = CONFIG.user.title;
        aiReplySender.textContent = CONFIG.user.name;
        
        if (CONFIG.user.avatar) {
            avatarContainer.innerHTML = `<img class="contact-avatar-img" src="${CONFIG.user.avatar}" alt="${CONFIG.user.name}">`;
        } else {
            avatarContainer.innerHTML = `<div class="contact-avatar-initials" style="background-color: var(--accent);">${CONFIG.user.initials}</div>`;
        }
        
        if (CONFIG.user.available) {
            statusDisplay.textContent = "Available for work";
            statusDisplay.className = "contact-status-indicator available";
        } else {
            statusDisplay.textContent = "Unavailable";
            statusDisplay.className = "contact-status-indicator unavailable";
        }
        
        // Setup values
        valEmail.textContent = CONFIG.user.email;
        valGithub.textContent = CONFIG.user.github;
        valLinkedin.textContent = CONFIG.user.linkedin;
        valTwitter.textContent = CONFIG.user.twitter;
        valLocation.textContent = CONFIG.user.location;
        
        btnSocialGithub.href = CONFIG.user.githubUrl;
        btnSocialLinkedin.href = CONFIG.user.linkedinUrl;
        btnSocialTwitter.href = CONFIG.user.twitterUrl;
        
        // Clipboard helper
        function setupClipboard(rowElement, textToCopy) {
            rowElement.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' || e.target.closest('a')) return;
                
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopiedTooltip(e);
                }).catch(err => {
                    console.error("Failed to copy text: ", err);
                });
            });
        }
        
        function showCopiedTooltip(e) {
            const tooltip = win.querySelector('#contact-tooltip');
            if (!tooltip) return;
            
            tooltip.classList.remove('hidden');
            
            const winRect = win.getBoundingClientRect();
            const posX = e.clientX - winRect.left;
            const posY = e.clientY - winRect.top;
            
            tooltip.style.left = `${posX}px`;
            tooltip.style.top = `${posY}px`;
            
            tooltip.style.animation = 'none';
            tooltip.offsetHeight; // trigger reflow
            tooltip.style.animation = '';
            
            setTimeout(() => {
                tooltip.classList.add('hidden');
            }, 1500);
        }
        
        setupClipboard(win.querySelector('#contact-row-email'), CONFIG.user.email);
        setupClipboard(win.querySelector('#contact-row-github'), CONFIG.user.githubUrl);
        setupClipboard(win.querySelector('#contact-row-linkedin'), CONFIG.user.linkedinUrl);
        setupClipboard(win.querySelector('#contact-row-twitter'), CONFIG.user.twitterUrl);
        setupClipboard(win.querySelector('#contact-row-location'), CONFIG.user.location);
        
        // Populate subject options
        inputSubject.innerHTML = `<option value="" disabled selected>Select a subject...</option>`;
        CONFIG.contact.subjects.forEach(subject => {
            const opt = document.createElement('option');
            opt.value = subject;
            opt.textContent = subject;
            inputSubject.appendChild(opt);
        });
        
        // Populate budget pills
        budgetPillsContainer.innerHTML = '';
        let selectedBudget = "";
        CONFIG.contact.budgetOptions.forEach(budget => {
            const pill = document.createElement('div');
            pill.className = 'contact-budget-pill';
            pill.textContent = budget;
            pill.addEventListener('click', () => {
                budgetPillsContainer.querySelectorAll('.contact-budget-pill').forEach(p => p.classList.remove('selected'));
                if (selectedBudget === budget) {
                    selectedBudget = ""; // deselect
                } else {
                    selectedBudget = budget;
                    pill.classList.add('selected');
                }
                validateForm();
            });
            budgetPillsContainer.appendChild(pill);
        });
        
        // Subject change budget logic
        inputSubject.addEventListener('change', () => {
            const val = inputSubject.value;
            if (CONFIG.contact.showBudgetFor.includes(val)) {
                budgetGroup.classList.remove('hidden');
            } else {
                budgetGroup.classList.add('hidden');
                selectedBudget = "";
                budgetPillsContainer.querySelectorAll('.contact-budget-pill').forEach(p => p.classList.remove('selected'));
            }
            validateForm();
        });
        
        // Message char count
        inputMessage.addEventListener('input', () => {
            let val = inputMessage.value;
            if (val.length > 500) {
                val = val.substring(0, 500);
                inputMessage.value = val;
            }
            const count = val.length;
            charCounter.textContent = `${count} / 500`;
            
            charCounter.className = "contact-char-counter";
            if (count >= 490) {
                charCounter.classList.add('danger');
            } else if (count >= 450) {
                charCounter.classList.add('warning');
            }
            validateForm();
        });
        
        // Form validations
        function validateField(fieldGroup, inputElement, isValid, errorMsg) {
            const errorSpan = fieldGroup.querySelector('.contact-field-error');
            if (isValid) {
                fieldGroup.classList.remove('error');
                if (errorSpan) {
                    errorSpan.classList.remove('visible');
                    errorSpan.textContent = '';
                }
                return true;
            } else {
                fieldGroup.classList.add('error');
                if (errorSpan) {
                    errorSpan.classList.add('visible');
                    errorSpan.textContent = errorMsg;
                }
                return false;
            }
        }
        
        function setupBlurValidation(inputElement, fieldGroup, validationFn, errorMsg) {
            inputElement.addEventListener('blur', () => {
                if (inputElement.value.trim() === '') {
                    validateField(fieldGroup, inputElement, false, 'This field is required');
                } else {
                    const isValid = validationFn(inputElement.value);
                    validateField(fieldGroup, inputElement, isValid, errorMsg);
                }
                validateForm();
            });
            
            inputElement.addEventListener('input', () => {
                if (fieldGroup.classList.contains('error')) {
                    const isValid = validationFn(inputElement.value);
                    validateField(fieldGroup, inputElement, isValid, errorMsg);
                }
                validateForm();
            });
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setupBlurValidation(inputName, win.querySelector('#group-name'), (val) => val.trim().length > 0, 'Name is required');
        setupBlurValidation(inputEmail, win.querySelector('#group-email'), (val) => emailRegex.test(val.trim()), 'Please enter a valid email');
        
        inputSubject.addEventListener('change', () => {
            validateField(win.querySelector('#group-subject'), inputSubject, inputSubject.value !== '', 'Please select a subject');
            validateForm();
        });
        
        inputMessage.addEventListener('blur', () => {
            validateField(win.querySelector('#group-message'), inputMessage, inputMessage.value.trim().length > 0, 'Message cannot be empty');
            validateForm();
        });
        inputMessage.addEventListener('input', () => {
            if (win.querySelector('#group-message').classList.contains('error')) {
                validateField(win.querySelector('#group-message'), inputMessage, inputMessage.value.trim().length > 0, 'Message cannot be empty');
            }
            validateForm();
        });
        
        function checkAllValid() {
            const nameVal = inputName.value.trim();
            const emailVal = inputEmail.value.trim();
            const subjectVal = inputSubject.value;
            const messageVal = inputMessage.value.trim();
            
            return nameVal.length > 0 && 
                   emailRegex.test(emailVal) && 
                   subjectVal !== '' && 
                   messageVal.length > 0;
        }
        
        function validateForm() {
            submitBtn.disabled = !checkAllValid();
        }
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!checkAllValid()) {
                const groups = [
                    { elem: inputName, group: win.querySelector('#group-name'), valid: inputName.value.trim().length > 0 },
                    { elem: inputEmail, group: win.querySelector('#group-email'), valid: emailRegex.test(inputEmail.value.trim()) },
                    { elem: inputSubject, group: win.querySelector('#group-subject'), valid: inputSubject.value !== '' },
                    { elem: inputMessage, group: win.querySelector('#group-message'), valid: inputMessage.value.trim().length > 0 }
                ];
                
                groups.forEach(g => {
                    if (!g.valid) {
                        g.group.classList.add('error');
                        g.group.classList.add('contact-shake');
                        setTimeout(() => g.group.classList.remove('contact-shake'), 300);
                    }
                });
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            submitText.textContent = "Sending...";
            submitIcon.innerHTML = `<div class="contact-spinner"></div>`;
            
            const nameVal = inputName.value.trim();
            const emailVal = inputEmail.value.trim();
            const subjectVal = inputSubject.value;
            const messageVal = inputMessage.value.trim();
            
            let replyPrompt = `You are replying to a message sent to Faizol Aremu (a Fullstack Developer) through their portfolio website.
Sender Name: ${nameVal}
Sender Email: ${emailVal}
Subject Chosen: ${subjectVal}
`;
            if (selectedBudget) {
                replyPrompt += `Stated Budget: ${selectedBudget}\n`;
            }
            replyPrompt += `Message: "${messageVal}"

Write a concise, professional, and friendly auto-reply in character as Faizol Aremu. Make it 2-3 sentences. Reassure them that you've received their email, directly mention their name, and briefly reference the subject or budget if relevant. Do not include email headers or salutations beyond a simple sign-off. Do not output anything other than the message text itself.`;

            let fallbackReply = `Hi ${nameVal},\n\nThank you for reaching out regarding "${subjectVal}"${selectedBudget ? ' with a budget of ' + selectedBudget : ''}. I've received your message and will review it shortly. Let's stay in touch!\n\nBest regards,\nFaizol Aremu`;

            fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'user', content: replyPrompt }
                    ],
                    system: `You are Faizol Aremu, a Fullstack Developer. Write a direct, warm, and highly professional email auto-reply. Keep it strictly between 2 to 3 sentences. Be friendly and conversational.`
                })
            })
            .then(res => {
                if (!res.ok) throw new Error("API failed");
                return res.json();
            })
            .then(data => {
                const replyText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content 
                    ? data.choices[0].message.content.trim() 
                    : data.reply || fallbackReply;
                
                showSuccess(nameVal, replyText);
            })
            .catch(err => {
                console.warn("Using local auto-reply fallback:", err);
                showSuccess(nameVal, fallbackReply);
            });
        });
        
        function showSuccess(senderName, replyTextVal) {
            const desc = win.querySelector('.success-desc');
            desc.textContent = `Thank you, ${senderName}! Your message has been successfully sent.`;
            
            formContainer.classList.add('hidden');
            successContainer.classList.remove('hidden');
            
            aiReplyCard.classList.remove('hidden');
            aiReplyLoading.style.display = 'flex';
            aiReplyText.style.display = 'none';
            aiReplyText.classList.remove('error');
            
            setTimeout(() => {
                aiReplyLoading.style.display = 'none';
                aiReplyText.style.display = 'block';
                aiReplyText.textContent = replyTextVal;
            }, 1200);
        }
        
        resetBtn.addEventListener('click', () => {
            inputName.value = '';
            inputEmail.value = '';
            inputSubject.value = '';
            selectedBudget = '';
            inputMessage.value = '';
            charCounter.textContent = '0 / 500';
            charCounter.className = 'contact-char-counter';
            
            win.querySelectorAll('.contact-field-group').forEach(g => {
                g.classList.remove('error');
                const err = g.querySelector('.contact-field-error');
                if (err) err.classList.remove('visible');
            });
            
            budgetGroup.classList.add('hidden');
            budgetPillsContainer.querySelectorAll('.contact-budget-pill').forEach(p => p.classList.remove('selected'));
            
            submitBtn.disabled = true;
            submitBtn.classList.remove('loading');
            submitText.textContent = "Send Message";
            submitIcon.innerHTML = `
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
            `;
            
            successContainer.classList.add('hidden');
            formContainer.classList.remove('hidden');
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
        'Terminal': { id: 'terminal', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#555"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm-8.5 13H4v-2h7.5v2zm2.3-4.1l-1.4 1.4L7.5 9.4 12.4 4.5l1.4 1.4-3.5 3.5 3.5 3.5z"/></svg>' },
        'Browser': { id: 'browser', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#0078d4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>' },
        'Contact Me': { id: 'contact-me', icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#0078d4"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>', width: 780, height: 580 }
    };

    const config = appConfigs[appName];
    if (config) {
        const template = document.getElementById(`tpl-${config.id}`);
        if (template) {
            window.createWindow({
                id: config.id,
                title: appName,
                icon: config.icon,
                content: template.innerHTML,
                width: config.width,
                height: config.height
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
