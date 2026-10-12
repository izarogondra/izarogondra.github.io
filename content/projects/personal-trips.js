/* TEMPLATE for a new project. Not loaded by the site.
   1. Copy this file and rename it, e.g. content/projects/forest-day.js
   2. Fill it in. "id" must be unique and use only letters, numbers, and dashes.
   3. Add this line to index.html with the other project lines:
        <script src="content/projects/forest-day.js"></script>
   Images: put files in the images/ folder and use paths like "images/forest-day-cover.jpg".
   Leave a src as "" to show a placeholder. */
addProject({
  id: "personal-trips",
  group: "personal",                 // experience, school, or personal (see content/site.js)
  title: "Travel Memories",
  sub: "A collection of personal travel experiences and sketches.",
  year: "2026",
  role: "Solo",
  tools: "Procreate",
  cover: "images/personal/london.jpeg",                           // card image, e.g. "images/forest-day-cover.jpg"
  ratio: "",                        // placeholder shape only
  sections: [                          // add as many sections as you like
    { h: "Brief", p: ["First paragraph.", "Second paragraph."], img: { src: "images/personal/london.jpeg", cap: "Travel in London"} },
    { h: "The Rest", p: ["Describe your steps."], img: { src: "images/personal/paris.jpeg"} },
    { img: { src: "images/personal/costa_rica.jpeg"} },
    { img: { src: "images/personal/seattle.jpeg"} },
    { img: { src: "images/personal/salt_lake_city.jpeg"} },
    { img: { src: "images/personal/california.jpeg"} },
    { img: { src: "images/personal/glacier_national_park.jpeg"} }
  ]
});
