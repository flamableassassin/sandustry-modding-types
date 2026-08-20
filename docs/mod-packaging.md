# Packaging assets, maps, and patches

Sandkit supports mod-owned assets, configuration overrides, custom maps, and
last-resort bundle patches. Prefer the highest-level supported mechanism that
can express the change.

## Configuration and texture overrides

Declare configuration and texture replacements in `modinfo.json`. Paths are
relative to the mod folder.

```json
{
  "manifestVersion": 1,
  "id": "author.example-overrides",
  "name": "Example Overrides",
  "version": "1.0.0",
  "apiVersion": 1,
  "dependencies": [],
  "loadOrder": 0,
  "configOverrides": {
    "drill": "config/drill.json"
  },
  "textureOverrides": {
    "conveyor_left": "assets/conveyor_left.png",
    "shaker_left": {
      "path": "assets/shaker_left_sheet.png",
      "frameWidth": 18,
      "frames": 6,
      "intervalMs": 166
    }
  }
}
```

Keep override keys aligned with the identifiers expected by the game. Animated
texture metadata must match the dimensions and frame count of the source sheet.

For sprites owned by a mod rather than overrides, use the documented sprite API
such as {@link  main.sprites.loadFromMod}.

## Custom maps

A custom map is declared under the manifest's `map` property. Blueprint paths,
dimensions, spawn and unstuck positions, bounds, lighting, and parallax must
agree with the map assets.

```json
{
  "manifestVersion": 1,
  "id": "author.example-map",
  "name": "Example Map",
  "version": "1.0.0",
  "apiVersion": 1,
  "map": {
    "blueprints": {
      "terrain": "map/terrain.png",
      "lights": "map/lights.png",
      "sensors": "map/sensors.png",
      "authorization": "map/authorization.png",
      "wall": "map/wall.png",
      "lightsMeta": "map/lights_meta.png",
      "decor": "map/decor.png",
      "config": "map/config.json"
    },
    "width": 1920,
    "height": 1920,
    "spawn": { "x": 243, "y": 50 },
    "unstuck": { "x": 243, "y": 50 },
    "deployment": "skip",
    "topBounds": { "hard": 100, "soft": 275 },
    "depthLight": {
      "startY": 6500,
      "endY": 10070,
      "maxSize": 700,
      "minSize": 200
    },
    "parallax": { "widthScale": 1.5, "offsetY": -2600 },
    "colorMappings": { "4, 5, 6": "GoldSoil" }
  }
}
```

Do not invent blueprint layer names, and keep the coordinate system and image
dimensions consistent across all layers.

## Bundle patches

Use `patches.json` only when an asset, configuration option, hook, or public API
cannot express the change. A patch is sensitive to changes in the game's
bundles, so constrain every patch with `expectedMatches`.

```json
[
  {
    "id": "example-patch",
    "file": "js/bundle.js",
    "find": "unique original text",
    "operation": "replace",
    "code": "replacement text",
    "expectedMatches": 1
  }
]
```

Use `atomicGroup` when a set of patches must all succeed or all be rejected.
Revalidate patch matches after every game update before publishing the mod.

## Workshop identity

`modinfo.json` identifies the mod to Sandkit. `workshop.json` identifies the
Steam Workshop item.

```json
{
  "schemaVersion": 1,
  "publishedFileId": "3785874614"
}
```

Preserve the generated `publishedFileId` when updating a release. Replacing or
deleting it can break the link to the existing item or cause an upload to create
a duplicate. The Steam account uploading an update must own the linked item.

Before publishing, increment the version without changing the stable mod ID,
confirm that all declared files exist, and verify that `workshop.json` still
points to the intended item.
