#!/usr/bin/env python3

import os

from PIL import Image


def generate_icons(image_file):
    img = Image.open(image_file)
    base, ext = os.path.splitext(image_file)
    sizes = [(16, 16), (19, 19), (38, 38), (48, 48), (128, 128)]
    paths = []
    for size in sizes:
        res = img.resize(size, Image.Resampling.LANCZOS)
        name = f"{base}_{size[0]}x{size[1]}{ext}"
        res.save(name)
        paths.append(name)
    return paths


if __name__ == "__main__":
    import sys

    print("Generated: ", generate_icons(sys.argv[1]))
