/* ==========================================================================
   1. STRUKTUR DATA UTAMA
   ========================================================================== */

const projects = [
    {
        title: "Orbitlink Studio",
        thumbnail: "orbit/ORBITLINK.PNG",
        documentation: [
            { image: "orbit/DG.jpg", title: "Block Diagram" },
            { image: "orbit/FC 1.png", title: "Main Flowchart" },
            { image: "orbit/FC KOM1.png", title: "Communication Mode Flowchart 1" },
            { image: "orbit/FC KOM2.png", title: "Communication Mode Flowchart 2" },
            { image: "orbit/FC NAV.png", title: "Navigation Mode Flowchart 1" },
            { image: "orbit/1.jpg", title: "Existing Satellite View" },
            { image: "orbit/2.jpg", title: "Geometry Parameter View" },
            { image: "orbit/3.jpg", title: "Navigation Mode Result View" },
            { image: "orbit/4.jpg", title: "Communication Mode Result View" },
            { image: "orbit/5.jpg", title: "Satellite Visualization View" },
            { image: "orbit/6.jpg", title: "Installation Blueprint View" }
        ]
    },
    {
        title: "Altered Archives",
        thumbnail: "alt/altered.png",
        documentation: [
             { image: "alt/DG.jpg", title: "Block Diagram" },
             { image: "alt/FC.jpg", title: "Flowchart" },
             { image: "alt/TECH.jpg", title: "Tech Stack" },
             { image: "alt/1.png", title: "Home View" },
             { image: "alt/2.png", title: "Detail Product View" },
             { image: "alt/3.png", title: "Checkout View" },
             { image: "alt/5.png", title: "Payment View" },
             { image: "alt/6.png", title: "Shopping Cart View" },
             { image: "alt/7.png", title: "Admin Dashboard View 1" },
             { image: "alt/8.png", title: "Admin Dashboard View 2" },
             { image: "alt/9.png", title: "Account Information View" }
        ]
    },
    {
        title: "Watch Authenticator & Market Analyzer (Langflow)",
        thumbnail: "lng/langflow.png",
        documentation: [
             { image: "lng/1.jpg", title: "Langflow Nodes" },
             { image: "lng/5.png", title: "Composio API View" },
             { image: "lng/2.jpg", title: "AI Response 1" },
             { image: "lng/3.jpg", title: "AI Response 2" },
             { image: "lng/4.jpg", title: "AI Response 3" }
        ]
    },
    {
        title: "Rain Attenuation Prediction in Satellite Communication using Random Forest",
        thumbnail: "rain/1.jpg",
        documentation: [
             { image: "rain/1.jpg", title: "Main Dashboard View" },
             { image: "rain/2.jpg", title: "Calculator View" },
        ]
    },
    {
        title: "Implementation of the Design and Construction of a Conical Horn Antenna Using 1.8 GHz",
        thumbnail: "horn/1.png",
        documentation: [
             { image: "horn/2.png", title: "Antenna calculation results" },
             { image: "horn/3.png", title: "Initial preliminary design" },
             { image: "horn/4.png", title: "Initial CST design" },
             { image: "horn/5.png", title: "Final CST design" },
             { image: "horn/1.png", title: "Fabrication" },
             { image: "horn/6.png", title: "VSWR value in CST" },
             { image: "horn/7.png", title: "S-parameter values in CST" },
             { image: "horn/8.jpg", title: "VSWR value in S2-VNA" },
             { image: "horn/9.jpg", title: "Return loss value in S2-VNA" },
             { image: "horn/10.jpg", title: "Smith chart and impedance graphs on S2-VNA" }
        ]
    },
    {
        title: "Traffic Design and Engineering for Network Planning & Dimensioning",
        thumbnail: "aset/LOGOPNJ.png",
        documentation: [
             { image: "tprt/1.png", title: "" },
             { image: "tprt/2.png", title: "" },
             { image: "tprt/3.png", title: "" },
             { image: "tprt/4.png", title: "" },
             { image: "tprt/5.png", title: "" },
             { image: "tprt/6.png", title: "" },
             { image: "tprt/7.png", title: "" },
             { image: "tprt/8.png", title: "" },
             { image: "tprt/9.png", title: "" },
             { image: "tprt/10.png", title: "" },
             { image: "tprt/11.png", title: "" },
             { image: "tprt/12.png", title: "" }
        ]
    },
    {
        title: "Network Design in Cisarua Area Using Atoll",
        thumbnail: "atol/1.png",
        documentation: [
             { image: "atol/2.png", title: "Background View" },
             { image: "atol/3.png", title: "Map area" },
             { image: "atol/4.png", title: "Target KPI" },
             { image: "atol/5.png", title: "Radio parameters" },
             { image: "atol/6.png", title: "Site distribution" },
             { image: "atol/7.png", title: "PCI planning" },
             { image: "atol/8.png", title: "Neighbours planning" },
             { image: "atol/9.png", title: "RSRP results" },
             { image: "atol/10.png", title: "SINR results" },
             { image: "atol/11.png", title: "Throughput results" }
        ]
    },
    {
        title: "Point-to-Point Fiber Optic Network Design and Maintenance Strategy",
        thumbnail: "aset/LOGOPNJ.png",
        documentation: [
             { image: "fplan/1,png", title: "FO Route Map" },
             { image: "fplan/2.png", title: "Fiber Optic Cable Installation Route Topology" },
             { image: "fplan/3.png", title: "Transmission & Network Equipment" },
             { image: "fplan/4.png", title: "Route Infrastructure & Protection" },
             { image: "fplan/5.png", title: "Monitoring Equipment (Central & Remote)" },
             { image: "fplan/6.png", title: "WDM MUX Preventive Maintenance Steps" },
             { image: "fplan/7.png", title: "WDM MUX Corrective Maintenance Steps" },
             { image: "fplan/8.png", title: "WDM DEMUX Preventive Maintenance Steps" },
             { image: "fplan/9.png", title: "WDM DEMUX Corrective Maintenance Steps" },
             { image: "fplan/10.png", title: "Optical Amplifier (EDFA) Preventive Maintenance Steps" },
             { image: "fplan/11.png", title: "Optical Amplifier (EDFA) Corrective Maintenance Steps" },
             { image: "fplan/12.png", title: "Optical Terminal Box (OTB) Preventive Maintenance Steps" },
             { image: "fplan/13.png", title: "Optical Terminal Box (OTB) Corrective Maintenance Steps" },
             { image: "fplan/14.png", title: "Maintenance Cost Estimation" }
        ]
    },
    {
        title: "PERANCANGAN JARINGAN FTTH 128 TITIK MENGGUNAKAN GOOGLE EARTH PRO",
        thumbnail: "aset/LOGOPNJ.png",
        documentation: [
             { image: "ftth/1.png", title: "Equipment and software used" },
             { image: "ftth/2.png", title: "Planning results" },
             { image: "ftth/3.png", title: "Link Budget calculation" },
             { image: "ftth/4.png", title: "Link loss budget and Power Link Budget calculation" },
             { image: "ftth/5.png", title: "NRZ Bitrate and Rise time budget calculation" },
             { image: "ftth/6.png", title: "SNR and BER Performance analysis" }
        ]
    },
    {
        title: "Design and Troubleshooting of Ring Topology Using Cisco 2800 Series",
        thumbnail: "aset/LOGOPNJ.png",
        documentation: [
             { image: "ring/1.png", title: "Objectives and Equipment" },
             { image: "ring/2.png", title: "Experimental Procedures 1" },
             { image: "ring/3.png", title: "Experimental Procedures 2" },
             { image: "ring/4.png", title: "PuTTY Configuration Visual 2" },
             { image: "ring/5.png", title: "PuTTY Configuration Visual 2" },
             { image: "ring/6.png", title: "Wireshark Packet Captures" }
        ]
    }
];

