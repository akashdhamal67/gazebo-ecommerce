#!/usr/bin/env python3
"""
Gazebo E-Commerce Development Server
Serves the Gazebo website locally on http://localhost:8080
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable caching headers and CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    for port_attempt in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", port_attempt), Handler) as httpd:
                url = f"http://localhost:{port_attempt}"
                print("=" * 60)
                print("  GAZEBO CLOTHING (Estd. 1979, Pune) - STOREFRONT PROPOSAL")
                print("=" * 60)
                print(f"  Local Storefront URL:  {url}")
                print(f"  Serving Directory:     {DIRECTORY}")
                print("  Press Ctrl+C to stop the server.")
                print("=" * 60)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
        except OSError:
            continue

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\nShutting down Gazebo local storefront server.")
        sys.exit(0)
