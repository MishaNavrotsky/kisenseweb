import fs from "fs"
type config = {
  dbConnectionString: string,
  secret: string
};
const config: config = JSON.parse(fs.readFileSync("./config.json").toString());
export default config;