const organizations = [
    {
        name: " Olahraga Elektro 2024",
        position: "Head Of Event Division",
        documentation: [
            "oe/1.jpg",
            "oe/2.jpg",
            "oe/3.jpg",
            "oe/4.jpeg"
        ]
    },
    {
        name: "Wisuda Jurusan Teknik Elektro 2024",
        position: "Vice Project Officer",
        documentation: [
            "wisjur/3.jpg",
            "wisjur/2.jpg",
            "wisjur/1.jpg"
        ]
    },
    {
        name: " Sosialisasi Jurusan Teknik Elektro 2024",
        position: "Event Staff",
        documentation: [
            "sosjur/1.jpg",
            "sosjur/2.jpg"
        ]
    },
    {
        name: "Electro Activities Programme (E-TIME) 2025",
        position: "Coordinator of Relations Event",
        documentation: [
            "et/1.jpeg",
            "et/2.jpg",
            "et/3.jpg",
            "et/4.jpg"
        ]
    }
];

const certifications = [
    { title: "Datacomm", image: "sertif/DTC.png" },
    { title: "Microsoft Office Excel, Word & Power Point Bootcamp Specialist", image: "sertif/18.jpg" },
    { title: "The Importance of Electrical OHS Personnel in Achieving Zero Accidents in the Company", image: "sertif/17.jpg" },
    { title: "Introduction  to Software Engineering", image: "sertif/16.jpg" },
    { title: "Business Development", image: "sertif/15.jpg" },
    { title: "Business Analyst & Product Strategy", image: "sertif/14.png" },
    { title: "TOEIC", image: "sertif/13.jpg" },
    { title: "Build an AI agent", image: "sertif/12.png" },
    { title: "Intellegent by Design: Build an AI Agent", image: "sertif/11.png" },
    { title: "Introduction to Large Language Models", image: "sertif/10.png" },
    { title: "Lab: Troubleshoot Your Code Using IBM Bob", image: "sertif/9.png" },
    { title: "Introduction to Machine Learning", image: "sertif/8.png" },
    { title: "Python", image: "sertif/7.png" },
    { title: "50th Anniversary Satellite Webinar", image: "sertif/6.png" },
    { title: "Gemini for Student", image: "sertif/5.png" },
    { title: "Work Stress Prevention Efforts in Occupational Health and Safety (OHS) Implementation in Companies", image: "sertif/nyelip.png" },
    { title: "TOEFL", image: "sertif/4.png" },
    { title: "Basic Java Progamming", image: "sertif/3.png" },
    { title: "Basic C Progamming", image: "sertif/2.png" },
    { title: "Basic Project Management", image: "sertif/1.png" },
    { title: "IOT Webinar", image: "sertif/0.png" }
];

