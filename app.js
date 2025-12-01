import * as THREE from 'three';

// ============================================================================
// DEFAULT HAT CARDS - The 57 Hats
// ============================================================================
const DEFAULT_HATS = [
    { id: 1, name: "Supply Chain Manager", emoji: "📦", description: "Manages flow of goods from origin to destination" },
    { id: 2, name: "Production Manager", emoji: "🏭", description: "Oversees manufacturing and production processes" },
    { id: 3, name: "Recruiter", emoji: "👔", description: "Finds and attracts top talent" },
    { id: 4, name: "Content Creator", emoji: "✍️", description: "Creates engaging content across platforms" },
    { id: 5, name: "HR Manager", emoji: "👥", description: "Manages people and workplace culture" },
    { id: 6, name: "Video Editor", emoji: "🎬", description: "Crafts compelling visual stories" },
    { id: 7, name: "Online Business Manager", emoji: "💻", description: "Runs day-to-day online operations" },
    { id: 8, name: "CTO", emoji: "🖥️", description: "Leads technology strategy and innovation" },
    { id: 9, name: "Project Manager", emoji: "📋", description: "Delivers projects on time and budget" },
    { id: 10, name: "Community Manager", emoji: "🌐", description: "Builds and nurtures community engagement" },
    { id: 11, name: "CEO", emoji: "👑", description: "Sets vision and leads the organization" },
    { id: 12, name: "Integrator", emoji: "🔗", description: "Connects systems and teams seamlessly" },
    { id: 13, name: "Customer Service Representative", emoji: "🎧", description: "Resolves issues and delights customers" },
    { id: 14, name: "Social Media Manager", emoji: "📱", description: "Grows brand presence on social platforms" },
    { id: 15, name: "Client Success Manager", emoji: "🤝", description: "Ensures clients achieve their goals" },
    { id: 16, name: "Podcast Manager", emoji: "🎙️", description: "Produces and manages podcast content" },
    { id: 17, name: "Sales Operations Manager", emoji: "📊", description: "Optimizes sales processes and tools" },
    { id: 18, name: "Technical Support Specialist", emoji: "🔧", description: "Solves technical problems quickly" },
    { id: 19, name: "Inside Sales Representative", emoji: "📞", description: "Closes deals from the office" },
    { id: 20, name: "Graphic Designer", emoji: "🎨", description: "Creates stunning visual designs" },
    { id: 21, name: "Software Developer", emoji: "💻", description: "Builds and maintains software solutions" },
    { id: 22, name: "General Counsel", emoji: "⚖️", description: "Provides legal guidance and protection" },
    { id: 23, name: "Accountant", emoji: "🧮", description: "Manages financial records and reporting" },
    { id: 24, name: "Logistics Coordinator", emoji: "🚚", description: "Coordinates shipping and delivery" },
    { id: 25, name: "Operations Manager", emoji: "⚙️", description: "Streamlines business operations" },
    { id: 26, name: "Launch Manager", emoji: "🚀", description: "Orchestrates successful product launches" },
    { id: 27, name: "Product Manager", emoji: "📦", description: "Guides product vision and roadmap" },
    { id: 28, name: "Founder", emoji: "🌟", description: "Builds companies from the ground up" },
    { id: 29, name: "CFO", emoji: "💰", description: "Steers financial strategy and health" },
    { id: 30, name: "Quality Assurance Manager", emoji: "✅", description: "Ensures standards and quality" },
    { id: 31, name: "Accounts Receivable Clerk", emoji: "💵", description: "Manages incoming payments" },
    { id: 32, name: "Copywriter", emoji: "✏️", description: "Writes persuasive marketing copy" },
    { id: 33, name: "Accounts Payable Clerk", emoji: "📝", description: "Processes outgoing payments" },
    { id: 34, name: "Creative Director", emoji: "🎨", description: "Leads creative vision and execution" },
    { id: 35, name: "CMO", emoji: "📢", description: "Drives marketing strategy and growth" },
    { id: 36, name: "Payroll Manager", emoji: "💳", description: "Ensures accurate and timely pay" },
    { id: 37, name: "Training and Development Manager", emoji: "📚", description: "Develops employee skills and growth" },
    { id: 38, name: "Public Relations Specialist", emoji: "📰", description: "Manages public image and media" },
    { id: 39, name: "Appointment Setter", emoji: "📅", description: "Schedules meetings and demos" },
    { id: 40, name: "Sales Support Specialist/Coordinator", emoji: "🤝", description: "Supports the sales team" },
    { id: 41, name: "Sales Trainer", emoji: "🎯", description: "Trains sales teams to succeed" },
    { id: 42, name: "R&D Manager", emoji: "🔬", description: "Leads research and innovation" },
    { id: 43, name: "COO", emoji: "⚙️", description: "Runs daily business operations" },
    { id: 44, name: "Operations Director", emoji: "📊", description: "Directs operational strategy" },
    { id: 45, name: "Controller", emoji: "📈", description: "Controls financial operations" },
    { id: 46, name: "Bookkeeper", emoji: "📒", description: "Maintains accurate financial records" },
    { id: 47, name: "Delivery Specialist", emoji: "📦", description: "Ensures successful delivery" },
    { id: 48, name: "Auditor", emoji: "🔍", description: "Reviews and verifies compliance" },
    { id: 49, name: "Affiliate Marketing Manager", emoji: "🤝", description: "Manages affiliate partnerships" },
    { id: 50, name: "Media Buyer", emoji: "📺", description: "Purchases advertising placements" },
    { id: 51, name: "Event Manager", emoji: "🎪", description: "Plans and executes events" },
    { id: 52, name: "Marketing Manager", emoji: "📣", description: "Leads marketing initiatives" },
    { id: 53, name: "Brand Manager", emoji: "🏷️", description: "Protects and grows the brand" },
    { id: 54, name: "Digital Marketing Specialist", emoji: "💻", description: "Executes digital campaigns" },
    { id: 55, name: "SEO Specialist", emoji: "🔍", description: "Optimizes search visibility" },
    { id: 56, name: "Funnel Builder", emoji: "🔄", description: "Designs conversion funnels" },
    { id: 57, name: "Marketing Coordinator", emoji: "📋", description: "Coordinates marketing activities" },
    { id: 58, name: "Marketing Director", emoji: "📢", description: "Directs overall marketing strategy" },
    { id: 59, name: "Lead Generation Specialist", emoji: "🎯", description: "Generates qualified leads" },
    { id: 60, name: "Sales Manager", emoji: "💼", description: "Leads and motivates sales team" },
    { id: 61, name: "Sales Representative", emoji: "🤝", description: "Builds relationships and closes deals" },
    { id: 62, name: "CRO", emoji: "📈", description: "Drives revenue growth strategy" },
    { id: 63, name: "Sales Director", emoji: "👔", description: "Directs sales organization" },
    { id: 64, name: "Sales Team Leader", emoji: "🏆", description: "Leads sales team to success" },
    { id: 65, name: "Business Development Manager", emoji: "🌱", description: "Identifies growth opportunities" },
    { id: 66, name: "Sales Account Executive", emoji: "💼", description: "Manages key accounts" },
    { id: 67, name: "Outside Sales Representative", emoji: "🚗", description: "Sells in the field" },
    { id: 68, name: "Executive Assistant", emoji: "📅", description: "Supports executive productivity" },
    { id: 69, name: "Administrative/Virtual Assistant", emoji: "💻", description: "Handles admin tasks remotely" },
    { id: 70, name: "Operations Coordinator", emoji: "📋", description: "Coordinates daily operations" }
];

const TASK_COLORS = [0xfff59d, 0xf8bbd9, 0xb3e5fc, 0xc8e6c9, 0xffccbc];
const SWIMLANE_WIDTH = 14;
const UNASSIGNED_WIDTH = SWIMLANE_WIDTH * 3; // 3 columns wide for unassigned
const CARD_SIZE = 8; // Square cards
const CARD_SPACING = 2;
const MINI_TASK_WIDTH = 7; // Wide squat cards under hat cards
const MINI_TASK_HEIGHT = 1.4;

// Scroll/pan/zoom state
let scrollX = 0;
let scrollY = 0;
let zoomLevel = 1;

// ============================================================================
// APPLICATION STATE
// ============================================================================
const state = {
    hats: [...DEFAULT_HATS],
    people: [],      // { id, name, color }
    tasks: [],       // { id, text, hatInstanceId, colorIndex }
    tableCards: [],  // { id, hatId, personId }
    nextId: 1000
};

// ============================================================================
// THREE.JS GLOBALS
// ============================================================================
let scene, camera, renderer, raycaster, mouse;
let container, clock;
let isDragging = false;
let hasDragged = false;
let selectedObject = null;
let hoveredObject = null;
let needsRender = true; // Dirty flag for rendering
let lastHoveredObject = null; // Track hover changes
let undoStack = []; // Undo history
const MAX_UNDO_STEPS = 50;
let dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
let dragOffset = new THREE.Vector3();
let intersection = new THREE.Vector3();
let pointerDownPos = new THREE.Vector2();

