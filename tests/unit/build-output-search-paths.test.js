import { describe, expect, it } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import config from "../config.js";
import { BghitappTestRunner } from "../index.js";

describe("build output search paths", () => {
  it("finds artifacts in macOS universal bundle subdirectories", () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "bghitapp-test-"));
    const originalRoot = config.PROJECT_ROOT;
    config.PROJECT_ROOT = tempRoot;

    try {
      const appName = "GitHubMultiArch";
      const appDir = path.join(
        tempRoot,
        "src-tauri/target/universal-apple-darwin/release/bundle/macos",
        `${appName}.app`,
      );
      const dmgDir = path.join(
        tempRoot,
        "src-tauri/target/universal-apple-darwin/release/bundle/dmg",
      );
      const dmgFile = path.join(dmgDir, `${appName}.dmg`);

      fs.mkdirSync(appDir, { recursive: true });
      fs.mkdirSync(dmgDir, { recursive: true });
      fs.writeFileSync(dmgFile, "fake dmg");

      const runner = new BghitappTestRunner();
      const found = runner.findBuildOutputFiles(appName, "darwin");
      const foundPaths = found.map((item) => item.path);

      expect(foundPaths).toContain(appDir);
      expect(foundPaths).toContain(dmgFile);
    } finally {
      config.PROJECT_ROOT = originalRoot;
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });
});