const educationWork = {
    education: {
        logo: "aset/LOGOPNJ.png",
        campus: "Politeknik Negeri Jakarta",
        major: "Electrical Engineering/Telecommunication",
        gpa: "3.77/4.00"
    },
    // DI SINI PERBAIKANNYA: Menggunakan works berbentuk array []
    works: [
        {
            logo: "aset/DATACOMM.png",
            documentation: [
                { image: "dtc/1.jpeg", title: "Module Insertion at Telkom Slipi" },
                { image: "dtc/2.jpeg", title: "Full Node Installation in Kebayoran" },
                { image: "dtc/3.jpeg", title: "Module Insertion in Balikpapan" },
                { image: "dtc/4.jpeg", title: "Intranode Migration in Balikpapan" },
                { image: "dtc/5.jpeg", title: "Module Insertion in Balikpapan" },
                { image: "dtc/6.jpeg", title: "Module Staging" },
                { image: "dtc/7.jpeg", title: "Module Upgrade in Tasikmalaya" },
                { image: "dtc/8.jpeg", title: "Link Cut in Tasikmalaya" },
                { image: "dtc/9.jpeg", title: "Module Upgrade in Batam" },
                { image: "dtc/10.jpeg", title: "Module and OS Upgrade in Batam" },
                { image: "dtc/11.jpeg", title: "RAN to PE Mobile Migration for Telkom Indonesia L3VPN Project at TTC Bogor" },
                { image: "dtc/12.jpeg", title: "RAN to PE Mobile Migration for Telkom Indonesia L3VPN Project at TTC Jakarta" },
                { image: "dtc/13.jpeg", title: "Port Migration in Palembang" },
                { image: "dtc/14.jpeg", title: "Module Insertion in Central Kalimantan" },
                { image: "dtc/15.jpeg", title: "Node Installation and Full Port Migration from Old to New Metro in Tasikmalaya" },
                { image: "dtc/16.jpeg", title: "Intranode Migration in Palembang" },
                { image: "dtc/17.jpeg", title: "Intranode Migration in Palembang" },
                { image: "dtc/18.jpeg", title: "Link Upgrade in Tasikmalaya" },
                { image: "dtc/19.jpeg", title: "Link Cut in Indramayu" },
                { image: "dtc/20.jpeg", title: "RAN to PE Mobile Migration for Telkom Indonesia L3VPN Project at TTC Jakarta" },
                { image: "dtc/21.jpeg", title: "Module and OS Upgrade in Balaraja" }
            ]
        },
        {
            logo: "aset/LOGOPNJ.png",
            documentation: [
                { image: "ml/1.png", title: "Main Page" },
                { image: "ml/2.png", title: "Scenario Configuration" },
                { image: "ml/3.png", title: "Scenario Legenda" },
                { image: "ml/4.png", title: "BTS Capacity Scenario" },
                { image: "ml/5.png", title: "Spatial Visualization" },
                { image: "ml/6.png", title: "Simulation Log Table" },
                { image: "ml/7.png", title: "Handover Logs" },
                { image: "ml/8.png", title: "Event Logs" },
                { image: "ml/9.png", title: "Cumulative Handover (HO) Plot: A vs. B" },
                { image: "ml/10.png", title: "RSRP Comparison Plot: A vs. B" },
                { image: "ml/11.png", title: "RSRP vs. Neighbor A Plot" },
                { image: "ml/12.png", title: "RSRP vs. Neighbor B Plot" },
                { image: "ml/13.png", title: "Simulation Information" },
                { image: "ml/14.png", title: "Performance Comparison Metrics" }
            ]
        }
    ]
};