let currentDetailCardId = null;

// Meshes
const swimlaneMeshes = new Map(); // personId -> mesh (null for unassigned)
const cardMeshes = new Map();     // instanceId -> mesh
const taskMeshes = new Map();     // taskId -> mesh

// ============================================================================
// INITIALIZATION
// ============================================================================
function init() {
    container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a4d3c);

    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 60;
    camera = new THREE.OrthographicCamera(
        -frustumSize * aspect / 2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        -frustumSize / 2,
        0.1, 1000
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);
    
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    clock = new THREE.Clock();

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('dblclick', onDoubleClick);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('keydown', onKeyDown);
    
    loadState();
    animate();
}

// ============================================================================
// SWIMLANE CREATION
// ============================================================================
function createSwimlaneMesh(person, index) {
    const group = new THREE.Group();
    
    const laneHeight = 200; // Very tall to accommodate many cards
    const laneWidth = getSwimlaneWidth(index);
    const x = getSwimlaneCenterX(index);
    
    // Lane background - positioned so TOP is at y=28 (visible at top of camera view)
    const laneGeom = new THREE.PlaneGeometry(laneWidth - 0.5, laneHeight);
    const laneMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(person ? person.color : '#2a6b54'),
        transparent: true,
        opacity: 0.15
    });
    const laneMesh = new THREE.Mesh(laneGeom, laneMat);
    laneMesh.position.y = -laneHeight / 2 + 28; // Top at y=28
    laneMesh.position.z = -0.5;
    group.add(laneMesh);
    
    // Lane borders
    const borderGeom = new THREE.PlaneGeometry(0.15, laneHeight);
    const borderMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(person ? person.color : '#3d8b6e'),
        transparent: true,
        opacity: 0.5
    });
    const leftBorder = new THREE.Mesh(borderGeom, borderMat);
    leftBorder.position.x = -laneWidth / 2 + 0.1;
    leftBorder.position.y = -laneHeight / 2 + 28;
    leftBorder.position.z = -0.4;
    group.add(leftBorder);
    
    const rightBorder = leftBorder.clone();
    rightBorder.position.x = laneWidth / 2 - 0.1;
    group.add(rightBorder);
    
    // Header at TOP of lane (y = 28 - 1.5 = 26.5)
    const headerGeom = new THREE.PlaneGeometry(laneWidth - 0.5, 3);
    const headerMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(person ? person.color : '#2a6b54'),
        transparent: true,
        opacity: 0.5
    });
    const header = new THREE.Mesh(headerGeom, headerMat);
    header.position.y = 26.5;
    header.position.z = -0.3;
    group.add(header);
    
    // Name label - fixed size label, not stretched across lane width
    const labelDisplayWidth = Math.min(laneWidth - 2, SWIMLANE_WIDTH - 2); // Cap at normal lane width
    const labelHeight = 2;
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = Math.round(256 * (labelHeight / labelDisplayWidth));
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(person ? person.name : 'Unassigned', canvas.width / 2, canvas.height / 2);
    
    const labelTexture = new THREE.CanvasTexture(canvas);
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true });
    const labelGeom = new THREE.PlaneGeometry(labelDisplayWidth, labelHeight);
    const label = new THREE.Mesh(labelGeom, labelMat);
    label.position.y = 26.5;
    label.position.z = -0.2;
    // Make the header clickable for person view (only for real people)
    if (person) {
        header.userData = { type: 'personHeader', personId: person.id };
        label.userData = { type: 'personHeader', personId: person.id };
    }
    group.add(label);
    
    // X button to remove person (only for actual people, not unassigned)
    if (person) {
        const xCanvas = document.createElement('canvas');
        xCanvas.width = 64;
        xCanvas.height = 64;
        const xCtx = xCanvas.getContext('2d');
        
        xCtx.fillStyle = 'rgba(0,0,0,0.3)';
        xCtx.beginPath();
        xCtx.arc(32, 32, 28, 0, Math.PI * 2);
        xCtx.fill();
        
        xCtx.strokeStyle = '#ffffff';
        xCtx.lineWidth = 4;
        xCtx.lineCap = 'round';
        xCtx.beginPath();
        xCtx.moveTo(20, 20);
        xCtx.lineTo(44, 44);
        xCtx.moveTo(44, 20);
        xCtx.lineTo(20, 44);
        xCtx.stroke();
        
        const xTexture = new THREE.CanvasTexture(xCanvas);
        const xMat = new THREE.MeshBasicMaterial({ map: xTexture, transparent: true });
        const xGeom = new THREE.PlaneGeometry(1.8, 1.8);
        const xBtn = new THREE.Mesh(xGeom, xMat);
        xBtn.position.x = laneWidth / 2 - 1.5;
        xBtn.position.y = 26.5;
        xBtn.position.z = 0;
        xBtn.userData = { type: 'removePersonBtn', personId: person.id };
        group.add(xBtn);
    }
    
    group.position.set(x, 0, 0);
    group.userData = {
        type: 'swimlane',
        personId: person ? person.id : null,
        index: index
    };
    
    return group;
}

function getSwimlaneCenterX(index) {
    // Unassigned lane (index 0) is 3x wide, others are normal width
    if (index === 0) {
        // Unassigned starts at left edge
        const totalWidth = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
        return -totalWidth / 2 + UNASSIGNED_WIDTH / 2;
        } else {
        // People lanes start after unassigned
        const totalWidth = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
        const startAfterUnassigned = -totalWidth / 2 + UNASSIGNED_WIDTH;
        return startAfterUnassigned + (index - 1) * SWIMLANE_WIDTH + SWIMLANE_WIDTH / 2;
    }
}

function getSwimlaneWidth(index) {
    return index === 0 ? UNASSIGNED_WIDTH : SWIMLANE_WIDTH;
}

function rebuildSwimlanes() {
    // Remove old swimlanes
    swimlaneMeshes.forEach(mesh => scene.remove(mesh));
    swimlaneMeshes.clear();
    
    // Create unassigned lane first
    const unassignedLane = createSwimlaneMesh(null, 0);
    scene.add(unassignedLane);
    swimlaneMeshes.set(null, unassignedLane);
    
    // Create person lanes
    state.people.forEach((person, idx) => {
        const lane = createSwimlaneMesh(person, idx + 1);
        scene.add(lane);
        swimlaneMeshes.set(person.id, lane);
    });
    
    // Reposition all cards
    repositionAllCards();
}

function getSwimlaneBounds() {
    const bounds = [];
    const totalLanes = state.people.length + 1;
    
    for (let i = 0; i < totalLanes; i++) {
        const centerX = getSwimlaneCenterX(i);
        const width = getSwimlaneWidth(i);
        bounds.push({
            personId: i === 0 ? null : state.people[i - 1].id,
            left: centerX - width / 2,
            right: centerX + width / 2,
            centerX: centerX,
            width: width
        });
    }
    
    return bounds;
}

function findSwimlaneForX(worldX) {
    const bounds = getSwimlaneBounds();
    for (const bound of bounds) {
        if (worldX >= bound.left && worldX <= bound.right) {
            return bound.personId;
        }
    }
    return null;
}

// ============================================================================
// CARD TEXTURE & MESH
// ============================================================================
function createCardTexture(hat, taskCount = 0) {
    const canvas = document.createElement('canvas');
    // High resolution canvas
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#fffef9';
    ctx.fillRect(0, 0, 512, 512);

    // Outer border
    ctx.strokeStyle = '#c9a86c';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, 492, 492);

    // Inner border
    ctx.strokeStyle = '#e8d4bc';
    ctx.lineWidth = 4;
    ctx.strokeRect(24, 24, 464, 464);

    // Role-specific emoji - large and centered near top
    ctx.fillStyle = '#000000';
    ctx.font = '90px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(hat.emoji || '🎩', 256, 85);

    // Title - MUCH BIGGER
    ctx.fillStyle = '#1c1410';
    ctx.font = 'bold 52px Georgia, serif';
    ctx.textBaseline = 'top';
    
    const titleWords = hat.name.split(' ');
    let titleLine = '';
    let titleY = 145;
    
    for (const word of titleWords) {
        const testLine = titleLine + word + ' ';
        if (ctx.measureText(testLine).width > 440 && titleLine) {
            ctx.fillText(titleLine.trim(), 256, titleY);
            titleLine = word + ' ';
            titleY += 56;
        } else {
            titleLine = testLine;
        }
    }
    ctx.fillText(titleLine.trim(), 256, titleY);

    // Divider line
    const dividerY = titleY + 65;
    ctx.strokeStyle = '#c9a86c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(60, dividerY);
    ctx.lineTo(452, dividerY);
    ctx.stroke();

    // Description - MUCH BIGGER
    ctx.fillStyle = '#3d2f28';
    ctx.font = '36px Georgia, serif';
    const descWords = hat.description.split(' ');
    let descLine = '';
    let descY = dividerY + 25;
    
    for (const word of descWords) {
        const testLine = descLine + word + ' ';
        if (ctx.measureText(testLine).width > 420 && descLine) {
            ctx.fillText(descLine.trim(), 256, descY);
            descLine = word + ' ';
            descY += 42;
            if (descY > 440) break; // Stop if we run out of space
        } else {
            descLine = testLine;
        }
    }
    if (descY <= 440) {
        ctx.fillText(descLine.trim(), 256, descY);
    }

    // Task count badge
    if (taskCount > 0) {
        ctx.fillStyle = '#d4a84b';
        ctx.beginPath();
        ctx.arc(256, 470, 28, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#1c1410';
        ctx.font = 'bold 30px sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillText(taskCount.toString(), 256, 470);
    }

    // Card number in corner
    ctx.fillStyle = '#c9a86c';
    ctx.font = 'bold 28px Georgia, serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText(`#${hat.id}`, 485, 495);

    return canvas;
}

