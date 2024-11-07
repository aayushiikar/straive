// json2html.js
export default function json2html(data) {
  // Determine table columns by taking unique keys across all data objects
  const columns = Array.from(new Set(data.flatMap(Object.keys)));

  // Start building the HTML table
  let html = '<table data-user="aayushikar123@gmail.com">\n';
  html += "  <thead>\n    <tr>";
  
  // Generate table headers based on columns
  for (const col of columns) {
    html += `<th>${col}</th>`;
  }
  html += "</tr>\n  </thead>\n  <tbody>\n";

  // Generate table rows for each item in the data array
  for (const row of data) {
    html += "    <tr>";
    for (const col of columns) {
      // Fill cell with value if it exists, else leave blank
      html += `<td>${row[col] ?? ""}</td>`;
    }
    html += "</tr>\n";
  }

  html += "  </tbody>\n</table>";
  return html;
}