const programs = [
    { name: "Orbit Future Academy AWS re/Start", url: "https://www.instagram.com/p/DakX0rzjQEo/?igsh=cG5waDUxMjF1enMx&igsi=cG5waDUxMjF1enMx" },
    { name: "Karirnex Bootcamp Excel, Word, Power Point", url: "https://www.instagram.com/p/DbkuppxPdec/?igsh=MTBta3B5eTJhM2U3Zg==&igsi=MTBta3B5eTJhM2U3Zg==" },
    { name: "Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1?courseLang=en-US" }
];


/* ==========================================================================
   2. INISIALISASI DOM & RENDER KONTEN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderOrganizations();
    renderCertifications();
    renderPrograms();
    initScrollSpy();

    // Set logo edu/work
    document.getElementById('edu-logo').src = educationWork.education.logo;
    
    // DI SINI PERBAIKANNYA: Mengisi kedua logo Work Experience
    if(document.getElementById('work-logo-0')) {
        document.getElementById('work-logo-0').src = educationWork.works[0].logo;
    }
    if(document.getElementById('work-logo-1')) {
        document.getElementById('work-logo-1').src = educationWork.works[1].logo;
    }

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Sembunyikan mobile menu saat link diklik
    document.querySelectorAll('#mobile-menu .nav-item').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
});


/* ==========================================================================
   3. RENDER FUNCTION (Menyuntikkan data ke HTML)
   ========================================================================== */

// RENDER PROGRAMS
function renderPrograms() {
    const container = document.getElementById('program-list');
    programs.forEach(prog => {
        const a = document.createElement('a');
        a.href = prog.url;
        // DI SINI PERBAIKANNYA: Mengganti class Tailwind yang error menjadi text-blue-700 yang sah
        a.className = "block bg-white text-blue-700 border border-gray-100 py-4 px-6 rounded-md hover:bg-blue-50 hover:text-blue-900 transition shadow-sm text-lg w-full max-w-4xl mx-auto font-bold";
        a.textContent = prog.name;
        container.appendChild(a);
    });
}

// RENDER CERTIFICATIONS
function renderCertifications() {
    const container = document.getElementById('certification-grid');
    certifications.forEach((cert, index) => {
        const div = document.createElement('div');
        div.className = "cursor-pointer hover:scale-105 transition-transform p-2 bg-gray-50 border rounded shadow-sm";
        div.onclick = () => openModal('certification', index);
        div.innerHTML = `<img src="${cert.image}" alt="${cert.title}" class="w-full h-auto object-contain">`;
        container.appendChild(div);
    });
}