function createCardMesh(hat, instanceId) {
    const group = new THREE.Group();
    
    const cardGeom = new THREE.BoxGeometry(CARD_SIZE, CARD_SIZE, 0.1);
    
    const taskCount = state.tasks.filter(t => t.hatInstanceId === instanceId).length;
    const textureCanvas = createCardTexture(hat, taskCount);
    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    
    // Use a simple plane for the card front to ensure texture displays correctly
    const sideMat = new THREE.MeshBasicMaterial({ color: 0xfffef9 });
    const backMat = new THREE.MeshBasicMaterial({ color: 0xe8d4bc });
    const cardMesh = new THREE.Mesh(cardGeom, [sideMat, sideMat, sideMat, sideMat, sideMat, backMat]);
    group.add(cardMesh);
    
    // Add front face as separate plane with texture for reliable rendering
    const frontGeom = new THREE.PlaneGeometry(CARD_SIZE, CARD_SIZE);
    const frontMat = new THREE.MeshBasicMaterial({ map: texture });
    const frontFace = new THREE.Mesh(frontGeom, frontMat);
    frontFace.position.z = 0.06;
    group.add(frontFace);

    const shadowGeom = new THREE.PlaneGeometry(CARD_SIZE + 0.4, CARD_SIZE + 0.4);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12 });
    const shadow = new THREE.Mesh(shadowGeom, shadowMat);
    shadow.position.set(0.25, -0.25, -0.1);
    group.add(shadow);
    
    // X button (shown only when unassigned)
    const xCanvas = document.createElement('canvas');
    xCanvas.width = 64;
    xCanvas.height = 64;
    const xCtx = xCanvas.getContext('2d');
    
    xCtx.fillStyle = 'rgba(192, 57, 43, 0.9)';
    xCtx.beginPath();
    xCtx.arc(32, 32, 28, 0, Math.PI * 2);
    xCtx.fill();
    
    xCtx.strokeStyle = '#ffffff';
    xCtx.lineWidth = 5;
    xCtx.lineCap = 'round';
    xCtx.beginPath();
    xCtx.moveTo(20, 20);
    xCtx.lineTo(44, 44);
    xCtx.moveTo(44, 20);
    xCtx.lineTo(20, 44);
    xCtx.stroke();
    
    const xTexture = new THREE.CanvasTexture(xCanvas);
    const xMat = new THREE.MeshBasicMaterial({ map: xTexture, transparent: true });
    const xGeom = new THREE.PlaneGeometry(1.5, 1.5);
    const xBtn = new THREE.Mesh(xGeom, xMat);
    xBtn.position.set(CARD_SIZE / 2 - 0.5, CARD_SIZE / 2 - 0.5, 0.15);
    xBtn.visible = false; // Hidden by default
    xBtn.userData = { type: 'removeCardBtn', instanceId };
    group.add(xBtn);
    
    group.userData = {
        type: 'card',
        instanceId,
        hatId: hat.id,
        personId: null,
        texture,
        hoverPhase: Math.random() * Math.PI * 2,
        xButton: xBtn
    };

    return group;
}

function updateCardTexture(mesh) {
    const hat = state.hats.find(h => h.id === mesh.userData.hatId);
    if (!hat) return;
    
    const taskCount = state.tasks.filter(t => t.hatInstanceId === mesh.userData.instanceId).length;
    const newCanvas = createCardTexture(hat, taskCount);
    mesh.userData.texture.image = newCanvas;
    mesh.userData.texture.needsUpdate = true;
}

