# Implementation Plan: The "Stitch" Simulation

## 1. Project Overview: What is "Stitch"?
"Stitch" is the definitive synthesis phase of the Screening Training Game. While previous modules focused on individual signal categories (Academic, Visa, Location), **Stitch** challenges agents to perform the ultimate audit task: **Signal Reconstruction**.

The game is about connecting disparate, fragmented data points—"stitching" them together—to form a complete, audit-ready candidate profile. It simulates the high-stakes environment where a single "loose thread" (unconnected risk factor) can lead to a compliance failure.

## 2. Core Game Design & Theme (Request for "Stitch" Persona)
> [!IMPORTANT]
> **To "Stitch" (The Design Persona):** 
> Based on the core concept below, please conceptualize a visual theme and interaction model that feels both "Amazon-Premium" and "Cyber-Forensic." Think of how to visualize the act of connecting data points. How do we make "Auditing" feel like "Digital Engineering"?

### Theme Archetype: "The Signal Reconstruction Lab"
*   **Aesthetic:** High-contrast, data-dense, futuristic command center.
*   **Primary Palette:** 
    *   **Amazon Deep Navy:** Backgrounds, headers, and depth.
    *   **Amazon Orange:** Actionable elements, highlights, and critical connections.
    *   **Neon Accents:** Used sparingly for "Signal Strength" indicators.

## 3. Gameplay Modules & Mini-Games

### Stage 1: The Fragmentation Pulse
*   **Objective:** Players are presented with a "Broken Profile" where data points are floating in a chaotic field. They must identify which signals belong to the current case and pull them into the "Stitch Zone."
*   **Interface Displays:**
    *   **Signal Field:** A canvas with floating data blocks (Name, Uni, IP, Expiry Date).
    *   **Persona Anchor:** The core candidate ID that signals must be matched against.

### Stage 2: Logical Weaving (Conflict Detection)
*   **Objective:** Once signals are anchored, players must "weave" connections between them. If two signals contradict (e.g., a "US Visa" and a "China Location" signal with overlapping dates), the connection glows red.
*   **Interface Displays:**
    *   **Stitch Board:** A node-based UI where players drag lines between data blocks.
    *   **Conflict HUD:** Real-time feedback on logical consistency.

### Stage 3: The Integrity Lock
*   **Objective:** Finalize the profile. Players must justify why the "stitched" profile is valid or why it must be rejected based on the connected evidence.
*   **Interface Displays:**
    *   **Integrity Meter:** A gauge that fills as logical connections are made.
    *   **Audit Trail Preview:** A text-based summary of the "Stitched Evidence" that will be sent to the scoring engine.

## 4. The Interface Experience
The Stitch interface must be the most complex and rewarding UI in the application:

| Element | Description | Information Displayed |
| :--- | :--- | :--- |
| **The Stitch Board** | The central workspace. | Nodes representing data blocks; connecting lines showing signal relationships. |
| **Signal HUD** | Sidebar or overlay. | Candidate Meta-data; Total Risk Score; Time remaining for the session. |
| **Data Blocks** | Interactive cards. | Specific facts (e.g., "University of Toronto", "H1B Visa", "Toronto IP Address"). |
| **The Pulse** | Background animation. | A subtle radar-like ripple that pulses when a correct connection is made. |

## 5. Technical Implementation Steps
1.  **Component Scaffolding:** Create `StitchContainer.jsx` and `StitchNode.jsx`.
2.  **Logic Layer:** Implement a graph-based state to track connections between signals.
3.  **Visual Effects:** Integrate `framer-motion` for the "snapping" and "weaving" animations.
4.  **Amazon Branding:** Apply the `brand-navy` and `brand-orange` color tokens across all UI borders and gradients.

---
**Stitch, what is your vision for the visual "language" of these connections? Should they be literal threads, data streams, or geometric beams?**
