
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const locations = [
    { name: "Singapore", lat: 1.35, lon: 103.81 }, { name: "Malaysia", lat: 3.13, lon: 101.68 },
    { name: "India", lat: 20.59, lon: 78.96 }, { name: "Sri Lanka", lat: 7.87, lon: 80.77 },
    { name: "Nepal", lat: 28.39, lon: 84.12 }, { name: "UK", lat: 51.50, lon: -0.12 },
    { name: "USA", lat: 39.82, lon: -98.57 }
];

const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
};

interface Pulse {
    mesh: THREE.Mesh;
    curve: THREE.QuadraticBezierCurve3;
    progress: number;
    speed: number;
}

const Globe: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;
        if (container.childElementCount > 0) return; // Prevent re-initialization

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);
        camera.position.z = 5;

        const globeGroup = new THREE.Group();
        scene.add(globeGroup);

        const globeRadius = 2.5;

        // Main globe points
        const geometry = new THREE.SphereGeometry(globeRadius, 64, 64);
        const material = new THREE.PointsMaterial({ color: 0x00D7FF, size: 0.015, transparent: true, opacity: 0.7 });
        const sphere = new THREE.Points(geometry, material);
        globeGroup.add(sphere);

        // Location pins
        const pinGeometry = new THREE.SphereGeometry(0.04, 12, 12);
        const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xFFE100 });
        const locationVectors: { [key: string]: THREE.Vector3 } = {};
        
        locations.forEach(loc => {
            const position = latLonToVector3(loc.lat, loc.lon, globeRadius);
            locationVectors[loc.name] = position;
            const pin = new THREE.Mesh(pinGeometry, pinMaterial);
            pin.position.copy(position);
            globeGroup.add(pin);
        });

        // Curves and pulses
        const pulses: Pulse[] = [];
        const singaporeVector = locationVectors["Singapore"];
        const otherLocations = locations.filter(l => l.name !== "Singapore");

        otherLocations.forEach((loc) => {
            const destinationVector = locationVectors[loc.name];
            
            // Create curve
            const midPoint = new THREE.Vector3().addVectors(singaporeVector, destinationVector).multiplyScalar(0.5);
            midPoint.normalize().multiplyScalar(midPoint.length() + 0.8);
            const curve = new THREE.QuadraticBezierCurve3(singaporeVector, midPoint, destinationVector);
            const points = curve.getPoints(50);
            const curveGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const curveMaterial = new THREE.LineBasicMaterial({ color: 0xFFE100, transparent: true, opacity: 0.4 });
            const curveLine = new THREE.Line(curveGeometry, curveMaterial);
            globeGroup.add(curveLine);
            
            // Create pulse
            const pulseGeometry = new THREE.SphereGeometry(0.05, 8, 8);
            const pulseMaterial = new THREE.MeshBasicMaterial({ color: 0x00D7FF });
            const pulseMesh = new THREE.Mesh(pulseGeometry, pulseMaterial);
            pulses.push({
                mesh: pulseMesh,
                curve: curve,
                progress: Math.random(), // Start at different points
                speed: 0.003 + Math.random() * 0.003
            });
            globeGroup.add(pulseMesh);
        });

        let mouseX = 0, mouseY = 0, targetRotationX = 0, targetRotationY = 0;
        const onMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            targetRotationY = mouseX * 0.2;
            targetRotationX = mouseY * 0.2;
        };
        document.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            globeGroup.rotation.y += 0.0005 + (targetRotationY - globeGroup.rotation.y) * 0.02;
            globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.02;

            // Animate pulses
            pulses.forEach(p => {
                p.progress += p.speed;
                if (p.progress >= 1) {
                    p.progress = 0;
                }
                p.curve.getPointAt(p.progress, p.mesh.position);
            });

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
             if (container) {
                camera.aspect = container.offsetWidth / container.offsetHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.offsetWidth, container.offsetHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);
            if(container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.5, maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }} />;
};

export default Globe;