// ============================================================================
// TASK MESH (Minimized sticky note)
// ============================================================================
function createTaskMesh(task, minimized = false) {
    const group = new THREE.Group();
    
    // Minimized = small colored squares, Full = larger sticky note
    const width = minimized ? MINI_TASK_WIDTH : 5;
    const height = minimized ? MINI_TASK_HEIGHT : 3.5;
    
    const colorIndex = task.colorIndex ?? Math.floor(Math.random() * TASK_COLORS.length);
    task.colorIndex = colorIndex;
    const color = TASK_COLORS[colorIndex];
    
    const noteGeom = new THREE.BoxGeometry(width, height, 0.05);
    const noteMat = new THREE.MeshBasicMaterial({ color });
    const noteMesh = new THREE.Mesh(noteGeom, noteMat);
    group.add(noteMesh);
    
    // Shadow for depth
    const shadowGeom = new THREE.PlaneGeometry(width + 0.15, height + 0.15);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 });
    const shadow = new THREE.Mesh(shadowGeom, shadowMat);
    shadow.position.set(0.1, -0.1, -0.05);
    group.add(shadow);
    
    if (minimized) {
        // Minimized: squat card with text (2 lines max)
        const canvas = document.createElement('canvas');
        canvas.width = 420;  // Wide aspect ratio
        canvas.height = 84;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dark text with word wrap for 2 lines
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 28px JetBrains Mono, monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Word wrap to 2 lines
        const words = task.text.split(' ');
        let line1 = '';
        let line2 = '';
        let onLine2 = false;
        
        for (const word of words) {
            if (!onLine2) {
                const testLine = line1 + word + ' ';
                if (ctx.measureText(testLine).width > 400 && line1) {
                    onLine2 = true;
                    line2 = word + ' ';
                } else {
                    line1 = testLine;
                }
            } else {
                line2 += word + ' ';
            }
        }
        
        // Truncate line2 if too long
        while (ctx.measureText(line2).width > 380 && line2.length > 3) {
            line2 = line2.slice(0, -4) + '...';
        }
        
        ctx.fillText(line1.trim(), 8, 10);
        if (line2.trim()) {
            ctx.fillText(line2.trim(), 8, 46);
        }
        
        const textTexture = new THREE.CanvasTexture(canvas);
        const textMat = new THREE.MeshBasicMaterial({ map: textTexture });
        const textGeom = new THREE.PlaneGeometry(width, height);
        const textMesh = new THREE.Mesh(textGeom, textMat);
        textMesh.position.z = 0.03;
        group.add(textMesh);
    } else {
        // Full size: show text with X button baked into the texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 360;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw X button in corner (baked into texture for proper occlusion)
        ctx.fillStyle = 'rgba(192, 57, 43, 1)';
        ctx.beginPath();
        ctx.arc(470, 42, 32, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(455, 27);
        ctx.lineTo(485, 57);
        ctx.moveTo(485, 27);
        ctx.lineTo(455, 57);
        ctx.stroke();
        
        // Even bigger and darker text
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 52px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        
        // Word wrap
        const words = task.text.split(' ');
        let line = '';
        let y = 50;
        for (const word of words) {
            const testLine = line + word + ' ';
            if (ctx.measureText(testLine).width > 440 && line) {
                ctx.fillText(line.trim(), 256, y);
                line = word + ' ';
                y += 62;
                if (y > 280) break;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line.trim(), 256, y);
        
        const textTexture = new THREE.CanvasTexture(canvas);
        const textMat = new THREE.MeshBasicMaterial({ map: textTexture });
        const textGeom = new THREE.PlaneGeometry(width, height);
        const textMesh = new THREE.Mesh(textGeom, textMat);
        textMesh.position.z = 0.03;
        group.add(textMesh);
        
        // Clickable area for X button (transparent but raycastable)
        const xGeom = new THREE.PlaneGeometry(1.0, 1.0);
        const xMat = new THREE.MeshBasicMaterial({ 
            transparent: true, 
            opacity: 0,
            depthWrite: false 
        });
        const xBtn = new THREE.Mesh(xGeom, xMat);
        xBtn.position.set(width / 2 - 0.35, height / 2 - 0.35, 0.04);
        xBtn.userData = { type: 'removeTaskBtn', taskId: task.id };
        group.add(xBtn);
    }
    
    // Less rotation for minimized (wider) tasks
    group.rotation.z = (Math.random() - 0.5) * (minimized ? 0.04 : 0.15);
    
    group.userData = {
        type: 'task',
        taskId: task.id,
        hatInstanceId: task.hatInstanceId,
        minimized,
        baseRotation: group.rotation.z
    };
    
    return group;
}

// ============================================================================
// POSITIONING
// ============================================================================
function repositionAllCards() {
    // Group cards by personId
    const cardsByPerson = new Map();
    cardsByPerson.set(null, []);
    state.people.forEach(p => cardsByPerson.set(p.id, []));
    
    state.tableCards.forEach(card => {
        const list = cardsByPerson.get(card.personId) || cardsByPerson.get(null);
        list.push(card);
    });
    
    // Position cards in each swimlane
    const bounds = getSwimlaneBounds();
    
    bounds.forEach(bound => {
        const cards = cardsByPerson.get(bound.personId) || [];
        // Start well below the swimlane header
        const startY = 17;
        
        // Unassigned lane: arrange in 3 columns
        // Other lanes: single column
        const isUnassigned = bound.personId === null;
        const numCols = isUnassigned ? 3 : 1;
        const colWidth = isUnassigned ? SWIMLANE_WIDTH : bound.width;
        
        let currentY = startY;
        let col = 0;
        let rowMaxTaskHeight = 0;
        
        cards.forEach((cardData, idx) => {
            const mesh = cardMeshes.get(cardData.id);
            if (!mesh) return;
            
            // Calculate column position
            let cardX;
            if (isUnassigned) {
                const colOffset = (col - 1) * colWidth; // -1, 0, 1 for columns
                cardX = bound.centerX + colOffset;
    } else {
                cardX = bound.centerX;
            }
            
            // Position this card
            mesh.position.x = cardX;
            mesh.position.y = currentY;
            mesh.position.z = 0;
            mesh.rotation.z = 0;
            mesh.userData.personId = bound.personId;
            mesh.userData.baseY = currentY;
            
            // Show X button only for unassigned cards
            if (mesh.userData.xButton) {
                mesh.userData.xButton.visible = isUnassigned;
            }
            
            // Position tasks under this card
            repositionTasksUnderCard(cardData.id, cardX, currentY);
            
            // Track max task height in this row
            const taskHeight = getCardTaskHeight(cardData.id);
            rowMaxTaskHeight = Math.max(rowMaxTaskHeight, taskHeight);
            
            // Move to next column or next row
            col++;
            if (col >= numCols) {
                col = 0;
                currentY -= CARD_SIZE + rowMaxTaskHeight + CARD_SPACING;
                rowMaxTaskHeight = 0;
            }
        });
    });
    
    requestRender();
}

function getCardTaskHeight(cardInstanceId) {
    const tasks = state.tasks.filter(t => t.hatInstanceId === cardInstanceId);
    // Tasks are arranged in single column
    return tasks.length * (MINI_TASK_HEIGHT + 0.15);
}

function getMaxContentDepth() {
    // Find the lowest Y position of any card + its tasks
    let maxDepth = 0;
    cardMeshes.forEach(mesh => {
        const taskHeight = getCardTaskHeight(mesh.userData.instanceId);
        const bottomY = mesh.position.y - CARD_SIZE / 2 - taskHeight;
        const depth = 20 - bottomY; // 20 is approximate top
        if (depth > maxDepth) maxDepth = depth;
    });
    return maxDepth;
}

function repositionTasksUnderCard(cardInstanceId, cardX, cardY) {
    const tasks = state.tasks.filter(t => t.hatInstanceId === cardInstanceId);
    const cardBottom = cardY - CARD_SIZE / 2 - 0.3;
    
    // Arrange in single column
    tasks.forEach((task, idx) => {
        const mesh = taskMeshes.get(task.id);
        if (mesh) {
            const yOffset = idx * (MINI_TASK_HEIGHT + 0.15);
            
            mesh.position.x = cardX;
            mesh.position.y = cardBottom - yOffset - MINI_TASK_HEIGHT / 2;
            mesh.position.z = 0.1;
        }
    });
}

// ============================================================================
// POINTER EVENTS
// ============================================================================
function onPointerDown(event) {
    event.preventDefault();
    updateMousePosition(event);
    pointerDownPos.set(event.clientX, event.clientY);
    hasDragged = false;
    
    raycaster.setFromCamera(mouse, camera);
    
    // First check for remove button clicks (these are inside cards/swimlanes/tasks)
    // Only check the FIRST (closest) hit to respect occlusion
    const allObjects = [
        ...Array.from(cardMeshes.values()),
        ...Array.from(swimlaneMeshes.values()),
        ...Array.from(taskMeshes.values())
    ];
    const btnIntersects = raycaster.intersectObjects(allObjects, true);
    
    if (btnIntersects.length > 0) {
        const firstHit = btnIntersects[0];
        if (firstHit.object.userData.type === 'removeCardBtn' ||
            firstHit.object.userData.type === 'removePersonBtn' ||
            firstHit.object.userData.type === 'removeTaskBtn') {
            // Will handle on pointer up
            return;
        }
    }
    
    // Check cards and tasks for dragging (allow ALL tasks to be dragged, including minimized ones)
    const pickables = [
        ...Array.from(cardMeshes.values()),
        ...Array.from(taskMeshes.values())
    ];
    
    const intersects = raycaster.intersectObjects(pickables, true);
    
    if (intersects.length > 0) {
        let target = intersects[0].object;
        while (target.parent && !target.userData.type) {
            target = target.parent;
        }
        
        if (target.userData.type === 'card' || target.userData.type === 'task') {
            selectedObject = target;
            isDragging = true;
            
            raycaster.ray.intersectPlane(dragPlane, intersection);
            dragOffset.copy(intersection).sub(selectedObject.position);
            
            selectedObject.position.z = 5;
            container.style.cursor = 'grabbing';
        }
    }
}

function onPointerMove(event) {
    updateMousePosition(event);
    
    const dx = event.clientX - pointerDownPos.x;
    const dy = event.clientY - pointerDownPos.y;
    if (Math.sqrt(dx * dx + dy * dy) > 5) {
        hasDragged = true;
    }
    
    if (isDragging && selectedObject) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(dragPlane, intersection);
        
        selectedObject.position.x = intersection.x - dragOffset.x;
        selectedObject.position.y = intersection.y - dragOffset.y;
        
        // If dragging a card, move its tasks too (single column)
        if (selectedObject.userData.type === 'card') {
            const tasks = state.tasks.filter(t => t.hatInstanceId === selectedObject.userData.instanceId);
            const cardBottom = selectedObject.position.y - CARD_SIZE / 2 - 0.3;
            tasks.forEach((task, idx) => {
                const mesh = taskMeshes.get(task.id);
                if (mesh) {
                    const yOffset = idx * (MINI_TASK_HEIGHT + 0.15);
                    mesh.position.x = selectedObject.position.x;
                    mesh.position.y = cardBottom - yOffset - MINI_TASK_HEIGHT / 2;
                    mesh.position.z = 5.1;
                }
            });
        }
        requestRender();
    } else {
        // Hover
        raycaster.setFromCamera(mouse, camera);
        
        // Check for clickable headers (person headers for person view)
        const swimlaneObjects = Array.from(swimlaneMeshes.values());
        const headerIntersects = raycaster.intersectObjects(swimlaneObjects, true);
        let clickableHeader = null;
        for (const hit of headerIntersects) {
            if (hit.object.userData.type === 'personHeader') {
                clickableHeader = hit.object;
                break;
            }
        }
        
        const pickables = [...Array.from(cardMeshes.values()), ...Array.from(taskMeshes.values())];
        const intersects = raycaster.intersectObjects(pickables, true);
        
        let newHovered = null;
        if (intersects.length > 0) {
            let target = intersects[0].object;
            while (target.parent && !target.userData.type) target = target.parent;
            if (target.userData.type) newHovered = target;
        }
        
        if (newHovered !== hoveredObject) {
            hoveredObject = newHovered;
        }
        
        // Set cursor based on what's hovered
        if (clickableHeader) {
            container.style.cursor = 'pointer';
        } else if (hoveredObject) {
            container.style.cursor = 'grab';
        } else {
            container.style.cursor = 'default';
        }
    }
}

