window.addEventListener('keydown', function(event) {
    // Check if the pressed key is the space bar (key code 32)
    if (event.code === 'Space') {

        event.preventDefault(); // Prevent default space bar scroll behavior
        window.scrollBy({
            top: window.innerHeight, // Scroll by the height of the viewport
            behavior: 'smooth' // Add smooth scrolling
           
        });
    }
});

const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // Data for two divisions
    const data = [80,20]; // Represents two values, e.g., 60% and 40%

    // Create an SVG container
    const svg = d3.select("svg")
                  .attr("width", 1000)
                  .attr("height", 400)
                  .append("g")
                  .attr("transform", `translate(${700}, ${150})`);
                  
    // Create a pie layout and pass the data
    const pie = d3.pie();
    const arcs = pie(data);

    // Define the arc generator
    const arc = d3.arc()
                  .innerRadius(0)         // Full pie chart (no inner radius)
                  .outerRadius(radius);   // Outer radius for the chart

svg.selectAll("path")
    .data([{ startAngle: 0, endAngle: 2 * Math.PI }]) // Full circle initially
    .enter()
    .append("path")
    .attr("d", arc) // Draw the full pie initially
    .attr("fill", "#6C2710") // Fill color for the full circle
    .transition()    // Start the transition
    .duration(500)  // Transition duration

    .on("end", function() {
        // Draw two colored segments after the initial full circle transition
        svg.selectAll("slice")
            .data(arcs) // Bind the pie data
            .enter()
            .append("path")
            .attr("fill", (d, i) => i === 0 ? "#d4866e" : "#6C2710") // Set fill color based on index
            .attr("d", arc) // Draw the arc for each slice
            .attr("transform", `translate(0, 0)`) // Position correctly
            .transition() // Transition for the second segment
            .duration(500) // Duration for the second segment transition
            .attrTween("d", function(d, i) {
                // Interpolate for the 20% segment to appear on the right
                const interpolate = d3.interpolate( 0,d.startAngle + (Math.PI * 0.4)  )
                return function(t) {
                    return arc({ startAngle: d.startAngle, endAngle: interpolate(t) }); // Return the arc for the transition
                };
            });
    });

