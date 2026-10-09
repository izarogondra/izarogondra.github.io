/* TEMPLATE for a new project. Not loaded by the site.
   1. Copy this file and rename it, e.g. content/projects/forest-day.js
   2. Fill it in. "id" must be unique and use only letters, numbers, and dashes.
   3. Add this line to index.html with the other project lines:
        <script src="content/projects/forest-day.js"></script>
   Images: put files in the images/ folder and use paths like "images/forest-day-cover.jpg".
   Leave a src as "" to show a placeholder. */
addProject({
  id: "forest-day",
  group: "experience",                 // experience, school, or personal (see content/site.js)
  title: "Project title",
  sub: "Short line shown on the card",
  year: "2026",
  role: "Environment artist",
  tools: "Photoshop, Blender",
  cover: "",                           // card image, e.g. "images/forest-day-cover.jpg"
  ratio: "4/3",                        // placeholder shape only
  sections: [                          // add as many sections as you like
    { h: "The brief",
      p: ["First paragraph.", "Second paragraph."] },
    { h: "Process",
      p: ["Describe your steps."],
      img: { src: "", cap: "Caption for this image.", ratio: "16/9" } }
  ]
});