function onPointerUp(event) {
    updateMousePosition(event);
            raycaster.setFromCamera(mouse, camera);
    
    // Check for remove button clicks first (if we didn't drag)
    if (!hasDragged && !isDragging) {
        const allObjects = [
            ...Array.from(cardMeshes.values()),
            ...Array.from(swimlaneMeshes.values()),
            ...Array.from(taskMeshes.values())
        ];
        const btnIntersects = raycaster.intersectObjects(allObjects, true);
        
        // Only act on the FIRST (closest) hit to respect occlusion
        if (btnIntersects.length > 0) {
            const firstHit = btnIntersects[0];
            if (firstHit.object.userData.type === 'removeCardBtn' && firstHit.object.visible) {
                removeCard(firstHit.object.userData.instanceId);
                return;
            }
            if (firstHit.object.userData.type === 'removePersonBtn') {
                removePerson(firstHit.object.userData.personId);
                return;
            }
            if (firstHit.object.userData.type === 'removeTaskBtn') {
                removeTask(firstHit.object.userData.taskId, true);
                return;
            }
            if (firstHit.object.userData.type === 'personHeader') {
                openPersonViewModal(firstHit.object.userData.personId);
                return;
            }
        }
    }
    
    if (isDragging && selectedObject) {
        if (selectedObject.userData.type === 'card') {
            // Find which swimlane we're over
            const worldX = selectedObject.position.x;
            const newPersonId = findSwimlaneForX(worldX);
            
            // Update card's personId
            const cardData = state.tableCards.find(c => c.id === selectedObject.userData.instanceId);
            if (cardData) {
                cardData.personId = newPersonId;
            }
            selectedObject.userData.personId = newPersonId;
            
            // Snap card to swimlane
            repositionAllCards();
            
            // Open modal if click (not drag)
            if (!hasDragged) {
                openHatDetailModal(selectedObject.userData.instanceId);
            }
        } else if (selectedObject.userData.type === 'task') {
            // Check if dropped on a card (works for both loose and attached tasks)
            const cardMeshArray = Array.from(cardMeshes.values());
            const intersects = raycaster.intersectObjects(cardMeshArray, true);
            
            const task = state.tasks.find(t => t.id === selectedObject.userData.taskId);
            const oldCardId = task?.hatInstanceId;
            
            if (intersects.length > 0) {
                let target = intersects[0].object;
                while (target.parent && !target.userData.type) target = target.parent;
                
                if (target.userData.type === 'card' && task) {
                    const newCardId = target.userData.instanceId;
                    
                    // Only process if dropping on a different card
                    if (newCardId !== oldCardId) {
                        task.hatInstanceId = newCardId;
                        
                        // Replace with minimized version
                        scene.remove(selectedObject);
                        const miniMesh = createTaskMesh(task, true);
                        scene.add(miniMesh);
                        taskMeshes.set(task.id, miniMesh);
                        
                        // Update both old and new card textures
                        if (oldCardId) {
                            const oldCard = cardMeshes.get(oldCardId);
                            if (oldCard) updateCardTexture(oldCard);
                        }
                        updateCardTexture(target);
                        
                        // Reposition
                        repositionAllCards();
                    }
                }
            } else if (oldCardId && hasDragged) {
                // Dropped outside any card - detach from current hat
                task.hatInstanceId = null;
                
                // Replace with full-size version
                scene.remove(selectedObject);
                const fullMesh = createTaskMesh(task, false);
                fullMesh.position.copy(selectedObject.position);
                fullMesh.position.z = 0.1;
                scene.add(fullMesh);
                taskMeshes.set(task.id, fullMesh);
                
                // Update old card texture
                const oldCard = cardMeshes.get(oldCardId);
                if (oldCard) updateCardTexture(oldCard);
                
                repositionAllCards();
            }
            
            if (selectedObject.parent === scene) {
                selectedObject.position.z = 0.1;
            }
        }
        
        saveState();
    }
    
    isDragging = false;
    selectedObject = null;
    container.style.cursor = hoveredObject ? 'grab' : 'default';
}

function onDoubleClick(event) {
    updateMousePosition(event);
    raycaster.setFromCamera(mouse, camera);
    
    const pickables = [...Array.from(cardMeshes.values()), ...Array.from(taskMeshes.values())];
    const intersects = raycaster.intersectObjects(pickables, true);
    
    if (intersects.length > 0) {
        let target = intersects[0].object;
        while (target.parent && !target.userData.type) target = target.parent;
        
        if (target.userData.type === 'card') {
            removeCard(target.userData.instanceId);
        } else if (target.userData.type === 'task') {
            removeTask(target.userData.taskId);
        }
    }
}

function updateMousePosition(event) {
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

// ============================================================================
// OBJECT MANAGEMENT
// ============================================================================
function addCardToTable(hat) {
    if (state.tableCards.some(c => c.hatId === hat.id)) return;
    
    const instanceId = state.nextId++;
    const mesh = createCardMesh(hat, instanceId);
    scene.add(mesh);
    cardMeshes.set(instanceId, mesh);
    
    state.tableCards.push({ id: instanceId, hatId: hat.id, personId: null });
    
    repositionAllCards();
    updateHatLibraryUI();
    saveState();
}

function removeCard(instanceId) {
    const mesh = cardMeshes.get(instanceId);
    if (!mesh) return;
    
    const cardX = mesh.position.x;
    const cardY = mesh.position.y;
    
    scene.remove(mesh);
    cardMeshes.delete(instanceId);
    
    state.tableCards = state.tableCards.filter(c => c.id !== instanceId);
    
    // Detach tasks and place them back on the board (to the left of swimlanes)
    state.tasks.forEach(task => {
        if (task.hatInstanceId === instanceId) {
            task.hatInstanceId = null;
            const taskMesh = taskMeshes.get(task.id);
            if (taskMesh) {
                scene.remove(taskMesh);
            }
            // Create new full-size task mesh to the left of swimlanes
            const newMesh = createTaskMesh(task, false);
            const totalWidth = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
            const xPos = -totalWidth / 2 - 5 - Math.random() * 10;
            const yPos = 20 - Math.random() * 15;
            newMesh.position.set(xPos, yPos, 0.1);
            scene.add(newMesh);
            taskMeshes.set(task.id, newMesh);
        }
    });
    
    repositionAllCards();
    updateHatLibraryUI();
                saveState();
            }

function addPerson(name, color) {
    const person = { id: state.nextId++, name, color };
    state.people.push(person);
    rebuildSwimlanes();
                saveState();
            }

function removePerson(personId) {
    // Move cards to unassigned
    state.tableCards.forEach(card => {
        if (card.personId === personId) card.personId = null;
    });
    
    state.people = state.people.filter(p => p.id !== personId);
    rebuildSwimlanes();
                saveState();
}

function addTask(text) {
    const task = {
        id: state.nextId++,
        text,
        hatInstanceId: null,
        colorIndex: Math.floor(Math.random() * TASK_COLORS.length)
    };
    state.tasks.push(task);
    
    // Place new tasks to the LEFT of the unassigned swimlane
    const totalWidth = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
    const leftEdge = -totalWidth / 2 - 5;
    
    const mesh = createTaskMesh(task, false);
    mesh.position.set(
        leftEdge - Math.random() * 10,
        15 - Math.random() * 25,
        0.1
    );
    scene.add(mesh);
    taskMeshes.set(task.id, mesh);
    
    saveState();
    return task;
}

function removeTask(taskId, deleteCompletely = true) {
    const mesh = taskMeshes.get(taskId);
    const task = state.tasks.find(t => t.id === taskId);
    
    if (!task) return;
    
    const wasAttached = task.hatInstanceId !== null;
    const oldCardId = task.hatInstanceId;
    
    // Remove the old mesh
    if (mesh) {
        scene.remove(mesh);
        taskMeshes.delete(taskId);
    }
    
    if (deleteCompletely) {
        // Fully delete the task
        state.tasks = state.tasks.filter(t => t.id !== taskId);
    } else {
        // Detach from hat and put back on board as loose task
        task.hatInstanceId = null;
        
        // Place task to the LEFT of all swimlanes
        const totalWidth = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
        const leftEdge = -totalWidth / 2 - 5;
        
        const newMesh = createTaskMesh(task, false);
        newMesh.position.set(
            leftEdge - Math.random() * 10,
            10 - Math.random() * 30,
            0.1
        );
        scene.add(newMesh);
        taskMeshes.set(task.id, newMesh);
    }
    
    // Update the card texture if it was attached
    if (wasAttached && oldCardId) {
        const cardMesh = cardMeshes.get(oldCardId);
        if (cardMesh) {
            updateCardTexture(cardMesh);
        }
    }
    
    repositionAllCards();
    saveState();
}

// Detach a task from a hat (puts it back on the board)
function detachTask(taskId) {
    removeTask(taskId, false);
}

// ============================================================================
// MODALS
// ============================================================================
function openHatDetailModal(cardInstanceId) {
    const mesh = cardMeshes.get(cardInstanceId);
    if (!mesh) return;
    
    const hat = state.hats.find(h => h.id === mesh.userData.hatId);
    if (!hat) return;
    
    currentDetailCardId = cardInstanceId;
    
    // Update the hat icon with the actual emoji
    document.querySelector('#hatDetailModal .hat-icon').textContent = hat.emoji || '🎩';
    document.getElementById('hatDetailTitle').textContent = hat.name;
    document.getElementById('hatDetailDesc').textContent = hat.description;
    
    const card = state.tableCards.find(c => c.id === cardInstanceId);
    const person = card?.personId ? state.people.find(p => p.id === card.personId) : null;
    document.getElementById('hatDetailPerson').textContent = person ? `Assigned to: ${person.name}` : 'Unassigned';
    
    updateHatTasksList();
    openModal('hatDetailModal');
}

function updateHatTasksList() {
    if (!currentDetailCardId) return;
    
    const tasks = state.tasks.filter(t => t.hatInstanceId === currentDetailCardId);
    const listEl = document.getElementById('hatTasksList');
    document.getElementById('taskCountBadge').textContent = tasks.length;
    
    if (tasks.length === 0) {
        listEl.innerHTML = '<p class="no-tasks">No tasks assigned</p>';
                return;
            }
    
    listEl.innerHTML = '';
    tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'hat-task-item';
        item.innerHTML = `
            <span>${task.text}</span>
            <button class="hat-task-delete" data-id="${task.id}">&times;</button>
        `;
        listEl.appendChild(item);
    });
    
    listEl.querySelectorAll('.hat-task-delete').forEach(btn => {
        btn.onclick = () => {
            detachTask(parseInt(btn.dataset.id)); // Detach, don't delete - puts back on board
            updateHatTasksList();
        };
    });
}