/* ==========================================================================
   4. ORGANIZATION CAROUSEL INLINE (Bukan Modal)
   ========================================================================== */
let orgState = {}; 

function renderOrganizations() {
    const container = document.getElementById('organization-grid');
    organizations.forEach((org, index) => {
        orgState[index] = 0; 
        
        const card = document.createElement('div');
        card.className = "text-left";
        
        card.innerHTML = `
            <div class="bg-maroon-800 rounded-3xl overflow-hidden aspect-[4/3] relative mb-4 shadow-lg group">
                <img id="org-img-${index}" src="${org.documentation[0]}" alt="${org.name}" class="w-full h-full object-cover">
                
                <div class="absolute bottom-4 right-4 flex space-x-2">
                    <button onclick="changeOrgImg(${index}, -1)" class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg backdrop-blur-sm transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onclick="changeOrgImg(${index}, 1)" class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg backdrop-blur-sm transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
            <h4 class="text-xl font-bold uppercase text-gray-800">${org.name}</h4>
            <p class="text-maroon-800 uppercase font-medium tracking-wide">${org.position}</p>
        `;
        container.appendChild(card);
    });
}

function changeOrgImg(orgIndex, dir) {
    const org = organizations[orgIndex];
    let currIdx = orgState[orgIndex];
    
    currIdx += dir;
    if (currIdx < 0) currIdx = org.documentation.length - 1;
    if (currIdx >= org.documentation.length) currIdx = 0;
    
    orgState[orgIndex] = currIdx;
    document.getElementById(`org-img-${orgIndex}`).src = org.documentation[currIdx];
}


/* ==========================================================================
   5. PROJECT CAROUSEL (Horizontal Sliding)
   ========================================================================== */
let currentProjectIndex = 0;

function renderProjects() {
    const container = document.getElementById('project-carousel');
    container.innerHTML = '';
    
    projects.forEach((proj, index) => {
        const div = document.createElement('div');
        div.id = `proj-card-${index}`;
        
        div.onclick = () => {
            if (currentProjectIndex === index) {
                openModal('project', index);
            }
        };
        
        div.innerHTML = `
            <div class="hidden md:flex w-full flex-1 items-center justify-center overflow-hidden mb-3">
                <img src="${proj.thumbnail}" alt="${proj.title}" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500">
            </div>
            
            <h3 class="text-xl md:text-2xl font-bold uppercase text-center shrink-0">${proj.title}</h3>

            <p class="mt-2 text-xs md:text-sm italic text-gray-400 tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                Click card to view documentation
            </p>
        `;
        container.appendChild(div);
    });
    
    updateProjectCarousel();
}

function moveProjectCarousel(dir) {
    currentProjectIndex += dir;
    if (currentProjectIndex < 0) currentProjectIndex = projects.length - 1;
    if (currentProjectIndex >= projects.length) currentProjectIndex = 0;
    updateProjectCarousel();
}

function updateProjectCarousel() {
    const total = projects.length;
    for (let i = 0; i < total; i++) {
        const card = document.getElementById(`proj-card-${i}`);
        
        card.className = "project-card bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center items-center text-maroon-900 aspect-[4/3] p-4 border border-gray-200";
        
        if (i === currentProjectIndex) {
            card.classList.add('active', 'group');
        } else if (i === (currentProjectIndex - 1 + total) % total) {
            card.classList.add('prev');
        } else if (i === (currentProjectIndex + 1) % total) {
            card.classList.add('next');
        } else {
            card.classList.add('hidden-card');
        }
    }
}


/* ==========================================================================
   6. GLOBAL MODAL LOGIC
   ========================================================================== */
let modalType = null; 
let modalDataIndex = 0; 
let modalInnerIndex = 0; 
let currentModalImages = []; 

