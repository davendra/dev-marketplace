#!/usr/bin/env node

/**
 * Go Bananas Claude Code Plugin - Post-install Script
 *
 * This script automatically creates a symlink from ~/.claude/plugins/local/go-bananas
 * to the installed package location, enabling Claude Code to discover the skill.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const PLUGIN_NAME = 'go-bananas';

// Determine paths
const homeDir = os.homedir();
const pluginDir = path.join(homeDir, '.claude', 'plugins', 'local');
const targetLink = path.join(pluginDir, PLUGIN_NAME);
const sourceDir = path.resolve(__dirname, '..'); // Parent of scripts/ is the package root

console.log(`\n🍌 Installing Go Bananas Claude Code Plugin...\n`);

try {
  // Create plugins directory if it doesn't exist
  if (!fs.existsSync(pluginDir)) {
    fs.mkdirSync(pluginDir, { recursive: true });
    console.log(`✓ Created directory: ${pluginDir}`);
  }

  // Remove existing link/directory if present
  if (fs.existsSync(targetLink)) {
    const stats = fs.lstatSync(targetLink);
    if (stats.isSymbolicLink()) {
      fs.unlinkSync(targetLink);
      console.log(`✓ Removed existing symlink`);
    } else if (stats.isDirectory()) {
      fs.rmSync(targetLink, { recursive: true });
      console.log(`✓ Removed existing directory`);
    }
  }

  // Create symlink
  fs.symlinkSync(sourceDir, targetLink, 'dir');
  console.log(`✓ Created symlink: ${targetLink} → ${sourceDir}`);

  console.log(`\n✅ Go Bananas plugin installed successfully!\n`);

  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`\n📋 SETUP REQUIRED - Set your API key:\n`);
  console.log(`   1. Get your API key from https://gobananasai.com`);
  console.log(`   2. Add to your shell profile (~/.zshrc or ~/.bashrc):\n`);
  console.log(`      export GO_BANANAS_API_KEY=sk_live_your_key_here\n`);
  console.log(`   3. Reload your shell: source ~/.zshrc`);
  console.log(`   4. Restart Claude Code\n`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  console.log(`Usage: Ask Claude to "generate an image of..." and it will use the skill.\n`);
  console.log(`Docs: https://gobananasai.com/docs\n`);

} catch (error) {
  console.error(`\n❌ Installation failed: ${error.message}\n`);
  console.error(`Manual installation:`);
  console.error(`  ln -s ${sourceDir} ${targetLink}\n`);
  // Don't exit with error code - npm should continue even if symlink fails
}
