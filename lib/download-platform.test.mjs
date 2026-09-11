import assert from "node:assert/strict";
import test from "node:test";

import { detectDownloadPlatform } from "./download-platform.js";

test("Windows visitors retain the Windows recommendation", () => {
  assert.equal(
    detectDownloadPlatform({ userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }),
    "windows",
  );
});

test("Linux visitors are identified as Linux", () => {
  assert.equal(
    detectDownloadPlatform({ userAgent: "Mozilla/5.0 (X11; Linux x86_64)" }),
    "linux",
  );
});

test("macOS visitors are identified as macOS", () => {
  assert.equal(
    detectDownloadPlatform({ userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" }),
    "macos",
  );
});

test("Chrome OS is recognized before generic Linux matching", () => {
  assert.equal(
    detectDownloadPlatform({ userAgent: "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0)" }),
    "chrome-os",
  );
});

test("Chrome OS client hints prevent a Windows recommendation", () => {
  assert.equal(
    detectDownloadPlatform({
      userAgent: "Mozilla/5.0 (X11; Linux x86_64)",
      clientPlatform: '"Chrome OS"',
    }),
    "chrome-os",
  );
});
