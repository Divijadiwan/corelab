
// // const svg = d3.select("body")
// 							.append("circle")
//                             .attr("r", d => d)
// 							.attr("width", 500)
// 							.attr("height", 500)
//                             .style("fill","red");
// 							// or you can write it like .attr("viewBox", [0, 0, 500, 500])
// d3.select("svg")
//   .append("text")
//   .attr("x", 200)           // set x position of left side of text
//     .attr("y", 100) 
//    .text("Hello World")        // define the text to display
//   .style("fill", "black"); // fill the text with the colour black

//   const data = [10, 20, 30, 40, 50];

// d3.select("svg")
// .attr("viewBox",[0,0,500,500])
//   .selectAll("circle")
//   .data(data)
//   .enter() // enter this space with data
//   .append("circle")
//   .attr("cx", (d, i) => (i * 100) + 50)
//   .attr("cy", 100)
//   .attr("r", d => d)
//   .style("fill", "orange");

// const dataset = [25, 30, 45, 60, 20];

// const svg = d3.select("body")
//   .append("svg")
//   .attr("width", 1000)
//   .attr("height", 600);

// svg.selectAll("circle")
//   .data(dataset)
//   .enter()
//   .append("circle")
//   .attr("cx", (d, i) => i * 200 + 80)
//   .attr("cy",100)
//   .attr("r", d => 100 - d)
//   .attr("fill", "pink");

// source: https://www.d3indepth.com/enterexit/

function getData() {
  let data = [];
  let numItems = Math.ceil(Math.random() * 5);

  for(let i=0; i<numItems; i++) {
    data.push(i*10);
  }

  return data;
}

function update(data) {
  d3.select('.chart')
    .selectAll('circle')
    .data(data)
    .join(
      function(enter) {
        return enter.append('circle')
          .style('opacity', 0.25);
      },
      function(update) {
        return update.style('opacity', 1);
      }
    )
    .attr('cx', function(d, i) {
      return i * 100;
    })
    .attr('cy', 50)
    .attr('r', function(d) {
      return 0.5 * d;
    })
    .style('fill', 'orange');
}

function updateAll() {
	let myData = getData();
  console.log(myData);
	update(myData);
}

updateAll();

d3.select("button")
	.on("click", updateAll);