function openPersonViewModal(personId) {
    const person = state.people.find(p => p.id === personId);
    if (!person) return;
    
    // Calculate totals
    const assignedCards = state.tableCards.filter(c => c.personId === personId);
    const totalHats = assignedCards.length;
    const totalTasks = state.tasks.filter(t => 
        assignedCards.some(c => c.id === t.hatInstanceId)
    ).length;
    
    document.getElementById('personViewName').textContent = person.name;
    document.getElementById('personViewStats').textContent = `${totalHats} hat${totalHats !== 1 ? 's' : ''}, ${totalTasks} task${totalTasks !== 1 ? 's' : ''}`;
    const contentEl = document.getElementById('personViewContent');
    
    if (assignedCards.length === 0) {
        contentEl.innerHTML = '<p class="person-no-hats">No hats assigned to this person</p>';
    } else {
        contentEl.innerHTML = '';
        assignedCards.forEach(card => {
            const hat = state.hats.find(h => h.id === card.hatId);
            if (!hat) return;
            
            const section = document.createElement('div');
            section.className = 'person-hat-section';
            
            const tasks = state.tasks.filter(t => t.hatInstanceId === card.id);
            
            let tasksHtml = '';
            if (tasks.length > 0) {
                tasksHtml = `<div class="person-hat-tasks">
                    ${tasks.map(t => `<div class="task-item">${t.text}</div>`).join('')}
                </div>`;
            } else {
                tasksHtml = '<div class="person-hat-tasks"><em style="color: #8b5a2b; font-size: 0.85rem;">No tasks assigned</em></div>';
            }
            
            section.innerHTML = `
                <h4><span class="hat-emoji">${hat.emoji || '🎩'}</span>${hat.name}</h4>
                ${tasksHtml}
            `;
            contentEl.appendChild(section);
        });
    }
    
    openModal('personViewModal');
}

function openSearchModal() {
    openModal('searchModal');
    const input = document.getElementById('globalSearchInput');
    input.value = '';
    input.focus();
    updateSearchResults('');
    
    // Set up input listener
    input.oninput = () => updateSearchResults(input.value);
}

function updateSearchResults(query) {
    const resultsEl = document.getElementById('searchResults');
    const q = query.toLowerCase().trim();
    
    if (!q) {
        resultsEl.innerHTML = `
            <div class="shortcut-hints">
                <div class="shortcut-hint"><kbd>N</kbd> New task</div>
                <div class="shortcut-hint"><kbd>P</kbd> New person</div>
                <div class="shortcut-hint"><kbd>H</kbd> New hat</div>
                <div class="shortcut-hint"><kbd>Esc</kbd> Close</div>
                <div class="shortcut-hint"><kbd>⌘Z</kbd> Undo</div>
                <div class="shortcut-hint"><kbd>↑↓←→</kbd> Pan</div>
            </div>
        `;
        return;
    }
    
    const results = { hats: [], tasks: [], people: [] };
    
    // Search hats (both in library and on table)
    state.hats.forEach(hat => {
        if (hat.name.toLowerCase().includes(q) || hat.description.toLowerCase().includes(q)) {
            const onTable = state.tableCards.find(c => c.hatId === hat.id);
            results.hats.push({ ...hat, onTable: !!onTable, cardId: onTable?.id });
        }
    });
    
    // Search tasks
    state.tasks.forEach(task => {
        if (task.text.toLowerCase().includes(q)) {
            const card = task.hatInstanceId ? state.tableCards.find(c => c.id === task.hatInstanceId) : null;
            const hat = card ? state.hats.find(h => h.id === card.hatId) : null;
            results.tasks.push({ ...task, hatName: hat?.name || 'Unassigned' });
        }
    });
    
    // Search people
    state.people.forEach(person => {
        if (person.name.toLowerCase().includes(q)) {
            const hatCount = state.tableCards.filter(c => c.personId === person.id).length;
            results.people.push({ ...person, hatCount });
        }
    });
    
    // Render results
    let html = '';
    
    if (results.hats.length > 0) {
        html += `<div class="search-result-group"><h4>Hats (${results.hats.length})</h4>`;
        results.hats.forEach(hat => {
            html += `<div class="search-result-item" data-type="hat" data-id="${hat.id}" data-card-id="${hat.cardId || ''}">
                <span class="result-emoji">${hat.emoji || '🎩'}</span>
                <span class="result-text">${hat.name}</span>
                <span class="result-meta">${hat.onTable ? 'On table' : 'In library'}</span>
            </div>`;
        });
        html += '</div>';
    }
    
    if (results.tasks.length > 0) {
        html += `<div class="search-result-group"><h4>Tasks (${results.tasks.length})</h4>`;
        results.tasks.forEach(task => {
            html += `<div class="search-result-item" data-type="task" data-id="${task.id}">
                <span class="result-emoji">📝</span>
                <span class="result-text">${task.text.substring(0, 50)}${task.text.length > 50 ? '...' : ''}</span>
                <span class="result-meta">${task.hatName}</span>
            </div>`;
        });
        html += '</div>';
    }
    
    if (results.people.length > 0) {
        html += `<div class="search-result-group"><h4>People (${results.people.length})</h4>`;
        results.people.forEach(person => {
            html += `<div class="search-result-item" data-type="person" data-id="${person.id}">
                <span class="result-emoji">👤</span>
                <span class="result-text">${person.name}</span>
                <span class="result-meta">${person.hatCount} hat${person.hatCount !== 1 ? 's' : ''}</span>
            </div>`;
        });
        html += '</div>';
    }
    
    if (!html) {
        html = '<p class="no-results">No results found</p>';
    }
    
    resultsEl.innerHTML = html;
    
    // Add click handlers
    resultsEl.querySelectorAll('.search-result-item').forEach(item => {
        item.onclick = () => handleSearchResultClick(item);
    });
}

function handleSearchResultClick(item) {
    const type = item.dataset.type;
    const id = parseInt(item.dataset.id);
    
    closeAllModals();
    
    if (type === 'hat') {
        const cardId = item.dataset.cardId;
        if (cardId) {
            // Hat is on table - scroll to it and open detail
            const mesh = cardMeshes.get(parseInt(cardId));
            if (mesh) {
                scrollX = mesh.position.x;
                scrollY = mesh.position.y;
                camera.position.x = scrollX;
                camera.position.y = scrollY;
                camera.lookAt(scrollX, scrollY, 0);
                requestRender();
                setTimeout(() => openHatDetailModal(parseInt(cardId)), 100);
            }
        } else {
            // Hat is in library - add it to table
            const hat = state.hats.find(h => h.id === id);
            if (hat) addCardToTable(hat);
        }
    } else if (type === 'task') {
        // Open all tasks modal with this task visible
        openAllTasksModal();
    } else if (type === 'person') {
        openPersonViewModal(id);
    }
}

function openAllTasksModal() {
    const grid = document.getElementById('allTasksGrid');
    const noTasks = document.getElementById('noTasksMessage');
    document.getElementById('allTasksCount').textContent = state.tasks.length;
    
    if (state.tasks.length === 0) {
        grid.style.display = 'none';
        noTasks.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noTasks.style.display = 'none';
        
        grid.innerHTML = '';
        state.tasks.forEach(task => {
            let hatName = 'Unassigned';
            let hatEmoji = '';
            let hatClass = 'unassigned';
            
            if (task.hatInstanceId) {
                const card = state.tableCards.find(c => c.id === task.hatInstanceId);
                    if (card) {
                    const hat = state.hats.find(h => h.id === card.hatId);
                    if (hat) { 
                        hatName = hat.name; 
                        hatEmoji = hat.emoji || '🎩';
                        hatClass = ''; 
                    }
                }
            }
            
            const item = document.createElement('div');
            item.className = 'task-grid-item';
            item.innerHTML = `
                <div class="task-text">${task.text}</div>
                <div class="task-meta">
                    <span class="task-hat ${hatClass}">${hatEmoji ? hatEmoji + ' ' : ''}${hatName}</span>
                    <button class="task-delete-btn" data-task-id="${task.id}">&times;</button>
                </div>
            `;
            grid.appendChild(item);
        });
        
        // Add delete handlers
        grid.querySelectorAll('.task-delete-btn').forEach(btn => {
            btn.onclick = () => {
                const taskId = parseInt(btn.dataset.taskId);
                removeTask(taskId, true); // Fully delete
                openAllTasksModal(); // Refresh the modal
            };
        });
    }
    
    openModal('allTasksModal');
}

