require("./dataBase");
const app = require("./App");
async function main() {
  await app.listen(8000, () => console.log("Funcionando on port 8000"));
}
main();
