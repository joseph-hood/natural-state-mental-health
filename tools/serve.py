"""Preview the site on your own computer, the way GitHub Pages will serve it.

    python3 tools/serve.py          (on Windows: python tools/serve.py)

Opens http://localhost:8000 in your browser. Unknown addresses show the site's own
404.html page, like the live site. Press Ctrl+C to stop.
"""
import functools
import http.server
import pathlib
import sys
import webbrowser

site = pathlib.Path(__file__).resolve().parent.parent / "site"
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        page = site / "404.html"
        if code != 404 or not page.is_file():
            return super().send_error(code, message, explain)
        body = page.read_bytes()
        self.send_response(404)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)


handler = functools.partial(Handler, directory=str(site))
with http.server.ThreadingHTTPServer(("localhost", port), handler) as server:
    url = f"http://localhost:{port}/"
    print(f"Previewing the site at {url}  (press Ctrl+C to stop)")
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