// ============================================================================
// STATE PERSISTENCE
// ============================================================================
function saveState() {
    // Push current state to undo stack before saving
    const stateSnapshot = JSON.stringify({
        hats: state.hats,
        people: state.people,
        tasks: state.tasks,
        tableCards: state.tableCards,
        nextId: state.nextId
    });
    
    // Only push if different from last state
    if (undoStack.length === 0 || undoStack[undoStack.length - 1] !== stateSnapshot) {
        undoStack.push(stateSnapshot);
        if (undoStack.length > MAX_UNDO_STEPS) {
            undoStack.shift();
        }
    }
    
    localStorage.setItem('hatsAppState', stateSnapshot);
}

function undo() {
    if (undoStack.length < 2) {
        console.log('Nothing to undo');
        return;
    }
    
    // Remove current state
    undoStack.pop();
    
    // Restore previous state
    const previousState = undoStack[undoStack.length - 1];
    
    try {
        const data = JSON.parse(previousState);
        state.hats = data.hats;
        state.people = data.people;
        state.tasks = data.tasks;
        state.tableCards = data.tableCards;
        state.nextId = data.nextId;
        
        // Clear and rebuild all meshes
        cardMeshes.forEach(mesh => scene.remove(mesh));
        cardMeshes.clear();
        taskMeshes.forEach(mesh => scene.remove(mesh));
        taskMeshes.clear();
        
        rebuildSwimlanes();
        
        // Recreate cards
        state.tableCards.forEach(cardData => {
            const hat = state.hats.find(h => h.id === cardData.hatId);
            if (hat) {
                const mesh = createCardMesh(hat, cardData.id);
                mesh.userData.personId = cardData.personId;
                scene.add(mesh);
                cardMeshes.set(cardData.id, mesh);
            }
        });
        
        // Recreate tasks
        state.tasks.forEach(task => {
            const minimized = task.hatInstanceId !== null;
            const mesh = createTaskMesh(task, minimized);
            scene.add(mesh);
            taskMeshes.set(task.id, mesh);
        });
        
        repositionAllCards();
        updateHatLibraryUI();
        
        // Save to localStorage without adding to undo stack
        localStorage.setItem('hatsAppState', previousState);
        
        console.log('Undo successful');
    } catch (e) {
        console.error('Undo failed:', e);
    }
}

function loadState() {
    const saved = localStorage.getItem('hatsAppState');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            // Merge saved hats with DEFAULT_HATS to ensure emojis are present
            const savedHats = data.hats || [];
            state.hats = DEFAULT_HATS.map(defaultHat => {
                const savedHat = savedHats.find(h => h.id === defaultHat.id);
                return savedHat ? { ...defaultHat, ...savedHat, emoji: defaultHat.emoji } : defaultHat;
            });
            // Add any custom hats that aren't in defaults
            savedHats.forEach(savedHat => {
                if (!DEFAULT_HATS.find(h => h.id === savedHat.id)) {
                    state.hats.push({ ...savedHat, emoji: savedHat.emoji || '🎩' });
                }
            });
            state.people = data.people || [];
            state.tasks = data.tasks || [];
            state.tableCards = data.tableCards || [];
            state.nextId = data.nextId || 1000;
        } catch (e) {
            console.error('Failed to load state:', e);
        }
    }
    
    // Build swimlanes
    rebuildSwimlanes();
    
    // Create card meshes
    state.tableCards.forEach(cardData => {
        const hat = state.hats.find(h => h.id === cardData.hatId);
        if (hat) {
            const mesh = createCardMesh(hat, cardData.id);
            mesh.userData.personId = cardData.personId;
                        scene.add(mesh);
            cardMeshes.set(cardData.id, mesh);
        }
    });
    
    // Create task meshes
    state.tasks.forEach(task => {
        const isAttached = task.hatInstanceId !== null;
        const mesh = createTaskMesh(task, isAttached);
        if (!isAttached) {
            mesh.position.set(task.x || (Math.random() - 0.5) * 20, task.y || (Math.random() - 0.5) * 15, 0.1);
        }
        scene.add(mesh);
        taskMeshes.set(task.id, mesh);
    });
    
    repositionAllCards();
    updateHatLibraryUI();
}

