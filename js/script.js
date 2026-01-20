// Simple page navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Show corresponding page
            const pageId = link.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Update URL hash
            window.location.hash = pageId;
        });
    });

    // Handle initial page load with hash
    const handleHashChange = () => {
        const hash = window.location.hash.slice(1) || 'home';
        const targetLink = document.querySelector(`[data-page="${hash}"]`);

        if (targetLink) {
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Activate target
            targetLink.classList.add('active');
            const targetPage = document.getElementById(hash);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Handle initial load
    handleHashChange();

    // Add subtle parallax effect to paper texture
    let ticking = false;
    const paperTexture = document.querySelector('.paper-texture');

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                paperTexture.style.transform = `translateY(${scrolled * 0.3}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });

    // RGB Color Slider Demo Functionality
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const rgbVector = document.getElementById('rgbVector');
    const colorPreview = document.getElementById('colorPreview');
    const randomizeBtn = document.getElementById('randomizeBtn');

    function updateColor() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;

        // Update value displays
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;

        // Update RGB vector display
        rgbVector.textContent = `rgb(${r}, ${g}, ${b})`;

        // Update color preview box
        colorPreview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // Calculate relative luminance for text color contrast
        // Using WCAG formula
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Use white text on dark backgrounds, black text on light backgrounds
        rgbVector.style.color = luminance > 0.5 ? '#000000' : '#ffffff';

        // Redraw cube to show updated selected point
        if (window.drawCubeFunction) {
            window.drawCubeFunction();
        }
    }

    function randomizeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        updateColor();
    }

    // Add event listeners to all sliders
    if (redSlider && greenSlider && blueSlider) {
        redSlider.addEventListener('input', updateColor);
        greenSlider.addEventListener('input', updateColor);
        blueSlider.addEventListener('input', updateColor);

        // Add randomize button listener
        if (randomizeBtn) {
            randomizeBtn.addEventListener('click', randomizeColor);
        }

        // Initialize with random color on page load
        randomizeColor();
    }

    // 3D Wireframe Cube
    const canvas = document.getElementById('cubeCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        // Cube vertices (8 corners)
        const size = 140;
        const vertices = [
            [-size, -size, -size],
            [size, -size, -size],
            [size, size, -size],
            [-size, size, -size],
            [-size, -size, size],
            [size, -size, size],
            [size, size, size],
            [-size, size, size]
        ];

        // Cube edges (12 edges connecting vertices)
        const edges = [
            [0, 1], [1, 2], [2, 3], [3, 0], // Back face
            [4, 5], [5, 6], [6, 7], [7, 4], // Front face
            [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting edges
        ];

        // Rotation angles
        // Initial orientation: black (0,0,0) bottom left, white (255,255,255) upper right
        let angleX = 0.1;
        let angleY = 0.4;
        let isDragging = false;
        let lastMouseX = 0;
        let lastMouseY = 0;

        // Hover tracking
        let hoveredPoint = null;

        // Vertex density (n = additional vertices per edge)
        let vertexDensity = 0;
        const vertexDensitySlider = document.getElementById('vertexDensitySlider');
        const vertexDensityValue = document.getElementById('vertexDensityValue');

        // Convert 3D position to RGB color
        function positionToRGB(x, y, z) {
            // Map from [-size, size] to [0, 255]
            const r = Math.round(((x + size) / (2 * size)) * 255);
            const g = Math.round(((y + size) / (2 * size)) * 255);
            const b = Math.round(((z + size) / (2 * size)) * 255);
            return { r, g, b };
        }

        // Convert RGB color to 3D position
        function rgbToPosition(r, g, b) {
            // Map from [0, 255] to [-size, size]
            const x = ((r / 255) * 2 - 1) * size;
            const y = ((g / 255) * 2 - 1) * size;
            const z = ((b / 255) * 2 - 1) * size;
            return [x, y, z];
        }

        // Generate 3D grid of vertices filling the cube volume
        // For n additional vertices per edge: (n+2)³ total points
        function generateAllVertices(n) {
            const allVertices = [];
            const divisions = n + 2; // Number of points along each axis

            // Generate grid points throughout the cube volume
            for (let ix = 0; ix < divisions; ix++) {
                for (let iy = 0; iy < divisions; iy++) {
                    for (let iz = 0; iz < divisions; iz++) {
                        // Calculate position as fraction from -1 to 1 along each axis
                        const tx = (divisions === 1) ? 0 : (ix / (divisions - 1)) * 2 - 1;
                        const ty = (divisions === 1) ? 0 : (iy / (divisions - 1)) * 2 - 1;
                        const tz = (divisions === 1) ? 0 : (iz / (divisions - 1)) * 2 - 1;

                        // Scale by cube size
                        const vertex = [
                            tx * size,
                            ty * size,
                            tz * size
                        ];
                        allVertices.push(vertex);
                    }
                }
            }

            return allVertices;
        }

        // Rotation matrices
        function rotateX(point, angle) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            return [
                point[0],
                point[1] * cos - point[2] * sin,
                point[1] * sin + point[2] * cos
            ];
        }

        function rotateY(point, angle) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            return [
                point[0] * cos + point[2] * sin,
                point[1],
                -point[0] * sin + point[2] * cos
            ];
        }

        function rotateZ(point, angle) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            return [
                point[0] * cos - point[1] * sin,
                point[0] * sin + point[1] * cos,
                point[2]
            ];
        }

        // Apply rotation based on current orientation
        function applyRotation(point) {
            let p = rotateY(point, angleY);
            p = rotateX(p, angleX);
            return p;
        }

        // Project 3D to 2D
        function project(point) {
            const distance = 500;
            const z = point[2] + distance;
            const scale = distance / z;
            return [
                point[0] * scale + centerX,
                point[1] * scale + centerY
            ];
        }

        // Find point near mouse cursor
        function findPointNearMouse(mouseX, mouseY, points, threshold = 30) {
            for (let i = points.length - 1; i >= 0; i--) {
                const point = points[i];
                const dx = mouseX - point.x;
                const dy = mouseY - point.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance <= threshold) {
                    return point;
                }
            }
            return null;
        }

        // Store transformed points globally for interaction
        let transformedPoints = [];

        // Draw the cube
        function drawCube() {
            ctx.clearRect(0, 0, width, height);

            // Generate all vertices based on current density
            const allVertices = generateAllVertices(vertexDensity);

            // Transform all vertices and store with depth info
            const transformed = allVertices.map(vertex => {
                const rotated = applyRotation(vertex);
                const projected = project(rotated);
                return {
                    x: projected[0],
                    y: projected[1],
                    z: rotated[2], // Store z-depth for sorting
                    original: vertex
                };
            });

            // Store for interaction
            transformedPoints = transformed;

            // Sort by z-depth for proper rendering order
            // In our coordinate system after rotation: larger z = further away
            // Draw further points first (larger z), closer points last (smaller z) to appear on top
            transformed.sort((a, b) => b.z - a.z);

            // Transform the corner vertices for edge drawing
            const cornerTransformed = vertices.map(vertex => {
                const point = applyRotation(vertex);
                return project(point);
            });

            // Draw edges (between the 8 corner vertices)
            ctx.strokeStyle = '#cccccc';
            ctx.lineWidth = 2;
            ctx.beginPath();
            edges.forEach(edge => {
                const start = cornerTransformed[edge[0]];
                const end = cornerTransformed[edge[1]];
                ctx.moveTo(start[0], start[1]);
                ctx.lineTo(end[0], end[1]);
            });
            ctx.stroke();

            // Calculate base point size based on vertex density
            // Linear scale: n=0 -> radius=25, n=10 -> radius=10
            const baseRadius = 25 - (vertexDensity * 1.5);

            // Find min and max z for scaling
            const zValues = transformed.map(p => p.z);
            const minZ = Math.min(...zValues);
            const maxZ = Math.max(...zValues);
            const zRange = maxZ - minZ;

            // Get the selected point info for depth-aware rendering
            let selectedPoint = null;
            if (redSlider && greenSlider && blueSlider) {
                const selectedR = parseInt(redSlider.value);
                const selectedG = parseInt(greenSlider.value);
                const selectedB = parseInt(blueSlider.value);

                // Convert RGB to 3D position
                const selectedPosition = rgbToPosition(selectedR, selectedG, selectedB);

                // Transform and project the selected point
                const rotated = applyRotation(selectedPosition);
                const projected = project(rotated);

                selectedPoint = {
                    x: projected[0],
                    y: projected[1],
                    z: rotated[2],
                    r: selectedR,
                    g: selectedG,
                    b: selectedB
                };
            }

            // Draw all vertices as dots with RGB colors based on position
            // Vertices are already sorted by z-depth (furthest to closest)
            // Insert and draw the selected point at the correct depth
            let selectedPointDrawn = false;

            transformed.forEach(point => {
                // Check if we should draw the selected point before this point
                if (!selectedPointDrawn && selectedPoint && selectedPoint.z > point.z) {
                    // Draw the selected point (it's closer than current point)
                    const depthFactor = zRange > 0 ? (maxZ - selectedPoint.z) / zRange : 0.5;
                    const sizeMultiplier = 0.85 + (depthFactor * 0.3);
                    const selectedRadius = baseRadius * sizeMultiplier * 1.2;

                    // Draw outer glow
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.lineWidth = 6;
                    ctx.beginPath();
                    ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius + 8, 0, Math.PI * 2);
                    ctx.stroke();

                    // Draw middle ring
                    ctx.strokeStyle = 'rgba(107, 143, 163, 0.9)';
                    ctx.lineWidth = 4;
                    ctx.beginPath();
                    ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius + 4, 0, Math.PI * 2);
                    ctx.stroke();

                    // Draw the point itself with its color
                    ctx.fillStyle = `rgb(${selectedPoint.r}, ${selectedPoint.g}, ${selectedPoint.b})`;
                    ctx.beginPath();
                    ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius, 0, Math.PI * 2);
                    ctx.fill();

                    // Draw inner border
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius, 0, Math.PI * 2);
                    ctx.stroke();

                    selectedPointDrawn = true;
                }

                // Draw the regular point
                // Scale point size based on depth: closer (smaller z) = larger
                // Invert the depth factor: 1.0 for minZ (closest), 0.0 for maxZ (furthest)
                const depthFactor = zRange > 0 ? (maxZ - point.z) / zRange : 0.5;
                const sizeMultiplier = 0.85 + (depthFactor * 0.3); // Range: 0.85 to 1.15
                const pointRadius = baseRadius * sizeMultiplier;

                const color = positionToRGB(point.original[0], point.original[1], point.original[2]);
                ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                ctx.beginPath();
                ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw selected point if it's the closest (not drawn yet)
            if (!selectedPointDrawn && selectedPoint) {
                const depthFactor = zRange > 0 ? (maxZ - selectedPoint.z) / zRange : 0.5;
                const sizeMultiplier = 0.85 + (depthFactor * 0.3);
                const selectedRadius = baseRadius * sizeMultiplier * 1.2;

                // Draw outer glow
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius + 8, 0, Math.PI * 2);
                ctx.stroke();

                // Draw middle ring
                ctx.strokeStyle = 'rgba(107, 143, 163, 0.9)';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius + 4, 0, Math.PI * 2);
                ctx.stroke();

                // Draw the point itself with its color
                ctx.fillStyle = `rgb(${selectedPoint.r}, ${selectedPoint.g}, ${selectedPoint.b})`;
                ctx.beginPath();
                ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius, 0, Math.PI * 2);
                ctx.fill();

                // Draw inner border
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(selectedPoint.x, selectedPoint.y, selectedRadius, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Draw hover tooltip if hovering over a point
            if (hoveredPoint) {
                const rgb = positionToRGB(hoveredPoint.original[0], hoveredPoint.original[1], hoveredPoint.original[2]);
                const hoverLabel = `(${rgb.r}, ${rgb.g}, ${rgb.b})`;

                // Highlight the hovered point
                const depthFactor = zRange > 0 ? (maxZ - hoveredPoint.z) / zRange : 0.5;
                const sizeMultiplier = 0.85 + (depthFactor * 0.3);
                const pointRadius = baseRadius * sizeMultiplier;

                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(hoveredPoint.x, hoveredPoint.y, pointRadius + 5, 0, Math.PI * 2);
                ctx.stroke();

                // Draw tooltip
                ctx.font = 'bold 16px "Source Sans 3", sans-serif';
                const metrics = ctx.measureText(hoverLabel);
                const padding = 8;
                const bgWidth = metrics.width + padding * 2;
                const bgHeight = 24;
                const tooltipX = hoveredPoint.x;
                const tooltipY = hoveredPoint.y - pointRadius - 35;

                ctx.fillStyle = 'rgba(61, 78, 90, 0.95)';
                ctx.beginPath();
                ctx.roundRect(
                    tooltipX - bgWidth / 2,
                    tooltipY - bgHeight / 2,
                    bgWidth,
                    bgHeight,
                    4
                );
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(hoverLabel, tooltipX, tooltipY);
            }
        }

        // Mouse events for rotation and interaction
        canvas.addEventListener('mousedown', (e) => {
            const rect = canvas.getBoundingClientRect();
            // Scale mouse coordinates to canvas coordinate system
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const mouseX = (e.clientX - rect.left) * scaleX;
            const mouseY = (e.clientY - rect.top) * scaleY;

            // Check if clicking on a point
            const clickedPoint = findPointNearMouse(mouseX, mouseY, transformedPoints, 30);
            if (clickedPoint) {
                // Update sliders to match clicked point's RGB values
                const rgb = positionToRGB(clickedPoint.original[0], clickedPoint.original[1], clickedPoint.original[2]);
                redSlider.value = rgb.r;
                greenSlider.value = rgb.g;
                blueSlider.value = rgb.b;
                updateColor();
                return;
            }

            isDragging = true;
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        });

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            // Scale mouse coordinates to canvas coordinate system
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const mouseX = (e.clientX - rect.left) * scaleX;
            const mouseY = (e.clientY - rect.top) * scaleY;

            if (isDragging) {
                const deltaX = e.clientX - lastMouseX;
                const deltaY = e.clientY - lastMouseY;

                // Natural rotation: drag direction matches cube rotation direction
                angleY -= deltaX * 0.01;
                angleX += deltaY * 0.01;

                lastMouseX = e.clientX;
                lastMouseY = e.clientY;

                drawCube();
            } else {
                // Update hover state
                const newHoveredPoint = findPointNearMouse(mouseX, mouseY, transformedPoints, 30);
                if (newHoveredPoint !== hoveredPoint) {
                    hoveredPoint = newHoveredPoint;
                    canvas.style.cursor = hoveredPoint ? 'pointer' : 'grab';
                    drawCube();
                }
            }
        });

        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });

        canvas.addEventListener('mouseleave', () => {
            isDragging = false;
            if (hoveredPoint) {
                hoveredPoint = null;
                canvas.style.cursor = 'grab';
                drawCube();
            }
        });

        // Touch events for mobile
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDragging = true;
            const touch = e.touches[0];
            lastMouseX = touch.clientX;
            lastMouseY = touch.clientY;
        });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (isDragging) {
                const touch = e.touches[0];
                const deltaX = touch.clientX - lastMouseX;
                const deltaY = touch.clientY - lastMouseY;

                // Natural rotation: drag direction matches cube rotation direction
                angleY -= deltaX * 0.01;
                angleX += deltaY * 0.01;

                lastMouseX = touch.clientX;
                lastMouseY = touch.clientY;

                drawCube();
            }
        });

        canvas.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Vertex density slider event
        if (vertexDensitySlider && vertexDensityValue) {
            vertexDensitySlider.addEventListener('input', () => {
                vertexDensity = parseInt(vertexDensitySlider.value);
                vertexDensityValue.textContent = vertexDensity;
                drawCube();
            });
        }

        // Expose drawCube globally so sliders can trigger redraw
        window.drawCubeFunction = drawCube;

        // Initial draw
        drawCube();
    }
});
