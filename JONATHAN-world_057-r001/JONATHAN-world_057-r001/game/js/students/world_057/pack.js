// BEGINNER PROJECT: JONATHAN | r001 | engine 2.14.0
// Teacher-supplied starter code; not evidence that the student wrote this code.
// Play first, describe the controls and goal, then prompt and log one asset.
// Keep IDs fixed. Teacher helps with one small explained change at a time.
// manifest = identity; home = room; dialogue = guide; level = game rules.
// STUDENT TEMPLATE: Castle Guard Run. Change the theme and guards to fit your game idea.
// Home coordinates use tiles. Level coordinates and attack reach use pixels.
registerStudentPack({
  "schemaVersion": 1,
  "manifest": {
    "id": "world_057",
    "name": "JONATHAN — Starter Project",
    "author": "Teacher starter for JONATHAN",
    "description": "Defeat the guards, recover a relic and unlock the exit.",
    "iconColor": "red",
    "position": {"x":1088,"y":320},
    "width": 32,
    "height": 32,
    "levelId": "world_057_level",
    "rewardId": "key_world_057"
  },
  "home": {
    "tileSize": 32,
    "width": 20,
    "height": 12,
    "spawnTile": {
      "x": 5,
      "y": 8
    },
    "interactables": [
      {
        "type": "npc",
        "id": "coach",
        "name": "Mechanic",
        "dialogueKey": "mission",
        "tileX": 4,
        "tileY": 2
      },
      {
        "type": "portal",
        "id": "mission",
        "name": "Castle Guard Run",
        "levelId": "world_057_level",
        "tileX": 14,
        "tileY": 4,
        "width": 48,
        "height": 48
      },
      {
        "type": "savePoint",
        "id": "save",
        "name": "Save",
        "tileX": 12,
        "tileY": 8
      },
      {
        "type": "submitPoint",
        "id": "review",
        "name": "Review",
        "tileX": 16,
        "tileY": 8
      },
      {
        "type": "exit",
        "id": "exit",
        "name": "Exit",
        "tileX": 4,
        "tileY": 9,
        "width": 64,
        "height": 32
      }
    ]
  },
  "dialogue": {
    "mission": {
      "speaker": "Guide",
      "lines": [
        "Recover the gate key and relic, defeat both guards, then reach the gold exit.",
        "Move with WASD/arrows. Tap J to strike where you face.",
        "Space jumps; it does not attack.",
        "A strike briefly interrupts a guard. Step back while your attack recharges.",
        "Walls and locked doors block attacks. White outline means temporary protection.",
        "R resets health, enemies and collected items. Escape returns home."
      ]
    }
  },
  "level": {
    "id": "world_057_level",
    "mode": "platformer",
    "name": "Castle Guard Run",
    "width": 960,
    "height": 640,
    "spawn": {
      "x": 96,
      "y": 532
    },
    "solids": [
      {
        "x": 0,
        "y": 560,
        "width": 960,
        "height": 80
      },
      {
        "x": 352,
        "y": 516,
        "width": 64,
        "height": 44
      }
    ],
    "hazards": [],
    "collectibles": [
      {
        "id": "gate_key",
        "label": "Gate key",
        "x": 220,
        "y": 532,
        "width": 24,
        "height": 24
      },
      {
        "id": "relic",
        "label": "Lost relic",
        "x": 700,
        "y": 532,
        "width": 24,
        "height": 24
      }
    ],
    "objectives": [
      {
        "id": "find_key",
        "label": "Find the gate key",
        "collect": [
          "gate_key"
        ]
      },
      {
        "id": "recover_relic",
        "label": "Recover the lost relic",
        "collect": [
          "relic"
        ]
      }
    ],
    "doors": [
      {
        "id": "gate",
        "label": "Gate",
        "x": 820,
        "y": 480,
        "width": 24,
        "height": 80,
        "requires": [
          "find_key"
        ]
      }
    ],
    // Both collection objectives AND every enemy wave must be cleared to finish.
    "goal": {
      "x": 880,
      "y": 532,
      "width": 32,
      "height": 28,
      "requires": [
        "find_key",
        "recover_relic"
      ]
    },
    // Optional shared melee module. Tap J to attack; Space still jumps in platformers.
    // Health/damage are whole numbers; cooldown/protection are seconds.
    "combat": {
      "playerHealth": 5,
      "attackDamage": 1,
      "attackReach": 64,
      "attackCooldown": 0.35,
      "invulnerabilitySeconds": 1
    },
    // One encounter first. Extra waves appear after the previous one is cleared.
    // Platformer guards must stand on solid ground; they cannot jump gaps or climb.
    "waves": [
      {
        "enemies": [
          {
            "id": "guard_one",
            "x": 280,
            "y": 532,
            "width": 28,
            "height": 28,
            "health": 2,
            "damage": 1,
            "speed": 55
          },
          {
            "id": "guard_two",
            "x": 680,
            "y": 532,
            "width": 28,
            "height": 28,
            "health": 3,
            "damage": 1,
            "speed": 50
          }
        ]
      }
    ]
  }
});
