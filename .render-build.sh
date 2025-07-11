#!/usr/bin/env bash
cd frontend
npm install
npm run build

# Copiar el archivo _redirects a la carpeta final de build
cp public/_redirects build/_redirects