function openModal(type, dataIndex = 0) {
    modalType = type;
    modalDataIndex = dataIndex;
    modalInnerIndex = 0;
    currentModalImages = [];

    const area = document.getElementById('modal-content-area');
    const btnPrev = document.getElementById('modal-prev');
    const btnNext = document.getElementById('modal-next');
    
    area.innerHTML = '';
    btnPrev.classList.add('hidden');
    btnNext.classList.add('hidden');

    if (type === 'education') {
        const edu = educationWork.education;
        area.innerHTML = `
            <div class="text-center w-full px-4">
                <h2 class="text-3xl md:text-5xl font-bold uppercase mb-4">${edu.campus}</h2>
                <h3 class="text-xl md:text-2xl font-light mb-2">${edu.major}</h3>
                <p class="text-2xl font-semibold mt-8">GPA: ${edu.gpa}</p>
            </div>
        `;
    } 
    else if (type === 'work') {
        // DI SINI PERBAIKANNYA: Menggunakan works dari array
        currentModalImages = educationWork.works[modalDataIndex].documentation;
        renderModalImage();
    }
    else if (type === 'project') {
        currentModalImages = projects[modalDataIndex].documentation;
        renderModalImage();
    }
    else if (type === 'certification') {
        currentModalImages = certifications; 
        modalInnerIndex = modalDataIndex;
        renderModalImage();
    }

    document.body.classList.add('modal-open');
    const container = document.getElementById('modal-container');
    container.classList.remove('hidden');
    container.classList.add('flex');
    
    setTimeout(() => {
        document.getElementById('modal-card').classList.remove('scale-95');
        document.getElementById('modal-card').classList.add('scale-100');
    }, 10);
}

function renderModalImage() {
    const area = document.getElementById('modal-content-area');
    const btnPrev = document.getElementById('modal-prev');
    const btnNext = document.getElementById('modal-next');
    
    if (currentModalImages.length > 0) {
        let imageUrl = "";
        let modalTitle = "";
        let currentData = currentModalImages[modalInnerIndex];

        if (modalType === 'project' || modalType === 'work') {
            if (typeof currentData === 'object' && currentData !== null) {
                imageUrl = currentData.image;
                modalTitle = currentData.title;
            } else {
                imageUrl = currentData;
                modalTitle = modalType === 'project' ? projects[modalDataIndex].title : "Dokumentasi";
            }
        } else if (modalType === 'certification') {
            imageUrl = currentData.image;
            modalTitle = currentData.title;
        }

        area.innerHTML = `
            <div class="w-full h-full flex flex-col">
                <h3 class="text-xl md:text-2xl font-bold uppercase text-maroon-900 mb-2 md:mb-4 text-center shrink-0 tracking-wider">
                    ${modalTitle}
                </h3>
                
                <div class="w-full flex-1 flex items-center justify-center relative overflow-hidden">
                    <img src="${imageUrl}" alt="Documentation" class="max-w-full max-h-full object-contain">
                    
                    <div class="absolute top-2 right-2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm shadow-md">
                        ${modalInnerIndex + 1} / ${currentModalImages.length}
                    </div>
                </div>
            </div>
        `;
        
        if (currentModalImages.length > 1) {
            btnPrev.classList.remove('hidden');
            btnNext.classList.remove('hidden');
        } else {
            btnPrev.classList.add('hidden');
            btnNext.classList.add('hidden');
        }
    }
}

function navigateModal(dir) {
    if (currentModalImages.length === 0) return;
    
    modalInnerIndex += dir;
    if (modalInnerIndex < 0) modalInnerIndex = currentModalImages.length - 1;
    if (modalInnerIndex >= currentModalImages.length) modalInnerIndex = 0;
    
    renderModalImage();
}

function closeModal() {
    document.body.classList.remove('modal-open');
    const card = document.getElementById('modal-card');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
    
    setTimeout(() => {
        const container = document.getElementById('modal-container');
        container.classList.remove('flex');
        container.classList.add('hidden');
        modalType = null;
    }, 200);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('modal-container').classList.contains('hidden')) {
        closeModal();
    }
});


/* ==========================================================================
   7. NAVBAR ACTIVE STATE & SCROLL SPY (Intersection Observer)
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('.section-scroll');
    const navLinksDesktop = document.querySelectorAll('.hidden.md\\:block .nav-item');
    const navLinksMobile = document.querySelectorAll('#mobile-menu .nav-item');

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -70% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                [...navLinksDesktop, ...navLinksMobile].forEach(link => {
                    link.classList.remove('nav-active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('nav-active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const scrollToTopBtn = document.getElementById("btnScrollToTop");

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
}