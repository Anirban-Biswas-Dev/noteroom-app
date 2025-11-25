const { Command } = require("commander");
const { randomBytes } = require("crypto");
const { appendFile, existsSync, mkdirSync, writeFile } = require("fs");
const { join } = require("path");
const { Project } = require("ts-morph");

const app = new Command();
const project = new Project();

app.name("hey").description("Does some automatic configs for you!");

app.command("jwt:token")
	.description(
		"Creates a random base64 secret token and appends in the .env file",
	)
	.action(() => {
		const token = randomBytes(60).toString("base64");
		appendFile("./.env", `\nJWT_SECRET=${token}`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`Token created: ${token}`);
			}
		});
	});

app.command("frontend:feature <name>").action((name) => {
	const featureFolder = join("frontend/src/features", name);
	const folders = {
		components: join(featureFolder, "components"),
	};
	const files = {
		index: join(folders.components, "index.tsx"),
		types: join(featureFolder, "types.ts"),
	};

	try {
		if (!existsSync(featureFolder)) {
			Object.keys(folders).forEach((folder) => {
				mkdirSync(folders[folder], { recursive: true });
				console.log(`Folder created at ${folders[folder]}`);
			});

			Object.keys(files).forEach((file) => {
				writeFile(files[file], "", (err) => {
					if (!err) {
						console.log(`File created at ${files[file]}`);
					} else {
						console.log(`Couldn't create file at ${files[file]}`);
						console.log(err);
					}
				});
			});
		} else {
			console.log(`Feature folder already exists`);
		}
	} catch (error) {
		console.log(`Couldn't initialize a feature at ${featureFolder}`);
		console.log(error);
	}
});

app.command("frontend:icon <name>").action((name) => {
	const sourceName = `frontend/src/assets/icons/${name.toLowerCase()}.tsx`;
	const functionName = `${name}Icon`;
	try {
		const source = project.createSourceFile(sourceName, "");
		source.addFunction({
			name: functionName,
			isDefaultExport: true,
			parameters: [
				{ name: "props", type: "React.SVGAttributes<SVGElement>" },
			],
			returnType: "React.ReactElement<SVGElement>",
			statements: `return (\n\t<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>\n\t\t{/* svg paths */}\n\t</svg>\n)`,
		});
		project.saveSync();
		console.log(`Icon ${functionName} is created at ${sourceName}`);
	} catch (e) {
		console.log(e);
	}
});

app.parse(process.argv);