function exportData() {
    saveState();
    const blob = new Blob([localStorage.getItem('hatsAppState')], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `57-hats-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            clearTable();
            localStorage.setItem('hatsAppState', e.target.result);
            location.reload();
        } catch (err) {
            alert('Import failed: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function clearTable() {
    cardMeshes.forEach(m => scene.remove(m));
    taskMeshes.forEach(m => scene.remove(m));
    swimlaneMeshes.forEach(m => scene.remove(m));
    
    cardMeshes.clear();
    taskMeshes.clear();
    swimlaneMeshes.clear();
    
    state.tableCards = [];
    state.tasks = [];
    state.people = [];
    
    rebuildSwimlanes();
    updateHatLibraryUI();
    saveState();
}

// ============================================================================
// UI
// ============================================================================
function updateHatLibraryUI() {
    const container = document.getElementById('hatLibrary');
    const searchInput = document.getElementById('hatSearch');
    if (!container) return;
    
    const search = searchInput?.value.toLowerCase() || '';
    const filtered = state.hats.filter(h => 
        h.name.toLowerCase().includes(search) || h.description.toLowerCase().includes(search)
    );
    
    const inPlay = new Set(state.tableCards.map(c => c.hatId));
    
    document.getElementById('hatCount').textContent = filtered.length;
    container.innerHTML = '';
    
    filtered.forEach(hat => {
        const div = document.createElement('div');
        div.className = 'hat-card-preview' + (inPlay.has(hat.id) ? ' in-play' : '');
        
        // Check if this is a custom hat (not in default 57)
        const isCustom = !DEFAULT_HATS.find(h => h.id === hat.id);
        
        div.innerHTML = `
            <span class="hat-emoji">${hat.emoji || '🎩'}</span>
            <h4>${hat.name}</h4>
            <p>${hat.description}</p>
            ${isCustom ? '<button class="delete-custom-hat" title="Delete custom hat">×</button>' : ''}
        `;
        
        if (!inPlay.has(hat.id)) {
            div.onclick = (e) => {
                // Don't add card if clicking delete button
                if (e.target.classList.contains('delete-custom-hat')) return;
                addCardToTable(hat);
            };
        }
        
        // Add delete handler for custom hats
        if (isCustom) {
            const deleteBtn = div.querySelector('.delete-custom-hat');
            if (deleteBtn) {
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    deleteCustomHat(hat.id);
                };
            }
        }
        
        container.appendChild(div);
    });
}

function deleteCustomHat(hatId) {
    // Remove from table if in play
    const cardData = state.tableCards.find(c => c.hatId === hatId);
    if (cardData) {
        removeCard(cardData.id);
    }
    
    // Remove from hats list
    state.hats = state.hats.filter(h => h.id !== hatId);
    
    updateHatLibraryUI();
    saveState();
}

// ============================================================================
// ANIMATION
// ============================================================================
function animate() {
    requestAnimationFrame(animate);
    
    // Only do work if something needs updating
    const hasHover = hoveredObject !== null;
    const hoverChanged = hoveredObject !== lastHoveredObject;
    
    if (hoverChanged) {
        lastHoveredObject = hoveredObject;
        needsRender = true;
    }
    
    // Only animate cards if hovering or dragging
    if (hasHover || isDragging || needsRender) {
        const time = clock.getElapsedTime();
        let animating = false;
        
        cardMeshes.forEach(mesh => {
            if (mesh === hoveredObject && !isDragging) {
                const phase = mesh.userData.hoverPhase;
                mesh.rotation.z = Math.sin(time * 3 + phase) * 0.03;
                mesh.scale.lerp(new THREE.Vector3(1.03, 1.03, 1), 0.15);
                if (mesh !== selectedObject) {
                    mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, 1, 0.15);
                }
                animating = true;
            } else if (mesh !== selectedObject) {
                // Only lerp if not already at target
                if (Math.abs(mesh.rotation.z) > 0.001 || 
                    Math.abs(mesh.scale.x - 1) > 0.001 ||
                    Math.abs(mesh.position.z) > 0.001) {
                    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, 0, 0.1);
                    mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
                    mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, 0, 0.1);
                    animating = true;
                }
            }
        });
        
        renderer.render(scene, camera);
        
        // Keep rendering if still animating
        if (!animating && !isDragging && !hasHover) {
            needsRender = false;
        }
    }
}

// Helper to trigger a render
function requestRender() {
    needsRender = true;
}

function onWheel(event) {
    event.preventDefault();
    
    // Check for pinch-to-zoom (ctrlKey is set during pinch on trackpad)
    if (event.ctrlKey) {
        // Get mouse position in normalized device coordinates
        const rect = container.getBoundingClientRect();
        const mouseNDC = {
            x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
            y: -((event.clientY - rect.top) / rect.height) * 2 + 1
        };
        
        // Calculate world position under mouse before zoom
        const aspect = container.clientWidth / container.clientHeight;
        const sizeBefore = 60 / zoomLevel;
        const worldXBefore = scrollX + mouseNDC.x * (sizeBefore * aspect / 2);
        const worldYBefore = scrollY + mouseNDC.y * (sizeBefore / 2);
        
        // Apply zoom
        const zoomDelta = -event.deltaY * 0.01;
        const oldZoom = zoomLevel;
        zoomLevel = Math.max(0.5, Math.min(3, zoomLevel + zoomDelta));
        
        // Calculate where that world point would be after zoom
        const sizeAfter = 60 / zoomLevel;
        
        // Adjust scroll to keep the same world point under mouse
        scrollX = worldXBefore - mouseNDC.x * (sizeAfter * aspect / 2);
        scrollY = worldYBefore - mouseNDC.y * (sizeAfter / 2);
        
        // Update camera position and frustum
        camera.position.x = scrollX;
        camera.position.y = scrollY;
        camera.lookAt(scrollX, scrollY, 0);
        updateCameraZoom();
        return;
    }
    
    // deltaX for horizontal scroll (trackpad or shift+wheel), deltaY for vertical
    const dx = event.deltaX || (event.shiftKey ? event.deltaY : 0);
    const dy = event.shiftKey ? 0 : event.deltaY;
    
    // Faster scrolling
    scrollX += dx * 0.15;
    scrollY -= dy * 0.15;
    
    // Clamp scroll values - when zoomed IN (higher zoomLevel), frustum is smaller so need MORE scroll range
    const totalWidth = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
    const visibleWidth = (60 / zoomLevel) * (container.clientWidth / container.clientHeight);
    const maxScrollX = Math.max(0, totalWidth / 2 + 10);
    scrollX = Math.max(-maxScrollX, Math.min(maxScrollX, scrollX));
    
    // Vertical: calculate based on content depth
    const maxDepth = getMaxContentDepth();
    const visibleHeight = 60 / zoomLevel;
    const maxScrollDown = Math.max(40, maxDepth + 20);
    scrollY = Math.max(-maxScrollDown, Math.min(30, scrollY));
    
    // Update camera position
    camera.position.x = scrollX;
    camera.position.y = scrollY;
    camera.lookAt(scrollX, scrollY, 0);
    requestRender();
}

function updateCameraZoom() {
    const aspect = container.clientWidth / container.clientHeight;
    // Higher zoomLevel = zoomed in = smaller frustum
    const size = 60 / zoomLevel;
    
    camera.left = -size * aspect / 2;
    camera.right = size * aspect / 2;
    camera.top = size / 2;
    camera.bottom = -size / 2;
    camera.updateProjectionMatrix();
    requestRender();
}

function onWindowResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    updateCameraZoom();
    requestRender();
}

function onKeyDown(event) {
    // Don't trigger shortcuts when typing in an input
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        // But allow Escape to close modals
        if (event.key === 'Escape') {
            closeAllModals();
        }
        return;
    }
    
    // Undo: Cmd+Z or Ctrl+Z
    if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
        event.preventDefault();
        undo();
        return;
    }
    
    // Keyboard shortcuts
    switch (event.key) {
        case 'Escape':
            closeAllModals();
            break;
        case 'n':
        case 'N':
            openModal('taskModal');
            setTimeout(() => document.getElementById('taskInput')?.focus(), 100);
            break;
        case 'p':
        case 'P':
            openModal('personModal');
            setTimeout(() => document.getElementById('personNameInput')?.focus(), 100);
            break;
        case 'h':
        case 'H':
            openModal('cardModal');
            setTimeout(() => document.getElementById('cardNameInput')?.focus(), 100);
            break;
        case '/':
            event.preventDefault();
            openSearchModal();
            break;
        case 'ArrowUp':
            scrollY += 5;
            scrollY = Math.min(scrollY, 30);
            camera.position.y = scrollY;
            camera.lookAt(scrollX, scrollY, 0);
            requestRender();
            break;
        case 'ArrowDown':
            scrollY -= 5;
            const maxDepth = getMaxContentDepth();
            scrollY = Math.max(scrollY, -maxDepth - 20);
            camera.position.y = scrollY;
            camera.lookAt(scrollX, scrollY, 0);
            requestRender();
            break;
        case 'ArrowLeft':
            scrollX -= 5;
            const totalWidthL = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
            scrollX = Math.max(scrollX, -totalWidthL / 2 - 10);
            camera.position.x = scrollX;
            camera.lookAt(scrollX, scrollY, 0);
            requestRender();
            break;
        case 'ArrowRight':
            scrollX += 5;
            const totalWidthR = UNASSIGNED_WIDTH + state.people.length * SWIMLANE_WIDTH;
            scrollX = Math.min(scrollX, totalWidthR / 2 + 10);
            camera.position.x = scrollX;
            camera.lookAt(scrollX, scrollY, 0);
            requestRender();
            break;
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
    });
}

// ============================================================================
// MODAL HANDLING
// ============================================================================
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('active');
    
    // Auto-focus the first text input or textarea
    setTimeout(() => {
        const input = modal.querySelector('input[type="text"], textarea');
        if (input) {
            input.focus();
            input.select();
        }
    }, 50);
}

function closeModal(modal) {
    modal.classList.remove('active');
    if (modal.id === 'hatDetailModal') currentDetailCardId = null;
}

function setupModals() {
    document.querySelectorAll('.modal-backdrop').forEach(b => {
        b.onclick = () => closeModal(b.closest('.modal'));
    });
    document.querySelectorAll('.modal-close').forEach(b => {
        b.onclick = () => closeModal(b.closest('.modal'));
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(closeModal);
        }
    });
    
    let selectedColor = '#1abc9c';
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.color-option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedColor = btn.dataset.color;
        };
    });
    
    document.getElementById('addPersonBtn')?.addEventListener('click', () => openModal('personModal'));
    document.getElementById('createPersonBtn')?.addEventListener('click', () => {
        const name = document.getElementById('personNameInput').value.trim();
        if (name) {
            addPerson(name, selectedColor);
            closeModal(document.getElementById('personModal'));
            document.getElementById('personNameInput').value = '';
        }
    });
    
    document.getElementById('addTaskBtn')?.addEventListener('click', () => openModal('taskModal'));
    document.getElementById('createTaskBtn')?.addEventListener('click', () => {
        const text = document.getElementById('taskInput').value.trim();
        if (text) {
            addTask(text);
            closeModal(document.getElementById('taskModal'));
            document.getElementById('taskInput').value = '';
        }
    });
    
    document.getElementById('addCardBtn')?.addEventListener('click', () => openModal('cardModal'));
    document.getElementById('createCardBtn')?.addEventListener('click', () => {
        const name = document.getElementById('cardNameInput').value.trim();
        if (name) {
            const desc = document.getElementById('cardDescInput').value.trim() || 'A custom role';
            state.hats.push({ id: state.nextId++, name, description: desc });
            updateHatLibraryUI();
            saveState();
            closeModal(document.getElementById('cardModal'));
            document.getElementById('cardNameInput').value = '';
            document.getElementById('cardDescInput').value = '';
        }
    });
    
    document.getElementById('allTasksBtn')?.addEventListener('click', openAllTasksModal);
    
    // Inline task add in All Tasks view
    document.getElementById('addTaskFromViewBtn')?.addEventListener('click', () => {
        document.getElementById('inlineTaskForm').style.display = 'flex';
        document.getElementById('inlineTaskInput').focus();
    });
    document.getElementById('inlineTaskSubmit')?.addEventListener('click', () => {
        const text = document.getElementById('inlineTaskInput').value.trim();
        if (text) {
            addTask(text);
            document.getElementById('inlineTaskInput').value = '';
            openAllTasksModal(); // Refresh
        }
    });
    document.getElementById('inlineTaskCancel')?.addEventListener('click', () => {
        document.getElementById('inlineTaskForm').style.display = 'none';
        document.getElementById('inlineTaskInput').value = '';
    });
    
    // Enter keys for all modal inputs
    document.getElementById('personNameInput')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('createPersonBtn')?.click();
        }
    });
    document.getElementById('cardNameInput')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('createCardBtn')?.click();
        }
    });
    document.getElementById('taskInput')?.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            document.getElementById('createTaskBtn')?.click();
        }
    });
    document.getElementById('inlineTaskInput')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('inlineTaskSubmit')?.click();
        }
    });
    
    document.getElementById('clearBtn')?.addEventListener('click', () => openModal('confirmModal'));
    document.getElementById('confirmClearBtn')?.addEventListener('click', () => {
        clearTable();
        closeModal(document.getElementById('confirmModal'));
    });
    document.getElementById('cancelClearBtn')?.addEventListener('click', () => {
        closeModal(document.getElementById('confirmModal'));
    });
    
    document.getElementById('exportBtn')?.addEventListener('click', exportData);
    document.getElementById('importBtn')?.addEventListener('click', () => document.getElementById('importFile').click());
    document.getElementById('importFile')?.addEventListener('change', e => {
        if (e.target.files[0]) {
            importData(e.target.files[0]);
            e.target.value = '';
        }
    });
    
    document.getElementById('hatSearch')?.addEventListener('input', updateHatLibraryUI);
}

// ============================================================================
// INIT
// ============================================================================
function main() {
            init();
    setupModals();
        }

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}
