const dataset = [10,20,30,40,50];
const svg = d3.select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 80)
  .attr("height",50)
  .attr("transform", (d,i) => `translate(${(i*100)+60},50) rotate(${d})`)
  .attr("fill", "pink");

  svg.selectAll("svg")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 80)
  .attr("height",50)
  .attr("transform", (d,i) => `translate(${(i*100)+60},200) rotate(${-d})`)
  .attr("fill", "purple");

  svg.selectAll("svg")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 80)
  .attr("height",50)
  .attr("transform", (d,i) => `translate(${(i*100)+60},280) rotate(${d})`)
  .attr("fill", "pink");

  svg.selectAll("svg")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 80)
  .attr("height",50)
  .attr("transform", (d,i) => `translate(${(i*100)+60},450) rotate(${-d})`)
  .attr("fill", "purple");

 