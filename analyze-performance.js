const fs = require('fs');

const report = JSON.parse(fs.readFileSync('report.json', 'utf8'));

const medianResponseTime = report.aggregate['summaries']["http.response_time"].median;

if (medianResponseTime < 100) {
  console.log('Teste de performance aprovado!');
  process.exit(0);
} else {
  console.log('Teste de performance reprovado!');
  process.exit(1);
}
